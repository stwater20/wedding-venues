// ============================================================
// 婚宴飯店資料檔
// 新增/修改飯店只要編輯這個檔案，push 之後網站會自動更新。
// 欄位規範見 README.md「資料格式規範」。
// ============================================================
const VENUES = [
{
 id:"marriott", name:"台北萬豪酒店", area:"大直", phone:"(02) 8502-3899",
 website:"https://www.taipeimarriott.com.tw/websev?cat=page&id=25",
 tags:["國際五星","四季廳景觀","大型宴會廳"],
 halls:[
  {name:"四季廳 3F", tables:"3–12 桌", size:"78 坪（春21/夏18/秋18/冬21）", height:""},
  {name:"宴會廳（依桌數分區）", tables:"10–15 / 15–18 / 25–30 / 35 桌以上", size:"", height:""}
 ],
 packages:[
  {name:"2026 婚宴專案", price:null, unit:10, note:"價格見官網 PDF（未公開單一數字）", dateType:""},
  {name:"2026 鍾愛專案", price:null, unit:10, note:"價格見官網 PDF", dateType:""}
 ],
 extras:[], minSpend:"",
 images:[
  "https://www.taipeimarriott.com.tw/files/page_1462098366w63owd47_m.jpg",
  "https://www.taipeimarriott.com.tw/files/page_1481882626wkv3cd98_m.jpg",
  "https://www.taipeimarriott.com.tw/files/page_1596549643114oi9o69_m.jpg"
 ],
 pdfs:[
  {name:"2026 婚宴專案 PDF", url:"https://www.taipeimarriott.com.tw/files/page_176167136514q9n4w25.pdf"},
  {name:"2026 鍾愛專案 PDF", url:"https://www.taipeimarriott.com.tw/files/page_176167137314q9n5631.pdf"},
  {name:"場地簡介 PDF", url:"https://www.taipeimarriott.com.tw/files/page_174255989914bxep012.pdf"}
 ],
 status:"部分（價格在PDF）"
},
{
 id:"mayfull", name:"美福大飯店 Grand Mayfull", area:"大直", phone:"(02) 7722-3399",
 website:"https://www.grandmayfull.com/events/wedding",
 tags:["7m 挑高無柱","420 吋 LED","BOSE 音響","戶外花園證婚"],
 halls:[{name:"宴會廳", tables:"", size:"7m 挑高無柱", height:"7m"}],
 packages:[{name:"婚宴專案", price:null, unit:10, note:"官網未公開價格，需洽詢", dateType:""}],
 extras:["戶外花園證婚場地"], minSpend:"",
 images:[], pdfs:[],
 status:"待補（需洽詢）"
},
{
 id:"courtyard-nangang", name:"六福萬怡酒店", area:"南港", phone:"(02) 6615-6565 #8915",
 website:"https://www.courtyardtaipei.com.tw/wedding/spaceMeeting",
 tags:["捷運/高鐵南港站","15桌+贈住宿","文定證婚85折"],
 halls:[
  {name:"7F Supernova", tables:"20 桌以上", size:"", height:""},
  {name:"9F Ballroom I（海/山/林）", tables:"8 桌以上", size:"", height:""},
  {name:"9F Ballroom II", tables:"15 桌以上", size:"", height:""},
  {name:"9F 小廳（山海林水晶雲風光 八廳）", tables:"各 3–4 桌", size:"", height:""}
 ],
 packages:[
  {name:"日日好日", price:19900, unit:10, note:"+10%，指定日期適用", dateType:"指定日"},
  {name:"輕奢豐漾（三檔）", price:23900, unit:10, note:"+10%，23,900 / 28,900 / 30,900 三檔", dateType:""}
 ],
 extras:["15 桌以上贈婚宴當日住宿","文定/證婚儀式加訂 85 折","婚宴主持 12,000"],
 minSpend:"",
 images:[
  "https://www.courtyardtaipei.com.tw/userfiles/shop-1/image/2026%E5%AE%B4%E6%9C%83%E6%9C%83%E8%AD%B0/2025-12-%E6%97%A5%E6%97%A5%E5%A5%BD%E6%97%A5EDM_1.jpg",
  "https://www.courtyardtaipei.com.tw/userfiles/shop-1/image/2026%E5%AE%B4%E6%9C%83%E6%9C%83%E8%AD%B0/2026-%E8%BC%95%E5%A5%A2%E9%A2%A8%E6%BC%BE%E5%A9%9A%E5%AE%B4_%E8%B1%90%E6%BC%BE%E5%B0%88%E6%A1%88.jpg",
  "https://www.courtyardtaipei.com.tw/uploads/sites/2/018b85350e508fb23dfeac41215363b6.jpg"
 ],
 pdfs:[], status:"完整"
},
{
 id:"eslite", name:"誠品行旅", area:"松山文創園區", phone:"(02) 6626-2888 #8886",
 website:"https://www.eslitehotel.com/wedding/",
 tags:["文青質感","小型婚宴","專屬小管家","試菜85折"],
 halls:[
  {name:"2F Function Room", tables:"最多 16 桌", size:"", height:""},
  {name:"16F Penthouse", tables:"最多 7 桌", size:"高樓層景觀", height:""}
 ],
 packages:[
  {name:"永愛", price:25000, unit:10, note:"+10%", dateType:""},
  {name:"永諾", price:28000, unit:10, note:"+10%", dateType:""},
  {name:"永恆", price:33000, unit:10, note:"+10% 起", dateType:""},
  {name:"好嫁日（小吉日）", price:20000, unit:10, note:"+10%，指定日期", dateType:"指定日"}
 ],
 extras:["婚宴小管家","基本花藝佈置","試菜 85 折","停車 4 小時","加購 Candy Bar 13,000","加購雞尾酒 7,000"],
 minSpend:"低消：2F 平日29萬/假日36萬/小吉日26萬；16F 平日13萬/假日16萬/小吉日10萬",
 images:[
  "https://www.eslitehotel.com/wp-content/uploads/2022/11/%E5%A9%9A%E5%AE%B4%E7%B6%B2%E7%AB%99%E5%A0%B4%E5%9C%B0%E5%B1%95%E7%A4%BA-2-1024x683.jpg",
  "https://www.eslitehotel.com/wp-content/uploads/2022/11/%E5%A9%9A%E5%AE%B4%E7%B6%B2%E7%AB%99%E5%A0%B4%E5%9C%B0%E5%B1%95%E7%A4%BA-3-1024x683.jpg",
  "https://www.eslitehotel.com/wp-content/uploads/2022/11/%E5%A9%9A%E5%AE%B4%E7%B6%B2%E7%AB%99%E5%A0%B4%E5%9C%B0%E5%B1%95%E7%A4%BA-5-1024x683.jpg",
  "https://www.eslitehotel.com/wp-content/uploads/2022/11/%E5%A9%9A%E5%AE%B4%E7%B6%B2%E7%AB%99%E5%A0%B4%E5%9C%B0%E5%B1%95%E7%A4%BA-7-1024x683.jpg",
  "https://www.eslitehotel.com/wp-content/uploads/2022/11/%E5%A9%9A%E5%AE%B4%E7%B6%B2%E7%AB%99%E5%A0%B4%E5%9C%B0%E5%B1%95%E7%A4%BA-1-1024x683.jpg"
 ],
 pdfs:[
  {name:"2026 婚宴提案 PDF", url:"https://www.eslitehotel.com/wp-content/uploads/2025/07/2026%E8%AA%A0%E5%93%81%E8%A1%8C%E6%97%85%E5%A9%9A%E5%AE%B4%E6%8F%90%E6%A1%88_250701.pdf"},
  {name:"好嫁日小吉日專案 PDF", url:"https://www.eslitehotel.com/wp-content/uploads/2025/07/2026%E8%AA%A0%E5%93%81%E8%A1%8C%E6%97%85-%E8%AA%A0%E5%93%81%E5%A5%BD%E5%AB%81%E6%97%A5%E5%B0%8F%E5%90%89%E6%97%A5%E5%B0%88%E6%A1%88_250701.pdf"}
 ],
 status:"完整"
},
{
 id:"illume", name:"茹曦酒店 Hotel Illume", area:"松山（小巨蛋）", phone:"",
 website:"https://www.theillumehotel.com/zh/meetings-events/wedding/",
 tags:["官網為動態網頁，資料待補"],
 halls:[], packages:[{name:"婚宴專案", price:null, unit:10, note:"官網無法自動讀取，需洽詢", dateType:""}],
 extras:[], minSpend:"", images:[], pdfs:[],
 status:"待補（需洽詢）"
},
{
 id:"renaissance", name:"士林萬麗酒店", area:"士林", phone:"(02) 8861-2389",
 website:"https://www.renaissancetaipei.com/2025b44eb2af",
 tags:["空中花園證婚","小桌數友善","分級禮遇"],
 halls:[
  {name:"桂花園 / 長春閣 / 丹鳳閣", tables:"3–5 桌", size:"", height:""},
  {name:"龍井廳", tables:"6–10 桌", size:"", height:""},
  {name:"金萱廳", tables:"10–14 桌", size:"", height:""},
  {name:"宴會廳", tables:"22 桌以上", size:"", height:""}
 ],
 packages:[
  {name:"桌菜 A", price:28800, unit:10, note:"", dateType:""},
  {name:"桌菜 B", price:32800, unit:10, note:"", dateType:""},
  {name:"桌菜 C", price:36800, unit:10, note:"", dateType:""}
 ],
 extras:["6 桌以上、22 桌以上分級禮遇","空中花園證婚 55,000","文定儀式 24,000","企劃+司儀 12,000","After Party 60,000 起","紅白酒暢飲 +2,000/桌"],
 minSpend:"",
 images:[
  "https://lirp.cdn-website.com/4c5821a0/dms3rep/multi/opt/br-waspy-renaissance-wedding-24302-1920w.jpg"
 ],
 pdfs:[], status:"完整"
},
{
 id:"denwell", name:"大直典華", area:"大直", phone:"(02) 8502-5555",
 website:"https://www.denwell.com/%e5%a4%a7%e7%9b%b4-%e5%a9%9a%e5%ae%b4%e5%a0%b4%e5%9c%b0/",
 tags:["12 廳規模最大","專屬儀式堂","5–75 桌全包"],
 halls:[
  {name:"微居", tables:"5 桌", size:"26 坪", height:"4.5m"},
  {name:"星環", tables:"19 桌", size:"", height:""},
  {name:"方舟", tables:"25 桌", size:"", height:""},
  {name:"羽翼", tables:"40 桌", size:"", height:""},
  {name:"雲翼", tables:"50 桌", size:"", height:""},
  {name:"花田盛事", tables:"75 桌", size:"274 坪", height:"8m"},
  {name:"飛蝶圓頂儀式堂 / 圓心儀式堂", tables:"證婚儀式", size:"", height:""}
 ],
 packages:[
  {name:"小桌數專案", price:null, unit:10, note:"未公開價，需洽詢", dateType:""},
  {name:"長桌專案", price:null, unit:10, note:"未公開價", dateType:""},
  {name:"好日子專案", price:null, unit:10, note:"未公開價", dateType:"指定日"}
 ],
 extras:["專屬證婚儀式堂"], minSpend:"",
 images:[
  "https://img.denwell.com/denwell/wp-content/uploads/2025/07/2025072304031075.jpg",
  "https://img.denwell.com/denwell/wp-content/uploads/2024/12/202502250454579.jpg",
  "https://img.denwell.com/denwell/wp-content/uploads/2025/07/2025072304054373.jpg"
 ],
 pdfs:[], status:"部分（價格需洽詢）"
},
{
 id:"amazinghall", name:"晶宴會館", area:"多館（民權/府中/桃園等）", phone:"",
 website:"https://www.amazinghall.com.tw/wedding-banquet-services/wedding-site/",
 tags:["多館選擇","戶外證婚","主題廳"],
 halls:[
  {name:"民權館", tables:"", size:"", height:""},
  {name:"日光香頌館", tables:"", size:"1F 含戶外證婚區", height:""},
  {name:"峇里斯館 / 府中館 / 桃園館 / 御豐館", tables:"", size:"", height:""}
 ],
 packages:[{name:"婚宴專案", price:null, unit:10, note:"各館價格不同，需洽詢", dateType:""}],
 extras:["戶外證婚（日光香頌）"], minSpend:"",
 images:[
  "https://i0.wp.com/www.amazinghall.com.tw/wp-content/uploads/2023/05/a1%E6%B0%91%E6%AC%8A%E9%A4%A8.jpg",
  "https://i0.wp.com/www.amazinghall.com.tw/wp-content/uploads/2023/05/a2%E9%A6%99%E6%A6%AD%E7%8E%AB%E7%91%B0%E5%9C%92.jpeg",
  "https://i0.wp.com/www.amazinghall.com.tw/wp-content/uploads/2023/05/1F-%E6%97%A5%E5%85%89%E9%A6%99%E9%A0%8C.jpg",
  "https://i0.wp.com/www.amazinghall.com.tw/wp-content/uploads/2023/05/1F-%E6%97%A5%E5%85%89%E9%A6%99%E9%A0%8C%E6%88%B6%E5%A4%96%E8%AD%89%E5%A9%9A.jpg"
 ],
 pdfs:[], status:"部分（價格需洽詢）"
},
{
 id:"humblehouse", name:"台北艾麗酒店 Humble House", area:"信義", phone:"(02) 6631-8000",
 website:"https://www.humblehousehotels.com/zh-tw/websev?cat=page&id=122",
 tags:["信義區地段","空中花園證婚","5F 212 坪彈性隔間"],
 halls:[
  {name:"蘭廳", tables:"", size:"67 坪", height:""},
  {name:"葵廳", tables:"", size:"70 坪", height:""},
  {name:"楓廳", tables:"", size:"49 坪", height:""},
  {name:"柏廳", tables:"", size:"25 坪", height:""},
  {name:"槿廳", tables:"", size:"21 坪", height:""}
 ],
 packages:[
  {name:"寵艾一生", price:26800, unit:10, note:"+10%", dateType:""},
  {name:"珍艾約定", price:30800, unit:10, note:"+10%", dateType:""}
 ],
 extras:["25 桌以上禮遇五選一","30 桌以上加贈主持人+婚企","空中花園證婚"],
 minSpend:"",
 images:[
  "https://www.humblehousehotels.com/files/page_175732776814n15kt.jpg",
  "https://www.humblehousehotels.com/files/page_1732292643144a6vm.jpg",
  "https://www.humblehousehotels.com/files/page_175750268314n5kvr.jpg",
  "https://www.humblehousehotels.com/files/page_16867522231347i3v.jpg"
 ],
 pdfs:[], status:"完整"
},
{
 id:"mo", name:"台北文華東方酒店", area:"敦化北路", phone:"(02) 2715-6888",
 website:"https://www.motpenews.com/zh_TW/news-details/id/214",
 tags:["頂級奢華","文華閣挑高21m證婚","含海外蜜月(頂級案)"],
 halls:[{name:"文華閣（證婚）", tables:"約 120 位", size:"挑高 21m", height:"21m"}],
 packages:[
  {name:"日日好婚日", price:28800, unit:10, note:"+10% 起，近 200 個指定日；20桌+/35桌+分級禮遇", dateType:"指定日"},
  {name:"鍾愛一生", price:32800, unit:10, note:"+10%，32,800～65,800；65,800 檔含海外蜜月 2 晚", dateType:""}
 ],
 extras:["文華閣證婚 80,000"], minSpend:"",
 images:[
  "https://www.motpenews.com/web/upload/20251008112752XYAPueR.jpg",
  "https://www.motpenews.com/web/upload/ckfinder/images/JGT05900.jpg",
  "https://www.motpenews.com/web/upload/ckfinder/images/JGT05453.jpg"
 ],
 pdfs:[], status:"完整"
},
{
 id:"courtyard-downtown", name:"台北國泰萬怡酒店", area:"民生東路", phone:"(02) 7750-3388",
 website:"https://www.courtyardtaipeidowntown.com.tw/news-detail/2026-courtyard-feast/",
 tags:["每桌 12 人","14F 高空戶外證婚","含香檳塔/套房"],
 halls:[
  {name:"荷花+茶花廳", tables:"最低 5 桌", size:"", height:""},
  {name:"杜鵑+百合廳", tables:"最低 10 桌", size:"", height:""},
  {name:"霖苑", tables:"18–23 桌", size:"", height:""},
  {name:"14F 高空戶外證婚", tables:"儀式", size:"", height:""}
 ],
 packages:[
  {name:"2026 婚宴 A", price:28800, unit:12, note:"每桌 12 人", dateType:""},
  {name:"2026 婚宴 B", price:31800, unit:12, note:"每桌 12 人，起；18桌+含 LED 婚紗照", dateType:""}
 ],
 extras:["10 桌以上禮遇 4 選 1","20 桌以上 4 選 2","香檳塔","萬怡套房住宿"],
 minSpend:"",
 images:[
  "https://www.courtyardtaipeidowntown.com.tw/upload/news_b/twL_news_24G12_r49gy2v2gy.jpg",
  "https://www.courtyardtaipeidowntown.com.tw/upload/news_b/twL_news_22I27_fhmbxkv6x8.jpg"
 ],
 pdfs:[], status:"完整"
},
{
 id:"miramar", name:"美麗信花園酒店", area:"市民大道", phone:"(02) 8772-8800",
 website:"https://www.miramargarden.com.tw/zh-tw/%E5%8F%B0%E5%8C%97%E7%BE%8E%E9%BA%97%E4%BF%A1/Banquet",
 tags:["官網僅列會議資訊，婚宴需洽詢"],
 halls:[], packages:[{name:"婚宴專案", price:null, unit:10, note:"需洽詢", dateType:""}],
 extras:[], minSpend:"", images:[], pdfs:[],
 status:"待補（需洽詢）"
}
];
