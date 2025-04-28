# 醬A的聖誕夜 — 選擇式互動遊戲

## 專案簡介
這是一款使用純 HTML 和 JavaScript 製作的小型互動式文字冒險遊戲。  
玩家通過不同的選擇，推進主角「醬A」的聖誕夜故事，最終導向不同的結局。

## 專案結構
- `index.html` — 主頁面，負責載入腳本。
- `gamescript.js` — 定義遊戲腳本（場景、文字、按鈕分支）。
- `gamebuild.js` — 根據腳本自動產生 HTML 畫面和切換邏輯。

## 如何執行
1. 將三個檔案放在同一個資料夾內。
2. 使用瀏覽器開啟 `index.html`。
3. 開始遊玩！

> 本遊戲為靜態頁面，無需伺服器，直接開啟即可使用。

## 玩法說明
- 根據螢幕上出現的敘述和選項進行選擇。
- 不同的選擇會觸發不同的故事分支與結局。
- 遊戲包含「好結局（Good End）」與「壞結局（Bad End）」。

## 檔案詳細說明

### gamescript.js
- 定義了所有章節（`act0` ~ `act6`）與結局（`end1`, `end2`, `end3`）。
- 每個章節設定：
  - `display`：初始是否顯示。
  - `pre`：段落文字。
  - `button`：提供給玩家的選擇按鈕及分支設定。

### gamebuild.js
- `startbuild()`：初始化並建立所有章節。
- `buildmain()`：生成章節畫面。
- `creatediv()`：建立每個章節的容器。
- `createpre()`：插入段落文字。
- `createbutton()`：生成可點擊的選項按鈕。
- `actmove()`：根據選擇切換到下一個章節。
- `buttonfuncre()`：綁定按鈕點擊事件。

## 如何自訂
想要新增或修改劇情，只需要編輯 `gamescript.js` 中的內容：
1. 新增新的章節 (`actX`)。
2. 設定該章節的 `pre` 敘述文字。
3. 定義玩家可以選擇的 `button`，指定每個按鈕跳轉到哪個章節。

### 例子
```javascript
'act7': {
    'display': 'none',
    'pre': ['醬A面對新的挑戰...'],
    'button': {
        'A': {
            'text': '勇敢前進',
            'next': 'end3',
            'foc': true,
            'hidden': ['其他章節']
        }
    }
}
