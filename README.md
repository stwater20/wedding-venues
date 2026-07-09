# 💐 婚宴飯店比較網站

台北婚宴場地比較工具。純靜態網頁，部署在 GitHub Pages，不需要資料庫或伺服器。

## 架構

| 檔案 | 用途 | 修改方式 |
|---|---|---|
| `index.html` | 網頁程式（篩選、比較、同步邏輯） | 一般不需要動 |
| `data.js` | **飯店資料**（方案、價格、場地、照片） | 編輯後 push，網站自動更新 |
| `state.json` | **兩人共享的標記**（收藏、狀態、備註、自訂飯店） | 由網頁透過 GitHub API 自動讀寫，不需手動編輯 |
| `.github/workflows/deploy.yml` | 每次 push 到 `main` 自動重新部署網站 | 不需要動 |

## 新增飯店

### 方式一（推薦）：丟網址給 Claude

把飯店婚宴頁的網址丟給 Claude，說：

> 幫我把這間加進 wedding-venues 的 data.js

Claude 會抓官網資料、整理成下方格式、更新 `data.js` 並協助 push。

### 方式二：手動編輯 data.js

在 `data.js` 的 `VENUES` 陣列裡照「資料格式規範」加一個物件，commit 到 `main` 即可。

### 方式三：網頁上「＋新增飯店」

貼 JSON 進去，會存到共享的 `state.json`（已設定同步時兩人都看得到）。適合快速筆記，正式資料建議還是進 `data.js`。

## 資料格式規範（data.js 的每一筆飯店）

```js
{
  id: "unique-id",            // 必填。英文小寫+連字號，不可重複
  name: "飯店名稱",            // 必填
  area: "大直",               // 區域，用於篩選
  phone: "(02) 1234-5678",   // 婚宴洽詢電話，可空字串
  website: "https://...",     // 官網婚宴頁連結
  tags: ["特色1", "特色2"],    // 卡片上顯示前 3 個

  halls: [                    // 場地列表，可為空陣列
    { name: "宴會廳", tables: "10–20 桌", size: "100 坪", height: "6m" }
    // tables 請含數字（如 "10 桌"、"22 桌以上"），桌數篩選靠它解析
  ],

  packages: [                 // 方案列表，至少一筆
    {
      name: "方案名",
      price: 28000,           // 每桌價格（數字）。未公開價格填 null
      unit: 10,               // 每桌人數（10 或 12），用於每人單價換算
      note: "+10%，其他說明",  // 是否需加服務費請寫在這裡
      dateType: ""            // 限指定日期的方案填 "指定日"，否則空字串
    }
  ],

  extras: ["禮遇或加購項目"],   // 可為空陣列
  minSpend: "低消說明文字",     // 沒有就空字串
  images: ["https://..."],    // 官網照片網址。載入失敗會自動隱藏
  pdfs: [                     // 官方文件連結，可為空陣列
    { name: "2026 婚宴專案 PDF", url: "https://..." }
  ],
  status: "完整"              // "完整" / "部分（…）" / "待補（需洽詢）"
                              // 以 "待補" 開頭會在卡片顯示紅色標籤
}
```

規則摘要：`id` 與 `name` 必填且 `id` 不可重複；`price` 一律填「每桌」數字（不是每人）；含服務費與否寫在 `note`；`unit` 影響每人單價換算，務必確認該飯店是 10 人桌還是 12 人桌。

## 兩人同步機制（不需資料庫）

收藏 / 狀態 / 備註 / 自訂飯店存在 repo 的 `state.json`，網頁直接透過 GitHub API 讀寫，所以兩支手機看到的是同一份。

### 最簡單的設定方式（另一半完全不用碰 GitHub）

1. 你（repo 擁有者）照下方步驟產一把 token
2. 自己的裝置：網站右上「同步設定」→ 貼上 token → 儲存
3. 另一半的裝置：把這個連結傳給她點開即完成——

   ```
   https://<帳號>.github.io/wedding-venues/#setup=<token>
   ```

   網頁會自動存好 token、從網址列清掉，顯示「✅ 同步已開啟」。

### 備註加密（選填）

「同步設定」裡可填一組**密語**（兩人要填同一組）。填了之後，備註存到 state.json 前會先在裝置上用 AES-GCM 加密，雲端只看得到亂碼，只有輸入相同密語的裝置能還原。收藏與狀態不加密（不敏感）。密語忘了會解不開舊備註，請挑好記的。

分享連結也可以帶密語，一次設定完成：

```
https://<帳號>.github.io/wedding-venues/#setup=<token>&pass=<密語>
```

### 產生 token 的步驟

1. 直接開這個網址：**https://github.com/settings/personal-access-tokens/new**（或 GitHub 右上頭像 → Settings → 左欄最下面 Developer settings → Fine-grained personal access tokens → Generate new token）
2. Repository access 選 **Only select repositories** → 只勾這個 repo
3. Permissions → Repository permissions → **Contents** 設為 **Read and write**，其他都不用
4. 產生後複製 token，打開網站 → 右上角「同步設定」→ 貼上 → 儲存並測試

注意事項：

- Token 只存在該裝置的瀏覽器 localStorage，不會出現在網頁原始碼裡
- 沒填 token 也能「唯讀」看到對方的標記，只是自己的改動不會上傳
- 衝突處理採「最後儲存者為準」，兩人同時改同一間的備註時後存的會蓋掉先存的（實務上兩人使用幾乎不會碰到）
- `state.json` 的每次更新都是一個 commit，等於自帶修改歷史，改壞了可以從 commit 紀錄還原
- 另一半不需要 GitHub 帳號也能「看」（網站是公開的）；要「寫」才需要 token——最簡單的做法是把你產生的第二把 token 給對方用

## 部署

- 網站放在 GitHub Pages，push 到 `main` 後由 `.github/workflows/deploy.yml` 自動重新部署（約 1 分鐘生效）
- 首次設定：repo → Settings → Pages → Source 選 **GitHub Actions**
- 網址：`https://<帳號>.github.io/wedding-venues/`

## 免責與資料移除

所有價格與方案內容為官網及公開媒體（新娘物語 weddings.tw 等）資訊的整理，僅供個人比較參考，非商業用途，正式價格以各飯店報價為準。照片採直連原站方式呈現，版權屬原網站所有。

若您是資料或照片所有者希望移除內容，請至本 repo 的 [GitHub Issues](https://github.com/stwater20/wedding-venues/issues) 提出，會盡快下架。
