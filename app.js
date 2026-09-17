(function () {
  'use strict';

  /* ============================================================
     1. DATA MODEL
     ============================================================ */
  var DATA = {
    series: [
      {
        id: 'venus', type: 'comic', title: 'Venus',
        author: 'Wool & Wild Studio', status: 'ongoing', rating: 4.6,
        synopsis: 'A signal from the second planet. Three episodes of first contact, descent, and something waiting below.',
        tags: ['sci-fi', 'mystery', 'space'], coverEmoji: '🪐',
        chapters: [{
          title: 'Chapter 1',
          parts: [
            { title: 'Episode 1 – First Light', image: 'images/venus-ep1.jpg' },
            { title: 'Episode 2 – The Signal', image: 'images/venus-ep2.jpg' },
            { title: 'Episode 3 – Descent', image: 'images/venus-ep3.jpg' }
          ]
        }]
      },
      {
        id: 'lily', type: 'comic', title: 'Lily',
        author: 'Wool & Wild Studio', status: 'ongoing', rating: 4.4,
        synopsis: 'Roots, bloom, and thorn. A quiet botanical fantasy in three episodes.',
        tags: ['fantasy', 'slice-of-life'], coverEmoji: '🌷',
        chapters: [{
          title: 'Chapter 1',
          parts: [
            { title: 'Episode 1 – Roots', image: 'images/lily-ep1.jpg' },
            { title: 'Episode 2 – Bloom', image: 'images/lily-ep2.jpg' },
            { title: 'Episode 3 – Thorn', image: 'images/lily-ep3.jpg' }
          ]
        }]
      },
      {
        id: 'knights-of-wild', type: 'comic', title: 'Knights of Wild',
        author: 'Wool & Wild Studio', status: 'ongoing', rating: 4.7,
        synopsis: 'An oath, a trial, and a heart of the forest. Three episodes of a wild knighthood.',
        tags: ['adventure', 'fantasy'], coverEmoji: '⚔️',
        chapters: [{
          title: 'Chapter 1',
          parts: [
            { title: 'Episode 1 – The Oath', image: 'images/knights-ep1.jpg' },
            { title: 'Episode 2 – Forest Trial', image: 'images/knights-ep2.jpg' },
            { title: 'Episode 3 – Wild Heart', image: 'images/knights-ep3.jpg' }
          ]
        }]
      },
      {
        id: 'oak-saung-village', type: 'novel',
        title: 'ဥစ္စာစောင့်တို့ရွာ',
        titleEn: 'The Village of the Guardian Spirits',
        author: 'Wool & Wild', status: 'completed', rating: 4.9,
        synopsis: 'A young man in a riverside village uncovers the buried secret his elders refuse to speak of — and the guardians who keep it.',
        tags: ['myanmar', 'folk-horror', 'mystery', 'short-novel'],
        coverEmoji: '🪷',
        chapters: [
          { title: 'Chapter 1', parts: [
            { title: 'အပိုင်း ၁ – ရွာသူရွာသား', text: 'ရွာကို ချောင်းကြီးတစ်ခုက ကွေးကွေးဝိုက်ဝိုက် ဖြတ်သွားတယ်။ ချောင်းရေက ညို့ညို့နက်နက်နဲ့ တစ်ခါတလေ အောက်ကနေ တစ်ခုခု ပေါ်လာလိုက်မလားဆိုတဲ့ ခံစားချက်မျိုး ပေးတယ်။ ရွာနာမည်က သူ့အလိုလို ပေါ်လာတာ။ ဘယ်သူမှ ဘယ်တုန်းက စခေါ်လဲ မသိ။ ဥစ္စာစောင့်တို့ရွာ။\n\nရွာထဲမှာ အိမ်ခြေ သုံးဆယ်လောက်ပဲ ရှိတယ်။ လူတွေက လယ်ယာလုပ်တယ်။ တစ်ချို့က ချောင်းထဲမှာ ငါးဖမ်းတယ်။ ဒါပေမဲ့ ညနေစောင်းလို့ နေဝင်ချိန်ရောက်ရင် ဘယ်သူမှ ချောင်းဘက်ကို မကြည့်ရဲဘူး။ ကြည့်ရင် မကောင်းဘူးလို့ ယုံကြည်ကြတယ်။\n\nရွာထဲမှာ အသက်အကြီးဆုံးလူက ဦးဖိုးသား။ သူက ရွာရဲ့ သမိုင်းကို ပြောပြလေ့ရှိတယ်။ ဒါပေမဲ့ ဥစ္စာစောင့်အကြောင်း မေးရင်တော့ သူ နှုတ်ဆိတ်သွားတယ်။ မျက်လုံးတွေ ပြူးလာတယ်။ ပြီးတော့ "မမေးနဲ့" ဆိုပြီး ထသွားတယ်။\n\nမောင်လှက အသက် ဆယ့်ခုနစ်နှစ်။ သူက ရွာသူရွာသားတွေထက် စိတ်ရဲတယ်။ ရွာရဲ့ လျှို့ဝှက်ချက်တွေကို သိချင်တယ်။ ဘာကြောင့် ညဘက်ဆို လူတွေ အိမ်တံခါး မဖွင့်ကြတာလဲ။ ဘာကြောင့် ချောင်းဘက်ကို မကြည့်ရဲကြတာလဲ။ ဘာကြောင့် ရွာကို ဥစ္စာစောင့်တို့ရွာလို့ ခေါ်တာလဲ။\n\nသူ့အမေက သူ့ကို ညတိုင်း သတိပေးတယ်။ "ညဘက် အပြင်မထွက်နဲ့။ ချောင်းဘက်ကို မသွားနဲ့။ ဥစ္စာစောင့်တွေ နိုးနေတယ်။"\n\n"ဥစ္စာစောင့်ဆိုတာ ဘာလဲ အမေ"\n\n"မမေးနဲ့။ ငါပြောတာ နားထောင်။"\n\nမောင်လှ နားမထောင်ခဲ့ဘူး။' },
            { title: 'အပိုင်း ၂ – ဥစ္စာစောင့်', text: 'ရွာရဲ့ အလယ်မှာ ရေတွင်းဟောင်းကြီးတစ်ခု ရှိတယ်။ ဘယ်သူမှ ရေမခပ်ဘူး။ တွင်းပေါက်ကို သစ်သားပျဉ်တွေနဲ့ ဖုံးထားတယ်။ ကြိုးဟောင်းတွေ ချည်ထားတယ်။ ကြိုးတွေက ဆွေးနေပြီ။ ဒါပေမဲ့ ဘယ်သူမှ မဖြုတ်ရဲဘူး။\n\nဦးဖိုးသားတစ်ယောက်ပဲ တစ်ခါတလေ တွင်းနားကို သွားပြီး စကားပြောတယ်။ တစ်ခုခုကို ပြောသလိုပဲ။ သူ့ရဲ့ အသံက တိုးတိုးလေး။\n\n"ငါတို့ မင်းတို့ကို မထိဘူး။ မင်းတို့လည်း ငါတို့ကို မထိပါဘူး။"\n\nမောင်လှ တစ်ခါက ဦးဖိုးသားကို မေးဖူးတယ်။ "ဦးလေး ဘယ်သူ့ကို ပြောနေတာလဲ"\n\nဦးဖိုးသား လှည့်ကြည့်တယ်။ သူ့မျက်လုံးတွေက နီရဲနေတယ်။ "ငါတို့ရွာမှာ ငါတို့တစ်ခုတည်း မနေဘူးကွ။ ငါတို့အောက်မှာ တစ်ခြားဟာတွေ ရှိတယ်။ သူတို့က ငါတို့ရဲ့ ဥစ္စာကို စောင့်နေတယ်။ ငါတို့ သူတို့ကို မထိရင် သူတို့ ငါတို့ကို မထိဘူး။"\n\n"ဥစ္စာဆိုတာ ဘာလဲ"\n\n"ငါတို့ရွာရဲ့ အောက်မှာ ရှိတယ်။ ရတနာတွေ။ ရွှေတွေ။ ကျောက်တွေ။ အရင်တုန်းက လူတွေ မြေမြုပ်ထားတယ်။ အဲဒါကို စောင့်နေတဲ့ဟာတွေ ရှိတယ်။"\n\n"ဘယ်သူတွေလဲ"\n\n"မပြောတော့ဘူး။ မင်း သိရင် မင်း ပြီးပြီ။"\n\nဦးဖိုးသား ထသွားတယ်။ မောင်လှ တစ်ယောက် တွင်းနားမှာ ကျန်ခဲ့တယ်။ သူ တွင်းထဲကို နားထောင်ကြည့်တယ်။ ဘာမှ မကြားဘူး။ ဒါပေမဲ့ တစ်ခုခု ရှိနေတယ်လို့ သူ ခံစားရတယ်။' },
            { title: 'အပိုင်း ၃ – ညဉ့်အမှောင်', text: 'အဲဒီညက လကွယ်ည။ ကောင်းကင်မှာ ကြယ်တွေ မရှိဘူး။ မောင်လှ အိပ်မပျော်ဘူး။ သူ့အမေ အိပ်နေပြီ။ သူ ထပြီး တံခါးကို ဖွင့်တယ်။ အပြင်မှာ မှောင်နေတယ်။ လေက အေးစိမ့်စိမ့်။\n\nသူ ချောင်းဘက်ကို လျှောက်သွားတယ်။ ခြေသံက တိုးတိုး။ ရေသံက ဝေဝေးဝေး။ ချောင်းနားရောက်တော့ သူ ရပ်တယ်။ ရေက နက်တယ်။ မှောင်တယ်။ သူ ရေထဲကို ကြည့်တယ်။\n\nရေထဲမှာ မျက်နှာတစ်ခု ပေါ်လာတယ်။ သူ့မျက်နှာ မဟုတ်ဘူး။ တစ်ခြားဟာ။ မျက်လုံးတွေ ဖွင့်ထားတယ်။ ပါးစပ် ဖွင့်ထားတယ်။ သူ ကြောက်သွားတယ်။ နောက်ဆုတ်တယ်။ ဒါပေမဲ့ မျက်နှာက ရေထဲကနေ ပေါ်လာတယ်။ ကိုယ်ခန္တာလည်း ပေါ်လာတယ်။ လက်တွေ။ ခြေတွေ။\n\nသူ ထပြေးတယ်။ အိမ်ကို ပြန်ပြေးတယ်။ တံခါးကို ဆွဲဖွင့်တယ်။ ဝင်တယ်။ တံခါးကို ဆွဲပိတ်တယ်။ သူ့နှလုံးခုန်သံက ကျယ်လောင်တယ်။\n\nအဲဒီအခါ အပြင်မှာ ခြေသံတွေ ကြားရတယ်။ လျှောက်လာတဲ့ ခြေသံ။ သူ့အိမ်ရှေ့မှာ ရပ်သွားတယ်။ ပြီးတော့ တစ်ခုခုက တံခါးကို ခေါက်တယ်။ တိုးတိုး။ သုံးချက်။ ပြီးတော့ နောက်သုံးချက်။\n\nမောင်လှ အသက်မရှူရဲဘူး။' },
            { title: 'အပိုင်း ၄ – ရတနာလမ်း', text: 'မနက်ရောက်တော့ မောင်လှ အိမ်ထဲက မထွက်ရဲဘူး။ သူ့အမေက သူ့ကို ကြည့်တယ်။ "မျက်နှာက ဘာလို့ ဖြူနေတာလဲ"\n\n"ဘာမှ မဟုတ်ဘူး"\n\n"ညက အပြင်ထွက်လား"\n\n"မထွက်ဘူး"\n\nသူ့အမေ သူ့ကို စိုက်ကြည့်တယ်။ ပြီးတော့ သက်ပြင်းချတယ်။ "ငါ မင်းကို သတိပေးခဲ့တယ်။ မင်း နားမထောင်ဘူး။ အခု မင်း သူတို့ကို မြင်ပြီးပြီ။ သူတို့လည်း မင်းကို မြင်ပြီးပြီ။"\n\n"သူတို့က ဘယ်သူတွေလဲ အမေ"\n\n"ဥစ္စာစောင့်တွေ။ ငါတို့ရွာရဲ့ အောက်မှာ ရတနာတွေ ရှိတယ်။ အဲဒါကို စောင့်နေတဲ့ဟာတွေ။ သူတို့က ငါတို့ကို မထိဘူး။ ငါတို့ သူတို့ကို မထိရင်။ ဒါပေမဲ့ မင်း သူတို့ကို မြင်သွားပြီ။ အခု သူတို့ မင်းကို လိုက်နေပြီ။"\n\nမောင်လှ တုန်တုန်ယင်ယင် ထထိုင်တယ်။ "ဘာလုပ်ရမလဲ"\n\n"ဦးဖိုးသားဆီ သွား။ သူပဲ သိတယ်။"\n\nမောင်လှ ဦးဖိုးသားအိမ်ကို သွားတယ်။ ဦးဖိုးသား တံခါးနားမှာ ထိုင်နေတယ်။ သူ့မျက်နှာက ပိန်ချုံးနေတယ်။ "မင်း သူတို့ကို မြင်ပြီးပြီလား"\n\n"ဟုတ်"\n\n"ငါ မင်းကို သတိပေးခဲ့တယ်။ ဒါပေမဲ့ မင်း ငါ့စကား နားမထောင်ဘူး။ အခု မင်း ရတနာလမ်းကို လျှောက်ရမယ်။"\n\n"ရတနာလမ်းဆိုတာ ဘာလဲ"\n\n"ငါတို့ရွာရဲ့ အောက်မှာ လမ်းတွေ ရှိတယ်။ ရတနာတွေ သိမ်းထားတဲ့ လမ်းတွေ။ ဥစ္စာစောင့်တွေ စောင့်နေတဲ့ လမ်းတွေ။ မင်း အဲဒီလမ်းကို လျှောက်ရမယ်။ သူတို့ကို ပြန်တွေ့ရမယ်။ ပြီးတော့ သူတို့ကို တောင်းပန်ရမယ်။"\n\n"ဘယ်လိုလုပ်ရမလဲ"\n\n"ညနေ နေဝင်ချိန်မှာ ရေတွင်းနားကို သွား။ ပျဉ်တွေ ဖြုတ်။ တွင်းထဲကို ဆင်း။ အောက်မှာ လမ်းတွေ ရှိတယ်။ မင်း လျှောက်ရမယ်။ ဘာကိုမှ မထိရဘူး။ ဘာကိုမှ မယူရဘူး။ သူတို့ကို တောင်းပန်ပြီး ပြန်တက်လာ။"\n\nမောင်လှ ကြောက်တယ်။ ဒါပေမဲ့ တစ်ခြားလမ်း မရှိဘူး။' }
          ]},
          { title: 'Chapter 2', parts: [
            { title: 'အပိုင်း ၅ – လျှို့ဝှက်ချက်', text: 'ညနေ နေဝင်ချိန်။ မောင်လှ ရေတွင်းနားကို ရောက်တယ်။ ပျဉ်တွေ ဖြုတ်တယ်။ တွင်းထဲကို ကြည့်တယ်။ မှောင်နေတယ်။ အနံ့တစ်ခု ရတယ်။ စိုစိုစိမ့်စိမ့်။ မြေအနံ့။ သင်္ချိုင်းအနံ့လိုပဲ။\n\nသူ ကြိုးကို ဆွဲပြီး ဆင်းတယ်။ အောက်ရောက်တော့ မှောင်နေတယ်။ သူ့မှာ မီးအိမ်လေး ပါလာတယ်။ မီးညှိလိုက်တော့ အလင်းလေး ရတယ်။ သူ လမ်းတစ်ခုကို တွေ့တယ်။ မြေအောက်လမ်း။ ကျဉ်းတယ်။ နံရံတွေမှာ ရေးထားတဲ့ စာတွေ ရှိတယ်။ ရှေးဟောင်း စာတွေ။ သူ မဖတ်တတ်ဘူး။\n\nသူ လျှောက်တယ်။ လမ်းက ကွေးတယ်။ ဝိုက်တယ်။ တစ်ခါတလေ ခွဲထွက်တယ်။ သူ မှတ်ထားတယ်။ ဘယ်ဘက်။ ညာဘက်။ ဘယ်ဘက်။\n\nရုတ်တရက် သူ တစ်ခုခုကို တွေ့တယ်။ အခန်းတစ်ခု။ ကျယ်တယ်။ အထဲမှာ သေတ္တာတွေ။ အိုးတွေ။ ရွှေတွေ။ ကျောက်တွေ။ ရတနာတွေ။ သူ့မျက်လုံးတွေ ပြူးသွားတယ်။ သူ လက်ကို ဆန့်တယ်။\n\nဒါပေမဲ့ ဦးဖိုးသားစကား ပြန်မှတ်မိတယ်။ "ဘာကိုမှ မထိရဘူး။"\n\nသူ လက်ကို ပြန်ရုတ်တယ်။ ပြီးတော့ သူ ရှေ့ဆက် လျှောက်တယ်။' },
            { title: 'အပိုင်း ၆ – ရေတွင်းနက်ကြီး', text: 'သူ လျှောက်ရင်း လျှောက်ရင်း တစ်နေရာကို ရောက်တယ်။ အဲဒီမှာ ရေတွင်းတစ်ခု ရှိတယ်။ မြေအောက်ရေတွင်း။ ရေက နက်တယ်။ မှောင်တယ်။ သူ ရေထဲကို ကြည့်တယ်။\n\nရေထဲမှာ မျက်နှာတွေ။ အများကြီး။ သူ့ကို ကြည့်နေတယ်။ မျက်လုံးတွေ။ ပါးစပ်တွေ။ လက်တွေ။ သူ ကြောက်တယ်။ ဒါပေမဲ့ သူ မထပြေးဘူး။ ဦးဖိုးသား ပြောခဲ့တယ်။ "သူတို့ကို တောင်းပန်ရမယ်။"\n\nသူ ဒူးထောက်တယ်။ "ကျွန်တော် တောင်းပန်ပါတယ်။ ကျွန်တော် မင်းတို့ကို မထိချင်ဘူး။ ကျွန်တော် မင်းတို့ဥစ္စာကို မယူချင်ဘူး။ ကျွန်တော် ပြန်သွားချင်တယ်။"\n\nရေထဲက မျက်နှာတွေ ငြိမ်သွားတယ်။ ပြီးတော့ တစ်ခုခု ပေါ်လာတယ်။ လူတစ်ယောက်။ ရေထဲကနေ တက်လာတယ်။ သူ့ကို ကြည့်တယ်။\n\n"မင်း ငါတို့ကို မြင်ပြီးပြီ။ ငါတို့လည်း မင်းကို မြင်ပြီးပြီ။ မင်း ငါတို့ကို တောင်းပန်ပြီးပြီ။ ငါတို့ မင်းကို လွှတ်မယ်။ ဒါပေမဲ့ မင်း ငါတို့အကြောင်း ဘယ်သူ့ကိုမှ မပြောရဘူး။"\n\n"ဟုတ်ကဲ့"\n\n"မင်း ပြန်သွား။ ဒီလမ်းကို ပြန်လျှောက်။ ဘာကိုမှ မထိနဲ့။"\n\nမောင်လှ ပြန်လျှောက်တယ်။ သူ့နှလုံးခုန်သံ ကျယ်လောင်တယ်။ သူ ရေတွင်းရှိရာ ပြန်ရောက်တယ်။ ကြိုးကို ဆွဲပြီး တက်တယ်။ အပေါ်ရောက်တော့ ကောင်းကင်မှာ ကြယ်တွေ ပေါ်နေပြီ။ သူ အိမ်ကို ပြန်ပြေးတယ်။' },
            { title: 'အပိုင်း ၇ – မီးရောင်အောက်မှာ', text: 'အိမ်ရောက်တော့ သူ့အမေ သူ့ကို စောင့်နေတယ်။ "ဘာဖြစ်လဲ"\n\n"ဘာမှ မဟုတ်ဘူး"\n\n"မင်း ရေတွင်းထဲ ဆင်းလား"\n\nမောင်လှ မဖြေဘူး။ သူ့အမေ သူ့ကို ဖက်တယ်။ "မင်း အသက်ရှင်လာတာ ကံကောင်းတယ်။ ငါ မင်းကို ဆုံးမခဲ့တယ်။ နောက်တစ်ခါ မလုပ်နဲ့။"\n\nအဲဒီည မောင်လှ အိပ်ပျော်တယ်။ ဒါပေမဲ့ သူ အိပ်မက်မက်တယ်။ အိပ်မက်ထဲမှာ သူ ရေတွင်းထဲ ပြန်ရောက်နေတယ်။ မျက်နှာတွေ သူ့ကို ကြည့်နေတယ်။ သူ နိုးတယ်။ ချွေးတွေ ရွှဲနေတယ်။\n\nသူ ထထိုင်တယ်။ မီးအိမ်ကို ညှိတယ်။ မီးရောင်အောက်မှာ သူ့လက်ကို ကြည့်တယ်။ သူ့လက်မှာ တစ်ခုခု ရှိနေတယ်။ ရွှေစတစ်ခု။ သူ မယူခဲ့ဘူး။ ဒါပေမဲ့ သူ့လက်မှာ ရှိနေတယ်။\n\nသူ ထိတ်လန့်သွားတယ်။ ရွှေစကို ပစ်ချင်တယ်။ ဒါပေမဲ့ မပစ်ရဲဘူး။ သူ သေတ္တာထဲမှာ ထည့်ထားလိုက်တယ်။\n\nအဲဒီအခါ အပြင်မှာ ခြေသံတွေ ကြားရတယ်။ လျှောက်လာတဲ့ ခြေသံ။ သူ့အိမ်ရှေ့မှာ ရပ်သွားတယ်။ ပြီးတော့ တံခါးကို ခေါက်တယ်။ တိုးတိုး။ သုံးချက်။' },
            { title: 'အပိုင်း ၈ – ပြန်လည်ဆုံဆည်းခြင်း', text: 'မောင်လှ တံခါးကို မဖွင့်ဘူး။ ခြေသံတွေ ပြန်လျှောက်သွားတယ်။ သူ သက်ပြင်းချတယ်။ ဒါပေမဲ့ နောက်တစ်နေ့မနက် သူ ထထွက်တော့ ရွာထဲမှာ ဘာမှ မပြောင်းလဲဘူး။ လူတွေ လယ်လုပ်တယ်။ ငါးဖမ်းတယ်။ ဒါပေမဲ့ သူ့ကို ကြည့်တဲ့ မျက်လုံးတွေ ပြောင်းသွားတယ်။\n\nဦးဖိုးသား သူ့ကို လှမ်းခေါ်တယ်။ "မင်း ပြန်လာပြီးပြီလား"\n\n"ဟုတ်"\n\n"သူတို့ မင်းကို လွှတ်ပြီးပြီလား"\n\n"ဟုတ်"\n\n"ဒါပေမဲ့ မင်း သူတို့ဥစ္စာ တစ်ခုခု ယူလာခဲ့တယ် မဟုတ်လား"\n\nမောင်လှ မျက်လုံးပြူးသွားတယ်။ "ဘယ်လိုသိလဲ"\n\n"ငါ သိတယ်။ မင်း မယူချင်ဘူး။ ဒါပေမဲ့ မင်း ယူလာခဲ့တယ်။ သူတို့ မင်းကို လွှတ်တာ မဟုတ်ဘူး။ သူတို့ မင်းကို စမ်းသပ်တာ။ မင်း ကျရှုံးတယ်။"\n\n"ဘာလုပ်ရမလဲ"\n\n"မင်း ရွှေစကို ပြန်ပေးရမယ်။ ဒါပေမဲ့ မင်း တစ်ယောက်တည်း ပြန်မသွားနဲ့။ ငါ လိုက်သွားမယ်။"\n\nညနေ နေဝင်ချိန်။ ဦးဖိုးသားနဲ့ မောင်လှ ရေတွင်းနားကို သွားတယ်။ ဦးဖိုးသား ပျဉ်တွေ ဖြုတ်တယ်။ သူတို့ ဆင်းတယ်။ လမ်းကို လျှောက်တယ်။ ရေတွင်းနက်ကြီးရှိရာ ရောက်တယ်။\n\nဦးဖိုးသား ရေထဲကို ကြည့်တယ်။ "ငါတို့ ပြန်လာပြီ။ ငါတို့ မင်းတို့ဥစ္စာ ယူလာခဲ့တယ်။ ပြန်ပေးမယ်။"\n\nမောင်လှ ရွှေစကို ထုတ်တယ်။ ရေထဲကို ပစ်ချတယ်။ ရေက ငြိမ်သွားတယ်။ ပြီးတော့ မျက်နှာတွေ ပေါ်လာတယ်။ သူတို့ ပြုံးတယ်။ ပြီးတော့ ပျောက်သွားတယ်။\n\nဦးဖိုးသား သက်ပြင်းချတယ်။ "ကဲ ပြန်တက်ကြရအောင်။"\n\nသူတို့ ပြန်တက်တယ်။ အပေါ်ရောက်တော့ ဦးဖိုးသား ပျဉ်တွေ ပြန်ဖုံးတယ်။ ပြီးတော့ မောင်လှကို ကြည့်တယ်။ "မင်း သိပြီးပြီ။ ငါတို့ရွာရဲ့ လျှို့ဝှက်ချက်။ ငါတို့ရွာရဲ့ ဥစ္စာစောင့်တွေ။ သူတို့က ငါတို့ကို မထိဘူး။ ငါတို့ သူတို့ကို မထိရင်။ ဒါပေမဲ့ ငါတို့ သူတို့ကို မမေ့ရဘူး။ ငါတို့ သူတို့ကို လေးစားရမယ်။"\n\nမောင်လှ ခေါင်းညိတ်တယ်။ သူ ရွာကို ပြန်ကြည့်တယ်။ နေဝင်ချိန်။ မှောင်လာပြီ။ ဒါပေမဲ့ သူ မကြောက်တော့ဘူး။\n\nသူ သိတယ်။ သူတို့ ရွာမှာ သူတို့တစ်ခုတည်း မနေဘူး။ သူတို့အောက်မှာ တစ်ခြားဟာတွေ ရှိတယ်။ သူတို့က ဥစ္စာကို စောင့်နေတယ်။ သူတို့က ရွာကို စောင့်နေတယ်။\n\nဒါက ဥစ္စာစောင့်တို့ရွာ။' }
          ]}
        ]
      }
    ]
  };

  /* ============================================================
     2. STATE
     ============================================================ */
  var state = {
    view: 'home',
    seriesId: null,
    partIndex: 0,
    filter: 'all',
    search: '',
    previousView: 'home'
  };

  var STORAGE = {
    theme: 'ww:theme',
    font: 'ww:font',
    library: 'ww:library',
    read: 'ww:read',
    lastSeries: 'ww:lastSeries',
    lastPart: 'ww:lastPart'
  };

  /* ============================================================
     3. STORAGE HELPERS
     ============================================================ */
  function storeGet(key, fallback) {
    try {
      var v = localStorage.getItem(key);
      return v ? JSON.parse(v) : fallback;
    } catch (e) { return fallback; }
  }
  function storeSet(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
  }

  /* ============================================================
     4. HELPERS
     ============================================================ */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function seriesById(id) {
    for (var i = 0; i < DATA.series.length; i++) {
      if (DATA.series[i].id === id) return DATA.series[i];
    }
    return null;
  }
  function partCount(series) {
    var n = 0;
    series.chapters.forEach(function (c) { n += c.parts.length; });
    return n;
  }
  function flatParts(series) {
    var out = [];
    series.chapters.forEach(function (ch) {
      ch.parts.forEach(function (p) {
        out.push({
          title: p.title, text: p.text, image: p.image,
          chapterTitle: ch.title
        });
      });
    });
    return out;
  }

  /* ============================================================
     5. VIEW ROUTER
     ============================================================ */
  var views = {
    home: $('#view-home'),
    catalog: $('#view-catalog'),
    series: $('#view-series'),
    reader: $('#view-reader')
  };

  function showView(name) {
    Object.keys(views).forEach(function (k) {
      if (k === name) views[k].removeAttribute('hidden');
      else views[k].setAttribute('hidden', '');
    });
    state.view = name;
    $('#readerToolbar').hidden = (name !== 'reader');
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  /* ============================================================
     6. CARD RENDERER
     ============================================================ */
  function makeCard(series) {
    var card = document.createElement('article');
    card.className = 'card';
    card.setAttribute('role', 'listitem');
    card.tabIndex = 0;
    card.setAttribute('aria-label', series.title + ' — ' + series.type);
    var statusClass = series.status === 'ongoing' ? 'card__status--ongoing' : '';
    card.innerHTML =
      '<span class="card__status ' + statusClass + '">' +
        (series.status === 'ongoing' ? 'Ongoing' : 'Completed') +
      '</span>' +
      '<div class="card__cover" aria-hidden="true">' + series.coverEmoji + '</div>' +
      '<h3 class="card__title">' + series.title + '</h3>' +
      '<p class="card__meta">' + series.author + ' · ' +
        (series.type === 'comic' ? 'Comic' : 'Novel') + '</p>';
    function open() { openSeries(series.id); }
    card.addEventListener('click', open);
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });
    return card;
  }

  /* ============================================================
     7. RAILS + CATALOG
     ============================================================ */
  function renderRails() {
    var trending = $('#railTrendingTrack');
    var recent = $('#railNewTrack');
    trending.innerHTML = '';
    recent.innerHTML = '';
    var sorted = DATA.series.slice().sort(function (a, b) { return b.rating - a.rating; });
    sorted.forEach(function (s) { trending.appendChild(makeCard(s)); });
    DATA.series.slice().reverse().forEach(function (s) { recent.appendChild(makeCard(s)); });
  }

  function renderCatalog() {
    var grid = $('#catalogGrid');
    var empty = $('#catalogEmpty');
    grid.innerHTML = '';
    var q = state.search.trim().toLowerCase();
    var filtered = DATA.series.filter(function (s) {
      if (state.filter === 'comic' && s.type !== 'comic') return false;
      if (state.filter === 'novel' && s.type !== 'novel') return false;
      if (state.filter === 'ongoing' && s.status !== 'ongoing') return false;
      if (state.filter === 'completed' && s.status !== 'completed') return false;
      if (!q) return true;
      var hay = [s.title, s.titleEn, s.author].concat(s.tags || []).join(' ').toLowerCase();
      return hay.indexOf(q) !== -1;
    });
    filtered.forEach(function (s) { grid.appendChild(makeCard(s)); });
    empty.hidden = filtered.length !== 0;
    if (filtered.length === 0 && state.filter !== 'all') {
      empty.textContent = 'No series match your filters.';
    }
  }

  /* ============================================================
     8. SERIES VIEW
     ============================================================ */
  function openSeries(id) {
    var s = seriesById(id);
    if (!s) return;
    state.seriesId = id;
    state.previousView = (state.view === 'series' || state.view === 'reader') ? state.previousView : state.view;

    $('#seriesCover').textContent = s.coverEmoji;
    $('#seriesTitle').textContent = s.title + (s.titleEn ? ' · ' + s.titleEn : '');
    $('#seriesSynopsis').textContent = s.synopsis;
    $('#seriesAuthor').textContent = s.author;
    $('#seriesType').textContent = s.type === 'comic' ? 'Comic' : 'Novel';
    $('#seriesStatus').textContent = s.status === 'ongoing' ? 'Ongoing' : 'Completed';
    $('#seriesChapters').textContent =
      s.chapters.length + ' chapter' + (s.chapters.length !== 1 ? 's' : '') +
      ' · ' + partCount(s) + ' parts';
    $('#seriesRating').textContent = '★ ' + s.rating.toFixed(1);

    var tags = $('#seriesTags');
    tags.innerHTML = '';
    (s.tags || []).forEach(function (t) {
      var li = document.createElement('li');
      li.textContent = '#' + t;
      tags.appendChild(li);
    });

    var list = $('#chaptersList');
    list.innerHTML = '';
    var globalIndex = 0;
    s.chapters.forEach(function (ch) {
      var groupLi = document.createElement('li');
      groupLi.className = 'chapter-group';
      groupLi.textContent = ch.title;
      list.appendChild(groupLi);
      ch.parts.forEach(function (p) {
        var idx = globalIndex++;
        var li = document.createElement('li');
        li.className = 'chapter-item';
        var left = document.createElement('div');
        var t = document.createElement('div');
        t.className = 'chapter-item__title';
        t.textContent = p.title;
        var m = document.createElement('div');
        m.className = 'chapter-item__meta';
        m.textContent = 'Part ' + (idx + 1) + ' of ' + partCount(s);
        left.appendChild(t); left.appendChild(m);
        var btn = document.createElement('button');
        btn.className = 'chapter-item__read';
        btn.type = 'button';
        btn.textContent = 'Read →';
        btn.addEventListener('click', function () { openReader(id, idx); });
        li.appendChild(left); li.appendChild(btn);
        list.appendChild(li);
      });
    });

    var lib = storeGet(STORAGE.library, []);
    var bookmarkBtn = $('#seriesBookmarkBtn');
    var isSaved = lib.indexOf(id) !== -1;
    bookmarkBtn.textContent = isSaved ? '✓ In library' : '＋ Add to library';
    bookmarkBtn.onclick = function () {
      var cur = storeGet(STORAGE.library, []);
      var next;
      if (cur.indexOf(id) === -1) next = cur.concat([id]);
      else next = cur.filter(function (x) { return x !== id; });
      storeSet(STORAGE.library, next);
      bookmarkBtn.textContent = next.indexOf(id) !== -1 ? '✓ In library' : '＋ Add to library';
    };

    $('#seriesStartBtn').onclick = function () { openReader(id, 0); };
    showView('series');
  }

  /* ============================================================
     9. READER VIEW
     ============================================================ */
  function openReader(seriesId, partIndex) {
    var s = seriesById(seriesId);
    if (!s) return;
    state.seriesId = seriesId;
    var total = partCount(s);
    state.partIndex = Math.max(0, Math.min(partIndex, total - 1));
    $('#readerTitle').textContent = s.title;
    $('#readerSubtitle').textContent = s.titleEn || (s.type === 'comic' ? 'Comic' : 'Novel');
    renderReader();
    showView('reader');
    updateReadingProgress();
  }

  function renderReader() {
    var s = seriesById(state.seriesId);
    if (!s) return;
    var parts = flatParts(s);
    var total = parts.length;
    var i = state.partIndex;

    $('#readerProgressLabel').textContent = 'Part ' + (i + 1) + ' / ' + total;

    var tocList = $('#readerTocList');
    tocList.innerHTML = '';
    var currentChapter = null;
    parts.forEach(function (p, idx) {
      if (p.chapterTitle !== currentChapter) {
        currentChapter = p.chapterTitle;
        var chLi = document.createElement('li');
        chLi.className = 'toc__chapter';
        chLi.textContent = p.chapterTitle;
        tocList.appendChild(chLi);
      }
      var li = document.createElement('li');
      li.className = 'toc__item';
      var a = document.createElement('a');
      a.href = '#part-' + (idx + 1);
      a.textContent = p.title;
      a.addEventListener('click', function (e) {
        e.preventDefault();
        state.partIndex = idx;
        renderReader();
        $('#readerToc').open = false;
        scrollToPart(idx);
      });
      li.appendChild(a);
      tocList.appendChild(li);
    });

    var body = $('#readerBody');
    body.innerHTML = '';

    if (s.type === 'comic') {
      var p = parts[i];
      var article = document.createElement('article');
      article.className = 'part';
      article.id = 'part-' + (i + 1);
      var h = document.createElement('h2');
      h.className = 'part__title';
      h.textContent = p.title;
      var page = document.createElement('div');
      page.className = 'comic-page';
      var img = document.createElement('img');
      img.src = p.image;
      img.alt = s.title + ' — ' + p.title;
      img.loading = 'lazy';
      page.appendChild(img);
      article.appendChild(h);
      article.appendChild(page);
      body.appendChild(article);
    } else {
      parts.forEach(function (p, idx) {
        var article = document.createElement('article');
        article.className = 'part';
        article.id = 'part-' + (idx + 1);
        article.setAttribute('data-part-number', idx + 1);

        var h = document.createElement('h2');
        h.className = 'part__title';
        h.textContent = p.title;

        var txt = document.createElement('p');
        txt.className = 'part__text';
        txt.textContent = p.text;

        var nav = document.createElement('nav');
        nav.className = 'part__nav';
        var prev = document.createElement('button');
        prev.className = 'btn btn--ghost';
        prev.type = 'button';
        prev.textContent = '← Previous';
        if (idx === 0) prev.disabled = true;
        prev.addEventListener('click', function () {
          state.partIndex = idx - 1;
          renderReader();
          scrollToPart(idx - 1);
        });
        var label = document.createElement('span');
        label.className = 'part__nav-label';
        label.textContent = 'Part ' + (idx + 1) + ' of ' + total;
        var next = document.createElement('button');
        next.className = 'btn btn--ghost';
        next.type = 'button';
        next.textContent = 'Next →';
        if (idx === total - 1) next.disabled = true;
        next.addEventListener('click', function () {
          state.partIndex = idx + 1;
          renderReader();
          scrollToPart(idx + 1);
        });
        nav.appendChild(prev); nav.appendChild(label); nav.appendChild(next);

        article.appendChild(h);
        article.appendChild(txt);
        article.appendChild(nav);
        body.appendChild(article);
      });
      requestAnimationFrame(function () { scrollToPart(state.partIndex); });
    }

    var prevBtn = $('#readerPrev');
    var nextBtn = $('#readerNext');
    prevBtn.disabled = i === 0;
    nextBtn.disabled = i === total - 1;
    prevBtn.onclick = function () {
      state.partIndex = i - 1;
      renderReader();
      if (s.type === 'novel') scrollToPart(state.partIndex);
    };
    nextBtn.onclick = function () {
      state.partIndex = i + 1;
      renderReader();
      if (s.type === 'novel') scrollToPart(state.partIndex);
    };

    storeSet(STORAGE.lastSeries, state.seriesId);
    storeSet(STORAGE.lastPart, state.partIndex);
  }

  function scrollToPart(index) {
    var el = document.getElementById('part-' + (index + 1));
    if (!el) return;
    var headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h'), 10) || 72;
    var y = el.getBoundingClientRect().top + window.scrollY - headerH - 20;
    window.scrollTo({ top: y, behavior: 'smooth' });
    el.classList.add('is-highlight');
    setTimeout(function () { el.classList.remove('is-highlight'); }, 1500);
  }

  /* ============================================================
     10. READER TOOLS
     ============================================================ */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    $('#themeToggle').textContent = theme === 'dark' ? '☀️' : '🌙';
  }
  function applyFont(scale) {
    document.documentElement.style.setProperty('--reader-font-scale', scale + '%');
  }

  var currentFont = storeGet(STORAGE.font, 100);
  applyFont(currentFont);
  applyTheme(storeGet(STORAGE.theme, 'light'));

  $('#themeToggle').addEventListener('click', function () {
    var cur = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(cur);
    storeSet(STORAGE.theme, cur);
  });
  $('#fontUp').addEventListener('click', function () {
    currentFont = Math.min(140, currentFont + 10);
    applyFont(currentFont);
    storeSet(STORAGE.font, currentFont);
  });
  $('#fontDown').addEventListener('click', function () {
    currentFont = Math.max(80, currentFont - 10);
    applyFont(currentFont);
    storeSet(STORAGE.font, currentFont);
  });
  $('#backTop').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  function updateReadingProgress() {
    var fill = $('#readingProgressFill');
    var doc = document.documentElement;
    var max = doc.scrollHeight - window.innerHeight;
    var pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    fill.style.width = pct + '%';
  }
  window.addEventListener('scroll', updateReadingProgress, { passive: true });
  window.addEventListener('resize', updateReadingProgress);

  document.addEventListener('keydown', function (e) {
    if (state.view !== 'reader') return;
    var tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea') return;
    if (e.key === 'j' || e.key === 'ArrowRight') { if (!$('#readerNext').disabled) $('#readerNext').click(); }
    else if (e.key === 'k' || e.key === 'ArrowLeft') { if (!$('#readerPrev').disabled) $('#readerPrev').click(); }
    else if (e.key.toLowerCase() === 't') $('#themeToggle').click();
    else if (e.key === 'Escape') back();
  });

  /* ============================================================
     11. NAV
     ============================================================ */
  function back() {
    if (state.view === 'reader') {
      openSeries(state.seriesId);
    } else if (state.view === 'series') {
      showView(state.previousView || 'catalog');
    } else {
      showView('home');
    }
  }

  function navigate(name) {
    if (name === 'home') { showView('home'); return; }
    if (name === 'comics' || name === 'novels') {
      state.filter = (name === 'comics') ? 'comic' : 'novel';
      state.search = '';
      $('#searchInput').value = '';
      syncChips();
      showView('catalog');
      renderCatalog();
      return;
    }
    if (name === 'library') {
      var lib = storeGet(STORAGE.library, []);
      state.filter = 'all';
      state.search = '';
      $('#searchInput').value = '';
      syncChips();
      showView('catalog');
      if (lib.length === 0) {
        $('#catalogGrid').innerHTML = '';
        var empty = $('#catalogEmpty');
        empty.hidden = false;
        empty.textContent = 'Your library is empty. Open any series and tap "Add to library".';
      } else {
        $('#catalogEmpty').hidden = true;
        var grid = $('#catalogGrid');
        grid.innerHTML = '';
        lib.forEach(function (id) {
          var s = seriesById(id);
          if (s) grid.appendChild(makeCard(s));
        });
      }
      return;
    }
    if (name === 'back') { back(); return; }
  }

  $$('[data-nav]').forEach(function (btn) {
    btn.addEventListener('click', function () { navigate(btn.getAttribute('data-nav')); });
  });

  /* ============================================================
     12. FILTERS + SEARCH
     ============================================================ */
  function syncChips() {
    $$('.chip').forEach(function (c) {
      if (c.getAttribute('data-filter') === state.filter) c.classList.add('is-active');
      else c.classList.remove('is-active');
    });
  }
  $$('.chip').forEach(function (chip) {
    chip.addEventListener('click', function () {
      state.filter = chip.getAttribute('data-filter');
      syncChips();
      renderCatalog();
    });
  });

  var searchInput = $('#searchInput');
  var searchTimer = null;
  searchInput.addEventListener('input', function () {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(function () {
      state.search = searchInput.value;
      if (state.view !== 'catalog') {
        state.filter = 'all';
        syncChips();
        showView('catalog');
      }
      renderCatalog();
    }, 150);
  });

  /* ============================================================
     13. BOOT
     ============================================================ */
  $('#year').textContent = new Date().getFullYear();
  renderRails();
  renderCatalog();
  showView('home');
})();