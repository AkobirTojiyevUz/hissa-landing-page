export type Language = 'uz' | 'uz_lat' | 'ru' | 'en';

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
    backToTop: string;
    languageSelect: string;
    toggleTheme: string;
    openMenu: string;
    close: string;
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
  audience: {
    shoppers: string;
    merchants: string;
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
    step4Num: string;
    step4Title: string;
    step4Desc: string;
    step4Highlight: string;
    screenAlt: string;
  };
  eligibility: {
    eyebrow: string;
    title: string;
    requirement: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step1Note: string;
    step2Note: string;
    ctaBtn: string;
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
    comparePlansTitle: string;
    plan3Months: string;
    plan6Months: string;
    plan12Months: string;
    colToday: string;
    colMonthly: string;
    colTotal: string;
    colOverpay: string;
    zeroOverpay: string;
    recommended: string;
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
    auto: string;
    shopBtn: string;
    upToMonth: string;
    channelOnline: string;
    channelInStore: string;
    channelBoth: string;
    viewBranchesBtn: string;
    categoryLabels: {
      electronics: string;
      fashion: string;
      home: string;
      auto: string;
      supermarket: string;
    };
    popularProducts: {
      texnomart: string;
      mediapark: string;
      korzinka: string;
      asaxiy: string;
      ishonch: string;
      terrapro: string;
      olcha: string;
      defacto: string;
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
    userLocationLabel: string;
    branchListTitle: string;
    mapControlsHint: string;
    yandexMapBadge: string;
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
    // B2B Growth Calculator
    calcTitle: string;
    calcSubtitle: string;
    turnoverLabel: string;
    projectedGrowthLabel: string;
    avgCheckLabel: string;
    newShoppersLabel: string;
    calcApplyBtn: string;
    // Solutions Matrix
    solutionsTitle: string;
    solutionsSubtitle: string;
    solRetailTitle: string;
    solRetailDesc: string;
    solRetailBadge: string;
    solEcomTitle: string;
    solEcomDesc: string;
    solEcomBadge: string;
    solEnterpriseTitle: string;
    solEnterpriseDesc: string;
    solEnterpriseBadge: string;
    solServicesTitle: string;
    solServicesDesc: string;
    solServicesBadge: string;
    // Comparison Table
    compareTitle: string;
    compareSubtitle: string;
    compareHissa: string;
    compareBank: string;
    compRow1: string;
    compRow1Hissa: string;
    compRow1Bank: string;
    compRow2: string;
    compRow2Hissa: string;
    compRow2Bank: string;
    compRow3: string;
    compRow3Hissa: string;
    compRow3Bank: string;
    compRow4: string;
    compRow4Hissa: string;
    compRow4Bank: string;
    compRow5: string;
    compRow5Hissa: string;
    compRow5Bank: string;
    // 3-Step Onboarding
    stepsTitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    // Direct Application
    formTitle: string;
    formSubtitle: string;
    formSuccess: string;
    formSuccessDesc: string;
    settlementLabel: string;
    settlementValue: string;
    riskGuarantee: string;
    compareBadge: string;
    compareFeature: string;
    integrationBadge: string;
    settlementPoint: string;
    sendAnother: string;
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
  managePayments: {
    eyebrow: string;
    title: string;
    subtitle: string;
    card1Title: string;
    card1Desc: string;
    card1Btn: string;
    card2Title: string;
    card2Desc: string;
    card2Btn: string;
    card3Title: string;
    card3Desc: string;
    card3Btn: string;
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
      guaranteedCondition: "Kafolatlangan şart",
      verified: "Tasdiqlangan",
      noHiddenFees: "Yaşirin tölovlarsiz",
      walkMinutes: "daqiqa piyoda",
      meters: "m",
      km: "km",
      openYandexMaps: "Yandex Xaritada oçiş",
      openGoogleMaps: "Google Xaritada oçiş",
      backToTop: "Yuqoriga qaytiş",
      languageSelect: "Tilni tanlaş",
      toggleTheme: "Mavzuni almaştiriş",
      openMenu: "Menyuni oçiş",
      close: "Yopiş",
    },
    nav: {
      howItWorks: "Qanday işlaydi?",
      calculator: "Kalkulyator",
      stores: "Dökonlar",
      map: "Xarita",
      app: "Ilova",
      forBusiness: "Biznes uçun",
      security: "Xavfsizlik",
      faq: "Köp söraladigan savollar",
      partnerCta: "Hamkor böliş",
      getAppCta: "Ilovani oliş",
    },
    audience: {
      shoppers: "Xaridorlarga",
      merchants: "Biznes uçun (B2B)",
    },
    hero: {
      badge: "Uzcard ekotizimidagi birinçi milliy BNPL xizmati",
      titlePart1: "Bugun oling.",
      titleHighlight: "Hissa bilan",
      titlePart2: "bölib tölang.",
      description: "0-0-3 taklifida xarid summasini 3 oyga ortiqça tölovsiz böling. 6 va 12 oylik takliflar şartlarini kalkulyatorda köring.",
      startCta: "Hamkor dökonlarni köriş",
      calcCta: "Tölovni hisoblaş",
      stat1Value: "5 000+",
      stat1Label: "Hamkor dökonlar",
      stat2Value: "0%",
      stat2Label: "Ortiqça tölov (0-0-3)",
      stat3Value: "2 daqiqa",
      stat3Label: "Tezkor limit beriş",
      stat4Value: "25 mln söm",
      stat4Label: "Maksimal xarid limiti",
      cardHolder: "Uzcard BNPL Karta",
      availableLimit: "Mavjud limit",
      limitAmount: "12 500 000 UZS",
      payWithQr: "TezQR bilan tölaş",
      recentPurchase: "Sönggi xarid",
      purchaseStore: "Texnomart · iPhone 15 Pro",
      purchaseAmount: "14 400 000 UZS",
      installmentProgress: "1/3 tölandi (4 800 000 UZS)",
      verifiedPill: "0-0-3 Tasdiqlangan",
      zeroInterestPill: "0% Foiz · 0 UZS",
      noHiddenPill: "Yaşirin tölovlarsiz",
      activeStatus: "Faol",
    },
    ticker: {
      label: "Özbekistonning 5 000 dan ortiq yetakçi brendlari biz bilan hamkorlik qiladi",
    },
    whyHissa: {
      eyebrow: "Nega aynan Hissa?",
      title: "Zamonaviy, şaffof va oson moliyaviy yeçim",
      subtitle: "Biz tölov jarayonini xaridor va dökon uçun birdek oson, xavfsiz va foydali qildik.",
      card1Title: "Haqiqiy 0% foiz va 0 komissiya",
      card1Desc: "0-0-3 modeli böyiça heç qanday yaşirin tölovlar, suğurta yoki komissiya yöq. Mahsulot narxi 3 ga bölinadi, tamom.",
      card1Badge: "0-0-3 Model",
      card2Title: "Mavjud Uzcard kartangiz yetarli",
      card2Desc: "Yangi bank kartasi oçiş yoki hujjat töplaş şart emas. Özingizning Uzcard kartangiz orqali 2 daqiqada faollaştiring.",
      card2Badge: "Uzcard Ekotizimi",
      card3Title: "TezQR orqali 3 soniyada tölov",
      card3Desc: "Kassada uzun navbatlarsiz, şunçaki smartfon kamerasi orqali TezQR kodni skanerlang va tölovni tasdiqlang.",
      card3Badge: "TezQR Integratsiya",
      card4Title: "Aqlli va avtomatik nazorat",
      card4Desc: "Mobil ilova tölov sanalarini oldindan eslatadi va kartangizdan avtomatik yeçib oladi. Jarimalar haqida unuting.",
      card4Badge: "Aqlli Ilova",
      guaranteedCondition: "Kafolatlangan şart",
    },
    howItWorks: {
      eyebrow: "Qulaylik formulasi",
      title: "Hissa bilan xarid qiliş qanday işlaydi?",
      subtitle: "Bor-yöği 3 ta oddiy qadam va orzuingizdagi xarid sizning qölingizda.",
      step1Num: "01",
      step1Title: "Ilovani yuklang va limit oling",
      step1Desc: "Hissa ilovasini yuklab oling, telefon raqam va OneID / JŞŞIR orqali 2 daqiqada 25 000 000 sömgaça xarid limitiga ega böling.",
      step1Highlight: "Passport yoki OneID orqali",
      step2Num: "02",
      step2Title: "Dökonga kiring va tovar tanlang",
      step2Desc: "5 000 dan ortiq hamkor dökonlarimizdan biriga boring yoki onlayn buyurtma bering. Kassada Hissa tölovini tanlang.",
      step2Highlight: "Texnika, kiyim, mebel",
      step3Num: "03",
      step3Title: "TezQR bilan bölib tölang",
      step3Desc: "QR kodni skanerlang. Bugun 0 söm tölaysiz, tovar esa darhol sizniki. Qolgan qismi 3 oy davomida teng uluşda yeçiladi.",
      step3Highlight: "0% ortiqça tölov",
      bannerTitle: "Bugunoq xarid qilişga tayyormisiz?",
      bannerDesc: "Ilovani bepul yuklab oling va birinçi xaridingiz uçun tasdiqlangan limitni darhol oling.",
      bannerBtn: "Hissa ilovasini yuklaş",
      step4Num: "04",
      step4Title: "Tölovlarni ilovada boşqaring",
      step4Desc: "Keyingi tölov sanasi, summasi va keşbek balansi doim köz oldingizda. Ilova tölovdan oldin eslatadi va kartangizdan avtomatik yeçadi.",
      step4Highlight: "Avtomatik yeçib olinadi",
      screenAlt: "Hissa ilovasi ekrani",
    },
    eligibility: {
      eyebrow: "Foydalaniş şartlari",
      title: "Hissa’dan kim foydalanişi mumkin?",
      requirement: "Hissa’dan foydalanişni boşlaş uçun özingizga tegişli UZCARD kartasi va telefon raqamingiz kerak.",
      step1Title: "Şaxsingizni tasdiqlang",
      step1Desc: "Hissa ilovasida OneID orqali şaxsingizni tasdiqlang.",
      step2Title: "Xarid limitingizni tekşiring",
      step2Desc: "Arizangiz körib çiqilgaç, natijani ilovada körasiz. Limit tasdiqlansa, xarid uçun qança mablağdan foydalanişingiz mumkinligi ham körsatiladi.",
      step1Note: "OneID orqali 2 daqiqada",
      step2Note: "25 000 000 sömgaça xarid limiti",
      ctaBtn: "Ilovada limitni tekşiriş",
    },
    calculator: {
      eyebrow: "Şaffof hisob-kitob",
      title: "Tölov kalkulyatori",
      subtitle: "Xarid summasini va muddatni tanlang, oylik tölovni bir zumda köring.",
      amountLabel: "Xarid summasi:",
      termLabel: "Bölib tölaş muddati:",
      month3: "3 oy",
      month6: "6 oy",
      month12: "12 oy",
      month3Badge: "0% Ortiqça tölov",
      month6Badge: "Katta qulaylik",
      month12Badge: "Katta xaridlar uçun",
      cardTodayPay: "Bugun tölanadi",
      cardMonthlyPay: "Oylik tölov",
      cardTotalPay: "Jami tölov",
      cardOverpay: "Ortiqça tölov",
      zeroSum: "0 UZS",
      scheduleTitle: "Tölovlar jadvali (taqvim)",
      applyCta: "Uşbu summa uçun limit oliş",
      successToast: "✓ Limit hisoblandi! Ilovaga yönaltirilmoqda...",
      disclaimer: "0-0-3 muddatida qöşimça foiz olinmaydi. 6 va 12 oylik tariflarda hamkor dökon aksiyalari va bank şartlari amal qiladi.",
      monthPrefix: "-oy",
      daysAfter: "kundan söng",
      comparePlansTitle: "Qisqa tarif taqqoslaş (3 ta muddat bir qaraşda)",
      plan3Months: "3 oy (0-0-3)",
      plan6Months: "6 oy",
      plan12Months: "12 oy",
      colToday: "Bugun tölanadi",
      colMonthly: "Oylik tölov",
      colTotal: "Jami summa",
      colOverpay: "Ortiqça tölov",
      zeroOverpay: "0 UZS (0%)",
      recommended: "Tavsiya etiladi",
    },
    stores: {
      eyebrow: "Keng tanlov",
      title: "Özbekistonning eng yaxşi dökonlari",
      subtitle: "Elektronika, kiyim-keçak, mebel va oziq-ovqat mahsulotlarini Hissa bilan xarid qiling.",
      searchPlaceholder: "Dökon yoki brend qidiriş...",
      all: "Barçasi",
      electronics: "Elektronika & Texnika",
      fashion: "Kiyim & Poyabzal",
      home: "Uy & Mebel",
      auto: "Avto & Xizmatlar",
      shopBtn: "Dökonda xarid qiliş",
      upToMonth: "oygaça bölib tölaş",
      channelOnline: "Onlayn",
      channelInStore: "Filialda",
      channelBoth: "Onlayn & Filialda",
      viewBranchesBtn: "Filiallarni köriş",
      categoryLabels: {
        electronics: "Elektronika",
        fashion: "Kiyim & Poyabzal",
        home: "Uy & Mebel",
        auto: "Avto & Xizmatlar",
        supermarket: "Supermarket",
      },
      popularProducts: {
        texnomart: "Smartfonlar va maişiy texnika",
        mediapark: "Televizorlar, muzlatgiçlar",
        korzinka: "Oziq-ovqat va uy-rözğor",
        asaxiy: "Smartfonlar, noutbuklar va kitoblar",
        ishonch: "Mebel va elektrotexnika",
        terrapro: "Zamonaviy erkaklar kiyimi",
        olcha: "Gadjetlar va maişiy texnika",
        defacto: "Ayollar, erkaklar va bolalar kiyimi",
        makro: "Katta xaridlar va maişiy tovarlar",
      },
    },
    map: {
      eyebrow: "Geolokatsiya va xarita",
      title: "Sizga eng yaqin Hissa hamkor dökonlari",
      subtitle: "Xaritada real vaqtda köring — 5 000 dan ortiq dökonlar yoningizda. Istalgan filialga boring va TezQR bilan foizsiz bölib tölang.",
      yourLocation: "Sizning joylaşuvingiz",
      nearbyTab: "Eng yaqin dökonlar",
      allStoresTab: "Barça filiallar",
      searchPlaceholder: "Dökon, tuman yoki manzilni qidiriş...",
      distance: "masofada",
      openNow: "Hozir oçiq",
      getDirections: "Marşrut çiziş",
      viewProducts: "Dökonga ötiş",
      filterAll: "Barçasi",
      storesFound: "ta hamkor nuqta topildi",
      selectedStoreBadge: "Tanlangan dökon",
      routeDrawn: "Optimal marşrut çizildi",
      openInYandex: "Yandex Xaritada oçiş",
      openInGoogle: "Google Xaritada oçiş",
      categoryElectronics: "Elektronika",
      categoryFashion: "Kiyim & Moda",
      categorySupermarket: "Supermarket",
      userLocationLabel: "Toşkent, Çilonzor tumani",
      branchListTitle: "Filiallar röyxati",
      mapControlsHint: "Xaritani siljiting va kattalaştiring",
      yandexMapBadge: "Yandex Xarita",
    },
    mobileApp: {
      eyebrow: "Barçasi bir ilovada",
      title: "Hissa mobil ilovasi — sizning şaxsiy moliyaviy hamkoringiz",
      subtitle: "Limitlarni boşqaring, TezQR bilan bir tegişda tölang va tölovlar jadvalini qulay nazorat qiling.",
      tabCard: "Karta & Limit",
      tabQr: "TezQR Tölov",
      tabSchedule: "Grafik & Tarix",
      benefit1Title: "Keçikişlarsiz avto-tölov",
      benefit1Desc: "Tölov kunlari haqida qayğurmang — ilova öz vaqtida bildirişnoma yuboradi va kartangizdan avtomatik yeçadi.",
      benefit2Title: "Xavfsiz biometrik kiriş",
      benefit2Desc: "Face ID va barmoq izi orqali tezkor himoyalangan avtorizatsiya va operatsiyalarni tasdiqlaş.",
      benefit3Title: "Eksklyuziv keşbek va aksiyalar",
      benefit3Desc: "Faqat Hissa foydalanuvçilari uçun hamkor dökonlardan maxsus çegirmalar va keşbeklar.",
      scanQrToDownload: "Ilovani yuklaş uçun QR-kodni kamerangiz bilan skanerlang",
      availableOn: "Mavjud platformalar:",
      cardSubtitle: "Mavjud xarid limiti",
      totalLimitLabel: "Umumiy limit",
      spentLabel: "Sarflangan",
      recentPaymentsTitle: "Sönggi tölovlar",
      scanQrCashier: "Kassadagi QR kodni körsating",
      tezQrIntegration: "TezQR tölov tizimi",
      payTodayZero: "Bugun: 0 UZS · Keyin bölib tölang",
      upcomingPaymentsTitle: "Yaqinlaşayotgan tölovlar",
      payment1Paid: "1-tölov tölandi",
      payment2Next: "2-tölov (Navbatdagi)",
      payment3Final: "3-tölov (Yakuniy)",
      daysLeft: "kundan söng",
    },
    merchant: {
      eyebrow: "Biznes hamkorlik",
      title: "Hissa bilan savdo aylanmangizni oşiring",
      subtitle: "Mijozlaringizga foizsiz bölib tölaş imkonini bering va savdoni yangi bosqiçga olib çiqing.",
      stat1Value: "+74%",
      stat1Label: "Örtaça çek miqdorining ösişi",
      stat2Value: "+45%",
      stat2Label: "Yangi mijozlar oqimi",
      stat3Value: "T+2",
      stat3Label: "Kafolatlangan hisob-kitob (iş kuni)",
      stat4Value: "0%",
      stat4Label: "Kredit qaytmaslik xavfi (0 risk)",
      feature1Title: "100% Tölov kafolati",
      feature1Desc: "Mijoz qanday tölaşidan qat'i nazar, tovar summasi 2 iş kunida töliq sizning hisobingizga tuşadi. Kredit xatarini biz öz zimmamizga olamiz.",
      feature2Title: "Tezkor OneID integratsiyasi",
      feature2Desc: "Heç qanday qoğozbozliksiz, E-IMZO va OneID orqali 5 daqiqada onlayn ariza topşiring va şartnoma imzolang.",
      feature3Title: "TezQR va POS-terminallar",
      feature3Desc: "Mavjud Uzcard terminallaringiz yoki onlayn saytingizga oson integratsiya qilinadi. Alohida qimmat uskuna sotib oliş şart emas.",
      feature4Title: "Keng reklama maydoni",
      feature4Desc: "Hissa mobil ilovasidagi millionlab faol foydalanuvçilar orasida öz dökoningizni bepul reklama qiling va mijozlar bazangizni kengaytiring.",
      ctaCardTitle: "Dökoningizni bugunoq Hissaga ulang",
      ctaCardDesc: "Onlayn ariza qoldiring, mutaxassislarimiz 15 daqiqa içida siz bilan boğlanib, integratsiyani boşlaydi.",
      ctaBtn: "Hamkorlik arizasini topşiriş",
      // B2B Growth Calculator
      calcTitle: "Savdo ösişi kalkulyatori",
      calcSubtitle: "Oylik savdo aylanmangizni tanlang va Hissa bilan kutilayotgan ösiş dinamikasini hisoblang.",
      turnoverLabel: "Hozirgi oylik savdo aylanmangiz:",
      projectedGrowthLabel: "Kutilayotgan oylik qöşimça aylanma:",
      avgCheckLabel: "Örtaça çek miqdori:",
      newShoppersLabel: "Yangi xaridorlar oqimi:",
      calcApplyBtn: "Dökoningizni Hissaga ulab hisoblaş",
      // Solutions Matrix
      solutionsTitle: "Barça savdo formatlari uçun tayyor yeçimlar",
      solutionsSubtitle: "Çakana dökon, kassa zanjirlari yoki yirik internet-dökon — Hissa har qanday biznes infratuzilmasiga tez moslaşadi.",
      solRetailTitle: "Çakana savdo & Dökonlar (Retail)",
      solRetailDesc: "Mavjud Uzcard POS-terminallaringiz yoki kassa yonidagi TezQR stendlari orqali heç qanday yangi apparat sotib olmasdan ulanadi.",
      solRetailBadge: "1 daqiqada faol",
      solEcomTitle: "Internet-dökonlar & E-commerce",
      solEcomDesc: "Telegram botlar, veb-saytlar, OpenCart, WooCommerce va qulay REST API orqali onlayn tölovlarni bir zumda qabul qiling.",
      solEcomBadge: "Oçiq REST API",
      solEnterpriseTitle: "Yirik savdo tarmoqlari & FMCG",
      solEnterpriseDesc: "1C, IIKO, R-Keeper bilan töliq avtomatlaştiriş, maxsus ko-marketing dasturlari va şaxsiy B2B menejer yordami.",
      solEnterpriseBadge: "Enterprise SLA",
      solServicesTitle: "Xizmat körsatiş, Tibbiyot & Ta'lim",
      solServicesDesc: "Öquv markazlari, xususiy klinikalar, fitnes va turizm kompaniyalari uçun xizmatlarni qismlarga bölib tölaş havolalari.",
      solServicesBadge: "Tölov havolalari",
      // Comparison Table
      compareTitle: "Nega oddiy bank krediti emas, aynan Hissa BNPL?",
      compareSubtitle: "Klassik bank kreditlari bilan taqqoslang va savdongiz uçun eng samarali tölov vositasini tanlang.",
      compareHissa: "Uzcard Hissa BNPL",
      compareBank: "An'anaviy bank krediti",
      compRow1: "Mijoz arizasini körib çiqiş tezligi",
      compRow1Hissa: "2 daqiqa (Raqamli avto-skoring)",
      compRow1Bank: "1-3 iş kuni (Uzoq tekşiruv)",
      compRow2: "Talab qilinadigan hujjatlar",
      compRow2Hissa: "Faqat OneID / JŞŞIR, 0 ta qoğoz",
      compRow2Bank: "Daromad ma'lumotnomasi, kafil, nusxalar",
      compRow3: "Xaridor uçun foiz stavkasi",
      compRow3Hissa: "0% ortiqça tölov (0-0-3 tarifida)",
      compRow3Bank: "24% – 36% yillik foiz ustamasi",
      compRow4: "Dökonga pul tuşiş muddati",
      compRow4Hissa: "T+2 kafolatlangan bank ötkazmasi",
      compRow4Bank: "Mijoz töloviga boğliq yoki T+7 gaça",
      compRow5: "Kredit qaytmaslik xatari",
      compRow5Hissa: "0% risk (Barça risklarni Uzcard oladi)",
      compRow5Bank: "Dökon yoki mijoz zimmasida",
      // 3-Step Onboarding
      stepsTitle: "Dökonni Hissaga ulaşning 3 ta oddiy qadami",
      step1Title: "Onlayn ariza",
      step1Desc: "STIR (INN) va aloqa raqamingizni kiriting — bu 2 daqiqa vaqt oladi.",
      step2Title: "E-IMZO bilan şartnoma",
      step2Desc: "Ofisga bormasdan, 100% masofadan Didox yoki Soliq orqali şartnoma imzolang.",
      step3Title: "Savdoni boşlang",
      step3Desc: "1-2 iş kunida TezQR va POS orqali tölovlarni qabul qilişni boşlang.",
      // Direct Application
      formTitle: "Hamkorlik arizasini topşiriş",
      formSubtitle: "Kompaniya ma'lumotlaringizni qoldiring, B2B mutaxassisimiz 15 daqiqada boğlanadi va ulanişga yordam beradi.",
      formSuccess: "Arizangiz qabul qilindi!",
      formSuccessDesc: "Mutaxassisimiz kiritilgan raqam orqali boğlanadi va dökoningizni tizimga ulab beradi.",
      settlementLabel: "Tölov kafolati",
      settlementValue: "T+2 kun",
      riskGuarantee: "Barça kredit risklari va tölovlarni Uzcard kafolatlaydi",
      compareBadge: "Taqqoslaş",
      compareFeature: "Xususiyat",
      integrationBadge: "B2B integratsiya",
      settlementPoint: "T+2 kafolatlangan bank hisob-kitobi",
      sendAnother: "Yana ariza yuboriş",
    },
    security: {
      eyebrow: "Işonç va Xavfsizlik",
      title: "Bank darajasidagi xavfsizlik va Uzcard kafolati",
      subtitle: "Sizning mablağlaringiz va şaxsiy ma'lumotlaringiz eng ilğor xalqaro standartlar asosida himoyalangan.",
      card1Title: "Uzcard Milliy Tölov Tizimi",
      card1Desc: "Özbekistonning eng işonçli va yirik tölov infratuzilmasi zaminida qurilgan arxitektura.",
      card2Title: "PCI DSS v4.0.1 Sertifikati",
      card2Desc: "Xalqaro tölov kartalari xavfsizligi böyiça eng sönggi xavfsizlik standarti va şifrlaş.",
      card3Title: "Markaziy Bank Litsenziyasi",
      card3Desc: "Özbekiston Respublikasi Markaziy Banki qonunçiligi va moliyaviy qoidalariga töliq muvofiq.",
      card4Title: "Banklararo Kafillik Tizimi",
      card4Desc: "Yetakçi davlat va tijorat banklari bilan töğridan-töğri integratsiyalaşgan barqaror ko-fanding.",
      card1Badge: "Milliy Ekotizim",
      card2Badge: "PCI DSS v4.0.1",
      card3Badge: "MB Reglamenti",
      card4Badge: "Bank Kafilligi",
      certifiedBadge: "100% Sertifikatlangan",
      coFundingTitle: "Likvidlik va hisob-kitob böyiça yetakçi bank hamkorlarimiz",
    },
    faq: {
      eyebrow: "Savollaringiz bormi?",
      title: "Köp söraladigan savollar",
      subtitle: "Hissa xizmati, tölovlar va hamkorlik böyiça barça javoblar.",
      shopperTab: "Xaridorlar uçun",
      merchantTab: "Biznes uçun",
      shoppers: [
        {
          q: "Hissa xizmatidan foydalaniş uçun qanday hujjatlar kerak?",
          a: "Faqatgina özingizning Uzcard kartangiz, telefon raqamingiz va JŞŞIR (OneID) kifoya. Yangi karta oçiş, daromad haqida ma'lumotnoma töplaş yoki kafil topiş talab etilmaydi.",
        },
        {
          q: "Haqiqatan ham 0% foizmi? Qayerdan foyda köriladi?",
          a: "Ha! 0-0-3 tarifida xaridor uçun mutlaqo 0% ortiqça tölov. Xarid summasi teng 3 qismga bölinadi. BNPL komissiyasini (MDR) savdosini oşirişni istagan hamkor dökon tölab beradi.",
        },
        {
          q: "Oylik tölovlar qanday amalga oşiriladi?",
          a: "Tölovlar avtomatlaştirilgan. Har oy belgilangan sanada Hissa ilovasiga ulangan Uzcard kartangizdan kerakli summa yeçib olinadi. Ilova sizni 3 kun oldin eslatib qöyadi.",
        },
        {
          q: "Limit miqdori qança va uni qanday oşiriş mumkin?",
          a: "Boşlanğiç tasdiqlangan limit 25 000 000 sömgaça bölişi mumkin. Öz vaqtida tölovlarni amalga oşirişingiz bilan tizim sizning limitingizni avtomatik oşirib boradi.",
        },
        {
          q: "Tölovni muddatidan oldin yopiş mumkinmi?",
          a: "Ha, albatta. Istalgan vaqtda Hissa mobil ilovasi orqali barça qolgan qismlarni bir zumda heç qanday jarima yoki qöşimça tölovlarsiz tölaşingiz mumkin.",
        },
        {
          q: "Kartada pul yetmasa nima böladi?",
          a: "Tölov sanasida kartangizda yetarli mablağ bölmasa, tizim bir neça kun davomida tölovni avtomatik takrorlaydi va ilovada eslatma bildirişnomalari yuboradi. Jarima yoki penya qöllanilmasligi uçun mablağni öz vaqtida töldiriş tavsiya etiladi.",
        },
        {
          q: "Tovarni qaytarsam, tölov jadvali qanday özgaradi?",
          a: "Hamkor dökonga tovarni qaytarganingizda, dökon tizimda bekor qilişni tasdiqlaydi. Şundan söng tölangan barça qismlar kartangizga qaytariladi va keyingi tölovlar jadvali avtomatik ravişda yopiladi.",
        },
        {
          q: "Birinçi tölov qaçon yeçiladi?",
          a: "Hissa 0-0-3 tarifida xarid paytida birinçi tölov — 0 söm! Birinçi oylik tölov xarid qilingan kundan boşlab roppa-rosa 30 kun ötgaç, belgilangan sanada kartangizdan yeçiladi.",
        },
        {
          q: "Tölov böyiça yordamni qayerdan olaman?",
          a: "Tölovlar, muddatlar yoki qaytarişlar böyiça savollaringiz bölsa, Hissa ilovasidagi 24/7 onlayn çat, Telegram qöllab-quvvatlaş boti (@hissauz_support) yoki +998 71 200 00 00 telefon raqami orqali yordam olişingiz mumkin.",
        },
      ],
      merchants: [
        {
          q: "Dökonni Hissa tizimiga ulaş qança vaqt oladi?",
          a: "OneID va E-IMZO integratsiyasi tufayli ariza topşiriş va şartnoma imzolaş 5-15 daqiqa davom etadi. 1-2 iş kunida tölovlarni qabul qilişni boşlaysiz.",
        },
        {
          q: "Sotilgan mahsulot pullari qaçon dökon hisobiga tuşadi?",
          a: "T+2 reglamentiga muvofiq, xaridor buyumni olganidan söng 2 iş kuni içida töliq summa (komissiya çegirilgan holda) hisob-raqamingizga ötkazib beriladi.",
        },
        {
          q: "Agar mijoz tölovni keçiktirsa yoki tölamasa nima böladi?",
          a: "Barça kredit risklarini Uzcard va hamkor banklar öz zimmasiga oladi. Dökon öz mablağini 100% kafolat bilan oladi va mijoz bilan munosabatlarga aralaşmaydi.",
        },
        {
          q: "Dökonga alohida qimmat uskuna sotib oliş kerakmi?",
          a: "Yöq, mavjud Uzcard POS-terminallaringiz yoki smartfon ekranidagi TezQR kodi orqali tölovlar bir zumda qabul qilinadi.",
        },
      ],
    },
    managePayments: {
      eyebrow: "Tölovlar boşqaruvi",
      title: "Xarid qildingizmi? Tölovlaringizni boşqaring",
      subtitle: "Keyingi tölov sanasi, summasi va tölov tarixini Hissa ilovasida köring.",
      card1Title: "Tölov jadvalini köriş",
      card1Desc: "Keyingi tölov qaçon va qança bölişini tekşiring.",
      card1Btn: "Ilovadagi jadval",
      card2Title: "Tölov holatini köriş",
      card2Desc: "Tölovingiz amalga oşganini ilovada tekşiring yoki muddatidan oldin tölang.",
      card2Btn: "Tölov bölimini oçiş",
      card3Title: "Yordam oliş",
      card3Desc: "Tölov, keçikiş yoki tovarni qaytariş böyiça savolingiz bölsa, Hissa yordam xizmatiga murojaat qiling.",
      card3Btn: "Qöllab-quvvatlaş xizmati",
    },
    modal: {
      title: "Hissa hamkoriga aylaning",
      subtitle: "Ma'lumotlaringizni qoldiring, mutaxassisimiz 15 daqiqada boğlanadi",
      companyName: "Kompaniya yoki dökon nomi",
      companyPlaceholder: "Masalan: TexnoSmart MÇJ",
      inn: "STIR (INN)",
      innPlaceholder: "9 xonali STIR raqamingiz",
      phone: "Telefon raqamingiz",
      phonePlaceholder: "+998 90 123 45 67",
      category: "Faoliyat sohasi",
      categoryRetail: "Çakana savdo (Retail)",
      categoryElectronics: "Elektronika va maişiy texnika",
      categoryFashion: "Kiyim, poyabzal va aksessuarlar",
      categoryServices: "Xizmat körsatiş va boşqalar",
      turnover: "Oylik savdo aylanmasi",
      turnover1: "50 mln sömgaça",
      turnover2: "50 mln - 300 mln söm",
      turnover3: "300 mln sömdan yuqori",
      submit: "Arizani yuboriş",
      successMessage: "Arizangiz muvaffaqiyatli qabul qilindi! Tez orada mutaxassisimiz siz bilan boğlanadi.",
      successDesc: "Mutaxassisimiz kiritilgan telefon raqami orqali boğlanadi va 15 daqiqa içida dökoningizni ulab beradi.",
      close: "Yopiş",
    },
    footer: {
      tagline: "Uzcard ekotizimidagi birinçi milliy BNPL xizmati. Bugun oling, bölib tölang.",
      colShoppers: "Xaridorlarga",
      colMerchants: "Dökonlarga",
      colCompany: "Kompaniya",
      colSupport: "Boğlaniş",
      supportPhone: "+998 71 200 00 00",
      supportHours: "24/7 Qöllab-quvvatlaş xizmati",
      copyright: "© 2026 UZCARD Hissa. Barça huquqlar himoyalangan.",
      licenseText: "Özbekiston Respublikasi Markaziy Banki talablariga muvofiq litsenziyalangan.",
      privacyPolicy: "Maxfiylik siyosati",
      termsOfService: "Ommaviy oferta",
    },
  },
  uz_lat: {
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
      backToTop: "Yuqoriga qaytish",
      languageSelect: "Tilni tanlash",
      toggleTheme: "Mavzuni almashtirish",
      openMenu: "Menyuni ochish",
      close: "Yopish",
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
    audience: {
      shoppers: "Xaridorlarga",
      merchants: "Biznes uchun (B2B)",
    },
    hero: {
      badge: "Uzcard ekotizimidagi birinchi milliy BNPL xizmati",
      titlePart1: "Bugun oling.",
      titleHighlight: "Hissa bilan",
      titlePart2: "bo‘lib to‘lang.",
      description: "0-0-3 taklifida xarid summasini 3 oyga ortiqcha to‘lovsiz bo‘ling. 6 va 12 oylik takliflar shartlarini kalkulyatorda ko‘ring.",
      startCta: "Hamkor do‘konlarni ko‘rish",
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
      step4Num: "04",
      step4Title: "To‘lovlarni ilovada boshqaring",
      step4Desc: "Keyingi to‘lov sanasi, summasi va keshbek balansi doim ko‘z oldingizda. Ilova to‘lovdan oldin eslatadi va kartangizdan avtomatik yechadi.",
      step4Highlight: "Avtomatik yechib olinadi",
      screenAlt: "Hissa ilovasi ekrani",
    },
    eligibility: {
      eyebrow: "Foydalanish shartlari",
      title: "Hissa’dan kim foydalanishi mumkin?",
      requirement: "Hissa’dan foydalanishni boshlash uchun o‘zingizga tegishli UZCARD kartasi va telefon raqamingiz kerak.",
      step1Title: "Shaxsingizni tasdiqlang",
      step1Desc: "Hissa ilovasida OneID orqali shaxsingizni tasdiqlang.",
      step2Title: "Xarid limitingizni tekshiring",
      step2Desc: "Arizangiz ko‘rib chiqilgach, natijani ilovada ko‘rasiz. Limit tasdiqlansa, xarid uchun qancha mablag‘dan foydalanishingiz mumkinligi ham ko‘rsatiladi.",
      step1Note: "OneID orqali 2 daqiqada",
      step2Note: "25 000 000 so‘mgacha xarid limiti",
      ctaBtn: "Ilovada limitni tekshirish",
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
      comparePlansTitle: "Qisqa tarif taqqoslash (3 ta muddat bir qarashda)",
      plan3Months: "3 oy (0-0-3)",
      plan6Months: "6 oy",
      plan12Months: "12 oy",
      colToday: "Bugun to'lanadi",
      colMonthly: "Oylik to'lov",
      colTotal: "Jami summa",
      colOverpay: "Ortiqcha to'lov",
      zeroOverpay: "0 UZS (0%)",
      recommended: "Tavsiya etiladi",
    },
    stores: {
      eyebrow: "Keng tanlov",
      title: "O'zbekistonning eng yaxshi do'konlari",
      subtitle: "Elektronika, kiyim-kechak, mebel va oziq-ovqat mahsulotlarini Hissa bilan xarid qiling.",
      searchPlaceholder: "Do'kon yoki brend qidirish...",
      all: "Barchasi",
      electronics: "Elektronika & Texnika",
      fashion: "Kiyim & Poyabzal",
      home: "Uy & Mebel",
      auto: "Avto & Xizmatlar",
      shopBtn: "Do'konda xarid qilish",
      upToMonth: "oygacha bo'lib to'lash",
      channelOnline: "Onlayn",
      channelInStore: "Filialda",
      channelBoth: "Onlayn & Filialda",
      viewBranchesBtn: "Filiallarni ko‘rish",
      categoryLabels: {
        electronics: "Elektronika",
        fashion: "Kiyim & Poyabzal",
        home: "Uy & Mebel",
        auto: "Avto & Xizmatlar",
        supermarket: "Supermarket",
      },
      popularProducts: {
        texnomart: "Smartfonlar va maishiy texnika",
        mediapark: "Televizorlar, muzlatgichlar",
        korzinka: "Oziq-ovqat va uy-ro'zg'or",
        asaxiy: "Smartfonlar, noutbuklar va kitoblar",
        ishonch: "Mebel va elektrotexnika",
        terrapro: "Zamonaviy erkaklar kiyimi",
        olcha: "Gadjetlar va maishiy texnika",
        defacto: "Ayollar, erkaklar va bolalar kiyimi",
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
      userLocationLabel: "Toshkent, Chilonzor tumani",
      branchListTitle: "Filiallar ro'yxati",
      mapControlsHint: "Xaritani siljiting va kattalashtiring",
      yandexMapBadge: "Yandex Xarita",
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
      // B2B Growth Calculator
      calcTitle: "Savdo o'sishi kalkulyatori",
      calcSubtitle: "Oylik savdo aylanmangizni tanlang va Hissa bilan kutilayotgan o'sish dinamikasini hisoblang.",
      turnoverLabel: "Hozirgi oylik savdo aylanmangiz:",
      projectedGrowthLabel: "Kutilayotgan oylik qo'shimcha aylanma:",
      avgCheckLabel: "O'rtacha chek miqdori:",
      newShoppersLabel: "Yangi xaridorlar oqimi:",
      calcApplyBtn: "Do'koningizni Hissaga ulab hisoblash",
      // Solutions Matrix
      solutionsTitle: "Barcha savdo formatlari uchun tayyor yechimlar",
      solutionsSubtitle: "Chakana do'kon, kassa zanjirlari yoki yirik internet-do'kon — Hissa har qanday biznes infratuzilmasiga tez moslashadi.",
      solRetailTitle: "Chakana savdo & Do'konlar (Retail)",
      solRetailDesc: "Mavjud Uzcard POS-terminallaringiz yoki kassa yonidagi TezQR stendlari orqali hech qanday yangi apparat sotib olmasdan ulanadi.",
      solRetailBadge: "1 daqiqada faol",
      solEcomTitle: "Internet-do'konlar & E-commerce",
      solEcomDesc: "Telegram botlar, veb-saytlar, OpenCart, WooCommerce va qulay REST API orqali onlayn to'lovlarni bir zumda qabul qiling.",
      solEcomBadge: "Ochiq REST API",
      solEnterpriseTitle: "Yirik savdo tarmoqlari & FMCG",
      solEnterpriseDesc: "1C, IIKO, R-Keeper bilan to'liq avtomatlashtirish, maxsus ko-marketing dasturlari va shaxsiy B2B menejer yordami.",
      solEnterpriseBadge: "Enterprise SLA",
      solServicesTitle: "Xizmat ko'rsatish, Tibbiyot & Ta'lim",
      solServicesDesc: "O'quv markazlari, xususiy klinikalar, fitnes va turizm kompaniyalari uchun xizmatlarni qismlarga bo'lib to'lash havolalari.",
      solServicesBadge: "To'lov havolalari",
      // Comparison Table
      compareTitle: "Nega oddiy bank krediti emas, aynan Hissa BNPL?",
      compareSubtitle: "Klassik bank kreditlari bilan taqqoslang va savdongiz uchun eng samarali to'lov vositasini tanlang.",
      compareHissa: "Uzcard Hissa BNPL",
      compareBank: "An'anaviy bank krediti",
      compRow1: "Mijoz arizasini ko'rib chiqish tezligi",
      compRow1Hissa: "2 daqiqa (Raqamli avto-skoring)",
      compRow1Bank: "1-3 ish kuni (Uzoq tekshiruv)",
      compRow2: "Talab qilinadigan hujjatlar",
      compRow2Hissa: "Faqat OneID / JShShIR, 0 ta qog'oz",
      compRow2Bank: "Daromad ma'lumotnomasi, kafil, nusxalar",
      compRow3: "Xaridor uchun foiz stavkasi",
      compRow3Hissa: "0% ortiqcha to'lov (0-0-3 tarifida)",
      compRow3Bank: "24% – 36% yillik foiz ustamasi",
      compRow4: "Do'konga pul tushish muddati",
      compRow4Hissa: "T+2 kafolatlangan bank o'tkazmasi",
      compRow4Bank: "Mijoz to'loviga bog'liq yoki T+7 gacha",
      compRow5: "Kredit qaytmaslik xatari",
      compRow5Hissa: "0% risk (Barcha risklarni Uzcard oladi)",
      compRow5Bank: "Do'kon yoki mijoz zimmasida",
      // 3-Step Onboarding
      stepsTitle: "Do'konni Hissaga ulashning 3 ta oddiy qadami",
      step1Title: "Onlayn ariza",
      step1Desc: "STIR (INN) va aloqa raqamingizni kiriting — bu 2 daqiqa vaqt oladi.",
      step2Title: "E-IMZO bilan shartnoma",
      step2Desc: "Ofisga bormasdan, 100% masofadan Didox yoki Soliq orqali shartnoma imzolang.",
      step3Title: "Savdoni boshlang",
      step3Desc: "1-2 ish kunida TezQR va POS orqali to'lovlarni qabul qilishni boshlang.",
      // Direct Application
      formTitle: "Hamkorlik arizasini topshirish",
      formSubtitle: "Kompaniya ma'lumotlaringizni qoldiring, B2B mutaxassisimiz 15 daqiqada bog'lanadi va ulanishga yordam beradi.",
      formSuccess: "Arizangiz qabul qilindi!",
      formSuccessDesc: "Mutaxassisimiz kiritilgan raqam orqali bog'lanadi va do'koningizni tizimga ulab beradi.",
      settlementLabel: "To‘lov kafolati",
      settlementValue: "T+2 kun",
      riskGuarantee: "Barcha kredit risklari va to‘lovlarni Uzcard kafolatlaydi",
      compareBadge: "Taqqoslash",
      compareFeature: "Xususiyat",
      integrationBadge: "B2B integratsiya",
      settlementPoint: "T+2 kafolatlangan bank hisob-kitobi",
      sendAnother: "Yana ariza yuborish",
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
        {
          q: "Kartada pul yetmasa nima bo‘ladi?",
          a: "To'lov sanasida kartangizda yetarli mablag' bo'lmasa, tizim bir necha kun davomida to'lovni avtomatik takrorlaydi va ilovada eslatma bildirishnomalari yuboradi. Jarima yoki penya qo'llanilmasligi uchun mablag'ni o'z vaqtida to'ldirish tavsiya etiladi.",
        },
        {
          q: "Tovarni qaytarsam, to‘lov jadvali qanday o‘zgaradi?",
          a: "Hamkor do'konga tovarni qaytarganingizda, do'kon tizimda bekor qilishni tasdiqlaydi. Shundan so'ng to'langan barcha qismlar kartangizga qaytariladi va keyingi to'lovlar jadvali avtomatik ravishda yopiladi.",
        },
        {
          q: "Birinchi to‘lov qachon yechiladi?",
          a: "Hissa 0-0-3 tarifida xarid paytida birinchi to'lov — 0 so'm! Birinchi oylik to'lov xarid qilingan kundan boshlab roppa-rosa 30 kun o'tgach, belgilangan sanada kartangizdan yechiladi.",
        },
        {
          q: "To‘lov bo‘yicha yordamni qayerdan olaman?",
          a: "To'lovlar, muddatlar yoki qaytarishlar bo'yicha savollaringiz bo'lsa, Hissa ilovasidagi 24/7 onlayn chat, Telegram qo'llab-quvvatlash boti (@hissauz_support) yoki +998 71 200 00 00 telefon raqami orqali yordam olishingiz mumkin.",
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
    managePayments: {
      eyebrow: "To'lovlar boshqaruvi",
      title: "Xarid qildingizmi? To‘lovlaringizni boshqaring",
      subtitle: "Keyingi to‘lov sanasi, summasi va to‘lov tarixini Hissa ilovasida ko‘ring.",
      card1Title: "To‘lov jadvalini ko‘rish",
      card1Desc: "Keyingi to‘lov qachon va qancha bo‘lishini tekshiring.",
      card1Btn: "Ilovadagi jadval",
      card2Title: "To‘lov holatini ko‘rish",
      card2Desc: "To‘lovingiz amalga oshganini ilovada tekshiring yoki muddatidan oldin to‘lang.",
      card2Btn: "To'lov bo'limini ochish",
      card3Title: "Yordam olish",
      card3Desc: "To‘lov, kechikish yoki tovarni qaytarish bo‘yicha savolingiz bo‘lsa, Hissa yordam xizmatiga murojaat qiling.",
      card3Btn: "Qo'llab-quvvatlash xizmati",
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
      backToTop: "Наверх",
      languageSelect: "Выбор языка",
      toggleTheme: "Сменить тему",
      openMenu: "Открыть меню",
      close: "Закрыть",
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
    audience: {
      shoppers: "Покупателям",
      merchants: "Бизнесу и партнерам",
    },
    hero: {
      badge: "Первый национальный BNPL-сервис в экосистеме Uzcard",
      titlePart1: "Покупайте сейчас.",
      titleHighlight: "С Hissa делите",
      titlePart2: "на части.",
      description: "0-0-3: делите стоимость покупки на 3 месяца без переплат. Условия на 6 и 12 месяцев смотрите в калькуляторе.",
      startCta: "Посмотреть магазины-партнеры",
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
      step4Num: "04",
      step4Title: "Управляйте платежами в приложении",
      step4Desc: "Дата и сумма следующего платежа и баланс кешбэка всегда под рукой. Приложение напомнит о платеже и спишет его с карты автоматически.",
      step4Highlight: "Автоматическое списание",
      screenAlt: "Экран приложения Hissa",
    },
    eligibility: {
      eyebrow: "Условия использования",
      title: "Кто может пользоваться Hissa?",
      requirement: "Чтобы начать пользоваться сервисом, вам потребуется собственная карта UZCARD и номер телефона.",
      step1Title: "Подтвердите личность",
      step1Desc: "Пройдите быструю идентификацию личности через OneID в приложении Hissa.",
      step2Title: "Проверьте лимит покупок",
      step2Desc: "После рассмотрения заявки результат появится в приложении. При одобрении отобразится доступный лимит на покупки.",
      step1Note: "Через OneID за 2 минуты",
      step2Note: "Лимит на покупки до 25 000 000 сум",
      ctaBtn: "Проверить лимит в приложении",
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
      comparePlansTitle: "Сравнение тарифов (3 срока наглядно)",
      plan3Months: "3 месяца (0-0-3)",
      plan6Months: "6 месяцев",
      plan12Months: "12 месяцев",
      colToday: "Оплата сегодня",
      colMonthly: "Ежемесячный платеж",
      colTotal: "Итого к оплате",
      colOverpay: "Переплата",
      zeroOverpay: "0 UZS (0%)",
      recommended: "Рекомендуем",
    },
    stores: {
      eyebrow: "Широкий выбор",
      title: "Лучшие магазины Узбекистана",
      subtitle: "Покупайте технику, одежду, товары для дома и продукты в рассрочку с Hissa.",
      searchPlaceholder: "Поиск магазина или бренда...",
      all: "Все категории",
      electronics: "Электроника и техника",
      fashion: "Одежда и обувь",
      home: "Дом и мебель",
      auto: "Авто и услуги",
      shopBtn: "Купить в магазине",
      upToMonth: "мес. рассрочки",
      channelOnline: "Онлайн",
      channelInStore: "В филиале",
      channelBoth: "Онлайн и в филиалах",
      viewBranchesBtn: "Посмотреть филиалы",
      categoryLabels: {
        electronics: "Электроника",
        fashion: "Одежда и обувь",
        home: "Дом и мебель",
        auto: "Авто и услуги",
        supermarket: "Супермаркет",
      },
      popularProducts: {
        texnomart: "Смартфоны и бытовая техника",
        mediapark: "Телевизоры, холодильники",
        korzinka: "Продукты и товары для дома",
        asaxiy: "Смартфоны, ноутбуки и книги",
        ishonch: "Мебель и электротехника",
        terrapro: "Стильная мужская одежда",
        olcha: "Гаджеты и бытовая техника",
        defacto: "Одежда для всей семьи",
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
      userLocationLabel: "Ташкент, Чиланзарский район",
      branchListTitle: "Список филиалов",
      mapControlsHint: "Перемещайте и масштабируйте карту",
      yandexMapBadge: "Яндекс Карты",
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
      // B2B Growth Calculator
      calcTitle: "Калькулятор роста продаж для бизнеса",
      calcSubtitle: "Выберите ваш среднемесячный оборот и оцените финансовый эффект от внедрения Hissa BNPL.",
      turnoverLabel: "Текущий ежемесячный оборот магазина:",
      projectedGrowthLabel: "Ожидаемый прирост выручки:",
      avgCheckLabel: "Рост среднего чека:",
      newShoppersLabel: "Приток новых клиентов:",
      calcApplyBtn: "Подключить магазин и увеличить продажи",
      // Solutions Matrix
      solutionsTitle: "Готовые решения для любого формата бизнеса",
      solutionsSubtitle: "Розничные магазины, сетевой ритейл или онлайн-площадки — Hissa быстро интегрируется в любые бизнес-процессы.",
      solRetailTitle: "Розничная торговля (Retail)",
      solRetailDesc: "Работает на ваших имеющихся терминалах Uzcard или через настольные стойки TezQR без закупки оборудования.",
      solRetailBadge: "Подключение за 1 день",
      solEcomTitle: "Интернет-магазины и e-commerce",
      solEcomDesc: "Модули для веб-сайтов, Telegram-ботов, OpenCart, WooCommerce и гибкий REST API для мгновенного приема платежей.",
      solEcomBadge: "Открытый REST API",
      solEnterpriseTitle: "Крупные торговые сети и FMCG",
      solEnterpriseDesc: "Интеграция с 1С, IIKO, R-Keeper, совместные федеральные маркетинговые кампании и выделенный B2B-менеджер.",
      solEnterpriseBadge: "Enterprise SLA",
      solServicesTitle: "Сфера услуг, медицина и образование",
      solServicesDesc: "Платежные ссылки и счета для языковых курсов, частных клиник, фитнес-центров и сервисных предприятий.",
      solServicesBadge: "Платежные ссылки",
      // Comparison Table
      compareTitle: "Почему Hissa выгоднее классического банковского кредита?",
      compareSubtitle: "Сравните ключевые параметры и выберите лучшее решение для масштабирования продаж.",
      compareHissa: "Uzcard Hissa BNPL",
      compareBank: "Классический кредит",
      compRow1: "Скорость рассмотрения заявки",
      compRow1Hissa: "2 минуты (Автоматический скоринг)",
      compRow1Bank: "1–3 рабочих дня (Долгие проверки)",
      compRow2: "Необходимый пакет документов",
      compRow2Hissa: "Только ПИНФЛ / OneID, 0 бумаг",
      compRow2Bank: "Справка о доходах, поручители, копии",
      compRow3: "Переплата для покупателя",
      compRow3Hissa: "0% переплаты (по тарифу 0-0-3)",
      compRow3Bank: "24% – 36% годовых процентная ставка",
      compRow4: "Срок зачисления денег магазину",
      compRow4Hissa: "Т+2 гарантированно на счет",
      compRow4Bank: "Зависит от банка (до 7 дней)",
      compRow5: "Кредитный риск невозврата",
      compRow5Hissa: "0% риска (Uzcard берет риск на себя)",
      compRow5Bank: "Риск на магазине или клиенте",
      // 3-Step Onboarding
      stepsTitle: "3 простых шага для подключения магазина",
      step1Title: "Онлайн-заявка",
      step1Desc: "Укажите ИНН компании и контактный номер телефона — это займет не более 2 минут.",
      step2Title: "Договор по ЭЦП",
      step2Desc: "Подписание через Didox или Soliq полностью удаленно без посещения отделений.",
      step3Title: "Старт продаж",
      step3Desc: "Принимайте оплаты через TezQR и POS уже через 1–2 рабочих дня.",
      // Direct Application
      formTitle: "Заявка на подключение бизнеса",
      formSubtitle: "Заполните данные компании, и наш B2B-менеджер свяжется с вами в течение 15 минут для подключения.",
      formSuccess: "Заявка успешно принята!",
      formSuccessDesc: "Наш специалист свяжется с вами по указанному номеру и поможет подключить магазин.",
      settlementLabel: "Гарантия выплаты",
      settlementValue: "T+2 дня",
      riskGuarantee: "Все кредитные риски и выплаты гарантирует Uzcard",
      compareBadge: "Сравнение",
      compareFeature: "Параметр",
      integrationBadge: "B2B-интеграция",
      settlementPoint: "Гарантированные банковские расчёты T+2",
      sendAnother: "Отправить ещё одну заявку",
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
        {
          q: "Что произойдет, если на карте недостаточно средств?",
          a: "Если в день списания на карте не хватает средств, система будет автоматически повторять попытки списания в течение нескольких дней и присылать напоминания в приложении. Рекомендуем пополнить карту вовремя, чтобы избежать штрафов.",
        },
        {
          q: "Если я верну товар, как изменится график платежей?",
          a: "При возврате товара в магазин партнер подтверждает отмену в системе Hissa. После этого все уже внесенные платежи возвращаются на вашу карту, а график оставшихся списаний автоматически аннулируется.",
        },
        {
          q: "Когда списывается первый платеж?",
          a: "По тарифу 0-0-3 первый платеж в момент покупки равен 0 сум! Первый ежемесячный платеж списывается ровно через 30 дней после совершения покупки.",
        },
        {
          q: "Где получить помощь по платежам и сервису?",
          a: "По любым вопросам вы можете обратиться в круглосуточную службу поддержки в приложении Hissa, через Telegram-бот (@hissauz_support) или по единому номеру телефона +998 71 200 00 00.",
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
    managePayments: {
      eyebrow: "Управление платежами",
      title: "Сделали покупку? Управляйте вашими платежами",
      subtitle: "Проверяйте дату и сумму следующего платежа и историю покупок в приложении Hissa.",
      card1Title: "График платежей",
      card1Desc: "Узнайте дату и точную сумму следующего списания.",
      card1Btn: "График в приложении",
      card2Title: "Статус платежей",
      card2Desc: "Проверьте успешность оплаты или погасите рассрочку досрочно.",
      card2Btn: "Раздел оплаты",
      card3Title: "Получить помощь",
      card3Desc: "Возник вопрос по возврату, задержке или оплате? Служба заботы Hissa всегда на связи.",
      card3Btn: "Служба поддержки",
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
      backToTop: "Back to top",
      languageSelect: "Language selection",
      toggleTheme: "Toggle theme",
      openMenu: "Open menu",
      close: "Close",
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
    audience: {
      shoppers: "For Shoppers",
      merchants: "For Business (B2B)",
    },
    hero: {
      badge: "The First National BNPL Service in the Uzcard Ecosystem",
      titlePart1: "Buy now.",
      titleHighlight: "Split with Hissa.",
      titlePart2: "Zero interest.",
      description: "0-0-3 plan: split your purchase into 3 monthly installments with 0% overpayment. View terms for 6 and 12 months in the calculator.",
      startCta: "Explore Partner Stores",
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
      step4Num: "04",
      step4Title: "Manage payments in the app",
      step4Desc: "Your next payment date, amount and cashback balance are always at hand. The app reminds you and charges your card automatically.",
      step4Highlight: "Automatic payments",
      screenAlt: "Hissa app screen",
    },
    eligibility: {
      eyebrow: "Eligibility & Requirements",
      title: "Who can use Hissa?",
      requirement: "To start using Hissa, all you need is your personal UZCARD bank card and mobile phone number.",
      step1Title: "Verify Your Identity",
      step1Desc: "Instantly verify your identity in the Hissa mobile app using OneID.",
      step2Title: "Check Your Shopping Limit",
      step2Desc: "Once reviewed, view your approved credit line in the app and see exactly how much you can spend.",
      step1Note: "2 minutes via OneID",
      step2Note: "Purchase limit up to 25,000,000 UZS",
      ctaBtn: "Check My Limit in App",
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
      comparePlansTitle: "Plan Comparison (3 terms at a glance)",
      plan3Months: "3 months (0-0-3)",
      plan6Months: "6 months",
      plan12Months: "12 months",
      colToday: "Pay Today",
      colMonthly: "Monthly Payment",
      colTotal: "Total Amount",
      colOverpay: "Overpayment",
      zeroOverpay: "0 UZS (0%)",
      recommended: "Recommended",
    },
    stores: {
      eyebrow: "Extensive Network",
      title: "Top stores across Uzbekistan",
      subtitle: "Shop electronics, apparel, furniture, and groceries in easy installments with Hissa.",
      searchPlaceholder: "Search store or brand...",
      all: "All Categories",
      electronics: "Electronics & Tech",
      fashion: "Fashion & Footwear",
      home: "Home & Furniture",
      auto: "Auto & Services",
      shopBtn: "Shop in Store",
      upToMonth: "months installments",
      channelOnline: "Online",
      channelInStore: "In-Store",
      channelBoth: "Online & In-Store",
      viewBranchesBtn: "View Branches",
      categoryLabels: {
        electronics: "Electronics",
        fashion: "Fashion & Footwear",
        home: "Home & Furniture",
        auto: "Auto & Services",
        supermarket: "Supermarket",
      },
      popularProducts: {
        texnomart: "Smartphones and home appliances",
        mediapark: "TVs, refrigerators, ovens",
        korzinka: "Groceries and household essentials",
        asaxiy: "Smartphones, laptops and books",
        ishonch: "Furniture and consumer electronics",
        terrapro: "Modern men's fashion",
        olcha: "Gadgets and home appliances",
        defacto: "Clothing for the whole family",
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
      userLocationLabel: "Tashkent, Chilanzar district",
      branchListTitle: "Branch Directory",
      mapControlsHint: "Pan and zoom the map freely",
      yandexMapBadge: "Yandex Maps",
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
      // B2B Growth Calculator
      calcTitle: "Merchant Sales Growth Calculator",
      calcSubtitle: "Select your monthly store revenue and estimate your projected revenue lift with Hissa BNPL.",
      turnoverLabel: "Current Monthly Sales Volume:",
      projectedGrowthLabel: "Projected Additional Revenue Lift:",
      avgCheckLabel: "Average Order Value Boost:",
      newShoppersLabel: "New Qualified Shoppers:",
      calcApplyBtn: "Connect Your Store & Boost Sales",
      // Solutions Matrix
      solutionsTitle: "Tailored Solutions for Every Business Model",
      solutionsSubtitle: "Physical retail, merchant chain, or high-volume e-commerce — Hissa seamlessly fits your transaction stack.",
      solRetailTitle: "Physical Retail & Brick-and-Mortar",
      solRetailDesc: "Works on your existing Uzcard POS terminals or tabletop TezQR stands with zero extra hardware investment.",
      solRetailBadge: "1-day Activation",
      solEcomTitle: "E-Commerce & Online Stores",
      solEcomDesc: "Pre-built modules for web checkouts, Telegram bots, OpenCart, WooCommerce, and a robust REST API.",
      solEcomBadge: "REST API & SDK",
      solEnterpriseTitle: "Enterprise Chains & Retailers",
      solEnterpriseDesc: "Full automation with 1C, IIKO, and R-Keeper, bespoke co-marketing initiatives, and a 24/7 dedicated B2B manager.",
      solEnterpriseBadge: "Enterprise SLA",
      solServicesTitle: "Services, Healthcare & Education",
      solServicesDesc: "Direct payment links and digital invoices for training centers, medical clinics, fitness clubs, and auto centers.",
      solServicesBadge: "Payment Links",
      // Comparison Table
      compareTitle: "Why Hissa BNPL vs Traditional Bank Credit?",
      compareSubtitle: "Compare key business factors and see why top merchants choose Hissa over old-school loans.",
      compareHissa: "Uzcard Hissa BNPL",
      compareBank: "Traditional Bank Loan",
      compRow1: "Application Approval Speed",
      compRow1Hissa: "2 minutes (Automated scoring)",
      compRow1Bank: "1–3 business days (Long paperwork)",
      compRow2: "Required Documentation",
      compRow2Hissa: "Only PINFL / OneID, zero paperwork",
      compRow2Bank: "Income proof, guarantors, notarized copies",
      compRow3: "Overpayment for the Buyer",
      compRow3Hissa: "0% interest (Under 0-0-3 plan)",
      compRow3Bank: "24% – 36% APR interest added",
      compRow4: "Store Payout Settlement",
      compRow4Hissa: "T+2 guaranteed interbank transfer",
      compRow4Bank: "Variable (up to 7 business days)",
      compRow5: "Default Credit Risk",
      compRow5Hissa: "0% risk (Uzcard and banks absorb 100%)",
      compRow5Bank: "Merchant or borrower bears default liability",
      // 3-Step Onboarding
      stepsTitle: "3 Frictionless Steps to Onboard Your Store",
      step1Title: "Online Application",
      step1Desc: "Submit your company TIN (STIR) and phone number in less than 2 minutes.",
      step2Title: "Digital E-IMZO Contract",
      step2Desc: "Sign the agreement digitally via Didox or Soliq with zero physical visits.",
      step3Title: "Start Accepting Payments",
      step3Desc: "Begin taking zero-risk BNPL payments via TezQR and POS within 1–2 business days.",
      // Direct Application
      formTitle: "Merchant Partnership Application",
      formSubtitle: "Enter your company details, and our B2B onboarding team will contact you within 15 minutes.",
      formSuccess: "Application Received!",
      formSuccessDesc: "Our onboarding specialist will call your registered number and guide you through immediate setup.",
      settlementLabel: "Payout guarantee",
      settlementValue: "T+2 days",
      riskGuarantee: "Uzcard guarantees all credit risks and payouts",
      compareBadge: "Comparison",
      compareFeature: "Feature",
      integrationBadge: "B2B integration",
      settlementPoint: "Guaranteed T+2 bank settlement",
      sendAnother: "Send another application",
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
        {
          q: "What happens if there are insufficient funds on my card?",
          a: "If there are insufficient funds on your card on the due date, the system will automatically retry charging over the next few days and send reminders in the app. To avoid penalties, we recommend topping up your card on time.",
        },
        {
          q: "How does the payment schedule change if I return an item?",
          a: "When you return an item to a partner store, the store confirms the cancellation in Hissa. All previously paid installments are refunded to your card, and the remaining schedule is automatically closed.",
        },
        {
          q: "When is the first installment charged?",
          a: "Under the 0-0-3 plan, the initial payment at checkout is exactly 0 UZS! Your first monthly installment is charged exactly 30 days after the purchase date.",
        },
        {
          q: "Where can I get support regarding my payments?",
          a: "If you have questions about payments, schedule dates, or returns, you can reach Hissa support 24/7 via the in-app chat, Telegram bot (@hissauz_support), or phone line at +998 71 200 00 00.",
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
    managePayments: {
      eyebrow: "Payment Management",
      title: "Made a purchase? Manage your payments",
      subtitle: "Track your upcoming due dates, amounts, and payment history directly in the Hissa mobile app.",
      card1Title: "View Payment Schedule",
      card1Desc: "Check when your next installment is due and exact amount.",
      card1Btn: "Schedule in App",
      card2Title: "Payment Status & Pay Early",
      card2Desc: "Verify your payment status or pay off remaining parts early.",
      card2Btn: "Open Payment Section",
      card3Title: "Get Help & Support",
      card3Desc: "Questions about delays, returns, or billing? Hissa care team is available 24/7.",
      card3Btn: "Contact Support",
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
