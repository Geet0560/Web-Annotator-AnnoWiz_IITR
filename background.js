chrome.commands.onCommand.addListener(command => {
  if (command === "highlight_text") {
    chrome.tabs.query({ active: true }, tab => {
      chrome.tabs.executeScript(tab.id, { file: "injection.js" }, _ => {
        let e = chrome.runtime.lastError;
        if (e !== undefined) {
          console.log(tabId, _, e);
        }
      });
      chrome.tabs.executeScript(tab.id, { file: "comment.js" }, _ => {
        let e = chrome.runtime.lastError;
        if (e !== undefined) {
          console.log(tabId, _, e);
        }
      });
      chrome.tabs.insertCSS(tab.id, { file: "style.css" }, _ => {
        let e = chrome.runtime.lastError;
        if (e !== undefined) {
          console.log(tabId, _, e);
        }
      });
    });
  }
  if (command === "clear_storage") {
    chrome.tabs.query({ active: true }, tab => {
      chrome.tabs.executeScript(tab.id, { file: "clear_storage.js" });
    });
  }
});

