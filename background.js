const DEFAULT_URL = "https://claude.ai";

chrome.action.onClicked.addListener(() => {
  chrome.storage.sync.get({ targetUrl: DEFAULT_URL }, ({ targetUrl }) => {
    chrome.tabs.create({ url: targetUrl });
  });
});
