const DEFAULT_URL = "https://claude.ai";

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("url");
  const status = document.getElementById("status");

  chrome.storage.sync.get({ targetUrl: DEFAULT_URL }, ({ targetUrl }) => {
    input.value = targetUrl;
  });

  document.getElementById("save").addEventListener("click", () => {
    const url = input.value.trim();
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      status.style.color = "red";
      status.textContent = "請輸入有效的 http/https 網址 / Enter a valid http/https URL";
      return;
    }
    chrome.storage.sync.set({ targetUrl: url }, () => {
      status.style.color = "green";
      status.textContent = "已儲存 / Saved!";
      setTimeout(() => (status.textContent = ""), 2000);
    });
  });
});
