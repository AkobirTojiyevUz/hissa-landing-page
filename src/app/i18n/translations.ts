export type Language = 'uz' | 'ru' | 'en';

export interface FAQItem {
  q: string;
  a: string;
}

export interface TranslationDictionary {
  common: {
    active: string;
    guaranteedCondition: string;
    verified: string;
    noHiddenFees: string;
    walkMinutes: string;
    meters: string;
    km: string;
    openYandexMaps: string;
    openGoogleMaps: string;
  };
  nav: {
    howItWorks: string;
    calculator: string;
    stores: string;
    map: string;
    app: string;
    forBusiness: string;
    security: string;
    faq: string;
    partnerCta: string;
    getAppCta: string;
  };
  hero: {
    badge: string;
    titlePart1: string;
    titleHighlight: string;
    titlePart2: string;
    description: string;
    startCta: string;
    calcCta: string;
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    stat3Value: string;
    stat3Label: string;
    stat4Value: string;
    stat4Label: string;
    cardHolder: string;
    availableLimit: string;
    limitAmount: string;
    payWithQr: string;
    recentPurchase: string;
    purchaseStore: string;
    purchaseAmount: string;
    installmentProgress: string;
    verifiedPill: string;
    zeroInterestPill: string;
    noHiddenPill: string;
    activeStatus: string;
  };
  ticker: {
    label: string;
  };
  whyHissa: {
    eyebrow: string;
    title: string;
    subtitle: string;
    card1Title: string;
    card1Desc: string;
    card1Badge: string;
    card2Title: string;
    card2Desc: string;
    card2Badge: string;
    card3Title: string;
    card3Desc: string;
    card3Badge: string;
    card4Title: string;
    card4Desc: string;
    card4Badge: string;
    guaranteedCondition: string;
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    subtitle: string;
    step1Num: string;
    step1Title: string;
    step1Desc: string;
    step1Highlight: string;
    step2Num: string;
    step2Title: string;
    step2Desc: string;
    step2Highlight: string;
    step3Num: string;
    step3Title: string;
    step3Desc: string;
    step3Highlight: string;
    bannerTitle: string;
    bannerDesc: string;
    bannerBtn: string;
  };
  calculator: {
    eyebrow: string;
    title: string;
    subtitle: string;
    amountLabel: string;
    termLabel: string;
    month3: string;
    month6: string;
    month12: string;
    month3Badge: string;
    month6Badge: string;
    month12Badge: string;
    cardTodayPay: string;
    cardMonthlyPay: string;
    cardTotalPay: string;
    cardOverpay: string;
    zeroSum: string;
    scheduleTitle: string;
    applyCta: string;
    successToast: string;
    disclaimer: string;
    monthPrefix: string;
    daysAfter: string;
  };
  stores: {
    eyebrow: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    all: string;
    electronics: string;
    fashion: string;
    home: string;
    beauty: string;
    auto: string;
    shopBtn: string;
    upToMonth: string;
    categoryLabels: {
      electronics: string;
      fashion: string;
      home: string;
      beauty: string;
      auto: string;
      supermarket: string;
    };
    popularProducts: {
      texnomart: string;
      mediapark: string;
      korzinka: string;
      bellstore: string;
      ishonch: string;
      terrapro: string;
      arena: string;
      flo: string;
      makro: string;
    };
  };
  map: {
    eyebrow: string;
    title: string;
    subtitle: string;
    yourLocation: string;
    nearbyTab: string;
    allStoresTab: string;
    searchPlaceholder: string;
    distance: string;
    openNow: string;
    getDirections: string;
    viewProducts: string;
    filterAll: string;
    storesFound: string;
    selectedStoreBadge: string;
    routeDrawn: string;
    openInYandex: string;
    openInGoogle: string;
    categoryElectronics: string;
    categoryFashion: string;
    categorySupermarket: string;
    categoryBeauty: string;
    userLocationLabel: string;
    branchListTitle: string;
    mapControlsHint: string;
  };
  mobileApp: {
    eyebrow: string;
    title: string;
    subtitle: string;
    tabCard: string;
    tabQr: string;
    tabSchedule: string;
    benefit1Title: string;
    benefit1Desc: string;
    benefit2Title: string;
    benefit2Desc: string;
    benefit3Title: string;
    benefit3Desc: string;
    scanQrToDownload: string;
    availableOn: string;
    cardSubtitle: string;
    totalLimitLabel: string;
    spentLabel: string;
    recentPaymentsTitle: string;
    scanQrCashier: string;
    tezQrIntegration: string;
    payTodayZero: string;
    upcomingPaymentsTitle: string;
    payment1Paid: string;
    payment2Next: string;
    payment3Final: string;
    daysLeft: string;
  };
  merchant: {
    eyebrow: string;
    title: string;
    subtitle: string;
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    stat3Value: string;
    stat3Label: string;
    stat4Value: string;
    stat4Label: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
    feature4Title: string;
    feature4Desc: string;
    ctaCardTitle: string;
    ctaCardDesc: string;
    ctaBtn: string;
  };
  security: {
    eyebrow: string;
    title: string;
    subtitle: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
    card4Title: string;
    card4Desc: string;
    card1Badge: string;
    card2Badge: string;
    card3Badge: string;
    card4Badge: string;
    certifiedBadge: string;
    coFundingTitle: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    shopperTab: string;
    merchantTab: string;
    shoppers: FAQItem[];
    merchants: FAQItem[];
  };
  modal: {
    title: string;
    subtitle: string;
    companyName: string;
    companyPlaceholder: string;
    inn: string;
    innPlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    category: string;
    categoryRetail: string;
    categoryElectronics: string;
    categoryFashion: string;
    categoryServices: string;
    turnover: string;
    turnover1: string;
    turnover2: string;
    turnover3: string;
    submit: string;
    successMessage: string;
    successDesc: string;
    close: string;
  };
  footer: {
    tagline: string;
    colShoppers: string;
    colMerchants: string;
    colCompany: string;
    colSupport: string;
    supportPhone: string;
    supportHours: string;
    copyright: string;
    licenseText: string;
    privacyPolicy: string;
    termsOfService: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  uz: {
    common: {
      active: "Faol",
      guaranteedCondition: "Kafolatlangan shart",
      verified: "Tasdiqlangan",
      noHiddenFees: "Yashirin to'lovlarsiz",
      walkMinutes: "daqiqa piyoda",
      meters: "m",
      km: "km",
      openYandexMaps: "Yandex Xaritada ochish",
      openGoogleMaps: "Google Xaritada ochish",
    },
    nav: {
      howItWorks: "Qanday ishlaydi?",
      calculator: "Kalkulyator",
      stores: "Do'konlar",
      map: "Xarita",
      app: "Ilova",
      forBusiness: "Biznes uchun",
      security: "Xavfsizlik",
      faq: "Ko'p so'raladigan savollar",
      partnerCta: "Hamkor bo'lish",
      getAppCta: "Ilovani olish",
    },
    hero: {
      badge: "Uzcard ekotizimidagi birinchi milliy BNPL xizmati",
      titlePart1: "Bugun oling.",
      titleHighlight: "Bo'lib to'lang.",
      titlePart2: "Ortiqcha foizsiz.",
      description: "Uzcard Hissa bilan sevimli brendlaringizdan xaridlarni 3, 6 yoki 12 oyga teng ulushlarga bo'lib to'lang. Birinchi to'lov — 0 so'm, ortiqcha foiz — 0%.",
      startCta: "Xaridlarni boshlash",
      calcCta: "To'lovni hisoblash",
      stat1Value: "5 000+",
      stat1Label: "Hamkor do'konlar",
      stat2Value: "0%",
      stat2Label: "Ortiqcha to'lov (0-0-3)",
      stat3Value: "2 daqiqa",
      stat3Label: "Tezkor limit berish",
      stat4Value: "25 mln so'm",
      stat4Label: "Maksimal xarid limiti",
      cardHolder: "Uzcard BNPL Karta",
      availableLimit: "Mavjud limit",
      limitAmount: "12 500 000 UZS",
      payWithQr: "TezQR bilan to'lash",
      recentPurchase: "So'nggi xarid",
      purchaseStore: "Texnomart · iPhone 15 Pro",
      purchaseAmount: "14 400 000 UZS",
      installmentProgress: "1/3 to'landi (4 800 000 UZS)",
      verifiedPill: "0-0-3 Tasdiqlangan",
      zeroInterestPill: "0% Foiz · 0 UZS",
      noHiddenPill: "Yashirin to'lovlarsiz",
      activeStatus: "Faol",
    },
    ticker: {
      label: "O'zbekistonning 5 000 dan ortiq yetakchi brendlari biz bilan hamkorlik qiladi",
    },
    whyHissa: {
      eyebrow: "Nega aynan Hissa?",
      title: "Zamonaviy, shaffof va oson moliyaviy yechim",
      subtitle: "Biz to'lov jarayonini xaridor va do'kon uchun birdek oson, xavfsiz va foydali qildik.",
      card1Title: "Haqiqiy 0% foiz va 0 komissiya",
      card1Desc: "0-0-3 modeli bo'yicha hech qanday yashirin to'lovlar, sug'urta yoki komissiya yo'q. Mahsulot narxi 3 ga bo'linadi, tamom.",
      card1Badge: "0-0-3 Model",
      card2Title: "Mavjud Uzcard kartangiz yetarli",
      card2Desc: "Yangi bank kartasi ochish yoki hujjat to'plash shart emas. O'zingizning Uzcard kartangiz orqali 2 daqiqada faollashtiring.",
      card2Badge: "Uzcard Ekotizimi",
      card3Title: "TezQR orqali 3 soniyada to'lov",
      card3Desc: "Kassada uzun navbatlarsiz, shunchaki smartfon kamerasi orqali TezQR kodni skanerlang va to'lovni tasdiqlang.",
      card3Badge: "TezQR Integratsiya",
      card4Title: "Aqlli va avtomatik nazorat",
      card4Desc: "Mobil ilova to'lov sanalarini oldindan eslatadi va kartangizdan avtomatik yechib oladi. Jarimalar haqida unuting.",
      card4Badge: "Aqlli Ilova",
      guaranteedCondition: "Kafolatlangan shart",
    },
    howItWorks: {
      eyebrow: "Qulaylik formulasi",
      title: "Hissa bilan xarid qilish qanday ishlaydi?",
      subtitle: "Bor-yo'g'i 3 ta oddiy qadam va orzuingizdagi xarid sizning qo'lingizda.",
      step1Num: "01",
      step1Title: "Ilovani yuklang va limit oling",
      step1Desc: "Hissa ilovasini yuklab oling, telefon raqam va OneID / JShShIR orqali 2 daqiqada 25 000 000 so'mgacha xarid limitiga ega bo'ling.",
      step1Highlight: "Passport yoki OneID orqali",
      step2Num: "02",
      step2Title: "Do'konga kiring va tovar tanlang",
      step2Desc: "5 000 dan ortiq hamkor do'konlarimizdan biriga boring yoki onlayn buyurtma bering. Kassada Hissa to'lovini tanlang.",
      step2Highlight: "Texnika, kiyim, mebel",
      step3Num: "03",
      step3Title: "TezQR bilan bo'lib to'lang",
      step3Desc: "QR kodni skanerlang. Bugun 0 so'm to'laysiz, tovar esa darhol sizniki. Qolgan qismi 3 oy davomida teng ulushda yechiladi.",
      step3Highlight: "0% ortiqcha to'lov",
      bannerTitle: "Bugunoq xarid qilishga tayyormisiz?",
      bannerDesc: "Ilovani bepul yuklab oling va birinchi xaridingiz uchun tasdiqlangan limitni darhol oling.",
      bannerBtn: "Hissa ilovasini yuklash",
    },
    calculator: {
      eyebrow: "Shaffof hisob-kitob",
      title: "To'lov kalkulyatori",
      subtitle: "Xarid summasini va muddatni tanlang, oylik to'lovni bir zumda ko'ring.",
      amountLabel: "Xarid summasi:",
      termLabel: "Bo'lib to'lash muddati:",
      month3: "3 oy",
      month6: "6 oy",
      month12: "12 oy",
      month3Badge: "0% Ortiqcha to'lov",
      month6Badge: "Katta qulaylik",
      month12Badge: "Katta xaridlar uchun",
      cardTodayPay: "Bugun to'lanadi",
      cardMonthlyPay: "Oylik to'lov",
      cardTotalPay: "Jami to'lov",
      cardOverpay: "Ortiqcha to'lov",
      zeroSum: "0 UZS",
      scheduleTitle: "To'lovlar jadvali (taqvim)",
      applyCta: "Ushbu summa uchun limit olish",
      successToast: "✓ Limit hisoblandi! Ilovaga yo'naltirilmoqda...",
      disclaimer: "0-0-3 muddatida qo'shimcha foiz olinmaydi. 6 va 12 oylik tariflarda hamkor do'kon aksiyalari va bank shartlari amal qiladi.",
      monthPrefix: "-oy",
      daysAfter: "kundan so'ng",
    },
    stores: {
      eyebrow: "Keng tanlov",
      title: "O'zbekistonning eng yaxshi do'konlari",
      subtitle: "Elektronika, kiyim-kechak, mebel va go'zallik vositalarini Hissa bilan xarid qiling.",
      searchPlaceholder: "Do'kon yoki brend qidirish...",
      all: "Barchasi",
      electronics: "Elektronika & Texnika",
      fashion: "Kiyim & Poyabzal",
      home: "Uy & Mebel",
      beauty: "Go'zallik & Parfyum",
      auto: "Avto & Xizmatlar",
      shopBtn: "Do'konda xarid qilish",
      upToMonth: "oygacha bo'lib to'lash",
      categoryLabels: {
        electronics: "Elektronika",
        fashion: "Kiyim & Poyabzal",
        home: "Uy & Mebel",
        beauty: "Go'zallik",
        auto: "Avto & Xizmatlar",
        supermarket: "Supermarket",
      },
      popularProducts: {
        texnomart: "Smartfonlar va maishiy texnika",
        mediapark: "Televizorlar, muzlatgichlar",
        korzinka: "Oziq-ovqat va uy-ro'zg'or",
        bellstore: "Parfyumeriya va kosmetika",
        ishonch: "Mebel va elektrotexnika",
        terrapro: "Zamonaviy erkaklar kiyimi",
        arena: "Noutbuklar va o'yin uskunalari",
        flo: "Krossovkalar va mavsumiy poyabzal",
        makro: "Katta xaridlar va maishiy tovarlar",
      },
    },
    map: {
      eyebrow: "Geolokatsiya va xarita",
      title: "Sizga eng yaqin Hissa hamkor do'konlari",
      subtitle: "Xaritada real vaqtda ko'ring — 5 000 dan ortiq do'konlar yoningizda. Istalgan filialga boring va TezQR bilan foizsiz bo'lib to'lang.",
      yourLocation: "Sizning joylashuvingiz",
      nearbyTab: "Eng yaqin do'konlar",
      allStoresTab: "Barcha filiallar",
      searchPlaceholder: "Do'kon, tuman yoki manzilni qidirish...",
      distance: "masofada",
      openNow: "Hozir ochiq",
      getDirections: "Marshrut chizish",
      viewProducts: "Do'konga o'tish",
      filterAll: "Barchasi",
      storesFound: "ta hamkor nuqta topildi",
      selectedStoreBadge: "Tanlangan do'kon",
      routeDrawn: "Optimal marshrut chizildi",
      openInYandex: "Yandex Xaritada ochish",
      openInGoogle: "Google Xaritada ochish",
      categoryElectronics: "Elektronika",
      categoryFashion: "Kiyim & Moda",
      categorySupermarket: "Supermarket",
      categoryBeauty: "Go'zallik",
      userLocationLabel: "Toshkent, Chilonzor tumani",
      branchListTitle: "Filiallar ro'yxati",
      mapControlsHint: "Xaritani siljiting va kattalashtiring",
    },
    mobileApp: {
      eyebrow: "Barchasi bir ilovada",
      title: "Hissa mobil ilovasi — sizning shaxsiy moliyaviy hamkoringiz",
      subtitle: "Limitlarni boshqaring, TezQR bilan bir tegishda to'lang va to'lovlar jadvalini qulay nazorat qiling.",
      tabCard: "Karta & Limit",
      tabQr: "TezQR To'lov",
      tabSchedule: "Grafik & Tarix",
      benefit1Title: "Kechikishlarsiz avto-to'lov",
      benefit1Desc: "To'lov kunlari haqida qayg'urmang — ilova o'z vaqtida bildirishnoma yuboradi va kartangizdan avtomatik yechadi.",
      benefit2Title: "Xavfsiz biometrik kirish",
      benefit2Desc: "Face ID va barmoq izi orqali tezkor himoyalangan avtorizatsiya va operatsiyalarni tasdiqlash.",
      benefit3Title: "Eksklyuziv keshbek va aksiyalar",
      benefit3Desc: "Faqat Hissa foydalanuvchilari uchun hamkor do'konlardan maxsus chegirmalar va keshbeklar.",
      scanQrToDownload: "Ilovani yuklash uchun QR-kodni kamerangiz bilan skanerlang",
      availableOn: "Mavjud platformalar:",
      cardSubtitle: "Mavjud xarid limiti",
      totalLimitLabel: "Umumiy limit",
      spentLabel: "Sarflangan",
      recentPaymentsTitle: "So'nggi to'lovlar",
      scanQrCashier: "Kassadagi QR kodni ko'rsating",
      tezQrIntegration: "TezQR to'lov tizimi",
      payTodayZero: "Bugun: 0 UZS · Keyin bo'lib to'lang",
      upcomingPaymentsTitle: "Yaqinlashayotgan to'lovlar",
      payment1Paid: "1-to'lov to'landi",
      payment2Next: "2-to'lov (Navbatdagi)",
      payment3Final: "3-to'lov (Yakuniy)",
      daysLeft: "kundan so'ng",
    },
    merchant: {
      eyebrow: "Biznes hamkorlik",
      title: "Hissa bilan savdo aylanmangizni oshiring",
      subtitle: "Mijozlaringizga foizsiz bo'lib to'lash imkonini bering va savdoni yangi bosqichga olib chiqing.",
      stat1Value: "+74%",
      stat1Label: "O'rtacha chek miqdorining o'sishi",
      stat2Value: "+45%",
      stat2Label: "Yangi mijozlar oqimi",
      stat3Value: "T+2",
      stat3Label: "Kafolatlangan hisob-kitob (ish kuni)",
      stat4Value: "0%",
      stat4Label: "Kredit qaytmaslik xavfi (0 risk)",
      feature1Title: "100% To'lov kafolati",
      feature1Desc: "Mijoz qanday to'lashidan qat'i nazar, tovar summasi 2 ish kunida to'liq sizning hisobingizga tushadi. Kredit xatarini biz o'z zimmamizga olamiz.",
      feature2Title: "Tezkor OneID integratsiyasi",
      feature2Desc: "Hech qanday qog'ozbozliksiz, E-IMZO va OneID orqali 5 daqiqada onlayn ariza topshiring va shartnoma imzolang.",
      feature3Title: "TezQR va POS-terminallar",
      feature3Desc: "Mavjud Uzcard terminallaringiz yoki onlayn saytingizga oson integratsiya qilinadi. Alohida qimmat uskuna sotib olish shart emas.",
      feature4Title: "Keng reklama maydoni",
      feature4Desc: "Hissa mobil ilovasidagi millionlab faol foydalanuvchilar orasida o'z do'koningizni bepul reklama qiling va mijozlar bazangizni kengaytiring.",
      ctaCardTitle: "Do'koningizni bugunoq Hissaga ulang",
      ctaCardDesc: "Onlayn ariza qoldiring, mutaxassislarimiz 15 daqiqa ichida siz bilan bog'lanib, integratsiyani boshlaydi.",
      ctaBtn: "Hamkorlik arizasini topshirish",
    },
    security: {
      eyebrow: "Ishonch va Xavfsizlik",
      title: "Bank darajasidagi xavfsizlik va Uzcard kafolati",
      subtitle: "Sizning mablag'laringiz va shaxsiy ma'lumotlaringiz eng ilg'or xalqaro standartlar asosida himoyalangan.",
      card1Title: "Uzcard Milliy To'lov Tizimi",
      card1Desc: "O'zbekistonning eng ishonchli va yirik to'lov infratuzilmasi zaminida qurilgan arxitektura.",
      card2Title: "PCI DSS v4.0.1 Sertifikati",
      card2Desc: "Xalqaro to'lov kartalari xavfsizligi bo'yicha eng so'nggi xavfsizlik standarti va shifrlash.",
      card3Title: "Markaziy Bank Litsenziyasi",
      card3Desc: "O'zbekiston Respublikasi Markaziy Banki qonunchiligi va moliyaviy qoidalariga to'liq muvofiq.",
      card4Title: "Banklararo Kafillik Tizimi",
      card4Desc: "Yetakchi davlat va tijorat banklari bilan to'g'ridan-to'g'ri integratsiyalashgan barqaror ko-fanding.",
      card1Badge: "Milliy Ekotizim",
      card2Badge: "PCI DSS v4.0.1",
      card3Badge: "MB Reglamenti",
      card4Badge: "Bank Kafilligi",
      certifiedBadge: "100% Sertifikatlangan",
      coFundingTitle: "Likvidlik va hisob-kitob bo'yicha yetakchi bank hamkorlarimiz",
    },
    faq: {
      eyebrow: "Savollaringiz bormi?",
      title: "Ko'p so'raladigan savollar",
      subtitle: "Hissa xizmati, to'lovlar va hamkorlik bo'yicha barcha javoblar.",
      shopperTab: "Xaridorlar uchun",
      merchantTab: "Biznes uchun",
      shoppers: [
        {
          q: "Hissa xizmatidan foydalanish uchun qanday hujjatlar kerak?",
          a: "Faqatgina o'zingizning Uzcard kartangiz, telefon raqamingiz va JShShIR (OneID) kifoya. Yangi karta ochish, daromad haqida ma'lumotnoma to'plash yoki kafil topish talab etilmaydi.",
        },
        {
          q: "Haqiqatan ham 0% foizmi? Qayerdan foyda ko'riladi?",
          a: "Ha! 0-0-3 tarifida xaridor uchun mutlaqo 0% ortiqcha to'lov. Xarid summasi teng 3 qismga bo'linadi. BNPL komissiyasini (MDR) savdosini oshirishni istagan hamkor do'kon to'lab beradi.",
        },
        {
          q: "Oylik to'lovlar qanday amalga oshiriladi?",
          a: "To'lovlar avtomatlashtirilgan. Har oy belgilangan sanada Hissa ilovasiga ulangan Uzcard kartangizdan kerakli summa yechib olinadi. Ilova sizni 3 kun oldin eslatib qo'yadi.",
        },
        {
          q: "Limit miqdori qancha va uni qanday oshirish mumkin?",
          a: "Boshlang'ich tasdiqlangan limit 25 000 000 so'mgacha bo'lishi mumkin. O'z vaqtida to'lovlarni amalga oshirishingiz bilan tizim sizning limitingizni avtomatik oshirib boradi.",
        },
        {
          q: "To'lovni muddatidan oldin yopish mumkinmi?",
          a: "Ha, albatta. Istalgan vaqtda Hissa mobil ilovasi orqali barcha qolgan qismlarni bir zumda hech qanday jarima yoki qo'shimcha to'lovlarsiz to'lashingiz mumkin.",
        },
      ],
      merchants: [
        {
          q: "Do'konni Hissa tizimiga ulash qancha vaqt oladi?",
          a: "OneID va E-IMZO integratsiyasi tufayli ariza topshirish va shartnoma imzolash 5-15 daqiqa davom etadi. 1-2 ish kunida to'lovlarni qabul qilishni boshlaysiz.",
        },
        {
          q: "Sotilgan mahsulot pullari qachon do'kon hisobiga tushadi?",
          a: "T+2 reglamentiga muvofiq, xaridor buyumni olganidan so'ng 2 ish kuni ichida to'liq summa (komissiya chegirilgan holda) hisob-raqamingizga o'tkazib beriladi.",
        },
        {
          q: "Agar mijoz to'lovni kechiktirsa yoki to'lamasa nima bo'ladi?",
          a: "Barcha kredit risklarini Uzcard va hamkor banklar o'z zimmasiga oladi. Do'kon o'z mablag'ini 100% kafolat bilan oladi va mijoz bilan munosabatlarga aralashmaydi.",
        },
        {
          q: "Do'konga alohida qimmat uskuna sotib olish kerakmi?",
          a: "Yo'q, mavjud Uzcard POS-terminallaringiz yoki smartfon ekranidagi TezQR kodi orqali to'lovlar bir zumda qabul qilinadi.",
        },
      ],
    },
    modal: {
      title: "Hissa hamkoriga aylaning",
      subtitle: "Ma'lumotlaringizni qoldiring, mutaxassisimiz 15 daqiqada bog'lanadi",
      companyName: "Kompaniya yoki do'kon nomi",
      companyPlaceholder: "Masalan: TexnoSmart MCHJ",
      inn: "STIR (INN)",
      innPlaceholder: "9 xonali STIR raqamingiz",
      phone: "Telefon raqamingiz",
      phonePlaceholder: "+998 90 123 45 67",
      category: "Faoliyat sohasi",
      categoryRetail: "Chakana savdo (Retail)",
      categoryElectronics: "Elektronika va maishiy texnika",
      categoryFashion: "Kiyim, poyabzal va aksessuarlar",
      categoryServices: "Xizmat ko'rsatish va boshqalar",
      turnover: "Oylik savdo aylanmasi",
      turnover1: "50 mln so'mgacha",
      turnover2: "50 mln - 300 mln so'm",
      turnover3: "300 mln so'mdan yuqori",
      submit: "Arizani yuborish",
      successMessage: "Arizangiz muvaffaqiyatli qabul qilindi! Tez orada mutaxassisimiz siz bilan bog'lanadi.",
      successDesc: "Mutaxassisimiz kiritilgan telefon raqami orqali bog'lanadi va 15 daqiqa ichida do'koningizni ulab beradi.",
      close: "Yopish",
    },
    footer: {
      tagline: "Uzcard ekotizimidagi birinchi milliy BNPL xizmati. Bugun oling, bo'lib to'lang.",
      colShoppers: "Xaridorlarga",
      colMerchants: "Do'konlarga",
      colCompany: "Kompaniya",
      colSupport: "Bog'lanish",
      supportPhone: "+998 71 200 00 00",
      supportHours: "24/7 Qo'llab-quvvatlash xizmati",
      copyright: "© 2026 UZCARD Hissa. Barcha huquqlar himoyalangan.",
      licenseText: "O'zbekiston Respublikasi Markaziy Banki talablariga muvofiq litsenziyalangan.",
      privacyPolicy: "Maxfiylik siyosati",
      termsOfService: "Ommaviy oferta",
    },
  },
  ru: {
    common: {
      active: "Активен",
      guaranteedCondition: "Гарантированные условия",
      verified: "Подтверждено",
      noHiddenFees: "Без скрытых комиссий",
      walkMinutes: "мин. пешком",
      meters: "м",
      km: "км",
      openYandexMaps: "Открыть в Яндекс Картах",
      openGoogleMaps: "Открыть в Google Maps",
    },
    nav: {
      howItWorks: "Как это работает?",
      calculator: "Калькулятор",
      stores: "Магазины",
      map: "Карта",
      app: "Приложение",
      forBusiness: "Для бизнеса",
      security: "Безопасность",
      faq: "Частые вопросы",
      partnerCta: "Стать партнером",
      getAppCta: "Скачать",
    },
    hero: {
      badge: "Первый национальный BNPL-сервис в экосистеме Uzcard",
      titlePart1: "Покупайте сейчас.",
      titleHighlight: "Платите частями.",
      titlePart2: "Без переплат.",
      description: "Делите оплату на 3, 6 или 12 месяцев в любимых магазинах Узбекистана вместе с Uzcard Hissa. Первый взнос — 0 сум, переплата — 0%.",
      startCta: "Начать покупки",
      calcCta: "Рассчитать платеж",
      stat1Value: "5 000+",
      stat1Label: "Партнерских магазинов",
      stat2Value: "0%",
      stat2Label: "Переплата (0-0-3)",
      stat3Value: "2 минуты",
      stat3Label: "Мгновенное одобрение",
      stat4Value: "25 млн сум",
      stat4Label: "Максимальный лимит",
      cardHolder: "Uzcard BNPL Карта",
      availableLimit: "Доступный лимит",
      limitAmount: "12 500 000 UZS",
      payWithQr: "Оплатить TezQR",
      recentPurchase: "Последняя покупка",
      purchaseStore: "Texnomart · iPhone 15 Pro",
      purchaseAmount: "14 400 000 UZS",
      installmentProgress: "1/3 оплачено (4 800 000 UZS)",
      verifiedPill: "0-0-3 Подтверждено",
      zeroInterestPill: "0% Переплаты · 0 UZS",
      noHiddenPill: "Без скрытых платежей",
      activeStatus: "Активен",
    },
    ticker: {
      label: "Более 5 000 ведущих брендов Узбекистана уже подключены к Hissa",
    },
    whyHissa: {
      eyebrow: "Почему Hissa?",
      title: "Современное, прозрачное и честное финансирование",
      subtitle: "Мы сделали процесс покупки одинаково легким, выгодным и безопасным для покупателя и продавца.",
      card1Title: "Честные 0% без комиссий",
      card1Desc: "В тарифе 0-0-3 нет скрытых платежей, страховок и наценок. Стоимость товара просто делится на 3 части.",
      card1Badge: "Тариф 0-0-3",
      card2Title: "Ваша карта Uzcard уже подходит",
      card2Desc: "Не нужно выпускать новые банковские карты. Привяжите текущую карту Uzcard и получите лимит за 2 минуты.",
      card2Badge: "Экосистема Uzcard",
      card3Title: "Оплата по TezQR за 3 секунды",
      card3Desc: "Забудьте об очередях. Отсканируйте TezQR на кассе камерой телефона и моментально подтвердите покупку.",
      card3Badge: "TezQR Интеграция",
      card4Title: "Умное мобильное управление",
      card4Desc: "Приложение заранее предупредит о платеже и спишет сумму автоматически в день оплаты без штрафов.",
      card4Badge: "Smart App",
      guaranteedCondition: "Гарантированные условия",
    },
    howItWorks: {
      eyebrow: "Простой процесс",
      title: "Как совершать покупки с Hissa?",
      subtitle: "Всего 3 простых шага отделяют вас от желанных покупок.",
      step1Num: "01",
      step1Title: "Скачайте приложение и получите лимит",
      step1Desc: "Установите приложение Hissa, пройдите быструю идентификацию через OneID / ПИНФЛ и получите лимит до 25 000 000 сум за 2 минуты.",
      step1Highlight: "По паспорту или OneID",
      step2Num: "02",
      step2Title: "Выберите товар в партнерском магазине",
      step2Desc: "Приходите в любой из 5 000+ магазинов или выбирайте товары онлайн на сайтах партнеров. На кассе выберите оплату Hissa.",
      step2Highlight: "Техника, одежда, мебель",
      step3Num: "03",
      step3Title: "Оплатите через TezQR и заберите покупку",
      step3Desc: "Отсканируйте QR-код. Сегодня платите 0 сум, товар сразу ваш. Оставшаяся сумма разделится на 3 равных платежа.",
      step3Highlight: "0% переплаты",
      bannerTitle: "Готовы сделать первую покупку?",
      bannerDesc: "Скачайте приложение прямо сейчас и узнайте ваш персональный лимит за пару минут.",
      bannerBtn: "Скачать приложение Hissa",
    },
    calculator: {
      eyebrow: "Прозрачный расчет",
      title: "Кредитный калькулятор",
      subtitle: "Выберите сумму покупки и срок рассрочки, чтобы увидеть ежемесячный платеж.",
      amountLabel: "Сумма покупки:",
      termLabel: "Срок рассрочки:",
      month3: "3 месяца",
      month6: "6 месяцев",
      month12: "12 месяцев",
      month3Badge: "0% Переплаты",
      month6Badge: "Максимум выгоды",
      month12Badge: "Для крупных покупок",
      cardTodayPay: "К оплате сегодня",
      cardMonthlyPay: "Ежемесячный платеж",
      cardTotalPay: "Итого к оплате",
      cardOverpay: "Переплата",
      zeroSum: "0 UZS",
      scheduleTitle: "График платежей (календарь)",
      applyCta: "Получить лимит на эту сумму",
      successToast: "✓ Лимит рассчитан! Перенаправляем в приложение...",
      disclaimer: "На тарифе 0-0-3 переплата 0%. Для сроков 6 и 12 месяцев действуют акции партнеров и условия банков-участников.",
      monthPrefix: "-й месяц",
      daysAfter: "дней спустя",
    },
    stores: {
      eyebrow: "Широкий выбор",
      title: "Лучшие магазины Узбекистана",
      subtitle: "Покупайте технику, одежду, товары для дома и парфюмерию в рассрочку с Hissa.",
      searchPlaceholder: "Поиск магазина или бренда...",
      all: "Все категории",
      electronics: "Электроника и техника",
      fashion: "Одежда и обувь",
      home: "Дом и мебель",
      beauty: "Красота и парфюм",
      auto: "Авто и услуги",
      shopBtn: "Купить в магазине",
      upToMonth: "мес. рассрочки",
      categoryLabels: {
        electronics: "Электроника",
        fashion: "Одежда и обувь",
        home: "Дом и мебель",
        beauty: "Красота",
        auto: "Авто и услуги",
        supermarket: "Супермаркет",
      },
      popularProducts: {
        texnomart: "Смартфоны и бытовая техника",
        mediapark: "Телевизоры, холодильники",
        korzinka: "Продукты и товары для дома",
        bellstore: "Парфюмерия и косметика",
        ishonch: "Мебель и электротехника",
        terrapro: "Стильная мужская одежда",
        arena: "Ноутбуки и игровые гаджеты",
        flo: "Кроссовки и сезонная обувь",
        makro: "Крупные покупки и продукты",
      },
    },
    map: {
      eyebrow: "Геолокация и карта",
      title: "Ближайшие партнерские магазины Hissa",
      subtitle: "Смотрите на карте в реальном времени — более 5 000 магазинов рядом с вами. Приходите и покупайте в рассрочку по TezQR без переплат.",
      yourLocation: "Ваше местоположение",
      nearbyTab: "Ближайшие магазины",
      allStoresTab: "Все филиалы",
      searchPlaceholder: "Поиск магазина, района или адреса...",
      distance: "расстояние",
      openNow: "Сейчас открыто",
      getDirections: "Маршрут",
      viewProducts: "Товары магазина",
      filterAll: "Все",
      storesFound: "партнерских точек найдено",
      selectedStoreBadge: "Выбранный магазин",
      routeDrawn: "Оптимальный маршрут построен",
      openInYandex: "Открыть в Яндекс Картах",
      openInGoogle: "Открыть в Google Maps",
      categoryElectronics: "Электроника",
      categoryFashion: "Одежда и мода",
      categorySupermarket: "Супермаркет",
      categoryBeauty: "Красота",
      userLocationLabel: "Ташкент, Чиланзарский район",
      branchListTitle: "Список филиалов",
      mapControlsHint: "Перемещайте и масштабируйте карту",
    },
    mobileApp: {
      eyebrow: "Все в одном месте",
      title: "Мобильное приложение Hissa — ваш надежный финансовый партнер",
      subtitle: "Управляйте лимитами, платите через TezQR в один клик и контролируйте график платежей.",
      tabCard: "Карта и лимит",
      tabQr: "Оплата TezQR",
      tabSchedule: "График и история",
      benefit1Title: "Автосписание без просрочек",
      benefit1Desc: "Не нужно помнить даты платежей — приложение заблаговременно напомнит и спишет точную сумму с карты.",
      benefit2Title: "Биометрическая безопасность",
      benefit2Desc: "Мгновенный и защищенный вход в приложение по Face ID или отпечатку пальца.",
      benefit3Title: "Эксклюзивные акции и скидки",
      benefit3Desc: "Доступ к специальным закрытым скидкам и акциям только для пользователей Hissa.",
      scanQrToDownload: "Наведите камеру смартфона на QR-код для быстрой загрузки",
      availableOn: "Доступно на платформах:",
      cardSubtitle: "Доступный лимит покупок",
      totalLimitLabel: "Общий лимит",
      spentLabel: "Потрачено",
      recentPaymentsTitle: "Последние платежи",
      scanQrCashier: "Отсканируйте QR-код на кассе",
      tezQrIntegration: "Платежная система TezQR",
      payTodayZero: "Сегодня: 0 UZS · Далее частями",
      upcomingPaymentsTitle: "Ближайшие платежи",
      payment1Paid: "1-й платеж оплачен",
      payment2Next: "2-й платеж (Следующий)",
      payment3Final: "3-й платеж (Итоговый)",
      daysLeft: "дней осталось",
    },
    merchant: {
      eyebrow: "Партнерство для бизнеса",
      title: "Увеличьте оборот вашего бизнеса вместе с Hissa",
      subtitle: "Предложите клиентам беспроцентную рассрочку и поднимите ваши продажи на новый уровень.",
      stat1Value: "+74%",
      stat1Label: "Рост среднего чека",
      stat2Value: "+45%",
      stat2Label: "Прирост новых покупателей",
      stat3Value: "T+2",
      stat3Label: "Гарантированная выплата (раб. дня)",
      stat4Value: "0%",
      stat4Label: "Риск невозврата (0 рисков)",
      feature1Title: "100% Гарантия оплаты",
      feature1Desc: "Независимо от того, как платит клиент, вы получаете полную сумму за товар в течение 2 дней. Кредитный риск мы берем на себя.",
      feature2Title: "Быстрое подключение через OneID",
      feature2Desc: "Никаких бумаг — онлайн-заявка, ЭЦП и интеграция за считанные минуты без визитов в банк.",
      feature3Title: "TezQR и поддержка POS-терминалов",
      feature3Desc: "Работает с уже имеющимися терминалами Uzcard или интегрируется в ваш интернет-магазин через удобный API.",
      feature4Title: "Маркетинг среди миллионов пользователей",
      feature4Desc: "Бесплатное продвижение вашего бренда в приложении Hissa и прямой выход на платежеспособную аудиторию.",
      ctaCardTitle: "Подключите свой магазин к Hissa сегодня",
      ctaCardDesc: "Оставьте заявку онлайн, наш специалист свяжется с вами в течение 15 минут.",
      ctaBtn: "Подать заявку на партнерство",
    },
    security: {
      eyebrow: "Надежность и доверие",
      title: "Безопасность банковского уровня и гарантии Uzcard",
      subtitle: "Ваши финансы и персональные данные защищены по международным протоколам высшего класса.",
      card1Title: "Национальная система Uzcard",
      card1Desc: "Построено на базе крупнейшей и самой надежной платежной инфраструктуры Республики Узбекистан.",
      card2Title: "Сертификация PCI DSS v4.0.1",
      card2Desc: "Соответствие международным стандартам безопасности обработки платежных карт и сквозное шифрование.",
      card3Title: "Лицензия Центрального Банка",
      card3Desc: "Деятельность полностью регулируется нормативными актами Центрального Банка Республики Узбекистан.",
      card4Title: "Межбанковский ко-фандинг",
      card4Desc: "Партнерство с ведущими государственными и коммерческими банками для гарантированной ликвидности.",
      card1Badge: "Нац. Экосистема",
      card2Badge: "PCI DSS v4.0.1",
      card3Badge: "Регламент ЦБ",
      card4Badge: "Банковская гарантия",
      certifiedBadge: "100% Сертифицировано",
      coFundingTitle: "Ведущие банки-партнеры по ликвидности и расчетам",
    },
    faq: {
      eyebrow: "Остались вопросы?",
      title: "Часто задаваемые вопросы",
      subtitle: "Ответы на главные вопросы покупателей и партнеров о сервисе Hissa.",
      shopperTab: "Покупателям",
      merchantTab: "Партнерам",
      shoppers: [
        {
          q: "Какие документы нужны для использования сервиса Hissa?",
          a: "Достаточно вашей карты Uzcard, номера телефона и ПИНФЛ (OneID). Не нужно открывать новые карты, собирать справки о доходах или искать поручителей.",
        },
        {
          q: "Действительно ли переплата 0%? В чем выгода сервиса?",
          a: "Да! По тарифу 0-0-3 переплата составляет ровно 0%. Стоимость делится на 3 равные части. Комиссию сервиса (MDR) оплачивает партнерский магазин для увеличения своих продаж.",
        },
        {
          q: "Как списываются ежемесячные платежи?",
          a: "Списание происходит автоматически. В установленную дату сумма списывается с привязанной карты Uzcard. Приложение пришлет напоминание за 3 дня.",
        },
        {
          q: "Какой лимит предоставляется и как его увеличить?",
          a: "Начальный лимит может достигать до 25 000 000 сум. При своевременном погашении система автоматически увеличивает ваш персональный лимит.",
        },
        {
          q: "Можно ли погасить рассрочку досрочно?",
          a: "Да, в любой момент через мобильное приложение Hissa можно закрыть остаток долга без штрафов, комиссий и дополнительных переплат.",
        },
      ],
      merchants: [
        {
          q: "Сколько времени занимает подключение магазина к Hissa?",
          a: "Благодаря интеграции с OneID и ЭЦП подача заявки и подписание договора занимают 5-15 минут. Прием платежей начинается через 1-2 рабочих дня.",
        },
        {
          q: "Когда средства за проданный товар поступают на расчетный счет?",
          a: "По регламенту T+2 в течение 2 рабочих дней после покупки полная сумма (за вычетом комиссии) перечисляется на ваш расчетный счет.",
        },
        {
          q: "Что происходит, если покупатель задерживает или не платит рассрочку?",
          a: "Все кредитные риски берут на себя Uzcard и банки-партнеры. Магазин гарантированно получает 100% средств за товар без споров с клиентом.",
        },
        {
          q: "Нужно ли покупать специальное дорогое оборудование?",
          a: "Нет, оплата принимается через имеющиеся POS-терминалы Uzcard либо через TezQR-код со смартфона продавца.",
        },
      ],
    },
    modal: {
      title: "Станьте партнером Hissa",
      subtitle: "Заполните форму, и мы свяжемся с вами в течение 15 минут",
      companyName: "Название компании или магазина",
      companyPlaceholder: "Например: ООО TexnoSmart",
      inn: "ИНН компании",
      innPlaceholder: "9-значный ИНН",
      phone: "Номер телефона",
      phonePlaceholder: "+998 90 123 45 67",
      category: "Сфера деятельности",
      categoryRetail: "Розничная торговля (Retail)",
      categoryElectronics: "Электроника и бытовая техника",
      categoryFashion: "Одежда, обувь и аксессуары",
      categoryServices: "Услуги и другое",
      turnover: "Месячный оборот",
      turnover1: "До 50 млн сум",
      turnover2: "50 млн - 300 млн сум",
      turnover3: "Более 300 млн сум",
      submit: "Отправить заявку",
      successMessage: "Заявка успешно отправлена! Наш менеджер свяжется с вами в ближайшее время.",
      successDesc: "Наш специалист свяжется с вами по указанному номеру телефона и поможет подключить магазин в течение 15 минут.",
      close: "Закрыть",
    },
    footer: {
      tagline: "Первый национальный BNPL-сервис в экосистеме Uzcard. Покупайте сейчас, платите потом.",
      colShoppers: "Покупателям",
      colMerchants: "Бизнесу",
      colCompany: "О компании",
      colSupport: "Поддержка",
      supportPhone: "+998 71 200 00 00",
      supportHours: "Служба поддержки 24/7",
      copyright: "© 2026 UZCARD Hissa. Все права защищены.",
      licenseText: "Лицензировано в соответствии с требованиями Центрального Банка Республики Узбекистан.",
      privacyPolicy: "Политика конфиденциальности",
      termsOfService: "Публичная оферта",
    },
  },
  en: {
    common: {
      active: "Active",
      guaranteedCondition: "Guaranteed Terms",
      verified: "Verified",
      noHiddenFees: "No Hidden Fees",
      walkMinutes: "min walk",
      meters: "m",
      km: "km",
      openYandexMaps: "Open in Yandex Maps",
      openGoogleMaps: "Open in Google Maps",
    },
    nav: {
      howItWorks: "How it works",
      calculator: "Calculator",
      stores: "Stores",
      map: "Store Map",
      app: "App",
      forBusiness: "For Business",
      security: "Security",
      faq: "FAQ",
      partnerCta: "Become a Partner",
      getAppCta: "Get the App",
    },
    hero: {
      badge: "The First National BNPL Service in the Uzcard Ecosystem",
      titlePart1: "Buy now.",
      titleHighlight: "Pay in parts.",
      titlePart2: "Zero interest.",
      description: "Split your payments into 3, 6, or 12 equal monthly installments at your favorite stores in Uzbekistan with Uzcard Hissa. 0 UZS upfront, 0% overpayment.",
      startCta: "Start Shopping",
      calcCta: "Calculate Payment",
      stat1Value: "5,000+",
      stat1Label: "Partner Stores",
      stat2Value: "0%",
      stat2Label: "Interest Rate (0-0-3)",
      stat3Value: "2 mins",
      stat3Label: "Instant Approval",
      stat4Value: "25M UZS",
      stat4Label: "Max Shopping Limit",
      cardHolder: "Uzcard BNPL Card",
      availableLimit: "Available Limit",
      limitAmount: "12,500,000 UZS",
      payWithQr: "Pay with TezQR",
      recentPurchase: "Recent Purchase",
      purchaseStore: "Texnomart · iPhone 15 Pro",
      purchaseAmount: "14,400,000 UZS",
      installmentProgress: "1/3 paid (4,800,000 UZS)",
      verifiedPill: "0-0-3 Approved",
      zeroInterestPill: "0% Interest · 0 UZS",
      noHiddenPill: "No Hidden Fees",
      activeStatus: "Active",
    },
    ticker: {
      label: "Trusted by over 5,000 leading brands across Uzbekistan",
    },
    whyHissa: {
      eyebrow: "Why Hissa?",
      title: "Modern, transparent, and fair installments",
      subtitle: "We made the shopping experience effortlessly smooth, safe, and mutually beneficial for both shoppers and merchants.",
      card1Title: "Real 0% Interest & Zero Fees",
      card1Desc: "Under our 0-0-3 plan, there are no hidden fees, insurance charges, or commissions. The price is simply divided by 3.",
      card1Badge: "0-0-3 Plan",
      card2Title: "Your existing Uzcard is all you need",
      card2Desc: "No need to open new bank accounts. Link your existing Uzcard and unlock your credit limit in just 2 minutes.",
      card2Badge: "Uzcard Ecosystem",
      card3Title: "Pay in 3 seconds via TezQR",
      card3Desc: "Skip checkout queues. Simply scan the merchant's TezQR code with your phone camera and confirm payment instantly.",
      card3Badge: "TezQR Integration",
      card4Title: "Smart Automated Control",
      card4Desc: "The mobile app sends proactive payment reminders and processes auto-debits on due dates without late fees.",
      card4Badge: "Smart App",
      guaranteedCondition: "Guaranteed Terms",
    },
    howItWorks: {
      eyebrow: "Simple 3-Step Journey",
      title: "How does shopping with Hissa work?",
      subtitle: "You are only three simple steps away from taking home your desired items.",
      step1Num: "01",
      step1Title: "Download the app & unlock your limit",
      step1Desc: "Install Hissa, verify with your phone number and OneID / PINFL in 2 minutes, and receive up to 25,000,000 UZS in credit limit.",
      step1Highlight: "Via Passport or OneID",
      step2Num: "02",
      step2Title: "Shop at any partner store",
      step2Desc: "Visit any of our 5,000+ retail stores or shop online at partner marketplaces. Select Hissa at checkout.",
      step2Highlight: "Electronics, fashion, furniture",
      step3Num: "03",
      step3Title: "Scan TezQR & take it home today",
      step3Desc: "Scan the TezQR code. Pay 0 UZS today — the purchase is yours immediately. The rest is split across 3 monthly installments.",
      step3Highlight: "0% overpayment",
      bannerTitle: "Ready to elevate your shopping?",
      bannerDesc: "Download Hissa app for free and check your approved shopping limit in under 2 minutes.",
      bannerBtn: "Download Hissa App",
    },
    calculator: {
      eyebrow: "Transparent Breakdown",
      title: "Installment Calculator",
      subtitle: "Choose your purchase amount and plan duration to see your exact monthly payment.",
      amountLabel: "Purchase Amount:",
      termLabel: "Installment Duration:",
      month3: "3 months",
      month6: "6 months",
      month12: "12 months",
      month3Badge: "0% Overpayment",
      month6Badge: "Maximum Flexibility",
      month12Badge: "For Large Purchases",
      cardTodayPay: "Due Today",
      cardMonthlyPay: "Monthly Payment",
      cardTotalPay: "Total Repayment",
      cardOverpay: "Overpayment",
      zeroSum: "0 UZS",
      scheduleTitle: "Payment Schedule (Timeline)",
      applyCta: "Get limit for this amount",
      successToast: "✓ Limit calculated! Redirecting to app...",
      disclaimer: "0% overpayment applies to the 0-0-3 plan. 6 and 12-month plans are subject to merchant promotions and participating bank terms.",
      monthPrefix: "Month",
      daysAfter: "days later",
    },
    stores: {
      eyebrow: "Extensive Network",
      title: "Top stores across Uzbekistan",
      subtitle: "Shop electronics, apparel, furniture, and beauty products in easy installments with Hissa.",
      searchPlaceholder: "Search store or brand...",
      all: "All Categories",
      electronics: "Electronics & Tech",
      fashion: "Fashion & Footwear",
      home: "Home & Furniture",
      beauty: "Beauty & Fragrance",
      auto: "Auto & Services",
      shopBtn: "Shop in Store",
      upToMonth: "months installments",
      categoryLabels: {
        electronics: "Electronics",
        fashion: "Fashion & Footwear",
        home: "Home & Furniture",
        beauty: "Beauty",
        auto: "Auto & Services",
        supermarket: "Supermarket",
      },
      popularProducts: {
        texnomart: "Smartphones and home appliances",
        mediapark: "TVs, refrigerators, ovens",
        korzinka: "Groceries and household essentials",
        bellstore: "Perfumes and luxury cosmetics",
        ishonch: "Furniture and consumer electronics",
        terrapro: "Modern men's fashion",
        arena: "Laptops and gaming gear",
        flo: "Sneakers and seasonal shoes",
        makro: "Bulk purchases and home goods",
      },
    },
    map: {
      eyebrow: "Geolocation & Map",
      title: "Find Hissa Partner Stores Near You",
      subtitle: "Explore live interactive map — over 5,000 stores near your current location. Walk in and split payments via TezQR at 0% overpayment.",
      yourLocation: "Your Location",
      nearbyTab: "Nearby Stores",
      allStoresTab: "All Branches",
      searchPlaceholder: "Search store, district or address...",
      distance: "away",
      openNow: "Open Now",
      getDirections: "Get Directions",
      viewProducts: "Store Products",
      filterAll: "All",
      storesFound: "partner locations found",
      selectedStoreBadge: "Selected Store",
      routeDrawn: "Optimal route plotted",
      openInYandex: "Open in Yandex Maps",
      openInGoogle: "Open in Google Maps",
      categoryElectronics: "Electronics",
      categoryFashion: "Fashion & Apparel",
      categorySupermarket: "Supermarket",
      categoryBeauty: "Beauty & Fragrance",
      userLocationLabel: "Tashkent, Chilanzar district",
      branchListTitle: "Branch Directory",
      mapControlsHint: "Pan and zoom the map freely",
    },
    mobileApp: {
      eyebrow: "All-in-One Experience",
      title: "The Hissa App — Your smart financial partner",
      subtitle: "Manage your limits, pay with TezQR in one tap, and track your installment calendar effortlessly.",
      tabCard: "Card & Limits",
      tabQr: "TezQR Checkout",
      tabSchedule: "Schedule & History",
      benefit1Title: "Auto-pay without late fees",
      benefit1Desc: "Never miss a due date — Hissa sends proactive alerts and processes automatic card payments smoothly.",
      benefit2Title: "Biometric Bank-grade Security",
      benefit2Desc: "Instant, encrypted authentication using Face ID and fingerprint sensors for all transactions.",
      benefit3Title: "Exclusive Perks & Cashback",
      benefit3Desc: "Gain exclusive access to private promotional discounts and partner rewards available only to Hissa users.",
      scanQrToDownload: "Point your phone camera at the QR code to download",
      availableOn: "Available platforms:",
      cardSubtitle: "Available Shopping Limit",
      totalLimitLabel: "Total Limit",
      spentLabel: "Spent",
      recentPaymentsTitle: "Recent Payments",
      scanQrCashier: "Show QR code at the cash register",
      tezQrIntegration: "TezQR Payment System",
      payTodayZero: "Today: 0 UZS · Split later",
      upcomingPaymentsTitle: "Upcoming Payments",
      payment1Paid: "1st installment paid",
      payment2Next: "2nd installment (Next)",
      payment3Final: "3rd installment (Final)",
      daysLeft: "days left",
    },
    merchant: {
      eyebrow: "Business Partnership",
      title: "Boost your sales volume with Hissa",
      subtitle: "Offer zero-interest installment options to your customers and drive significant revenue growth.",
      stat1Value: "+74%",
      stat1Label: "Average Order Value Boost",
      stat2Value: "+45%",
      stat2Label: "New Customer Acquisition",
      stat3Value: "T+2",
      stat3Label: "Guaranteed Settlement (business days)",
      stat4Value: "0%",
      stat4Label: "Default Credit Risk (0 risk)",
      feature1Title: "100% Payout Guarantee",
      feature1Desc: "Regardless of how the buyer pays, you receive full funds in 2 business days. Credit default risks are fully covered by us.",
      feature2Title: "Fast Onboarding via OneID",
      feature2Desc: "Zero paper bureaucracy. Apply online, sign via E-IMZO, and start accepting Hissa in 5 minutes.",
      feature3Title: "TezQR & POS Terminal Ready",
      feature3Desc: "Compatible with your existing Uzcard merchant terminals or integrates directly into your online checkout via API.",
      feature4Title: "Reach Millions of Active Shoppers",
      feature4Desc: "Free promotion in the Hissa mobile app directory, driving qualified high-intent foot and web traffic to your stores.",
      ctaCardTitle: "Connect your business to Hissa today",
      ctaCardDesc: "Submit your online application, and our onboarding team will contact you within 15 minutes.",
      ctaBtn: "Apply for Merchant Partnership",
    },
    security: {
      eyebrow: "Trust & Compliance",
      title: "Bank-grade security powered by Uzcard",
      subtitle: "Your finances and identity are protected according to the highest international banking security standards.",
      card1Title: "Uzcard National Infrastructure",
      card1Desc: "Built upon Uzbekistan's largest, most resilient, and trusted national payment processing network.",
      card2Title: "PCI DSS v4.0.1 Certified",
      card2Desc: "Fully compliant with the latest payment card industry data security standards and end-to-end tokenization.",
      card3Title: "Central Bank Regulated",
      card3Desc: "Strictly operating in full compliance with the regulatory legal framework of the Central Bank of Uzbekistan.",
      card4Title: "Interbank Co-Funding",
      card4Desc: "Directly co-funded with major state and commercial banks ensuring 100% liquidity and transaction reliability.",
      card1Badge: "National Ecosystem",
      card2Badge: "PCI DSS v4.0.1",
      card3Badge: "Central Bank Regulated",
      card4Badge: "Bank Guarantee",
      certifiedBadge: "100% Certified",
      coFundingTitle: "Leading banking partners for liquidity and interbank settlements",
    },
    faq: {
      eyebrow: "Got Questions?",
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about shopping and partnering with Hissa.",
      shopperTab: "For Shoppers",
      merchantTab: "For Merchants",
      shoppers: [
        {
          q: "What documents are required to use Hissa?",
          a: "All you need is your existing Uzcard bank card, mobile phone number, and PINFL (OneID). No new cards to open, no income statements, and no guarantors required.",
        },
        {
          q: "Is it really 0% interest? How does Hissa earn?",
          a: "Yes! Under the 0-0-3 plan, you pay exactly 0% in overpayments or extra fees. The purchase price is split into 3 equal monthly parts. The partner store pays a small merchant fee (MDR) to boost its sales.",
        },
        {
          q: "How are monthly installment payments collected?",
          a: "Payments are processed automatically on the scheduled due date from your linked Uzcard card. You receive timely notification alerts 3 days in advance.",
        },
        {
          q: "What is the initial spending limit and how can it increase?",
          a: "The starting approved limit can be up to 25,000,000 UZS. By making payments on time, your limit grows automatically.",
        },
        {
          q: "Can I repay my installments early?",
          a: "Yes, absolutely. You can pay off remaining installments at any time via the Hissa mobile app with zero penalties or additional charges.",
        },
      ],
      merchants: [
        {
          q: "How long does it take to connect a store to Hissa?",
          a: "With OneID and E-IMZO digital signing, online onboarding takes only 5–15 minutes. You can start accepting customer payments within 1–2 business days.",
        },
        {
          q: "When are sales funds deposited into the merchant account?",
          a: "Under the T+2 settlement schedule, full transaction funds (minus commission) are transferred to your bank account within 2 business days.",
        },
        {
          q: "What happens if a customer defaults or delays payment?",
          a: "Uzcard and co-funding banks absorb 100% of the credit default risk. Your business is guaranteed to receive full payout with zero risk.",
        },
        {
          q: "Do I need special expensive POS hardware?",
          a: "No, Hissa works seamlessly with your existing Uzcard payment terminals or through TezQR codes on a smartphone or cashier tablet.",
        },
      ],
    },
    modal: {
      title: "Become a Hissa Partner",
      subtitle: "Fill in the details below, and our business team will contact you within 15 minutes",
      companyName: "Company or Store Name",
      companyPlaceholder: "e.g., TexnoSmart LLC",
      inn: "Company TIN (STIR)",
      innPlaceholder: "9-digit Tax ID",
      phone: "Phone Number",
      phonePlaceholder: "+998 90 123 45 67",
      category: "Business Sector",
      categoryRetail: "Retail & Consumer Goods",
      categoryElectronics: "Electronics & Home Appliances",
      categoryFashion: "Fashion, Apparel & Shoes",
      categoryServices: "Services & Other",
      turnover: "Monthly Revenue",
      turnover1: "Up to 50M UZS",
      turnover2: "50M - 300M UZS",
      turnover3: "Over 300M UZS",
      submit: "Submit Application",
      successMessage: "Application submitted successfully! Our business development representative will contact you shortly.",
      successDesc: "Our specialist will contact you via the provided phone number and help onboard your store within 15 minutes.",
      close: "Close",
    },
    footer: {
      tagline: "The first national BNPL service in the Uzcard ecosystem. Buy now, pay later.",
      colShoppers: "Shoppers",
      colMerchants: "Merchants",
      colCompany: "Company",
      colSupport: "Support",
      supportPhone: "+998 71 200 00 00",
      supportHours: "24/7 Customer Care",
      copyright: "© 2026 UZCARD Hissa. All rights reserved.",
      licenseText: "Operating in full compliance with the Central Bank of the Republic of Uzbekistan.",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
    },
  },
};
