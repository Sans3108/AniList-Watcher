chrome.runtime.onInstalled.addListener(async () => {
  await chrome.storage.local.set({
    as_endpoint: 'https://aniwave.to/filter?keyword=%s',
    as_titleOrder: ['native', 'romaji', 'english']
  });

  console.log('Installed!');
});

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    if (!tab.url) return console.log(`No URL was found for tab ${tabId}`);

    const domain = tab.url.split('/')[2];
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
        files: ['assets/as_button.css']
      })
      .then(() => {
        console.log(`Button CSS removed successfully for ${tab.url}`);
      })
      .catch(err => {
        console.warn(`An error ocurred but it was caught.\n\n${err}`);
      });

    const page = tab.url.split('/')[3];

    if (page === 'anime') {
      await chrome.scripting
        .insertCSS({
          target: { tabId: tabId },
          files: ['assets/as_button.css']
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
