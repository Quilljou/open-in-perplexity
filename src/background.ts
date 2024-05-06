import browser from 'webextension-polyfill'

const PAGE_ID = "open-in-perplexity";
const SELECTION_ID = "open-in-perplexity-selection";
const P_URL = 'https://www.perplexity.ai';

browser.contextMenus.create({
  id: SELECTION_ID,
  title: 'Perplexity "%s"',
  contexts: ['selection']
});

browser.contextMenus.create({
  id: PAGE_ID,
  title: 'Open Perplexity',
  contexts: ['page', 'frame']
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === SELECTION_ID) {
    browser.tabs.create({ url: P_URL + `?q=${info.selectionText}` });
  } else if (info.menuItemId === PAGE_ID) {
    browser.tabs.create({ url: P_URL });
  }
});

browser.action.onClicked.addListener((tab) => {
  browser.tabs.create({ url: P_URL });
});
