// service-worker.js
chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension just installed')
})

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('msg')
  console.log('request', request)
  if (request.action === 'getImageURL') {
    const imageURL = chrome.runtime.getURL('images/icon-16.png')
    sendResponse({ imageURL })
  }
})
