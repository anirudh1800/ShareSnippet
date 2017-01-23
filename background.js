const EXTENSION_NAME = "Share Snippet";

// check namespace for WebExtensions API
if(chrome) {
    browser = chrome;
}

browser.browserAction.onClicked.addListener(() => {
    browser.browserAction.setTitle(
        {
            title : EXTENSION_NAME
        }
    );
});

console.log("Extension Loaded");
