const PAGE_ID = "open-in-perplexity"
const SELECTION_ID = "open-in-perplexity-selection"
const P_URL = 'https://www.perplexity.ai?utm_source=oip'


chrome.contextMenus.create({
  id: SELECTION_ID,
  title: 'Perplexity "%s"',
  contexts: ['selection']
});

chrome.contextMenus.create({
  id: PAGE_ID,
  title: 'Open Perplexity',
  contexts: ['page', 'frame']
});



chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === SELECTION_ID) {
    chrome.tabs.create({ url: P_URL + `&q=${info.selectionText}` });
  } else if (info.menuItemId === PAGE_ID) {
    chrome.tabs.create({ url: P_URL });
  }
});

chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.create({ url: P_URL });
});