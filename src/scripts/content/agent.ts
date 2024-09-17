chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'parseHtml' && message.html && message.provider) {
    sendResponse(
      ((rawHtml: string, provider: BaseProvider) => {
        try {
          const doc = new DOMParser().parseFromString(rawHtml, 'text/html');

          if (provider.parsingTarget === null) return null;

          const directUrl = doc.querySelector(provider.parsingTarget)?.getAttribute('href');

          if (!directUrl) {
            console.log(`AW: Could not find direct url for first result, falling back to search url`);

            return null;
          }

          console.log(`AW: Found direct link ${directUrl}`);

          return directUrl;
        } catch (error) {
          console.log(`AW: ERROR`, error);
          return null;
        }
      })(message.html, message.provider)
    );
  }

  if (message.action === 'getTheme') {
    const theme = localStorage.getItem('site-theme');

    if (theme === 'system') {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        sendResponse('dark');
      } else sendResponse(null);
    } else {
      sendResponse(theme);
    }
  }

  return true;
});
