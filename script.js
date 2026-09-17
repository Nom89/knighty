/* ============================================================
   Wool & Wild — App logic
   Sections:
     1. Data model (series catalog)
     2. State (view, current series, current part)
     3. Storage helpers (localStorage)
     4. View router
     5. Renderers (rails, catalog, series, reader, TOC)
     6. Reader tools (theme, font, progress, keyboard)
     7. Bootstrap
   ============================================================ */

(function () {
  'use strict';

  /* ---------- 1. DATA MODEL ---------- */
  // All novel text preserved from your original HTML.
  const DATA = {
    series: [
      {
        id: 'venus',
        type: 'comic',
        title: 'Venus',
        author: 'Wool & Wild Studio',
        status: 'ongoing',
        rating: 4.6,
        synopsis: 'A signal from the second planet. Three episodes of first contact, descent, and something waiting below.',
        tags: ['sci-fi', 'mystery', 'space'],
        coverEmoji: '🪐',
        chapters: [
          {
            title: 'Chapter 1',
            parts: [
              { title: 'Episode 1 – First Light', image: 'images/venus-ep1.jpg' },
              { title: 'Episode 2 – The Signal', image: 'images/venus-ep2.jpg' },
              { title: 'Episode 3 – Descent', image: 'images/venus-ep3.jpg' }
            ]
          }
        ]
      },
      {
        id: 'lily',
        type: 'comic',
        title: 'Lily',
        author: 'Wool & Wild Studio',
        status: 'ongoing',
        rating: 4.4,
        synopsis: 'Roots, bloom, and thorn. A quiet botanical fantasy in three episodes.',
        tags: ['fantasy', 'slice-of-life'],
        coverEmoji: '🌷',
        chapters: [
          {
            title: 'Chapter 1',
            parts: [
              { title: 'Episode 1 – Roots', image: 'images/lily-ep1.jpg' },
              { title: 'Episode 2 – Bloom', image: 'images/lily-ep2.jpg' },
              { title: 'Episode 3 – Thorn', image: 'images/lily-ep3.jpg' }
            ]
          }
        ]
      },
      {
        id: 'knights-of-wild',
        type: 'comic',
        title: 'Knights of Wild',
        author: 'Wool & Wild Studio',
        status: 'ongoing',
        rating: 4.7,
        synopsis: 'An oath, a trial, and a heart of the forest. Three episodes of a wild knighthood.',
        tags: ['adventure', 'fantasy'],
        coverEmoji: '⚔️',
        chapters: [
          {
            title: 'Chapter 1',
            parts: [
              { title: 'Episode 1 – The Oath', image: 'images/knights-ep1.jpg' },
              { title: 'Episode 2 – Forest Trial', image: 'images/knights-ep2.jpg' },
              { title: 'Episode 3 – Wild Heart', image: 'images/knights-ep3.jpg' }
            ]
          }
        ]
      },
      {
        id: 'oak-saung-village',
        type: 'novel',
        title: 'ဥစ္စာစောင့်တို့ရွာ',
        titleEn: 'The Village of the Guardian Spirits',
        author: 'Wool & Wild',
        status: 'completed',
        rating: 4.9,
        synopsis: 'A young man in a riverside village uncovers the buried secret his elders refuse to speak of — and the guardians who keep it.',
        tags: ['myanmar', 'folk-horror', 'mystery', 'short-novel'],
        coverEmoji: '🪷',
        chapters: [
          {
            title: 'Chapter 1',
            parts: [
              { title: 'အပိုင်း ၁ – ရွာသူရွာသား', text: `ရွာကို ချောင်းကြီးတစ်ခုက ကွေးကွေးဝိုက်ဝိုက် ဖြတ်သွားတယ်။ ချောင်းရေက ညို့ညို့နက်နက်နဲ့ တစ်ခါတလေ အောက်ကနေ တစ်ခုခု ပေါ်လာလိုက်မလားဆိုတဲ့ ခံစားချက်မျိုး ပေးတယ်။ ရွာနာမည်က သူ့အလိုလို ပေါ်လာတာ။ ဘယ်သူမှ ဘယ်တုန်းက စခေါ်လဲ မသိ။ ဥစ္စာစောင့်တို့ရွာ။

ရွာထဲမှာ အိမ်ခြေ သုံးဆယ်လောက်ပဲ ရှိတယ်။ လူတွေက လယ်ယာလုပ်တယ်။ တစ်ချို့က ချောင်းထဲမှာ ငါးဖမ်းတယ်။ ဒါပေမဲ့ ညနေစောင်းလို့ နေဝင်ချိန်ရောက်ရင် ဘယ်သူမှ ချောင်းဘက်ကို မကြည့်ရဲဘူး။ ကြည့်ရင် မကောင်းဘူးလို့ ယုံကြည်ကြတယ်။

ရွာထဲမှာ အသက်အကြီးဆုံးလူက ဦးဖိုးသား။ သူက ရွာရဲ့ သမိုင်းကို ပြောပြလေ့ရှိတယ်။ ဒါပေမဲ့ ဥစ္စာစောင့်အကြောင်း မေးရင်တော့ သူ နှုတ်ဆိတ်သွားတယ်။ မျက်လုံးတွေ ပြူးလာတယ်။ ပြီးတော့ "မမေးနဲ့" ဆိုပြီး ထသွားတယ်။

မောင်လှက အသက် ဆယ့်ခုနစ်နှစ်။ သူက ရွာသူရွာသားတွေထက် စိတ်ရဲတယ်။ ရွာရဲ့ လျှို့ဝှက်ချက်တွေကို သိချင်တယ်။ ဘာကြောင့် ညဘက်ဆို လူတွေ အိမ်တံခါး မဖွင့်ကြတာလဲ။ ဘာကြောင့် ချောင်းဘက်ကို မကြည့်ရဲကြတာလဲ။ ဘာကြောင့် ရွာကို ဥစ္စာစောင့်တို့ရွာလို့ ခေါ်တာလဲ။

သူ့အမေက သူ့ကို ညတိုင်း သတိပေးတယ်။ "ညဘက် အပြင်မထွက်နဲ့။ ချောင်းဘက်ကို မသွားနဲ့။ ဥစ္စာစောင့်တွေ နိုးနေတယ်။"

"ဥစ္စာစောင့်ဆိုတာ ဘာလဲ အမေ"

"မမေးနဲ့။ ငါပြောတာ နားထောင်။"

မောင်လှ နားမထောင်ခဲ့ဘူး။` },
              { title: 'အပိုင်း ၂ – ဥစ္စာစောင့်', text: `ရွာရဲ့ အလယ်မှာ ရေတွင်းဟောင်းကြီးတစ်ခု ရှိတယ်။ ဘယ်သူမှ ရေမခပ်ဘူး။ တွင်းပေါက်ကို သစ်သားပျဉ်တွေနဲ့ ဖုံးထားတယ်။ ကြိုးဟောင်းတွေ ချည်ထားတယ်။ ကြိုးတွေက ဆွေးနေပြီ။ ဒါပေမဲ့ ဘယ်သူမှ မဖြုတ်ရဲဘူး။

ဦးဖိုးသားတစ်ယောက်ပဲ တစ်ခါတလေ တွင်းနားကို သွားပြီး စကားပြောတယ်။ တစ်ခုခုကို ပြောသလိုပဲ။ သူ့ရဲ့ အသံက တိုးတိုးလေး။

"ငါတို့ မင်းတို့ကို မထိဘူး။ မင်းတို့လည်း ငါတို့ကို မထိပါဘူး။"

မောင်လှ တစ်ခါက ဦးဖိုးသားကို မေးဖူးတယ်။ "ဦးလေး ဘယ်သူ့ကို ပြောနေတာလဲ"

ဦးဖိုးသား လှည့်ကြည့်တယ်။ သူ့မျက်လုံးတွေက နီရဲနေတယ်။ "ငါတို့ရွာမှာ ငါတို့တစ်ခုတည်း မနေဘူးကွ။ ငါတို့အောက်မှာ တစ်ခြားဟာတွေ ရှိတယ်။ သူတို့က ငါတို့ရဲ့ ဥစ္စာကို စောင့်နေတယ်။ ငါတို့ သူတို့ကို မထိရင် သူတို့ ငါတို့ကို မထိဘူး။"

"ဥစ္စာဆိုတာ ဘာလဲ"

"ငါတို့ရွာရဲ့ အောက်မှာ ရှိတယ်။ ရတနာတွေ။ ရွှေတွေ။ ကျောက်တွေ။ အရင်တုန်းက လူတွေ မြေမြုပ်ထားတယ်။ အဲဒါကို စောင့်နေတဲ့ဟာတွေ ရှိတယ်။"

"ဘယ်သူတွေလဲ"

"မပြောတော့ဘူး။ မင်း သိရင် မင်း ပြီးပြီ။"

ဦးဖိုးသား ထသွားတယ်။ မောင်လှ တစ်ယောက် တွင်းနားမှာ ကျန်ခဲ့တယ်။ သူ တွင်းထဲကို နားထောင်ကြည့်တယ်။ ဘာမှ မကြားဘူး။ ဒါပေမဲ့ တစ်ခုခု ရှိနေတယ်လို့ သူ ခံစားရတယ်။` },
              { title: 'အပိုင်း ၃ – ညဉ့်အမှောင်', text: `အဲဒီညက လကွယ်ည။ ကောင်းကင်မှာ ကြယ်တွေ မရှိဘူး။ မောင်လှ အိပ်မပျော်ဘူး။ သူ့အမေ အိပ်နေပြီ။ သူ ထပြီး တံခါးကို ဖွင့်တယ်။ အပြင်မှာ မှောင်နေတယ်။ လေက အေးစိမ့်စိမ့်။

သူ ချောင်းဘက်ကို လျှောက်သွားတယ်။ ခြေသံက တိုးတိုး။ ရေသံက ဝေဝေးဝေး။ ချောင်းနားရောက်တော့ သူ ရပ်တယ်။ ရေက နက်တယ်။ မှောင်တယ်။ သူ ရေထဲကို ကြည့်တယ်။

ရေထဲမှာ မျက်နှာတစ်ခု ပေါ်လာတယ်။ သူ့မျက်နှာ မဟုတ်ဘူး။ တစ်ခြားဟာ။ မျက်လုံးတွေ ဖွင့်ထားတယ်။ ပါးစပ် ဖွင့်ထားတယ်။ သူ ကြောက်သွားတယ်။ နောက်ဆုတ်တယ်။ ဒါပေမဲ့ မျက်နှာက ရေထဲကနေ ပေါ်လာတယ်။ ကိုယ်ခန္တာလည်း ပေါ်လာတယ်။ လက်တွေ။ ခြေတွေ။

သူ ထပြေးတယ်။ အိမ်ကို ပြန်ပြေးတယ်။ တံခါးကို ဆွဲဖွင့်တယ်။ ဝင်တယ်။ တံခါးကို ဆွဲပိတ်တယ်။ သူ့နှလုံးခုန်သံက ကျယ်လောင်တယ်။

အဲဒီအခါ အပြင်မှာ ခြေသံတွေ ကြားရတယ်။ လျှောက်လာတဲ့ ခြေသံ။ သူ့အိမ်ရှေ့မှာ ရပ်သွားတယ်။ ပြီးတော့ တစ်ခုခုက တံခါးကို ခေါက်တယ်။ တိုးတိုး။ သုံးချက်။ ပြီးတော့ နောက်သုံးချက်။

မောင်လှ အသက်မရှူရဲဘူး။` },
              { title: 'အပိုင်း ၄ – ရတနာလမ်း', text: `မနက်ရောက်တော့ မောင်လှ အိမ်ထဲက မထွက်ရဲဘူး။ သူ့အမေက သူ့ကို ကြည့်တယ်။ "မျက်နှာက ဘာလို့ ဖြူနေတာလဲ"

"ဘာမှ မဟုတ်ဘူး"

"ညက အပြင်ထွက်လား"

"မထွက်ဘူး"

သူ့အမေ သူ့ကို စိုက်ကြည့်တယ်။ ပြီးတော့ သက်ပြင်းချတယ်။ "ငါ မင်းကို သတိပေးခဲ့တယ်။ မင်း နားမထောင်ဘူး။ အခု မင်း သူတို့ကို မြင်ပြီးပြီ။ သူတို့လည်း မင်းကို မြင်ပြီးပြီ။"

"သူတို့က ဘယ်သူတွေလဲ အမေ"

"ဥစ္စာစောင့်တွေ။ ငါတို့ရွာရဲ့ အောက်မှာ ရတနာတွေ ရှိတယ်။ အဲဒါကို စောင့်နေတဲ့ဟာတွေ။ သူတို့က ငါတို့ကို မထိဘူး။ ငါတို့ သူတို့ကို မထိရင်။ ဒါပေမဲ့ မင်း သူတို့ကို မြင်သွားပြီ။ အခု သူတို့ မင်းကို လိုက်နေပြီ။"

မောင်လှ တုန်တုန်ယင်ယင် ထထိုင်တယ်။ "ဘာလုပ်ရမလဲ"

"ဦးဖိုးသားဆီ သွား။ သူပဲ သိတယ်။"

မောင်လှ ဦးဖိုးသားအိမ်ကို သွားတယ်။ ဦးဖိုးသား တံခါးနားမှာ ထိုင်နေတယ်။ သူ့မျက်နှာက ပိန်ချုံးနေတယ်။ "မင်း သူတို့ကို မြင်ပြီးပြီလား"

"ဟုတ်"

"ငါ မင်းကို သတိပေးခဲ့တယ်။ ဒါပေမဲ့ မင်း ငါ့စကား နားမထောင်ဘူး။ အခု မင်း ရတနာလမ်းကို လျှောက်ရမယ်။"

"ရတနာလမ်းဆိုတာ ဘာလဲ"

"ငါတို့ရွာရဲ့ အောက်မှာ လမ်းတွေ ရှိတယ်။ ရတနာတွေ သိမ်းထားတဲ့ လမ်းတွေ။ ဥစ္စာစောင့်တွေ စောင့်နေတဲ့ လမ်းတွေ။ မင်း အဲဒီလမ်းကို လျှောက်ရမယ်။ သူတို့ကို ပြန်တွေ့ရမယ်။ ပြီးတော့ သူတို့ကို တောင်းပန်ရမယ်။"

"ဘယ်လိုလုပ်ရမလဲ"

"ညနေ နေဝင်ချိန်မှာ ရေတွင်းနားကို သွား။ ပျဉ်တွေ ဖြုတ်။ တွင်းထဲကို ဆင်း။ အောက်မှာ လမ်းတွေ ရှိတယ်။ မင်း လျှောက်ရမယ်။ ဘာကိုမှ မထိရဘူး။ ဘာကိုမှ မယူရဘူး။ သူတို့ကို တောင်းပန်ပြီး ပြန်တက်လာ။"

မောင်လှ ကြောက်တယ်။ ဒါပေမဲ့ တစ်ခြားလမ်း မရှိဘူး။` }
            ]
          },
          {
            title: 'Chapter 2',
            parts: [
              { title: 'အပိုင်း ၅ – လျှို့ဝှက်ချက်', text: `ညနေ နေဝင်ချိန်။ မောင်လှ ရေတွင်းနားကို ရောက်တယ်။ ပျဉ်တွေ ဖြုတ်တယ်။ တွင်းထဲကို ကြည့်တယ်။ မှောင်နေတယ်။ အနံ့တစ်ခု ရတယ်။ စိုစိုစိမ့်စိမ့်။ မြေအနံ့။ သင်္ချိုင်းအနံ့လိုပဲ။

သူ ကြိုးကို ဆွဲပြီး ဆင်းတယ်။ အောက်ရောက်တော့ မှောင်နေတယ်။ သူ့မှာ မီးအိမ်လေး ပါလာတယ်။ မီးညှိလိုက်တော့ အလင်းလေး ရတယ်။ သူ လမ်းတစ်ခုကို တွေ့တယ်။ မြေအောက်လမ်း။ ကျဉ်းတယ်။ နံရံတွေမှာ ရေးထားတဲ့ စာတွေ ရှိတယ်။ ရှေးဟောင်း စာတွေ။ သူ မဖတ်တတ်ဘူး။

သူ လျှောက်တယ်။ လမ်းက ကွေးတယ်။ ဝိုက်တယ်။ တစ်ခါတလေ ခွဲထွက်တယ်။ သူ မှတ်ထားတယ်။ ဘယ်ဘက်။ ညာဘက်။ ဘယ်ဘက်။

ရုတ်တရက် သူ တစ်ခုခုကို တွေ့တယ်။ အခန်းတစ်ခု။ ကျယ်တယ်။ အထဲမှာ သေတ္တာတွေ။ အိုးတွေ။ ရွှေတွေ။ ကျောက်တွေ။ ရတနာတွေ။ သူ့မျက်လုံးတွေ ပြူးသွားတယ်။ သူ လက်ကို ဆန့်တယ်။

ဒါပေမဲ့ ဦးဖိုးသားစကား ပြန်မှတ်မိတယ်။ "ဘာကိုမှ မထိရဘူး။"

သူ လက်ကို ပြန်ရုတ်တယ်။ ပြီးတော့ သူ ရှေ့ဆက် လျှောက်တယ်။` },
              { title: 'အပိုင်း ၆ – ရေတွင်းနက်ကြီး', text: `သူ လျှောက်ရင်း လျှောက်ရင်း တစ်နေရာကို ရောက်တယ်။ အဲဒီမှာ ရေတွင်းတစ်ခု ရှိတယ်။ မြေအောက်ရေတွင်း။ ရေက နက်တယ်။ မှောင်တယ်။ သူ ရေထဲကို ကြည့်တယ်။

ရေထဲမှာ မျက်နှာတွေ။ အများကြီး။ သူ့ကို ကြည့်နေတယ်။ မျက်လုံးတွေ။ ပါးစပ်တွေ။ လက်တွေ။ သူ ကြောက်တယ်။ ဒါပေမဲ့ သူ မထပြေးဘူး။ ဦးဖိုးသား ပြောခဲ့တယ်။ "သူတို့ကို တောင်းပန်ရမယ်။"

သူ ဒူးထောက်တယ်။ "ကျွန်တော် တောင်းပန်ပါတယ်။ ကျွန်တော် မင်းတို့ကို မထိချင်ဘူး။ ကျွန်တော် မင်းတို့ဥစ္စာကို မယူချင်ဘူး။ ကျွန်တော် ပြန်သွားချင်တယ်။"

ရေထဲက မျက်နှာတွေ ငြိမ်သွားတယ်။ ပြီးတော့ တစ်ခုခု ပေါ်လာတယ်။ လူတစ်ယောက်။ ရေထဲကနေ တက်လာတယ်။ သူ့ကို ကြည့်တယ်။

"မင်း ငါတို့ကို မြင်ပြီးပြီ။ ငါတို့လည်း မင်းကို မြင်ပြီးပြီ။ မင်း ငါတို့ကို တောင်းပန်ပြီးပြီ။ ငါတို့ မင်းကို လွှတ်မယ်။ ဒါပေမဲ့ မင်း ငါတို့အကြောင်း ဘယ်သူ့ကိုမှ မပြောရဘူး။"

"ဟုတ်ကဲ့"

"မင်း ပြန်သွား။ ဒီလမ်းကို ပြန်လျှောက်။ ဘာကိုမှ မထိနဲ့။"

မောင်လှ ပြန်လျှောက်တယ်။ သူ့နှလုံးခုန်သံ ကျယ်လောင်တယ်။ သူ ရေတွင်းရှိရာ ပြန်ရောက်တယ်။ ကြိုးကို ဆွဲပြီး တက်တယ်။ အပေါ်ရောက်တော့ ကောင်းကင်မှာ ကြယ်တွေ ပေါ်နေပြီ။ သူ အိမ်ကို ပြန်ပြေးတယ်။` },
              { title: 'အပိုင်း ၇ – မီးရောင်အောက်မှာ', text: `အိမ်ရောက်တော့ သူ့အမေ သူ့ကို စောင့်နေတယ်။ "ဘာဖြစ်လဲ"

"ဘာမှ မဟုတ်ဘူး"

"မင်း ရေတွင်းထဲ ဆင်းလား"

မောင်လှ မဖြေဘူး။ သူ့အမေ သူ့ကို ဖက်တယ်။ "မင်း အသက်ရှင်လာတာ ကံကောင်းတယ်။ ငါ မင်းကို ဆုံးမခဲ့တယ်။ နောက်တစ်ခါ မလုပ်နဲ့။"

အဲဒီည မောင်လှ အိပ်ပျော်တယ်။ ဒါပေမဲ့ သူ အိပ်မက်မက်တယ်။ အိပ်မက်ထဲမှာ သူ ရေတွင်းထဲ ပြန်ရောက်နေတယ်။ မျက်နှာတွေ သူ့ကို ကြည့်နေတယ်။ သူ နိုးတယ်။ ချွေးတွေ ရွှဲနေတယ်။

သူ ထထိုင်တယ်။ မီးအိမ်ကို ညှိတယ်။ မီးရောင်အောက်မှာ သူ့လက်ကို ကြည့်တယ်။ သူ့လက်မှာ တစ်ခုခု ရှိနေတယ်။ ရွှေစတစ်ခု။ သူ မယူခဲ့ဘူး။ ဒါပေမဲ့ သူ့လက်မှာ ရှိနေတယ်။

သူ ထိတ်လန့်သွားတယ်။ ရွှေစကို ပစ်ချင်တယ်။ ဒါပေမဲ့ မပစ်ရဲဘူး။ သူ သေတ္တာထဲမှာ ထည့်ထားလိုက်တယ်။

အဲဒီအခါ အပြင်မှာ ခြေသံတွေ ကြားရတယ်။ လျှောက်လာတဲ့ ခြေသံ။ သူ့အိမ်ရှေ့မှာ ရပ်သွားတယ်။ ပြီးတော့ တံခါးကို ခေါက်တယ်။ တိုးတိုး။ သုံးချက်။` },
              { title: 'အပိုင်း ၈ – ပြန်လည်ဆုံဆည်းခြင်း', text: `မောင်လှ တံခါးကို မဖွင့်ဘူး။ ခြေသံတွေ ပြန်လျှောက်သွားတယ်။ သူ သက်ပြင်းချတယ်။ ဒါပေမဲ့ နောက်တစ်နေ့မနက် သူ ထထွက်တော့ ရွာထဲမှာ ဘာမှ မပြောင်းလဲဘူး။ လူတွေ လယ်လုပ်တယ်။ ငါးဖမ်းတယ်။ ဒါပေမဲ့ သူ့ကို ကြည့်တဲ့ မျက်လုံးတွေ ပြောင်းသွားတယ်။

ဦးဖိုးသား သူ့ကို လှမ်းခေါ်တယ်။ "မင်း ပြန်လာပြီးပြီလား"

"ဟုတ်"

"သူတို့ မင်းကို လွှတ်ပြီးပြီလား"

"ဟုတ်"

"ဒါပေမဲ့ မင်း သူတို့ဥစ္စာ တစ်ခုခု ယူလာခဲ့တယ် မဟုတ်လား"

မောင်လှ မျက်လုံးပြူးသွားတယ်။ "ဘယ်လိုသိလဲ"

"ငါ သိတယ်။ မင်း မယူချင်ဘူး။ ဒါပေမဲ့ မင်း ယူလာခဲ့တယ်။ သူတို့ မင်းကို လွှတ်တာ မဟုတ်ဘူး။ သူတို့ မင်းကို စမ်းသပ်တာ။ မင်း ကျရှုံးတယ်။"

"ဘာလုပ်ရမလဲ"

"မင်း ရွှေစကို ပြန်ပေးရမယ်။ ဒါပေမဲ့ မင်း တစ်ယောက်တည်း ပြန်မသွားနဲ့။ ငါ လိုက်သွားမယ်။"

ညနေ နေဝင်ချိန်။ ဦးဖိုးသားနဲ့ မောင်လှ ရေတွင်းနားကို သွားတယ်။ ဦးဖိုးသား ပျဉ်တွေ ဖြုတ်တယ်။ သူတို့ ဆင်းတယ်။ လမ်းကို လျှောက်တယ်။ ရေတွင်းနက်ကြီးရှိရာ ရောက်တယ်။

ဦးဖိုးသား ရေထဲကို ကြည့်တယ်။ "ငါတို့ ပြန်လာပြီ။ ငါတို့ မင်းတို့ဥစ္စာ ယူလာခဲ့တယ်။ ပြန်ပေးမယ်။"

မောင်လှ ရွှေစကို ထုတ်တယ်။ ရေထဲကို ပစ်ချတယ်။ ရေက ငြိမ်သွားတယ်။ ပြီးတော့ မျက်နှာတွေ ပေါ်လာတယ်။ သူတို့ ပြုံးတယ်။ ပြီးတော့ ပျောက်သွားတယ်။

ဦးဖိုးသား သက်ပြင်းချတယ်။ "ကဲ ပြန်တက်ကြရအောင်။"

သူတို့ ပြန်တက်တယ်။ အပေါ်ရောက်တော့ ဦးဖိုးသား ပျဉ်တွေ ပြန်ဖုံးတယ်။ ပြီးတော့ မောင်လှကို ကြည့်တယ်။ "မင်း သိပြီးပြီ။ ငါတို့ရွာရဲ့ လျှို့ဝှက်ချက်။ ငါတို့ရွာရဲ့ ဥစ္စာစောင့်တွေ။ သူတို့က ငါတို့ကို မထိဘူး။ ငါတို့ သူတို့ကို မထိရင်။ ဒါပေမဲ့ ငါတို့ သူတို့ကို မမေ့ရဘူး။ ငါတို့ သူတို့ကို လေးစားရမယ်။"

မောင်လှ ခေါင်းညိတ်တယ်။ သူ ရွာကို ပြန်ကြည့်တယ်။ နေဝင်ချိန်။ မှောင်လာပြီ။ ဒါပေမဲ့ သူ မကြောက်တော့ဘူး။

သူ သိတယ်။ သူတို့ ရွာမှာ သူတို့တစ်ခုတည်း မနေဘူး။ သူတို့အောက်မှာ တစ်ခြားဟာတွေ ရှိတယ်။ သူတို့က ဥစ္စာကို စောင့်နေတယ်။ သူတို့က ရွာကို စောင့်နေတယ်။

ဒါက ဥစ္စာစောင့်တို့ရွာ။` }
            ]
          }
        ]
      }
    ]
  };

  /* ---------- 2. STATE ---------- */
  const state = {
    view: 'home',
    seriesId: null,
    partIndex: 0,
    filter: 'all',
    search: '',
    previousView: 'home'
  };

  /* ---------- 3. STORAGE HELPERS ---------- */
  const store = {
    get(key, fallback) {
      try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
      catch { return fallback; }
    },
    set(key, val) {
      try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
    }
  };

  const STORAGE = {
    theme: 'ww:theme',
    font: 'ww:font',
    library: 'ww:library',
    read: 'ww:read',
    lastSeries: 'ww:lastSeries',
    lastPart: 'ww:lastPart'
  };

  /* ---------- 4. VIEW ROUTER ---------- */
  const views = {
    home: document.getElementById('view-home'),
    catalog: document.getElementById('view-catalog'),
    series: document.getElementById('view-series'),
    reader: document.getElementById('view-reader')
  };

  function showView(name) {
    Object.entries(views).forEach(([k, el]) => {
      if (k === name) el.removeAttribute('hidden');
      else el.setAttribute('hidden', '');
    });
    state.view = name;
    document.getElementById('readerToolbar').hidden = name !== 'reader';
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  /* ---------- 5. RENDERERS ---------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  function seriesById(id) { return DATA.series.find(s => s.id === id); }

  function partCount(series) {
    return series.chapters.reduce((n, c) => n + c.parts.length, 0);
  }

  function makeCard(series) {
    const card = document.createElement('article');
    card.className = 'card';
    card.setAttribute('role', 'listitem');
    card.tabIndex = 0;
    card.setAttribute('aria-label', `${series.title} — ${series.type}`);
    card.innerHTML = `
      <span class="card__status ${series.status === 'ongoing' ? 'card__status--ongoing' : ''}">
        ${series.status === 'ongoing' ? 'Ongoing' : 'Completed'}
      </span>
      <div class="card__cover" aria-hidden="true">${series.coverEmoji}</div>
      <h3 class="card__title">${series.title}</h3>
      <p class="card__meta">${series.author} · ${series.type === 'comic' ? 'Comic' : 'Novel'}</p>
    `;
    const open = () => openSeries(series.id);
    card.addEventListener('click', open);
    card.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
    return card;
  }

  function renderRails() {
    const trending = $('#railTrendingTrack');
    const recent = $('#railNewTrack');
    trending.innerHTML = '';
    recent.innerHTML = '';
    // Trending: highest rated first
    [...DATA.series].sort((a, b) => b.rating - a.rating).forEach(s => trending.appendChild(makeCard(s)));
    // Recent: just reversed order (in real life: by update date)
    [...DATA.series].reverse().forEach(s => recent.appendChild(makeCard(s)));
  }

  function renderCatalog() {
    const grid = $('#catalogGrid');
    const empty = $('#catalogEmpty');
    grid.innerHTML = '';

    const q = state.search.trim().toLowerCase();
    const filtered = DATA.series.filter(s => {
      if (state.filter === 'comic' && s.type !== 'comic') return false;
      if (state.filter === 'novel' && s.type !== 'novel') return false;
      if (state.filter === 'ongoing' && s.status !== 'ongoing') return false;
      if (state.filter === 'completed' && s.status !== 'completed') return false;
      if (!q) return true;
      const hay = [s.title, s.titleEn, s.author, ...(s.tags || [])].join(' ').toLowerCase();
      return hay.includes(q);
    });

    filtered.forEach(s => grid.appendChild(makeCard(s)));
    empty.hidden = filtered.length !== 0;
  }

  function openSeries(id) {
    const s = seriesById(id);
    if (!s) return;
    state.seriesId = id;

    $('#seriesCover').textContent = s.coverEmoji;
    $('#seriesTitle').textContent = s.title + (s.titleEn ? ` · ${s.titleEn}` : '');
    $('#seriesSynopsis').textContent = s.synopsis;
    $('#seriesAuthor').textContent = s.author;
    $('#seriesType').textContent = s.type === 'comic' ? 'Comic' : 'Novel';
    $('#seriesStatus').textContent = s.status === 'ongoing' ? 'Ongoing' : 'Completed';
    $('#seriesChapters').textContent = `${s.chapters.length} chapter${s.chapters.length !== 1 ? 's' : ''} · ${partCount(s)} parts`;
    $('#seriesRating').textContent = `★ ${s.rating.toFixed(1)}`;

    const tags = $('#seriesTags');
    tags.innerHTML = '';
    (s.tags || []).forEach(t => {
      const li = document.createElement('li');
      li.textContent = `#${t}`;
      tags.appendChild(li);
    });

    // Chapters list
    const list = $('#chaptersList');
    list.innerHTML = '';
    let globalIndex = 0;
    s.chapters.forEach((ch) => {
      const groupLi = document.createElement('li');
      groupLi.className = 'chapter-group';
      groupLi.textContent = ch.title;
      list.appendChild(groupLi);

      ch.parts.forEach((p) => {
        const idx = globalIndex++;
        const li = document.createElement('li');
        li.className = 'chapter-item';
        li.innerHTML = `
          <div>
            <div class="chapter-item__title">${p.title}</div>
            <div class="chapter-item__meta">Part ${idx + 1} of ${partCount(s)}</div>
          </div>
          <button class="chapter-item__read" type="button">Read →</button>
        `;
        li.querySelector('.chapter-item__read').addEventListener('click', () => openReader(id, idx));
        list.appendChild(li);
      });
    });

    // Bookmark button state
    const lib = store.get(STORAGE.library, []);
    const btn = $('#seriesBookmarkBtn');
    const isSaved = lib.includes(id);
    btn.textContent = isSaved ? '✓ In library' : '＋ Add to library';
    btn.onclick = () => {
      const cur = store.get(STORAGE.library, []);
      const next = cur.includes(id) ? cur.filter(x => x !== id) : [...cur, id];
      store.set(STORAGE.library, next);
      btn.textContent = next.includes(id) ? '✓ In library' : '＋ Add to library';
    };

    $('#seriesStartBtn').onclick = () => openReader(id, 0);

    state.previousView = state.view === 'reader' ? 'series' : state.view;
    showView('series');
  }

  function openReader(seriesId, partIndex) {
    const s = seriesById(seriesId);
    if (!s) return;
    state.seriesId = seriesId;
    state.partIndex = Math.max(0, Math.min(partIndex, partCount(s) - 1));

    $('#readerTitle').textContent = s.title;
    $('#readerSubtitle').textContent = s.titleEn || (s.type === 'comic' ? 'Comic' : 'Novel');

    renderReader();
    showView('reader');
    updateReadingProgress();
  }

  function flatParts(series) {
    const out = [];
    series.chapters.forEach((ch, ci) => {
      ch.parts.forEach((p, pi) => {
        out.push({ ...p, chapterTitle: ch.title, chapterIndex: ci, partInChapter: pi });
      });
    });
    return out;
  }

  function renderReader() {
    const s = seriesById(state.seriesId);
    if (!s) return;
    const parts = flatParts(s);
    const total = parts.length;
    const i = state.partIndex;

    $('#readerProgressLabel').textContent = `Part ${i + 1} / ${total}`;

    // TOC
    const tocList = $('#readerTocList');
    tocList.innerHTML = '';
    let currentChapter = null;
    parts.forEach((p, idx) => {
      if (p.chapterTitle !== currentChapter) {
        currentChapter = p.chapterTitle;
        const chLi = document.createElement('li');
        chLi.className = 'toc__chapter';
        chLi.textContent = p.chapterTitle;
        tocList.appendChild(chLi);
      }
      const li = document.createElement('li');
      li.className = 'toc__item';
      const a = document.createElement('a');
      a.href = '#';
      a.textContent = p.title;
      a.addEventListener('click', (e) => {
        e.preventDefault();
        state.partIndex = idx;
        renderReader();
        document.getElementById('readerToc').open = false;
      });
      li.appendChild(a);
      tocList.appendChild(li);
    });

    // Body: render only the current part for comic, or all parts for novel
    const body = $('#readerBody');
    body.innerHTML = '';

    if (s.type === 'comic') {
      const p = parts[i];
      const article = document.createElement('article');
      article.className = 'part';
      article.id = `part-${i + 1}`;
      article.innerHTML = `
        <h2 class="part__title">${p.title}</h2>
        <div class="comic-page">
          <img src="${p.image}" alt="${s.title} — ${p.title}" loading="lazy" />
        </div>
      `;
      body.appendChild(article);
    } else {
      // Novel: render the whole series as stacked parts (matches your original single-page reading flow)
      parts.forEach((p, idx) => {
        const article = document.createElement('article');
        article.className = 'part';
        article.id = `part-${idx + 1}`;
        article.dataset.partNumber = idx + 1;
        article.innerHTML = `
          <h2 class="part__title">${p.title}</h2>
          <p class="part__text"></p>
          <nav class="part__nav" aria-label="Part navigation">
            <button class="btn btn--ghost" type="button" data-prev ${idx === 0 ? 'disabled' : ''}>← Previous</button>
            <span class="part__nav-label">Part ${idx + 1} of ${total}</span>
            <button class="btn btn--ghost" type="button" data-next ${idx === total - 1 ? 'disabled' : ''}>Next →</button>
          </nav>
        `;
        // Safely set text (preserves newlines via white-space: pre-line)
        article.querySelector('.part__text').textContent = p.text;
        article.querySelectorAll('[data-prev]').forEach(b => b.addEventListener('click', () => {
          state.partIndex = idx - 1;
          renderReader();
          scrollToPart(state.partIndex);
        }));
        article.querySelectorAll('[data-next]').forEach(b => b.addEventListener('click', () => {
          state.partIndex = idx + 1;
          renderReader();
          scrollToPart(state.partIndex);
        }));
        body.appendChild(article);
      });
      // Scroll to current part after render
      requestAnimationFrame(() => scrollToPart(state.partIndex));
    }

    // Reader footer buttons
    $('#readerPrev').disabled = i === 0;
    $('#readerNext').disabled = i === total - 1;
    $('#readerPrev').onclick = () => {
      state.partIndex = i - 1;
      renderReader();
      if (s.type === 'novel') scrollToPart(state.partIndex);
      else window.scrollTo({ top: 0 });
    };
    $('#readerNext').onclick = () => {
      state.partIndex = i + 1;
      renderReader();
      if (s.type === 'novel') scrollToPart(state.partIndex);
      else window.scrollTo({ top: 0 });
    };

    // Save last position
    store.set(STORAGE.lastSeries, state.seriesId);
    store.set(STORAGE.lastPart, state.partIndex);
  }

  function scrollToPart(index) {
    const el = document.getElementById(`part-${index + 1}`);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - (parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 72) - 20;
    window.scrollTo({ top: y, behavior: 'smooth' });
    el.classList.add('is-highlight');
    setTimeout(() => el.classList.remove('is-highlight'), 1500);
  }

  /* ---------- 6. READER TOOLS ---------- */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    $('#themeToggle').textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  function applyFont(scale) {
    document.documentElement.style.setProperty('--reader-font-scale', scale + '%');
  }

  let currentFont = store.get(STORAGE.font, 100);
  applyFont(currentFont);
  applyTheme(store.get(STORAGE.theme, 'light'));

  $('#themeToggle').addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(cur);
    store.set(STORAGE.theme, cur);
  });

  $('#fontUp').addEventListener('click', () => {
    currentFont = Math.min(140, currentFont + 10);
    applyFont(currentFont);
    store.set(STORAGE.font, currentFont);
  });
  $('#fontDown').addEventListener('click', () => {
    currentFont = Math.max(80, currentFont - 10);
    applyFont(currentFont);
    store.set(STORAGE.font, currentFont);
  });
  $('#backTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Reading progress
  function updateReadingProgress() {
    const fill = $('#readingProgressFill');
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    fill.style.width = pct + '%';
  }
  window.addEventListener('scroll', updateReadingProgress, { passive: true });
  window.addEventListener('resize', updateReadingProgress);

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (state.view !== 'reader') return;
    const tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea') return;
    if (e.key === 'j' || e.key === 'ArrowRight') { if (!$('#readerNext').disabled) $('#readerNext').click(); }
    else if (e.key === 'k' || e.key === 'ArrowLeft') { if (!$('#readerPrev').disabled) $('#readerPrev').click(); }
    else if (e.key.toLowerCase() === 't') $('#themeToggle').click();
    else if (e.key === 'Escape') back();
  });

  /* ---------- 7. BOOTSTRAP ---------- */
  function back() {
    if (state.view === 'reader') {
      openSeries(state.seriesId);
    } else if (state.view === 'series') {
      showView(state.previousView === 'series' ? 'catalog' : state.previousView);
    } else {
      showView('home');
    }
  }

  // Nav
  function navigate(name) {
    if (name === 'home') { showView('home'); return; }
    if (name === 'comics') { state.filter = 'comic'; syncChips(); showView('catalog'); renderCatalog(); return; }
    if (name === 'novels') { state.filter = 'novel'; syncChips(); showView('catalog'); renderCatalog(); return; }
    if (name === 'library') {
      // For simplicity, treat library as catalog filtered by saved items
      const lib = store.get(STORAGE.library, []);
      state.filter = 'all';
      syncChips();
      showView('catalog');
      renderCatalog();
      if (lib.length === 0) {
        $('#catalogEmpty').hidden = false;
        $('#catalogEmpty').textContent = 'Your library is empty. Tap "Add to library" on any series.';
        $('#catalogGrid').innerHTML = '';
      } else {
        $('#catalogGrid').innerHTML = '';
        lib.map(seriesById).filter(Boolean).forEach(s => $('#catalogGrid').appendChild(makeCard(s)));
        $('#catalogEmpty').hidden = true;
      }
      return;
    }
    if (name === 'back') { back(); return; }
  }

  document.querySelectorAll('[data-nav]').forEach(btn => {
    btn.addEventListener('click', () => navigate(btn.dataset.nav));
  });

  // Filter chips
  function syncChips() {
    $$('.chip').forEach(c => c.classList.toggle('is-active', c.dataset.filter === state.filter));
  }
  $$('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      state.filter = chip.dataset.filter;
      syncChips();
      renderCatalog();
    });
  });

  // Search
  const searchInput = $('#searchInput');
  let searchTimer = null;
  searchInput.addEventListener('input', () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      state.search = searchInput.value;
      if (state.view !== 'catalog') {
        state.filter = 'all';
        syncChips();
        showView('catalog');
      }
      renderCatalog();
    }, 150);
  });

  // Year in footer
  $('#year').textContent = new Date().getFullYear();

  // Initial renders
  renderRails();
  renderCatalog();
  showView('home');
})();