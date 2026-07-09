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
},

/* ===== 以下來自新娘物語「台北 40+ 婚宴場地懶人包」（2025/05，僅起桌價與基本資訊，詳細方案需洽詢） ===== */
{
 id:"regent", name:"台北晶華酒店", area:"中山", phone:"(02) 2523-8000",
 website:"https://www.regenttaipei.com/",
 tags:["270度光雕投影","挑高無樑柱","晶華軒粵菜"],
 halls:[],
 packages:[{name:"婚宴專案（起桌價）", price:20800, unit:10, note:"+10%，來源：新娘物語", dateType:""}],
 extras:[], minSpend:"",
 images:["https://img.weddings.tw/weddings/wp-content/uploads/2025/12/2025122209291477.jpg"],
 pdfs:[], status:"部分（僅起桌價）"
},
{
 id:"hilai", name:"台北漢來大飯店", area:"南港", phone:"(02) 2785-8086",
 website:"https://www.hilai-foods.com/",
 tags:["漢來美食粵菜","天空森林戶外禮堂","摩登輕奢挑高廳"],
 halls:[],
 packages:[
  {name:"婚宴專案（起桌價）", price:28800, unit:10, note:"+10%，來源：新娘物語", dateType:""},
  {name:"指定日專案", price:23800, unit:10, note:"+10%，來源：新娘物語", dateType:"指定日"}
 ],
 extras:[], minSpend:"", images:[], pdfs:[], status:"部分（僅起桌價）"
},
{
 id:"shanghai-chengde", name:"上海鄉村 承德本家", area:"台北車站", phone:"0911-776-177",
 website:"",
 tags:["上海江浙菜","近台北車站","8–14桌小型婚宴"],
 halls:[{name:"宴會廳", tables:"8–14 桌", size:"", height:""}],
 packages:[{name:"婚宴專案（起桌價）", price:22800, unit:10, note:"+10%，來源：新娘物語", dateType:""}],
 extras:[], minSpend:"",
 images:["https://img.weddings.tw/weddings/wp-content/uploads/2026/01/2026012705110127.jpg"],
 pdfs:[], status:"部分（僅起桌價）"
},
{
 id:"sheraton", name:"台北喜來登大飯店", area:"中正", phone:"(02) 2321-5511",
 website:"https://www.sheratongrandtaipei.com/",
 tags:["市中心近善導寺站","大小廳選擇多","經典氣派"],
 halls:[],
 packages:[{name:"婚宴專案（起桌價）", price:16800, unit:10, note:"+10%，來源：新娘物語", dateType:""}],
 extras:[], minSpend:"",
 images:["https://img.weddings.tw/weddings/wp-content/uploads/2025/03/2025090503511911.jpg"],
 pdfs:[], status:"部分（僅起桌價）"
},
{
 id:"riviera", name:"歐華酒店", area:"中山", phone:"(02) 2585-3258 #839",
 website:"https://www.rivierataipei.com/",
 tags:["歐式中庭","大理石旋梯","小桌數家宴"],
 halls:[],
 packages:[{name:"婚宴專案（起桌價）", price:19800, unit:10, note:"+10%，來源：新娘物語", dateType:""}],
 extras:[], minSpend:"",
 images:["https://img.weddings.tw/weddings/wp-content/uploads/2025/12/2026031610152492.jpg"],
 pdfs:[], status:"部分（僅起桌價）"
},
{
 id:"palais-de-chine", name:"台北君品酒店", area:"台北車站", phone:"(02) 2181-9999",
 website:"https://www.palaisdechinehotel.com/tw/grand.php?id=5",
 tags:["京站共構交通便利","亮廳水晶燈","東西美學融合"],
 halls:[],
 packages:[{name:"婚宴專案（起桌價）", price:28800, unit:12, note:"+10%，保證桌數 25 桌，來源：新娘物語", dateType:""}],
 extras:[], minSpend:"保證桌數 25 桌", images:[], pdfs:[], status:"部分（僅起桌價）"
},
{
 id:"okura", name:"大倉久和大飯店", area:"中山", phone:"(02) 2181-5129",
 website:"https://www.okurataipei.com.tw/",
 tags:["日系細膩服務","一時段一場婚宴","挑高採光小型婚宴"],
 halls:[],
 packages:[{name:"婚宴專案（起桌價）", price:19800, unit:10, note:"+10%，來源：新娘物語", dateType:""}],
 extras:["一時段僅服務一場婚宴"], minSpend:"",
 images:["https://img.weddings.tw/weddings/wp-content/uploads/2025/05/2026032007144084.jpg"],
 pdfs:[], status:"部分（僅起桌價）"
},
{
 id:"jingyan-chanson", name:"晶宴會館 日光香頌", area:"中山", phone:"(02) 2517-9977",
 website:"",
 tags:["法式庭園戶外證婚","白金色系","挑高無樑柱"],
 halls:[],
 packages:[{name:"婚宴專案（起桌價）", price:19900, unit:10, note:"+10%，來源：新娘物語", dateType:""}],
 extras:["戶外證婚花園"], minSpend:"", images:[], pdfs:[], status:"部分（僅起桌價）"
},
{
 id:"grand-view-beitou", name:"北投麗禧溫泉酒店", area:"北投", phone:"(02) 2898-8888",
 website:"https://www.gvrb.com.tw/",
 tags:["戶外水舞台證婚","山林環抱","近百坪無柱宴會廳"],
 halls:[],
 packages:[{name:"婚宴專案（起桌價）", price:19800, unit:10, note:"+10%，來源：新娘物語", dateType:""}],
 extras:[], minSpend:"",
 images:["https://img.weddings.tw/weddings/wp-content/uploads/2025/07/2025070107204053.jpg"],
 pdfs:[], status:"部分（僅起桌價）"
},
{
 id:"victoria", name:"大直維多麗亞酒店", area:"大直", phone:"(02) 8502-0007 #2381~2387",
 website:"https://www.grandvictoria.com.tw/",
 tags:["歐式戶外花園證婚","新古典風格","米其林推薦牛排館"],
 halls:[],
 packages:[{name:"婚宴專案（起桌價）", price:18800, unit:10, note:"+10%，來源：新娘物語", dateType:""}],
 extras:[], minSpend:"", images:[], pdfs:[], status:"部分（僅起桌價）"
},
{
 id:"jingyan-minquan", name:"晶宴會館 民權館", area:"中山", phone:"(02) 8773-4567",
 website:"",
 tags:["AI沉浸式投影婚宴","香榭玫瑰園","無樑柱多主題廳"],
 halls:[],
 packages:[{name:"婚宴專案（起桌價）", price:19900, unit:10, note:"+10%，來源：新娘物語", dateType:""}],
 extras:[], minSpend:"", images:[], pdfs:[], status:"部分（僅起桌價）"
},
{
 id:"chateau-felicite", name:"翡麗詩莊園", area:"松山", phone:"(02) 6617-9888",
 website:"",
 tags:["純白玻璃教堂","半戶外花園","法式宴會廳"],
 halls:[],
 packages:[{name:"婚宴專案（起桌價）", price:18800, unit:10, note:"+10%，來源：新娘物語", dateType:""}],
 extras:["教堂＋花園＋宴會廳一站式"], minSpend:"",
 images:["https://img.weddings.tw/weddings/wp-content/uploads/2025/05/2026032402270610.jpg"],
 pdfs:[], status:"部分（僅起桌價）"
},
{
 id:"great-skyview", name:"格萊天漾大飯店", area:"萬華", phone:"(02) 2338-3366",
 website:"https://www.g-skyview.com/wedding_list_1.php",
 tags:["頂樓露台高空證婚","13樓天際線景觀","小資專案"],
 halls:[],
 packages:[{name:"2025 小資婚宴專案", price:19990, unit:10, note:"+10%，平日及指定假日限定，來源：新娘物語", dateType:"指定日"}],
 extras:[], minSpend:"",
 images:["https://www.weddings.tw/wp-content/uploads/2023/09/2023122010020411.jpg"],
 pdfs:[], status:"部分（僅起桌價）"
},
{
 id:"caesar-metro", name:"台北凱達大飯店", area:"萬華", phone:"(02) 2306-6777",
 website:"https://www.caesarmetro.com/",
 tags:["萬華車站共構","挑高7.2米宴會廳","紅金典雅"],
 halls:[{name:"宴會廳", tables:"", size:"", height:"7.2m"}],
 packages:[{name:"婚宴專案（起桌價）", price:18800, unit:10, note:"+10%，來源：新娘物語", dateType:""}],
 extras:[], minSpend:"",
 images:["https://img.weddings.tw/weddings/wp-content/uploads/2025/05/202511070627116.jpg"],
 pdfs:[], status:"部分（僅起桌價）"
},
{
 id:"grand-hyatt", name:"台北君悅酒店", area:"信義", phone:"(02) 2720-1200 #3948",
 website:"https://www.hyatt.com/grand-hyatt/taigh-grand-hyatt-taipei",
 tags:["緊鄰101","凱悅廳挑高無柱","凱寓獨立戶外露台"],
 halls:[],
 packages:[{name:"婚宴專案（起桌價）", price:29800, unit:10, note:"+10%，來源：新娘物語", dateType:""}],
 extras:[], minSpend:"",
 images:["https://img.weddings.tw/weddings/wp-content/uploads/2025/05/2025112708352492.jpg"],
 pdfs:[], status:"部分（僅起桌價）"
},
{
 id:"hotel-royal", name:"台北老爺大酒店", area:"中山", phone:"(02) 2542-3266",
 website:"https://www.hotelroyal.com.tw/taipei/",
 tags:["明宮粵菜","中山北路落地窗","東方典雅"],
 halls:[],
 packages:[{name:"婚宴專案（起桌價）", price:20800, unit:10, note:"+10%，來源：新娘物語", dateType:""}],
 extras:[], minSpend:"",
 images:["https://img.weddings.tw/weddings/wp-content/uploads/2024/02/2024042203495256.jpg"],
 pdfs:[], status:"部分（僅起桌價）"
},
{
 id:"le-beaujour", name:"Le Beaujour 芃卓", area:"中山", phone:"(02) 2181-9950 #3500",
 website:"",
 tags:["法式私宅風格","近百人精緻婚禮","君品／WtoH團隊"],
 halls:[],
 packages:[{name:"婚宴專案（起桌價）", price:18800, unit:10, note:"+10%，來源：新娘物語", dateType:""}],
 extras:[], minSpend:"可容納近百位賓客", images:[], pdfs:[], status:"部分（僅起桌價）"
},
{
 id:"chalet-v", name:"CHALET V", area:"大直", phone:"",
 website:"",
 tags:["北美滑雪木屋","戶外證婚","雙酒吧 After Party"],
 halls:[],
 packages:[{name:"半自助餐（每位計價）", price:16080, unit:6, note:"每位 NT$2,680+10% 起、每桌 6 位（此為換算每桌價），來源：新娘物語", dateType:""}],
 extras:[], minSpend:"", images:[], pdfs:[], status:"部分（僅起桌價）"
},
{
 id:"yayue-flagship", name:"雅悅會館 台北旗艦館", area:"南港", phone:"(02) 2788-7222",
 website:"",
 tags:["全台北唯一韓系風格","10米挑高無柱","三鐵共構"],
 halls:[],
 packages:[{name:"婚宴專案（起桌價）", price:18888, unit:10, note:"+10%，來源：新娘物語", dateType:""}],
 extras:["升降梯","LED屏幕","空飄花瓣機"], minSpend:"",
 images:["https://img.weddings.tw/weddings/wp-content/uploads/2025/03/2025091006000125.jpg"],
 pdfs:[], status:"部分（僅起桌價）"
},
{
 id:"sun-liren-mansion", name:"孫立人將軍官邸", area:"中正", phone:"(02) 2321-6905",
 website:"",
 tags:["歷史建築","玻璃花房","文藝戶外證婚"],
 halls:[],
 packages:[{name:"婚宴專案（起桌價）", price:19800, unit:10, note:"+10%，來源：新娘物語", dateType:""}],
 extras:[], minSpend:"", images:[], pdfs:[], status:"部分（僅起桌價）"
},
{
 id:"movement88", name:"88號樂章莊園式宴會廳", area:"內湖", phone:"(02) 2794-3800",
 website:"https://www.88mov5f.com/",
 tags:["四大主題宴會廳","歐洲小鎮場景","新台灣海鮮料理"],
 halls:[],
 packages:[{name:"婚宴專案（起桌價）", price:16800, unit:10, note:"+10%，來源：新娘物語", dateType:""}],
 extras:[], minSpend:"", images:[], pdfs:[], status:"部分（僅起桌價）"
},
{
 id:"gumgum-xinyi", name:"GUMGUM GROUP 信義本店", area:"信義", phone:"0972-021-357",
 website:"https://www.gumgumonline.com.tw/",
 tags:["工業風派對婚禮","包場制","Buffet 雞翅調酒"],
 halls:[{name:"全店包場", tables:"35–70 人", size:"", height:""}],
 packages:[{name:"包場", price:null, unit:10, note:"包場 NT$138,000（不收場租費），35–70 人，來源：新娘物語", dateType:""}],
 extras:[], minSpend:"包場 NT$138,000", images:[], pdfs:[], status:"部分（包場價）"
},
{
 id:"gumgum-neihu", name:"GUMGUM GROUP 內科店", area:"內湖", phone:"0972-021-357",
 website:"https://www.gumgumonline.com.tw/",
 tags:["工業風＋頂樓戶外","包場制","小型婚禮/After Party"],
 halls:[{name:"全店包場", tables:"上限 110 人", size:"", height:""}],
 packages:[{name:"包場", price:null, unit:10, note:"包場 NT$168,000（不收場租費），上限 110 人，來源：新娘物語", dateType:""}],
 extras:[], minSpend:"包場 NT$168,000", images:[], pdfs:[], status:"部分（包場價）"
},
{
 id:"gumgum-dome", name:"GUMGUM GROUP 小巨蛋店", area:"松山", phone:"0972-021-357",
 website:"https://www.gumgumonline.com.tw/",
 tags:["小巨蛋第一排","蛋形空間設計","包場制"],
 halls:[{name:"全店包場", tables:"70–75 人", size:"", height:""}],
 packages:[{name:"包場", price:null, unit:10, note:"包場 NT$154,000（不收場租費），70–75 人，來源：新娘物語", dateType:""}],
 extras:[], minSpend:"包場 NT$154,000",
 images:["https://img.weddings.tw/weddings/wp-content/uploads/2025/03/2025090202215558.jpg"],
 pdfs:[], status:"部分（包場價）"
},
{
 id:"fullon-taipei1", name:"福容大飯店 台北一館", area:"大安", phone:"(02) 2701-1239",
 website:"https://www.fullon-hotels.com.tw/tp/tw/",
 tags:["大安森林公園站旁","專屬電梯直達","地下停車場"],
 halls:[],
 packages:[{name:"婚宴專案（起桌價）", price:22800, unit:10, note:"+10%，來源：新娘物語", dateType:""}],
 extras:[], minSpend:"", images:[], pdfs:[], status:"部分（僅起桌價）"
},

/* ===== 以下僅有電話與地址（新娘物語清單），方案價格需洽詢 ===== */
{
 id:"chin-chin-garden", name:"青青食尚花園會館", area:"士林", phone:"(02) 2841-1996",
 website:"", tags:["花園會館"], halls:[],
 packages:[{name:"婚宴專案", price:null, unit:10, note:"需洽詢", dateType:""}],
 extras:[], minSpend:"", images:[], pdfs:[], status:"待補（需洽詢）"
},
{
 id:"chin-chin-starlight", name:"青青星光 Wedding", area:"南港", phone:"(02) 2782-1638",
 website:"", tags:["婚宴會館"], halls:[],
 packages:[{name:"婚宴專案", price:null, unit:10, note:"需洽詢", dateType:""}],
 extras:[], minSpend:"", images:[], pdfs:[], status:"待補（需洽詢）"
},
{
 id:"longxuan", name:"龍軒傳承粵菜餐廳", area:"中山", phone:"(02) 2522-3999",
 website:"", tags:["粵菜餐廳"], halls:[],
 packages:[{name:"婚宴專案", price:null, unit:10, note:"需洽詢", dateType:""}],
 extras:[], minSpend:"", images:[], pdfs:[], status:"待補（需洽詢）"
},
{
 id:"howard-civil", name:"福華國際文教會館", area:"大安", phone:"(02) 7712-2323",
 website:"", tags:["文教會館"], halls:[],
 packages:[{name:"婚宴專案", price:null, unit:10, note:"需洽詢", dateType:""}],
 extras:[], minSpend:"", images:[], pdfs:[], status:"待補（需洽詢）"
},
{
 id:"shangri-la", name:"香格里拉台北遠東國際大飯店", area:"大安", phone:"(02) 7700-3032",
 website:"", tags:["五星飯店"], halls:[],
 packages:[{name:"婚宴專案", price:null, unit:10, note:"需洽詢", dateType:""}],
 extras:[], minSpend:"", images:[], pdfs:[], status:"待補（需洽詢）"
},
{
 id:"nantian-beitou", name:"北投南天豐玥泉飯店", area:"北投", phone:"(02) 2898-8661",
 website:"", tags:["溫泉飯店"], halls:[],
 packages:[{name:"婚宴專案", price:null, unit:10, note:"需洽詢", dateType:""}],
 extras:[], minSpend:"", images:[], pdfs:[], status:"待補（需洽詢）"
},
{
 id:"w-taipei", name:"台北 W 飯店", area:"信義", phone:"(02) 6631-8000",
 website:"", tags:["時尚設計飯店"], halls:[],
 packages:[{name:"婚宴專案", price:null, unit:10, note:"需洽詢", dateType:""}],
 extras:[], minSpend:"", images:[], pdfs:[], status:"待補（需洽詢）"
},
{
 id:"landis", name:"台北亞都麗緻大飯店", area:"中山", phone:"(02) 2597-1234",
 website:"", tags:["歐風經典飯店"], halls:[],
 packages:[{name:"婚宴專案", price:null, unit:10, note:"需洽詢", dateType:""}],
 extras:[], minSpend:"", images:[], pdfs:[], status:"待補（需洽詢）"
},
{
 id:"grand-hotel", name:"圓山大飯店", area:"中山", phone:"(02) 2886-1818 #1530~1533",
 website:"", tags:["宮殿式地標","經典中式"], halls:[],
 packages:[{name:"婚宴專案", price:null, unit:10, note:"需洽詢", dateType:""}],
 extras:[], minSpend:"", images:[], pdfs:[], status:"待補（需洽詢）"
},
{
 id:"howard-taipei", name:"台北福華大飯店", area:"大安", phone:"(02) 2326-7412",
 website:"", tags:["仁愛路老牌飯店"], halls:[],
 packages:[{name:"婚宴專案", price:null, unit:10, note:"需洽詢", dateType:""}],
 extras:[], minSpend:"", images:[], pdfs:[], status:"待補（需洽詢）"
},
{
 id:"silks-palace", name:"故宮晶華", area:"士林", phone:"(02) 2882-9393",
 website:"", tags:["故宮旁","國宴級料理"], halls:[],
 packages:[{name:"婚宴專案", price:null, unit:10, note:"需洽詢", dateType:""}],
 extras:[], minSpend:"", images:[], pdfs:[], status:"待補（需洽詢）"
},
{
 id:"spring-city", name:"北投春天酒店", area:"北投", phone:"(02) 2897-5555",
 website:"", tags:["溫泉飯店"], halls:[],
 packages:[{name:"婚宴專案", price:null, unit:10, note:"需洽詢", dateType:""}],
 extras:[], minSpend:"", images:[], pdfs:[], status:"待補（需洽詢）"
},
{
 id:"asia-pacific-beitou", name:"北投亞太飯店", area:"北投", phone:"(02) 2897-7999 #5059",
 website:"", tags:["溫泉飯店"], halls:[],
 packages:[{name:"婚宴專案", price:null, unit:10, note:"需洽詢", dateType:""}],
 extras:[], minSpend:"", images:[], pdfs:[], status:"待補（需洽詢）"
},
{
 id:"art1919", name:"1919 藝文中心", area:"中山", phone:"(02) 2517-5777",
 website:"", tags:["藝文空間"], halls:[],
 packages:[{name:"婚宴專案", price:null, unit:10, note:"需洽詢", dateType:""}],
 extras:[], minSpend:"", images:[], pdfs:[], status:"待補（需洽詢）"
},
{
 id:"pengyuan-yipin", name:"彭園婚宴 壹品宴", area:"中山", phone:"(02) 2541-9102",
 website:"", tags:["湘菜婚宴"], halls:[],
 packages:[{name:"婚宴專案", price:null, unit:10, note:"需洽詢", dateType:""}],
 extras:[], minSpend:"", images:[], pdfs:[], status:"待補（需洽詢）"
},
{
 id:"pengyuan-taipei", name:"彭園婚宴會館 台北館", area:"信義", phone:"(02) 2528-8122",
 website:"", tags:["湘菜婚宴"], halls:[],
 packages:[{name:"婚宴專案", price:null, unit:10, note:"需洽詢", dateType:""}],
 extras:[], minSpend:"", images:[], pdfs:[], status:"待補（需洽詢）"
},
{
 id:"top-taipei101", name:"頂鮮台北店（101 86樓）", area:"信義", phone:"(02) 8101-8686",
 website:"", tags:["101 高樓景觀"], halls:[],
 packages:[{name:"婚宴專案", price:null, unit:10, note:"需洽詢", dateType:""}],
 extras:[], minSpend:"", images:[], pdfs:[], status:"待補（需洽詢）"
},
{
 id:"queen-cruise", name:"大河之戀皇后號", area:"關渡", phone:"(02) 2711-8887",
 website:"", tags:["遊船婚宴","關渡碼頭登船"], halls:[],
 packages:[{name:"婚宴專案", price:null, unit:10, note:"需洽詢", dateType:""}],
 extras:[], minSpend:"", images:[], pdfs:[], status:"待補（需洽詢）"
}
];
