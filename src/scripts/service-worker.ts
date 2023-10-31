chrome.runtime.onInstalled.addListener(async () => {
  console.log('Installed!');
});

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    if (!tab.url) return console.log(`No URL was found for tab ${tabId}`);

    const url = tab.url.split('/');

    console.log(`Processing ${url.join('/')}`);

    const domain = url[2];
    if (domain !== 'anilist.co') return;

    await chrome.scripting
      .executeScript({
        target: { tabId: tabId },
        files: ['scripts/cleanup.js']
      })
      .then(() => {
        console.log(`Injected cleanup script for ${tab.url}`);
      })
      .catch(err => {
        console.warn(`An error ocurred but it was caught.\n\n${err}`);
      });

    await chrome.scripting
      .removeCSS({
        target: { tabId: tabId },
        files: ['assets/aw_button.css']
      })
      .then(() => {
        console.log(`Button CSS removed successfully for ${tab.url}`);
      })
      .catch(err => {
        console.warn(`An error ocurred but it was caught.\n\n${err}`);
      });

    const page = url[3];

    if (page === 'anime' && url[4] && url[5]) {
      await chrome.scripting
        .insertCSS({
          target: { tabId: tabId },
          files: ['assets/aw_button.css']
        })
        .then(() => {
          console.log(`Button CSS injected successfully for ${tab.url}`);
        })
        .catch(err => {
          console.warn(`An error ocurred but it was caught.\n\n${err}`);
        });

      await chrome.scripting
        .executeScript({
          target: { tabId: tabId },
          files: ['scripts/content.js']
        })
        .then(() => {
          console.log(`Injected the content script for ${tab.url}`);
        })
        .catch(err => {
          console.warn(`An error ocurred but it was caught.\n\n${err}`);
        });
    }
  }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.contentScriptQuery == 'fetchUrl') {
    fetch(request.url)
      .then(response => response.text())
      .then(text => sendResponse({ text: text }))
      .catch(error => console.log(error));
    return true;
  }
});
