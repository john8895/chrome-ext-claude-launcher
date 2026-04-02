# Claude Launcher — Chrome Extension

> 一鍵開啟 claude.ai 的最小 Chrome 擴充功能  
> A minimal Chrome extension that opens claude.ai in one click

---

## 功能 / Features

| 操作 / Action | 結果 / Result |
|---|---|
| 點擊工具列圖示 / Click toolbar icon | 新分頁開啟 `https://claude.ai` |
| 快捷鍵 `Alt+C` / Shortcut `Alt+C` | 同上 / Same as above |
| 至 `chrome://extensions/shortcuts` 修改 | 可自訂任意快捷鍵 / Rebind to any key |

---

## 檔案結構 / File Structure

```
chrome-ext-claude-launcher/
├── manifest.json   # Manifest V3 設定 / config
├── background.js   # Service worker — 監聽點擊事件 / click listener
└── icon.png        # 128×128 圖示 / icon
```

---

## 安裝 / Installation

**中文步驟**
1. 下載或 clone 此 repo
2. 開啟 `chrome://extensions`
3. 右上角啟用「**開發人員模式**」
4. 點「**載入未封裝項目**」，選取本資料夾
5. 圖示出現在工具列即完成

**English steps**
1. Download or clone this repo
2. Go to `chrome://extensions`
3. Enable **Developer mode** (top-right toggle)
4. Click **Load unpacked** and select this folder
5. The icon appears in your toolbar — done

---

## 快捷鍵設定 / Shortcut Configuration

預設 `Alt+C`，可至 `chrome://extensions/shortcuts` 自行修改。  
Default is `Alt+C`. Change it anytime at `chrome://extensions/shortcuts`.

---

## 技術細節 / Technical Notes

- **Manifest V3** — 使用 service worker，無 persistent background page
- **權限 / Permissions** — 僅 `tabs`，不要求任何網站存取
- `_execute_action` command 讓快捷鍵與點擊圖示共用同一處理邏輯，無需額外監聽器  
  The `_execute_action` command key shares the same handler as the icon click — no duplicate listener needed
