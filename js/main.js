/* ==========================================================================
   Kalyansevak Jyotish Landing Page & Legal Interactive Script
   ========================================================================== */

// --- Translation Dictionary (Multilingual Support) ---
const translations = {
    en: {
        // Navbar
        "nav-features": "Features",
        "nav-screenshots": "Screenshots",
        "nav-install": "How to Install",
        "nav-faq": "FAQ",
        "nav-contact": "Contact Us",
        "nav-download": "Download APK",
        
        // Hero Section
        "hero-badge": "<i class='fa-solid fa-dharmachakra'></i> Authentic Vedic Astrology",
        "hero-title": "Discover Your Cosmic Path with Accurate Astrological Insights",
        "hero-desc": "Calculate detailed birth charts (Kundli), analyze planetary positions, match compatibilities, and get direct consultations from India's top verified astrologers securely.",
        "hero-btn-download": "<i class='fa-solid fa-download'></i> Download APK (v1.0.0)",
        "hero-btn-features": "View App Features",
        
        // Features Section Headers
        "features-title": "Explore App Features",
        "features-desc": "Everything you need for spiritual guidance, personal analysis, and accurate horoscope calculations in one place.",
        
        // Feature Cards
        "feat-1-title": "Kundli Generation",
        "feat-1-desc": "Instant, detailed birth chart calculation based on Vedic astrology parameters and local coordinate accuracy.",
        "feat-2-title": "Kundli Analysis",
        "feat-2-desc": "In-depth planetary analysis, planetary states (Avasthas), and Dosha reports (Kalsarp, Mangal, etc.) calculated instantly.",
        "feat-3-title": "Matchmaking",
        "feat-3-desc": "Detailed 36-attribute matching (Ashtakoot Gun Milan) for marriage and relationship compatibility checks.",
        "feat-4-title": "Event Booking",
        "feat-4-desc": "Schedule online pooja ceremonies, personal video/voice calls, and consultations with certified astrologers.",
        "feat-5-title": "Digital Reports",
        "feat-5-desc": "Download and print comprehensive, professionally analyzed PDF reports covering career, finance, and health.",
        "feat-6-title": "Secure Payments",
        "feat-6-desc": "100% secure payments integrated with Cashfree. No credit card or debit card numbers are stored on our servers.",
        "feat-7-title": "Manual Payment",
        "feat-7-desc": "Alternative manual billing support and invoicing channels to assist users without access to standard online UPI.",
        "feat-8-title": "Fast Support",
        "feat-8-desc": "Dedicated customer support team and grievance helpdesk resolving all app inquiries in under 24 business hours.",
        
        // Screenshots Section Headers
        "screens-title": "Application Screenshots",
        "screens-desc": "Take a tour of our clean, intuitive, and modern app interface designed for seamless celestial navigation.",
        
        // Why Choose Us Section
        "why-title": "Why Choose Kalyansevak?",
        "why-desc": "We combine modern technological stability with authentic astronomical expertise to ensure a highly trusted service.",
        "why-1-title": "Accurate Astrology Reports",
        "why-1-desc": "Our calculation engine is built using standard ephemeris coordinate models, providing precision planetary positions.",
        "why-2-title": "Fast & Optimized Performance",
        "why-2-desc": "Designed using lightweight native frameworks to ensure rapid loads, fast document compilation, and low data consumption.",
        "why-3-title": "Secure Payments (Cashfree)",
        "why-3-desc": "PCI-DSS compliant payment system with direct tokenization. Full card data is never processed or stored on our servers.",
        "why-4-title": "Beautiful Interface",
        "why-4-desc": "A refined, peaceful color scheme paired with clean layouts and dark mode support to provide a relaxing user experience.",
        "why-5-title": "Instant Downloads",
        "why-5-desc": "Generate birth charts and detailed compatibility analysis reports in high-definition PDF instantly on your phone.",
        "why-6-title": "Reliable Live Support",
        "why-6-desc": "Dedicated customer support team available via support ticketing and email to assist with all queries within 24 hours.",
        
        // Download Section
        "down-title": "Download Kalyansevak Jyotish",
        "down-desc": "Get started instantly. Generate precise Kundli, analyze charts, and book verified astrologers. Secure payments handled via Cashfree.",
        "meta-platform-label": "Platform",
        "meta-platform-val": "Android (APK)",
        "meta-size-label": "File Size",
        "meta-size-val": "97.8 MB",
        "meta-min-label": "Min OS",
        "meta-min-val": "Android 8.0 (SDK 26)",
        "meta-target-label": "Target OS",
        "meta-target-val": "Android 14 (SDK 34)",
        "down-btn-apk": "<i class='fa-solid fa-download'></i> Download APK File",
        "down-btn-play": "<i class='fa-brands fa-google-play'></i> Coming Soon on Play Store",
        
        // Installation Guide
        "guide-title": "Installation Guide",
        "guide-desc": "Follow these quick, easy steps to download and install the application on your Android device.",
        "step-1-title": "Download APK",
        "step-1-desc": "Click on \"Download APK\" above to download the secure package to your device's downloads folder.",
        "step-2-title": "Allow Install",
        "step-2-desc": "If prompted by your browser, toggle \"Allow Installation from Unknown Sources\" in device settings.",
        "step-3-title": "Run Installer",
        "step-3-desc": "Open your downloads directory and click on `app-release.apk` to initiate the system installer.",
        "step-4-title": "Open App",
        "step-4-desc": "Launch the app from your home screen, select your language, and create your first astrology chart!",
        
        // FAQ Section
        "faq-title": "Frequently Asked Questions",
        "faq-desc": "Quick answers to common questions about installing the app, payment safety, and consulting astrologers.",
        "faq-1-q": "How do I install the APK manually?",
        "faq-1-a": "To install the APK: 1) Download the file `app-release.apk` from this site. 2) Tap the completed download in your notifications. 3) If prompted by your device's security, enable the \"Install Unknown Apps\" permission for your browser. 4) Tap \"Install\" to complete the setup.",
        "faq-2-q": "Is my payment transaction secure?",
        "faq-2-a": "Yes, 100% secure. We partner with Cashfree Payments, a leading PCI-DSS Level 1 compliant gateway. Card credentials or banking passwords are never processed or saved on our servers, ensuring absolute security for every purchase.",
        "faq-3-q": "How can I contact the customer support team?",
        "faq-3-a": "You can contact our support desk directly by sending an email to vishwtejkulkarni@gmail.com. If you are inside the app, you can submit a support ticket via Settings &rarr; Support &rarr; Contact Us.",
        "faq-4-q": "How do I update the application?",
        "faq-4-a": "When a new version is released, we will publish the updated APK here. You can download the latest version and run the installer; it will overwrite the existing application while preserving all your profile data and transaction history.",
        "faq-5-q": "Can I download the app from the Google Play Store?",
        "faq-5-a": "We are currently undergoing Google's mandatory Play Store pre-release testing cycles. Once approved, the download link for the Google Play listing will go live here. Until then, you can safely use the APK version.",
        
        // Testimonials
        "test-title": "User Reviews",
        "test-desc": "Read what our early users have to say about their experience with Kalyansevak Jyotish.",
        "test-1-text": "\"The Kundli predictions are incredibly accurate! The chart is detailed and the interface is so smooth. Highly recommend.\"",
        "test-1-author": "Ramesh K.",
        "test-1-loc": "Pune, Maharashtra",
        "test-2-text": "\"I booked a live pooja booking session and the astrologer was very helpful. The payment via Cashfree felt safe and simple.\"",
        "test-2-author": "Anjali S.",
        "test-2-loc": "Bengaluru, Karnataka",
        "test-3-text": "\"Detailed PDF reports are downloadable instantly. This saves so much time compared to visiting consultants offline.\"",
        "test-3-author": "Manoj P.",
        "test-3-loc": "Mumbai, Maharashtra",
        
        // About Section
        "about-title": "About Kalyansevak Jyotish",
        "about-subtitle": "Bringing Ancient Wisdom to the Digital Age",
        "about-desc-1": "Kalyansevak Jyotish bridges ancient Vedic astrology traditions with state-of-the-art mobile technology. Our application is designed to serve as a reliable daily companion for horoscope calculations, birth chart interpretations, and spiritual ritual bookings.",
        "about-desc-2": "We operate on core principles of data transparency, strict privacy, and client trust. We ensure that your highly sensitive birth details are encrypted at the database level and never sold to third-party advertisers or brokers.",
        "about-badge-privacy": "100% Data Privacy",
        "about-badge-gateway": "Secure Cashfree gateway",
        "about-badge-trust": "Trusted Guidance",
        
        // Contact Section
        "contact-title": "Get in Touch",
        "contact-desc": "Have some feedback, suggestions, or need billing support? Contact us and we will respond immediately.",
        "contact-email-title": "Email Support",
        "contact-email-sub": "For support, orders, and inquiries:",
        "contact-wa-title": "WhatsApp Support",
        "contact-wa-sub": "Send a message for app help:",
        "contact-time-title": "Response Timelines",
        "contact-time-sub1": "Support queries: Acknowledged within 48 hours.",
        "contact-time-sub2": "Service assistance: Live daily 10 AM - 7 PM IST.",
        
        // Grievance Desk
        "grievance-title": "Grievance & Support Desk",
        "grievance-desc": "In accordance with the Consumer Protection (E-Commerce) Rules, 2020, we have set up dedicated redressal channels to assist you.",
        "grievance-officer-title": "<i class='fa-solid fa-user-tie'></i> Grievance Officer",
        "grievance-officer-name": "<strong>Name:</strong> Vishwtej Kulkarni",
        "grievance-officer-desg": "<strong>Designation:</strong> Grievance Redressal Officer",
        "grievance-officer-email": "<strong>Email:</strong> <a href='mailto:vishwtejkulkarni@gmail.com'>vishwtejkulkarni@gmail.com</a>",
        
        // Footer & Copyright
        "footer-desc": "Authentic spiritual and astrological guidance at your fingertips. Calculate Kundli, analyze charts, and book verified astrologers securely.",
        "footer-quick-links": "Quick Links",
        "footer-legal-pages": "Legal Pages",
        "footer-support-header": "Support",
        "footer-support-hours": "<strong>Hours:</strong> 10:00 AM - 7:00 PM IST",
        "footer-support-resp": "<strong>Response:</strong> Within 24-48 Hours",
        "footer-copyright": "&copy; 2026 Kalyansevak Jyotish. All Rights Reserved.",
        "footer-meta": "App Version 1.0.0 (Android) | Built with ❤️ for Spiritual Guidance"
    },
    hi: {
        // Navbar
        "nav-features": "विशेषताएं",
        "nav-screenshots": "स्क्रीनशॉट",
        "nav-install": "इन्स्टॉल गाइड",
        "nav-faq": "एफएक्यू (FAQ)",
        "nav-contact": "संपर्क करें",
        "nav-download": "APK डाउनलोड करें",
        
        // Hero Section
        "hero-badge": "<i class='fa-solid fa-dharmachakra'></i> प्रामाणिक वैदिक ज्योतिष",
        "hero-title": "सटीक ज्योतिषीय मार्गदर्शन से जानें अपने जीवन का सही मार्ग",
        "hero-desc": "अपनी विस्तृत जन्म कुंडली बनाएं, ग्रहों की स्थिति का सटीक विश्लेषण करें, विवाह और संबंधों के लिए गुण मिलान करें, और भारत के शीर्ष प्रमाणित ज्योतिषियों से सुरक्षित मार्गदर्शन प्राप्त करें।",
        "hero-btn-download": "<i class='fa-solid fa-download'></i> APK डाउनलोड करें (v1.0.0)",
        "hero-btn-features": "विशेषताएं देखें",
        
        // Features Section Headers
        "features-title": "ऐप की मुख्य विशेषताएं",
        "features-desc": "आपके आध्यात्मिक मार्गदर्शन, व्यक्तिगत कुंडली विश्लेषण और सटीक गणनाओं के लिए सभी सुविधाएं एक ही स्थान पर उपलब्ध हैं।",
        
        // Feature Cards
        "feat-1-title": "कुंडली निर्माण",
        "feat-1-desc": "वैदिक ज्योतिषीय मानदंडों और सटीक स्थानीय अक्षांश-रेखांश के आधार पर तुरंत अपनी विस्तृत जन्म कुंडली बनाएं।",
        "feat-2-title": "कुंडली विश्लेषण",
        "feat-2-desc": "कुंडली में ग्रहों की स्थिति, गृह अवस्थाओं और विभिन्न दोषों (कालसर्प दोष, मांगलिक दोष आदि) का संपूर्ण विश्लेषण तुरंत प्राप्त करें।",
        "feat-3-title": "अचूक गुण मिलान",
        "feat-3-desc": "विवाह और सुखी वैवाहिक जीवन की अनुकूलता जांचने के लिए 36-गुणों पर आधारित विस्तृत अष्टकूट मिलान करें।",
        "feat-4-title": "पूज्या एवं अपॉइंटमेंट",
        "feat-4-desc": "घर बैठे ऑनलाइन पूजा अनुष्ठान बुक करें, और प्रमाणित ज्योतिषियों के साथ वीडियो या ऑडियो कॉल द्वारा सीधे परामर्श करें।",
        "feat-5-title": "डिजिटल पीडीएफ रिपोर्ट",
        "feat-5-desc": "करियर, स्वास्थ्य, आर्थिक स्थिति और पारिवारिक भविष्य को कवर करने वाली सविस्तर पीडीएफ रिपोर्ट्स तुरंत डाउनलोड करें।",
        "feat-6-title": "100% सुरक्षित भुगतान",
        "feat-6-desc": "कैशफ्री (Cashfree) द्वारा संचालित पूरी तरह सुरक्षित भुगतान गेटवे। आपकी कार्ड या बैंकिंग जानकारी हमारे सर्वर पर कभी संग्रहित नहीं होती।",
        "feat-7-title": "मैनुअल भुगतान सहायता",
        "feat-7-desc": "जिन उपयोगकर्ताओं के पास ऑनलाइन यूपीआई या कार्ड की सुविधा नहीं है, उनके लिए ऑफलाइन/मैनुअल बिलिंग व रसीद सहायता उपलब्ध है।",
        "feat-8-title": "त्वरित सहायता केंद्र",
        "feat-8-desc": "समर्पित ग्राहक सहायता टीम और शिकायत निवारण डेस्क जो आपकी हर समस्या का समाधान 24 कार्य घंटों के भीतर करती है।",
        
        // Screenshots Section Headers
        "screens-title": "एप्लिकेशन स्क्रीनशॉट",
        "screens-desc": "हमारे सरल, सुंदर और आधुनिक ऐप इंटरफ़ेस को देखें, जिसे आसान उपयोग को ध्यान में रखकर तैयार किया गया है।",
        
        // Why Choose Us Section
        "why-title": "कल्याणसेवक ही क्यों चुनें?",
        "why-desc": "हम आधुनिक तकनीकी स्थिरता और पारंपरिक ज्योतिषीय सटीकता का मेल प्रस्तुत करते हैं ताकि आपको सबसे विश्वसनीय सेवा मिल सके।",
        "why-1-title": "सटीक ज्योतिषीय गणना",
        "why-1-desc": "हमारा गणना इंजन सटीक खगोलीय निर्देशांक मॉडल (Ephemeris) पर आधारित है, जिससे त्रुटिरहित कुंडली बनती है।",
        "why-2-title": "तेज और अनुकूलित प्रदर्शन",
        "why-2-desc": "कम इंटरनेट डेटा खर्च और बिना रुकावट के तुरंत रिपोर्ट तैयार करने के लिए ऐप को बेहद हल्का और तेज बनाया गया है।",
        "why-3-title": "कैशफ्री सुरक्षित भुगतान",
        "why-3-desc": "हमारा भुगतान ढांचा पीसीआई-डीएसएस (PCI-DSS) सुरक्षा मानदंडों के अनुकूल है। आपकी वित्तीय गोपनीयता हमारी प्राथमिकता है।",
        "why-4-title": "सुंदर और सुलभ डिज़ाइन",
        "why-4-desc": "शांत, आध्यात्मिक रंगों और सुलभ डार्क मोड के साथ ऐसा इंटरफ़ेस जो रात के समय भी आँखों को सुकून देता है।",
        "why-5-title": "त्वरित पीडीएफ डाउनलोड",
        "why-5-desc": "अपनी कुंडली और गुण मिलान रिपोर्ट को हाई-डेफिनिशन पीडीएफ प्रारूप में तुरंत अपने मोबाइल पर डाउनलोड करें।",
        "why-6-title": "भरोसेमंद लाइव सहायता",
        "why-6-desc": "ऐप में दिए गए हेल्प-टिकट या सीधे ईमेल के जरिए हर समस्या में त्वरित मार्गदर्शन प्राप्त करें।",
        
        // Download Section
        "down-title": "कल्याणसेवक ज्योतिष ऐप डाउनलोड करें",
        "down-desc": "आज ही शुरुआत करें। अपनी कुंडली बनाएं, ग्रहों का विश्लेषण करें और योग्य ज्योतिषियों से परामर्श लें। सभी भुगतान कैशफ्री के जरिए सुरक्षित हैं।",
        "meta-platform-label": "प्लेटफ़ॉर्म",
        "meta-platform-val": "एंड्रॉइड (APK)",
        "meta-size-label": "फ़ाइल का आकार",
        "meta-size-val": "97.8 MB",
        "meta-min-label": "न्यूनतम एंड्रॉइड",
        "meta-min-val": "एंड्रॉइड 8.0 (SDK 26)",
        "meta-target-label": "लक्षित एंड्रॉइड",
        "meta-target-val": "एंड्रॉइड 14 (SDK 34)",
        "down-btn-apk": "<i class='fa-solid fa-download'></i> APK फ़ाइल डाउनलोड करें",
        "down-btn-play": "<i class='fa-brands fa-google-play'></i> प्ले स्टोर पर जल्द आ रहा है",
        
        // Installation Guide
        "guide-title": "इन्स्टॉलेशन मार्गदर्शिका",
        "guide-desc": "अपने एंड्रॉइड मोबाइल पर एप्लिकेशन को आसानी से डाउनलोड और इंस्टॉल करने के लिए इन चरणों का पालन करें।",
        "step-1-title": "APK डाउनलोड करें",
        "step-1-desc": "ऊपर दिए गए \"APK डाउनलोड करें\" बटन पर क्लिक करें। फ़ाइल आपके मोबाइल के डाउनलोड्स फोल्डर में सहेज ली जाएगी।",
        "step-2-title": "अनुमति दें (Allow)",
        "step-2-desc": "यदि ब्राउज़र सुरक्षा चेतावनी दिखाता है, तो मोबाइल सेटिंग में जाकर \"Unknown Sources से ऐप इंस्टॉल करें\" को अनुमति दें।",
        "step-3-title": "इंस्टॉलर चलाएं",
        "step-3-desc": "डाउनलोड फोल्डर में जाकर `app-release.apk` फ़ाइल पर क्लिक करें और सिस्टम द्वारा पूछे जाने पर 'इंस्टॉल' चुनें।",
        "step-4-title": "ऐप का उपयोग करें",
        "step-4-desc": "ऐप खोलें, अपनी पसंदीदा भाषा चुनें और तुरंत अपनी पहली कुंडली या ज्योतिषीय रिपोर्ट तैयार करें!",
        
        // FAQ Section
        "faq-title": "अक्सर पूछे जाने वाले प्रश्न",
        "faq-desc": "ऐप को इंस्टॉल करने, भुगतान सुरक्षा और ज्योतिषीय परामर्श से जुड़े सामान्य प्रश्नों के त्वरित उत्तर।",
        "faq-1-q": "मैं मैन्युअल रूप से एपीके (APK) कैसे इंस्टॉल करूं?",
        "faq-1-a": "एपीके इंस्टॉल करने के लिए: १) इस वेबसाइट से `app-release.apk` फ़ाइल डाउनलोड करें। २) डाउनलोड समाप्त होने पर नोटिफिकेशन पर टैप करें। ३) यदि सुरक्षा चेतावनी दिखाई दे, तो सेटिंग्स में जाकर अपने ब्राउज़र को 'अज्ञात स्रोत से ऐप इंस्टॉल करें' की अनुमति दें। ४) 'इंस्टॉल' पर टैप करके प्रक्रिया पूरी करें।",
        "faq-2-q": "क्या मेरा ऑनलाइन भुगतान सुरक्षित है?",
        "faq-2-a": "हाँ, पूरी तरह सुरक्षित है। हम भारत के अग्रणी और पीसीआई-डीएसएस लेवल 1 प्रमाणित गेटवे 'कैशफ्री पेमेंट्स' का उपयोग करते हैं। आपके कार्ड की संवेदनशील जानकारी हमारे सर्वर तक कभी नहीं पहुँचती, जिससे आपका लेनदेन सुरक्षित रहता है।",
        "faq-3-q": "मैं ग्राहक सहायता टीम से कैसे संपर्क करूं?",
        "faq-3-a": "आप सीधे हमारे सहायता ईमेल <a href='mailto:vishwtejkulkarni@gmail.com'>vishwtejkulkarni@gmail.com</a> पर लिखकर संपर्क कर सकते हैं। इसके अतिरिक्त, ऐप के भीतर सेटिंग्स &rarr; सपोर्ट &rarr; हमसे संपर्क करें विकल्प का उपयोग कर सकते हैं।",
        "faq-4-q": "मैं इस ऐप को अपडेट कैसे करूं?",
        "faq-4-a": "जब भी ऐप का नया संस्करण जारी होगा, हम नया एपीके यहाँ उपलब्ध करा देंगे। आप बस नई फ़ाइल डाउनलोड करके इंस्टॉल कर सकते हैं, यह आपके पुराने डेटा को सुरक्षित रखते हुए ऐप को अपडेट कर देगा।",
        "faq-5-q": "क्या यह ऐप गूगल प्ले स्टोर पर उपलब्ध है?",
        "faq-5-a": "हम वर्तमान में गूगल प्ले स्टोर के अनिवार्य आंतरिक परीक्षण चक्र (Internal Testing) से गुजर रहे हैं। स्वीकृति मिलते ही प्ले स्टोर का लिंक यहाँ लाइव कर दिया जाएगा। तब तक आप एपीके संस्करण का सुरक्षित उपयोग कर सकते हैं।",
        
        // Testimonials
        "test-title": "उपयोगकर्ताओं के अनुभव",
        "test-desc": "कल्याणसेवक ज्योतिष ऐप का अनुभव लेने वाले हमारे शुरुआती उपयोगकर्ताओं की राय पढ़ें।",
        "test-1-text": "\"इस ऐप की कुंडली गणना बहुत सटीक है! ग्रहों का विवरण बहुत विस्तृत है और उपयोग करने में यह बहुत आसान है। मैं इसकी पुरजोर सिफारिश करता हूँ।\"",
        "test-1-author": "रमेश के.",
        "test-1-loc": "पुणे, महाराष्ट्र",
        "test-2-text": "\"मैंने ऑनलाइन पूजा सत्र बुक किया था और ज्योतिषी महोदय ने बहुत अच्छा मार्गदर्शन दिया। कैशफ्री के माध्यम से भुगतान बिल्कुल सरल और सुरक्षित था।\"",
        "test-2-author": "अंजलि एस.",
        "test-2-loc": "बेंगलुरु, कर्नाटक",
        "test-3-text": "\"विस्तृत पीडीएफ रिपोर्ट तुरंत डाउनलोड हो जाती है। अब बाहर जाकर ज्योतिषियों से मिलने में लगने वाला समय बच जाता है।\"",
        "test-3-author": "मनोज पी.",
        "test-3-loc": "मुंबई, महाराष्ट्र",
        
        // About Section
        "about-title": "कल्याणसेवक ज्योतिष के बारे में",
        "about-subtitle": "प्राचीन ज्ञान और आधुनिक तकनीक का संगम",
        "about-desc-1": "कल्याणसेवक ज्योतिष प्राचीन वैदिक ज्योतिष की समृद्ध परंपराओं को आधुनिक मोबाइल तकनीक से जोड़ता है। हमारा उद्देश्य आपको दैनिक राशिफल, सटीक जन्म कुंडली और ऑनलाइन पूजा अनुष्ठान बुक करने के लिए एक विश्वसनीय साथी प्रदान करना है।",
        "about-desc-2": "हम पारदर्शिता, डेटा सुरक्षा और उपयोगकर्ता के विश्वास को सर्वोपरि मानते हैं। आपकी व्यक्तिगत जन्म विवरण जानकारी को पूरी तरह से एनक्रिप्ट रखा जाता है और किसी भी तीसरे पक्ष के साथ कभी साझा नहीं किया जाता।",
        "about-badge-privacy": "100% डेटा गोपनीयता",
        "about-badge-gateway": "सुरक्षित कैशफ्री गेटवे",
        "about-badge-trust": "विश्वसनीय मार्गदर्शन",
        
        // Contact Section
        "contact-title": "संपर्क सूत्र",
        "contact-desc": "क्या आपके पास कोई सुझाव है या बिलिंग से संबंधित कोई समस्या है? बेझिझक हमसे संपर्क करें, हम तुरंत सहायता करेंगे।",
        "contact-email-title": "ईमेल सहायता",
        "contact-email-sub": "सहायता, ऑर्डर और प्रश्नों के लिए:",
        "contact-wa-title": "व्हाट्सएप सहायता",
        "contact-wa-sub": "त्वरित सहायता के लिए संदेश भेजें:",
        "contact-time-title": "समाधान समय सीमा",
        "contact-time-sub1": "सहायता शिकायतें: 48 घंटे के भीतर पावती प्राप्त होगी।",
        "contact-time-sub2": "परामर्श सेवा समय: प्रतिदिन सुबह 10:00 से शाम 07:00 बजे तक।",
        
        // Grievance Desk
        "grievance-title": "शिकायत निवारण एवं सहायता डेस्क",
        "grievance-desc": "उपभोक्ता संरक्षण (ई-कॉमर्स) नियम, 2020 के तहत हमने आपकी शिकायतों के त्वरित समाधान के लिए शिकायत निवारण प्रणाली स्थापित की है।",
        "grievance-officer-title": "<i class='fa-solid fa-user-tie'></i> शिकायत निवारण अधिकारी",
        "grievance-officer-name": "<strong>नाम:</strong> विश्वतेज कुलकर्णी",
        "grievance-officer-desg": "<strong>पद:</strong> शिकायत निवारण अधिकारी",
        "grievance-officer-email": "<strong>ईमेल:</strong> <a href='mailto:vishwtejkulkarni@gmail.com'>vishwtejkulkarni@gmail.com</a>",
        
        // Footer & Copyright
        "footer-desc": "विश्वसनीय आध्यात्मिक और ज्योतिषीय मार्गदर्शन अब आपके मोबाइल पर। सुरक्षित रूप से कुंडली बनाएं, चार्ट का विश्लेषण करें और योग्य ज्योतिषियों से परामर्श लें।",
        "footer-quick-links": "त्वरित लिंक्स",
        "footer-legal-pages": "कानूनी नीतियां",
        "footer-support-header": "सहायता",
        "footer-support-hours": "<strong>समय:</strong> सुबह 10:00 से शाम 07:00 बजे (IST)",
        "footer-support-resp": "<strong>जवाब का समय:</strong> 24-48 घंटों के भीतर",
        "footer-copyright": "&copy; 2026 कल्याणसेवक ज्योतिष। सर्वाधिकार सुरक्षित।",
        "footer-meta": "ऐप संस्करण 1.0.0 (Android) | आध्यात्मिक उन्नति के लिए ❤️ से निर्मित"
    },
    mr: {
        // Navbar
        "nav-features": "वैशिष्ट्ये",
        "nav-screenshots": "स्क्रीनशॉट",
        "nav-install": "इन्स्टॉल मार्गदर्शक",
        "nav-faq": "नेहमीचे प्रश्न",
        "nav-contact": "संपर्क साधा",
        "nav-download": "APK डाउनलोड करा",
        
        // Hero Section
        "hero-badge": "<i class='fa-solid fa-dharmachakra'></i> अस्सल वैदिक ज्योतिष",
        "hero-title": "अचूक ज्योतिषीय विश्लेषणाने शोधा तुमच्या यशाचा मार्ग",
        "hero-desc": "तुमची सविस्तर जन्मकुंडली बनवा, ग्रहांच्या स्थितीचे अचूक विश्लेषण करा, विवाह व नात्यांसाठी अचूक गुण मिलान करा, आणि भारतातील अग्रगण्य प्रमाणित ज्योतिषांकडून थेट सुरक्षित मार्गदर्शन मिळवा.",
        "hero-btn-download": "<i class='fa-solid fa-download'></i> APK डाउनलोड करा (v1.0.0)",
        "hero-btn-features": "वैशिष्ट्ये पहा",
        
        // Features Section Headers
        "features-title": "ॲपची मुख्य वैशिष्ट्ये",
        "features-desc": "तुमच्या आध्यात्मिक मार्गदर्शनासाठी, जन्मकुंडली विश्लेषणासाठी आणि अचूक ज्योतिषीय गणनांसाठी सर्व काही एकाच ठिकाणी उपलब्ध.",
        
        // Feature Cards
        "feat-1-title": "कुंडली निर्मिती",
        "feat-1-desc": "वैदिक ज्योतिषशास्त्राचे नियम आणि स्थानिक अक्षांश-रेखांशाच्या अचूकतेवर आधारित तुमची सविस्तर जन्मकुंडली त्वरित तयार करा.",
        "feat-2-title": "कुंडली विश्लेषण",
        "feat-2-desc": "कुंडलीतील ग्रहांची स्थिती, ग्रहांची अवस्था आणि विविध दोषांचे (कालसर्प दोष, मांगलिक दोष इ.) सविस्तर विश्लेषण त्वरित मिळवा.",
        "feat-3-title": "अचूक गुण मिलान",
        "feat-3-desc": "सुखी वैवाहिक आयुष्याच्या अनुकूलतेसाठी ३६ गुणांवर आधारित सविस्तर अष्टकूट गुण मिलान तपासा.",
        "feat-4-title": "पूजा आणि अपॉइंटमेंट",
        "feat-4-desc": "ॲपद्वारे थेट ऑनलाइन पूजा विधी बुक करा आणि नामांकित प्रमाणित ज्योतिषांशी व्हिडिओ किंवा ऑडिओ कॉलद्वारे थेट चर्चा करा.",
        "feat-5-title": "डिजिटल पीडीएफ रिपोर्ट",
        "feat-5-desc": "करिअर, आरोग्य, आर्थिक भविष्य या विषयांवरील तज्ज्ञ ज्योतिषांनी विश्लेषित केलेले रिपोर्ट पीडीएफ स्वरूपात त्वरित डाउनलोड करा.",
        "feat-6-title": "१००% सुरक्षित पेमेंट",
        "feat-6-desc": "कॅशफ्री (Cashfree) पेमेंट गेटवेद्वारे संपूर्ण सुरक्षित व्यवहार. तुमची कोणतीही कार्ड किंवा बँक खात्याची माहिती आमच्या सर्व्हरवर साठवली जात नाही.",
        "feat-7-title": "मॅन्युअल पेमेंट सपोर्ट",
        "feat-7-desc": "ज्या वापरकर्त्यांकडे ऑनलाइन युपीआय (UPI) किंवा कार्ड पेमेंट सुविधा नाही, त्यांच्यासाठी ऑफलाइन मॅन्युअल बिलिंग व पेमेंट सुविधा उपलब्ध आहे.",
        "feat-8-title": "जलद मदत केंद्र",
        "feat-8-desc": "समर्पित ग्राहक सेवा टीम आणि तक्रार निवारण अधिकारी २४ तासांच्या आत तुमच्या शंकांचे निरसन करण्यासाठी तत्पर आहेत.",
        
        // Screenshots Section Headers
        "screens-title": "ॲप्लिकेशनचे स्क्रीनशॉट",
        "screens-desc": "वापरण्यास सोपा, अत्यंत सुंदर आणि आधुनिक डिझाइन असलेला आमचा ॲप इंटरफेस येथे पहा.",
        
        // Why Choose Us Section
        "why-title": "कल्याणसेवक ॲप का निवडावे?",
        "why-desc": "अचूक आणि विश्वासार्ह मार्गदर्शनासाठी आम्ही आधुनिक तंत्रज्ञान आणि वैदिक ज्योतिषीय गणितांचा सुवर्णमध्य साधला आहे.",
        "why-1-title": "अचूक ज्योतिषीय गणिते",
        "why-1-desc": "आमचे ज्योतिष गणिते अचूक खगोलशास्त्रीय स्थिरांकांवर (Ephemeris) आधारित असल्याने अत्यंत अचूक कुंडली तयार होते.",
        "why-2-title": "जलद आणि हलके ॲप",
        "why-2-desc": "कमी इंटरनेट डेटावरही जलद सुरू होणारे आणि वेगाने रिपोर्ट तयार करणारे हलके व सुटसुटीत ॲप डिझाइन.",
        "why-3-title": "कॅशफ्री सुरक्षित पेमेंट गेटवे",
        "why-3-desc": "पीसीआय-डीएसएस (PCI-DSS) सुरक्षा प्रमाणीकरण असलेले सुरक्षित पेमेंट गेटवे, जेणेकरून तुमचे सर्व व्यवहार निर्धोक होतील.",
        "why-4-title": "आकर्षक व डोळ्यांना सुखद इंटरफेस",
        "why-4-desc": "आध्यात्मिक रंगसंगती आणि उत्तम डार्क मोड सपोर्ट, ज्यामुळे रात्रीच्या वेळी ॲप वापरताना डोळ्यांवर ताण येत नाही.",
        "why-5-title": "झटपट पीडीएफ डाउनलोड",
        "why-5-desc": "तुमची जन्मकुंडली आणि गुण मिलान रिपोर्ट उच्च दर्जाच्या पीडीएफ फॉरमॅटमध्ये थेट तुमच्या फोनवर त्वरित मिळवा.",
        "why-6-title": "विश्वासार्ह थेट मदत सेवा",
        "why-6-desc": "ॲपमधील सपोर्ट तिकीट किंवा थेट ईमेलद्वारे त्वरित आणि वैयक्तिक मदत सेवा उपलब्ध.",
        
        // Download Section
        "down-title": "कल्याणसेवक ज्योतिष ॲप डाउनलोड करा",
        "down-desc": "आजच सुरुवात करा. अचूक कुंडली बनवा, ग्रहांचे विश्लेषण करा आणि अनुभवी ज्योतिषांशी संपर्क साधा. सर्व व्यवहार कॅशफ्रीद्वारे पूर्णपणे सुरक्षित.",
        "meta-platform-label": "प्लॅटफॉर्म",
        "meta-platform-val": "एंड्रॉइड (APK)",
        "meta-size-label": "फाईल साईझ",
        "meta-size-val": "97.8 MB",
        "meta-min-label": "किमान एंड्रॉइड",
        "meta-min-val": "एंड्रॉइड 8.0 (SDK 26)",
        "meta-target-label": "टार्गेट एंड्रॉइड",
        "meta-target-val": "एंड्रॉइड 14 (SDK 34)",
        "down-btn-apk": "<i class='fa-solid fa-download'></i> APK फाईल डाउनलोड करा",
        "down-btn-play": "<i class='fa-brands fa-google-play'></i> प्ले स्टोअरवर लवकरच उपलब्ध",
        
        // Installation Guide
        "guide-title": "इन्स्टॉलेशन मार्गदर्शक",
        "guide-desc": "तुमच्या एंड्रॉइड मोबाईल फोनवर ॲप सुरक्षितपणे डाउनलोड आणि इन्स्टॉल करण्यासाठी या सोप्या पायऱ्या फॉलो करा.",
        "step-1-title": "APK डाउनलोड करा",
        "step-1-desc": "वर दिलेल्या \"APK डाउनलोड करा\" बटणावर क्लिक करा, फाईल तुमच्या फोनच्या डाउनलोड्स फोल्डरमध्ये सेव्ह होईल.",
        "step-2-title": "परवानगी द्या (Allow)",
        "step-2-desc": "इन्स्टॉलेशन करताना सुरक्षा चेतावणी आल्यास, फोनच्या सेटिंगमध्ये जाऊन \"Unknown Sources मधून ॲप इन्स्टॉल करा\" पर्याय चालू करा.",
        "step-3-title": "इन्स्टॉलर रन करा",
        "step-3-desc": "डाउनलोड फोल्डरमधील `app-release.apk` फाईलवर क्लिक करा आणि सिस्टीमच्या सूचनेनुसार 'इन्स्टॉल' बटण दाबा.",
        "step-4-title": "ॲप वापरा",
        "step-4-desc": "ॲप सुरू करा, तुमची आवडती भाषा निवडा आणि तुमची पहिली जन्मकुंडली व ज्योतिषीय रिपोर्ट त्वरित तयार करा!",
        
        // FAQ Section
        "faq-title": "नेहमी विचारले जाणारे प्रश्न",
        "faq-desc": "ॲप इन्स्टॉल करणे, पेमेंट सुरक्षितता आणि तज्ज्ञ ज्योतिषांच्या सल्ल्याशी संबंधित सामान्य प्रश्नांची उत्तरे.",
        "faq-1-q": "मी एपीके (APK) मॅन्युअली कसे इन्स्टॉल करू?",
        "faq-1-a": "एपीके इन्स्टॉल करण्यासाठी: १) या संकेतस्थळावरून `app-release.apk` फाईल डाउनलोड करा. २) डाउनलोड पूर्ण झाल्यावर नोटिफिकेशनवर क्लिक करा. ३) मोबाईलच्या सुरक्षेसाठी विचारल्यास, सेटिंगमध्ये जाऊन ब्राउझरला 'अज्ञात ॲप्स इन्स्टॉल करण्याची' परवानगी द्या. ४) 'इन्स्टॉल' बटणावर क्लिक करून प्रक्रिया पूर्ण करा.",
        "faq-2-q": "माझा ऑनलाइन पेमेंट व्यवहार सुरक्षित आहे का?",
        "faq-2-a": "होय, १००% सुरक्षित आहे. आम्ही भारतातील अत्यंत विश्वासार्ह आणि पीसीआय-डीएसएस (PCI-DSS) प्रमाणित 'कॅशफ्री पेमेंट्स' गेटवेचा वापर करतो. तुमची कार्ड किंवा बँक खात्याची गुपिते आमच्या सर्व्हरवर कधीही संचयित होत नाहीत.",
        "faq-3-q": "मी ग्राहक सेवा टीमशी कसा संपर्क साधू?",
        "faq-3-a": "तुम्ही थेट आमच्या ईमेल आयडीवर संपर्क साधू शकता: <a href='mailto:vishwtejkulkarni@gmail.com'>vishwtejkulkarni@gmail.com</a>. किंवा ॲपमधील सेटिंग्ज &rarr; सपोर्ट &rarr; आमच्याशी संपर्क साधा या पर्यायाद्वारे तक्रार नोंदवू शकता.",
        "faq-4-q": "मी ॲप अपडेट कसे करू?",
        "faq-4-a": "ॲपची नवीन आवृत्ती आल्यावर, आम्ही नवीन एपीके येथे उपलब्ध करून देऊ. नवीन फाईल डाउनलोड करून इन्स्टॉल केल्यावर तुमचा जुना डेटा न गमावता ॲप अपडेट होईल.",
        "faq-5-q": "हे ॲप गुगल प्ले स्टोअरवर का उपलब्ध नाही?",
        "faq-5-a": "आम्ही सध्या गुगल प्ले स्टोअरच्या अनिवार्य पूर्व-प्रकाशन चाचणी (Internal Testing) टप्प्यात आहोत. गुगलची मंजुरी मिळताच प्ले स्टोअर लिंक येथे लाइव्ह केली जाईल. तोपर्यंत तुम्ही एपीके आवृत्तीचा निर्धोक वापर करू शकता.",
        
        // Testimonials
        "test-title": "वापरकर्त्यांचे अनुभव",
        "test-desc": "कल्याणसेवक ज्योतिष ॲप वापरणाऱ्या आमच्या सुरुवातीच्या वापरकर्त्यांच्या प्रतिक्रिया वाचा.",
        "test-1-text": "\"या ॲपमधील कुंडलीची गणिते अत्यंत अचूक आहेत! ग्रहांची माहिती अगदी सविस्तर दिली आहे आणि ॲप वापरण्यास खूप सोपे आहे. मी नक्की शिफारस करेन.\"",
        "test-1-author": "रमेश के.",
        "test-1-loc": "पुणे, महाराष्ट्र",
        "test-2-text": "\"मी ऑनलाइन पूजा सत्र बुक केले होते आणि ज्योतिषांनी खूप चांगले मार्गदर्शन केले. कॅशफ्रीद्वारे पेमेंट करणे अत्यंत सोपे आणि सुरक्षित होते.\"",
        "test-2-author": "अंजली एस.",
        "test-2-loc": "बेंगळुरू, कर्नाटक",
        "test-3-text": "\"सविस्तर पीडीएफ रिपोर्ट लगेच डाउनलोड होतो. यामुळे प्रत्यक्ष ज्योतिष्याला भेटायला जाण्याचा वेळ आणि कष्ट दोन्ही वाचतात.\"",
        "test-3-author": "मनोज पी.",
        "test-3-loc": "मुंबई, महाराष्ट्र",
        
        // About Section
        "about-title": "कल्याणसेवक ज्योतिषबद्दल",
        "about-subtitle": "प्राचीन ज्योतिष ज्ञान आणि आधुनिक तंत्रज्ञानाचा मिलाफ",
        "about-desc-1": "कल्याणसेवक ज्योतिष प्राचीन वैदिक ज्योतिष परंपरांना आधुनिक मोबाईल तंत्रज्ञानाशी जोडते. आमचा उद्देश तुम्हाला जन्मकुंडली मिळवण्यासाठी, ग्रहांचा अभ्यास करण्यासाठी आणि ऑनलाइन पूजा बुकिंगसाठी एक खात्रीशीर सोबती देणे हा आहे.",
        "about-desc-2": "आम्ही पारदर्शकता, माहितीची गुप्तता आणि वापरकर्त्याचा विश्वास या गोष्टींना सर्वोच्च प्राधान्य देतो. तुमचे वैयक्तिक जन्म तपशील आमच्या सर्व्हरवर सुरक्षितपणे एनक्रिप्ट केले जातात आणि इतर कोणाशीही कधीही शेअर केले जात नाहीत.",
        "about-badge-privacy": "१००% डेटा गोपनीयता",
        "about-badge-gateway": "सुरक्षित कॅशफ्री गेटवे",
        "about-badge-trust": "विश्वासार्ह मार्गदर्शन",
        
        // Contact Section
        "contact-title": "संपर्क साधा",
        "contact-desc": "तुमच्या काही शंका, अभिप्राय किंवा पेमेंटसंबंधी समस्या आहेत का? आमच्याशी संपर्क साधा, आम्ही त्वरित मदत करू.",
        "contact-email-title": "ईमेलद्वारे मदत",
        "contact-email-sub": "मदत, ऑर्डर्स आणि इतर चौकशीसाठी:",
        "contact-wa-title": "व्हाट्सएपद्वारे मदत",
        "contact-wa-sub": "ॲपसंबंधी मदतीसाठी संदेश पाठवा:",
        "contact-time-title": "निवारण कालावधी",
        "contact-time-sub1": "मदत शंका: ४८ तासांच्या आत पावती दिली जाईल.",
        "contact-time-sub2": "थेट सेवा वेळ: दररोज सकाळी १० ते संध्याकाळी ७ (IST).",
        
        // Grievance Desk
        "grievance-title": "तक्रार निवारण आणि मदत डेस्क",
        "grievance-desc": "ग्राहक संरक्षण (ई-कॉमर्स) नियम, २०२० अंतर्गत तुमच्या तक्रारींचे त्वरित आणि कायदेशीर निवारण करण्यासाठी आम्ही ही व्यवस्था निर्माण केली आहे.",
        "grievance-officer-title": "<i class='fa-solid fa-user-tie'></i> तक्रार निवारण अधिकारी",
        "grievance-officer-name": "<strong>नाव:</strong> विश्वतेज कुलकर्णी",
        "grievance-officer-desg": "<strong>पद:</strong> तक्रार निवारण अधिकारी",
        "grievance-officer-email": "<strong>ईमेल:</strong> <a href='mailto:vishwtejkulkarni@gmail.com'>vishwtejkulkarni@gmail.com</a>",
        
        // Footer & Copyright
        "footer-desc": "अचूक आध्यात्मिक आणि ज्योतिषीय मार्गदर्शन आता तुमच्या बोटांच्या टोकावर. सुरक्षितपणे कुंडली बनवा, विश्लेषण मिळवा आणि तज्ज्ञ ज्योतिषांचा सल्ला घ्या.",
        "footer-quick-links": "द्रुत लिंक्स",
        "footer-legal-pages": "कायदेशीर धोरणे",
        "footer-support-header": "मदत",
        "footer-support-hours": "<strong>वेळ:</strong> सकाळी १०:०० ते संध्याकाळी ०७:०० (IST)",
        "footer-support-resp": "<strong>प्रतिक्रिया वेळ:</strong> २४ ते ४८ तासांच्या आत",
        "footer-copyright": "&copy; २०२६ कल्याणसेवक ज्योतिष. सर्व हक्क सुरक्षित.",
        "footer-meta": "ॲप आवृत्ती १.०.० (Android) | आध्यात्मिक प्रगतीसाठी ❤️ ने निर्मित"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Theme Controller (Light/Dark Mode) ---
    const themeToggleBtn = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;
    
    // Check saved theme or default to system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
        updateThemeToggleIcon(savedTheme);
    } else if (systemPrefersDark) {
        htmlElement.setAttribute('data-theme', 'dark');
        updateThemeToggleIcon('dark');
    } else {
        htmlElement.setAttribute('data-theme', 'light');
        updateThemeToggleIcon('light');
    }
    
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            // Set theme with smooth transition
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeToggleIcon(newTheme);
            
            const currentLang = localStorage.getItem('lang') || 'en';
            const toastMsg = currentLang === 'hi' ? 
                `थीम बदलकर ${newTheme === 'dark' ? 'डार्क' : 'लाइट'} कर दी गई है` : 
                (currentLang === 'mr' ? `थीम बदलून ${newTheme === 'dark' ? 'डार्क' : 'लाइट'} केली गेली` : `Switched to ${newTheme === 'dark' ? 'Dark' : 'Light'} Mode`);
            
            showToast(toastMsg, 'info');
        });
    }
    
    function updateThemeToggleIcon(theme) {
        if (!themeToggleBtn) return;
        const icon = themeToggleBtn.querySelector('i');
        if (theme === 'dark') {
            icon.className = 'fa-solid fa-sun';
        } else {
            icon.className = 'fa-solid fa-moon';
        }
    }

    // --- 2. Mobile Menu Controller ---
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // --- 3. Custom Premium Toast Notification System ---
    function showToast(message, type = 'info') {
        let toastContainer = document.getElementById('toastContainer');
        if (!toastContainer) {
            toastContainer = document.createElement('div');
            toastContainer.id = 'toastContainer';
            toastContainer.className = 'toast-container';
            document.body.appendChild(toastContainer);
        }
        
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        let iconClass = 'fa-circle-info';
        if (type === 'success') iconClass = 'fa-circle-check';
        if (type === 'warning') iconClass = 'fa-triangle-exclamation';
        if (type === 'error') iconClass = 'fa-circle-xmark';
        
        toast.innerHTML = `
            <i class="fa-solid ${iconClass}"></i>
            <span>${message}</span>
        `;
        
        toastContainer.appendChild(toast);
        
        // Auto remove toast after 4s
        setTimeout(() => {
            toast.classList.add('fade-out');
            toast.addEventListener('animationend', () => {
                toast.remove();
            });
        }, 4000);
    }
    
    // Expose showToast to window so it can be called elsewhere
    window.showToast = showToast;

    // --- 4. Interactive Ripple Button Effects ---
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            ripple.addEventListener('animationend', () => {
                ripple.remove();
            });
        });
    });

    // --- 5. Download Button Interaction Logic ---
    const apkDownloadTriggers = document.querySelectorAll('a[href$=".apk"]');
    apkDownloadTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const currentLang = localStorage.getItem('lang') || 'en';
            const apkMsg = currentLang === 'hi' ? 
                'कल्याणसेवक ज्योतिष APK डाउनलोड शुरू हो रहा है...' : 
                (currentLang === 'mr' ? 'कल्याणसेवक ज्योतिष APK डाउनलोड सुरू होत आहे...' : 'Starting download for Kalyansevak Jyotish APK...');
            showToast(apkMsg, 'success');
        });
    });
    
    const playStoreTriggers = document.querySelectorAll('.btn-play-store-mock');
    playStoreTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const currentLang = localStorage.getItem('lang') || 'en';
            const playMsg = currentLang === 'hi' ? 
                'गूगल प्ले स्टोर पर जल्द ही आ रहा है! तब तक सीधे APK डाउनलोड करें।' : 
                (currentLang === 'mr' ? 'गुगल प्ले स्टोअरवर लवकरच उपलब्ध होईल! तोपर्यंत थेट APK डाउनलोड करा.' : 'Coming soon on Google Play Store! Download the APK directly in the meantime.');
            showToast(playMsg, 'warning');
        });
    });

    // --- 6. FAQ Accordion Functionality ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const header = item.querySelector('.faq-header');
        const body = item.querySelector('.faq-body');
        
        if (header && body) {
            header.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Collapse all other items (Accordion behavior)
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.faq-body').style.maxHeight = null;
                    }
                });
                
                // Toggle active state
                if (isActive) {
                    item.classList.remove('active');
                    body.style.maxHeight = null;
                } else {
                    item.classList.add('active');
                    body.style.maxHeight = body.scrollHeight + 'px';
                }
            });
        }
    });

    // --- 7. Screenshots Carousel Sliding Logic ---
    const carouselTrack = document.getElementById('carouselTrack');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    const dotsContainer = document.getElementById('carouselDots');
    
    if (carouselTrack && slides.length > 0) {
        let currentIndex = 0;
        let autoplayTimer = null;
        
        // Generate dot controls dynamically
        slides.forEach((_, idx) => {
            const dot = document.createElement('button');
            dot.className = `carousel-dot ${idx === 0 ? 'active' : ''}`;
            dot.setAttribute('aria-label', `Go to slide ${idx + 1}`);
            dot.addEventListener('click', () => {
                goToSlide(idx);
                resetAutoplay();
            });
            dotsContainer.appendChild(dot);
        });
        
        const dots = document.querySelectorAll('.carousel-dot');
        
        function goToSlide(index) {
            if (index < 0) {
                currentIndex = slides.length - 1;
            } else if (index >= slides.length) {
                currentIndex = 0;
            } else {
                currentIndex = index;
            }
            
            // Slide transition
            carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
            
            // Update dots
            dots.forEach((dot, idx) => {
                dot.classList.toggle('active', idx === currentIndex);
            });
        }
        
        function nextSlide() {
            goToSlide(currentIndex + 1);
        }
        
        function prevSlide() {
            goToSlide(currentIndex - 1);
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                resetAutoplay();
            });
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                resetAutoplay();
            });
        }
        
        // Autoplay feature (every 4 seconds)
        function startAutoplay() {
            autoplayTimer = setInterval(nextSlide, 4000);
        }
        
        function resetAutoplay() {
            clearInterval(autoplayTimer);
            startAutoplay();
        }
        
        // Pause on Hover
        const carouselArea = document.querySelector('.screenshots-carousel-container');
        if (carouselArea) {
            carouselArea.addEventListener('mouseenter', () => clearInterval(autoplayTimer));
            carouselArea.addEventListener('mouseleave', startAutoplay);
        }
        
        startAutoplay();
        
        // --- Touch/Swipe Gestures for Mobile ---
        let startX = 0;
        let endX = 0;
        
        carouselTrack.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        }, { passive: true });
        
        carouselTrack.addEventListener('touchmove', (e) => {
            endX = e.touches[0].clientX;
        }, { passive: true });
        
        carouselTrack.addEventListener('touchend', () => {
            const difference = startX - endX;
            const threshold = 50; // swipe minimum distance in pixels
            
            if (Math.abs(difference) > threshold) {
                if (difference > 0) {
                    nextSlide(); // Swiped left, go next
                } else {
                    prevSlide(); // Swiped right, go prev
                }
                resetAutoplay();
            }
        });
        
        // --- Fullscreen Image Modal Popup ---
        const modal = document.createElement('div');
        modal.className = 'preview-modal';
        modal.id = 'previewModal';
        modal.innerHTML = `
            <div class="modal-content-wrapper">
                <button class="modal-close" id="modalClose">&times;</button>
                <img class="modal-img" id="modalImg" src="" alt="Fullscreen App Screenshot">
            </div>
        `;
        document.body.appendChild(modal);
        
        const modalImg = document.getElementById('modalImg');
        const modalClose = document.getElementById('modalClose');
        
        slides.forEach(slide => {
            slide.addEventListener('click', () => {
                const img = slide.querySelector('img');
                if (img) {
                    modalImg.src = img.src;
                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden'; // Lock background scrolling
                }
            });
        });
        
        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        if (modalClose) modalClose.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.classList.contains('modal-content-wrapper')) {
                closeModal();
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    }

    // --- 8. Multilingual Controller (Language Switcher) ---
    const langBtn = document.getElementById('langBtn');
    const langDropdown = document.getElementById('langDropdown');
    const currentLangText = document.getElementById('currentLang');
    const langSelectorContainer = document.querySelector('.lang-selector');
    
    // Toggle dropdown visibility
    if (langBtn && langDropdown) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('active');
            langSelectorContainer.classList.toggle('active');
        });
        
        // Close language selector when clicking outside
        document.addEventListener('click', () => {
            langDropdown.classList.remove('active');
            if (langSelectorContainer) langSelectorContainer.classList.remove('active');
        });
    }
    
    // Handle language selection
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            const selectedLang = opt.getAttribute('data-lang');
            setLanguage(selectedLang);
            
            const msgs = {
                en: 'Language set to English',
                hi: 'भाषा बदलकर हिंदी कर दी गई है',
                mr: 'भाषा बदलून मराठी केली गेली'
            };
            showToast(msgs[selectedLang], 'info');
        });
    });
    
    // Set Language DOM Updater
    function setLanguage(lang) {
        // Fallback to English if language dictionary doesn't exist
        if (!translations[lang]) lang = 'en';
        
        // Save choice
        localStorage.setItem('lang', lang);
        htmlElement.setAttribute('lang', lang);
        
        // Update Selector Button display
        if (currentLangText) {
            const labels = { en: 'English', hi: 'हिंदी', mr: 'मराठी' };
            currentLangText.innerText = labels[lang];
        }
        
        // Toggle Active Class in dropdown options
        langOptions.forEach(opt => {
            opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
        });
        
        // Translate all DOM elements containing data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const translationKey = el.getAttribute('data-i18n');
            if (translations[lang][translationKey]) {
                el.innerHTML = translations[lang][translationKey];
            }
        });
    }
    
    // Check saved language or default to system language
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
        setLanguage(savedLang);
    } else {
        // Fallback default
        setLanguage('en');
    }
});
