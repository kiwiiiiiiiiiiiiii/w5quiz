/* ══════════════════════════════════════════════════════════════
   PRINCIPAL EXAM 2026 — राष्ट्रीय शिक्षा नीति, 1986 Quiz Engine
   50 Medium-to-Hard Level MCQs
   ══════════════════════════════════════════════════════════════ */

// ── QUESTION DATA (50 Questions — Medium to Hard) ──
const quizData = [
  {
    q: "राष्ट्रीय शिक्षा नीति 1986 की घोषणा किस प्रधानमंत्री के कार्यकाल में हुई?",
    options: ["इंदिरा गांधी", "राजीव गांधी", "वी.पी. सिंह", "मोरारजी देसाई"],
    correct: 1,
    explanation: "राष्ट्रीय शिक्षा नीति 1986 की घोषणा प्रधानमंत्री राजीव गांधी के कार्यकाल में मई 1986 में हुई थी।"
  },
  {
    q: "NPE 1986 से पहले 'Challenge of Education — A Policy Perspective' नामक दस्तावेज कब प्रकाशित किया गया?",
    options: ["1983", "1985", "1984", "1986"],
    correct: 1,
    explanation: "'Challenge of Education — A Policy Perspective' शीर्षक से एक विस्तृत दस्तावेज अगस्त 1985 में प्रकाशित किया गया जिसने NPE 1986 की पृष्ठभूमि तैयार की।"
  },
  {
    q: "NPE 1986 में 'ऑपरेशन ब्लैकबोर्ड' योजना किस स्तर की शिक्षा से संबंधित थी?",
    options: ["माध्यमिक शिक्षा", "उच्च शिक्षा", "प्राथमिक शिक्षा", "व्यावसायिक शिक्षा"],
    correct: 2,
    explanation: "ऑपरेशन ब्लैकबोर्ड प्राथमिक विद्यालयों में न्यूनतम आवश्यक सुविधाएँ (कम से कम दो कक्षा-कक्ष, शिक्षण सामग्री, खिलौने आदि) उपलब्ध कराने की योजना थी।"
  },
  {
    q: "NPE 1986 में 'नवोदय विद्यालय' (Navodaya Vidyalaya) की स्थापना का मुख्य उद्देश्य क्या था?",
    options: [
      "शहरी क्षेत्रों में अंग्रेजी माध्यम शिक्षा देना",
      "ग्रामीण प्रतिभाशाली बच्चों को गुणवत्तापूर्ण शिक्षा देना",
      "केवल अनुसूचित जाति के छात्रों को शिक्षा देना",
      "विदेशी पाठ्यक्रम लागू करना"
    ],
    correct: 1,
    explanation: "नवोदय विद्यालय ग्रामीण क्षेत्रों के प्रतिभाशाली बच्चों को उनकी आर्थिक स्थिति की परवाह किए बिना गुणवत्तापूर्ण आवासीय शिक्षा प्रदान करने हेतु स्थापित किए गए।"
  },
  {
    q: "NPE 1986 ने शिक्षा की राष्ट्रीय प्रणाली (National System of Education) के अंतर्गत कौन-सी समान संरचना प्रस्तावित की?",
    options: ["8+2+2", "10+2+3", "5+3+2+2", "6+3+3"],
    correct: 1,
    explanation: "NPE 1986 ने 10+2+3 शैक्षिक संरचना को अपनाने पर बल दिया — 10 वर्ष की सामान्य शिक्षा, 2 वर्ष की उच्चतर माध्यमिक, और 3 वर्ष का स्नातक पाठ्यक्रम।"
  },
  {
    q: "NPE 1986 को संसद ने किस तिथि को अनुमोदित किया?",
    options: ["मई 1986", "जनवरी 1986", "अगस्त 1985", "दिसम्बर 1986"],
    correct: 0,
    explanation: "राष्ट्रीय शिक्षा नीति 1986 को संसद ने मई 1986 में अनुमोदित किया था।"
  },
  {
    q: "NPE 1986 में 'कार्य योजना' (Programme of Action — POA) कब तैयार की गई?",
    options: ["1985", "1987", "1986", "1988"],
    correct: 2,
    explanation: "NPE 1986 के क्रियान्वयन हेतु कार्य योजना (POA) 1986 में ही तैयार की गई, जिसे बाद में 1992 में संशोधित किया गया।"
  },
  {
    q: "NPE 1986 के अनुसार प्रत्येक नवोदय विद्यालय में कितने प्रतिशत सीटें ग्रामीण क्षेत्र के बच्चों के लिए आरक्षित की गईं?",
    options: ["50%", "75%", "60%", "80%"],
    correct: 1,
    explanation: "नवोदय विद्यालयों में 75% सीटें ग्रामीण क्षेत्र के बच्चों के लिए आरक्षित रखी गईं ताकि ग्रामीण प्रतिभाओं को समुचित अवसर मिल सके।"
  },
  {
    q: "NPE 1986 की समीक्षा हेतु 1990 में गठित समिति के अध्यक्ष कौन थे?",
    options: ["डॉ. डी.एस. कोठारी", "आचार्य राममूर्ति", "प्रो. यशपाल", "डॉ. सैयद नूरुल हसन"],
    correct: 1,
    explanation: "NPE 1986 की समीक्षा हेतु 1990 में आचार्य राममूर्ति समिति गठित की गई, जिसने 1992 में अपनी रिपोर्ट दी।"
  },
  {
    q: "NPE 1986 में 'Pace-Setting Schools' (गति-निर्धारक विद्यालय) के रूप में किन विद्यालयों को संदर्भित किया गया?",
    options: ["केन्द्रीय विद्यालय", "नवोदय विद्यालय", "सैनिक स्कूल", "मॉडल स्कूल"],
    correct: 1,
    explanation: "NPE 1986 में नवोदय विद्यालयों को 'Pace-Setting Schools' कहा गया क्योंकि ये अन्य विद्यालयों के लिए गुणवत्ता का मानक स्थापित करने वाले थे।"
  },
  {
    q: "NPE 1986 ने शिक्षा पर GDP का कितना प्रतिशत खर्च करने का लक्ष्य रखा?",
    options: ["4%", "6%", "8%", "10%"],
    correct: 1,
    explanation: "NPE 1986 ने सकल घरेलू उत्पाद (GDP) का 6% शिक्षा पर खर्च करने का लक्ष्य निर्धारित किया, जो कोठारी आयोग (1964–66) की सिफारिश के अनुरूप था।"
  },
  {
    q: "NPE 1986 ने 'Operation Blackboard' के अंतर्गत प्रत्येक प्राथमिक विद्यालय में न्यूनतम कितने शिक्षक होने चाहिए, यह प्रावधान किया?",
    options: ["एक", "दो", "तीन", "चार"],
    correct: 1,
    explanation: "ऑपरेशन ब्लैकबोर्ड के अंतर्गत प्रत्येक प्राथमिक विद्यालय में कम से कम दो शिक्षक (जिनमें एक महिला अनिवार्य) होने का प्रावधान किया गया।"
  },
  {
    q: "NPE 1986 में 'मुक्त विश्वविद्यालय प्रणाली' (Open University System) को बढ़ावा देने के लिए किस संस्था की स्थापना को महत्व दिया गया?",
    options: ["UGC", "IGNOU", "NCERT", "AICTE"],
    correct: 1,
    explanation: "NPE 1986 ने मुक्त शिक्षा और दूरस्थ शिक्षा को बढ़ावा देने के लिए इंदिरा गांधी राष्ट्रीय मुक्त विश्वविद्यालय (IGNOU, स्थापना 1985) को विशेष महत्व दिया।"
  },
  {
    q: "NPE 1986 में 'Non-formal Education' (अनौपचारिक शिक्षा) कार्यक्रम किन बच्चों के लिए प्रस्तावित किया गया?",
    options: [
      "केवल शहरी बच्चों के लिए",
      "विद्यालय छोड़ चुके, काम करने वाले एवं वंचित बच्चों के लिए",
      "केवल लड़कियों के लिए",
      "केवल विकलांग बच्चों के लिए"
    ],
    correct: 1,
    explanation: "अनौपचारिक शिक्षा कार्यक्रम विद्यालय छोड़ चुके बच्चों, कामकाजी बच्चों, लड़कियों एवं अन्य वंचित वर्ग के बच्चों के लिए प्रस्तावित किया गया ताकि वे शिक्षा से वंचित न रहें।"
  },
  {
    q: "NPE 1986 ने 'Core Curriculum' (मूल पाठ्यक्रम) की अवधारणा में कौन-से तत्व शामिल किए?",
    options: [
      "केवल हिन्दी और गणित",
      "भारत की स्वतंत्रता का इतिहास, संवैधानिक दायित्व, राष्ट्रीय पहचान, पर्यावरण आदि",
      "केवल विज्ञान और प्रौद्योगिकी",
      "केवल धार्मिक शिक्षा"
    ],
    correct: 1,
    explanation: "मूल पाठ्यक्रम (Core Curriculum) में भारत की स्वतंत्रता का इतिहास, संवैधानिक दायित्व, राष्ट्रीय पहचान, भारत की सांस्कृतिक विरासत, समानता, लोकतंत्र, धर्मनिरपेक्षता, पर्यावरण संरक्षण आदि शामिल किए गए।"
  },
  {
    q: "NPE 1986 ने विश्वविद्यालयों की स्वायत्तता के संदर्भ में 'Autonomous Colleges' की अवधारणा को किस उद्देश्य से प्रस्तावित किया?",
    options: [
      "विश्वविद्यालयों का बोझ कम करने और शैक्षिक नवाचार को बढ़ावा देने हेतु",
      "सरकारी नियंत्रण बढ़ाने हेतु",
      "निजी विश्वविद्यालयों को बंद करने हेतु",
      "केवल तकनीकी शिक्षा हेतु"
    ],
    correct: 0,
    explanation: "स्वायत्त महाविद्यालयों की अवधारणा विश्वविद्यालयों पर अत्यधिक बोझ कम करने, अकादमिक नवाचार को बढ़ावा देने और कॉलेजों को पाठ्यक्रम निर्माण एवं परीक्षा संचालन में स्वतंत्रता प्रदान करने हेतु प्रस्तावित की गई।"
  },
  {
    q: "NPE 1986 ने शिक्षा में 'Delinking of Degrees from Jobs' (उपाधियों को नौकरियों से पृथक करना) की सिफारिश किस उद्देश्य से की?",
    options: [
      "शिक्षा को केवल ज्ञान-अर्जन तक सीमित करने के लिए",
      "डिग्री की महत्ता बढ़ाने के लिए",
      "अनावश्यक डिग्री प्राप्ति की होड़ कम करने और योग्यता आधारित चयन को बढ़ावा देने हेतु",
      "सभी सरकारी नौकरियों में डिग्री अनिवार्य करने हेतु"
    ],
    correct: 2,
    explanation: "NPE 1986 ने सिफारिश की कि जिन नौकरियों में विशेष शैक्षिक योग्यता की आवश्यकता नहीं है, उनमें डिग्री की अनिवार्यता समाप्त की जाए ताकि शिक्षा का व्यवसायीकरण रुके।"
  },
  {
    q: "NPE 1986 में 'त्रि-भाषा सूत्र' (Three-Language Formula) के अंतर्गत कौन-सी भाषाएँ शामिल थीं?",
    options: [
      "हिन्दी, अंग्रेजी, संस्कृत",
      "क्षेत्रीय भाषा, हिन्दी (अहिन्दी भाषी राज्यों में) या अन्य आधुनिक भारतीय भाषा, और अंग्रेजी",
      "हिन्दी, उर्दू, अंग्रेजी",
      "मातृभाषा, फ्रेंच, अंग्रेजी"
    ],
    correct: 1,
    explanation: "त्रि-भाषा सूत्र में (1) क्षेत्रीय/मातृभाषा, (2) हिन्दी (अहिन्दी भाषी क्षेत्रों में) या अन्य आधुनिक भारतीय भाषा (हिन्दी भाषी क्षेत्रों में), और (3) अंग्रेजी शामिल थीं।"
  },
  {
    q: "NPE 1986 में 'ब्लैकबोर्ड ऑपरेशन' के तहत न्यूनतम कितने कक्षा-कक्ष प्रत्येक प्राथमिक विद्यालय में होने चाहिए?",
    options: ["एक", "तीन", "दो", "चार"],
    correct: 2,
    explanation: "ऑपरेशन ब्लैकबोर्ड के अंतर्गत प्रत्येक प्राथमिक विद्यालय में कम से कम दो 'उपयोग योग्य' कक्षा-कक्ष होने चाहिए।"
  },
  {
    q: "NPE 1986 ने 'Early Childhood Care and Education' (ECCE) के लिए किस कार्यक्रम को विशेष महत्व दिया?",
    options: [
      "सर्व शिक्षा अभियान",
      "समेकित बाल विकास सेवा (ICDS)",
      "मिड-डे मील योजना",
      "कस्तूरबा गांधी बालिका विद्यालय"
    ],
    correct: 1,
    explanation: "NPE 1986 ने प्रारंभिक बाल्यावस्था देखभाल एवं शिक्षा (ECCE) के लिए समेकित बाल विकास सेवा (ICDS) कार्यक्रम को प्रमुख माध्यम के रूप में चिह्नित किया।"
  },
  {
    q: "NPE 1986 ने शैक्षिक प्रौद्योगिकी (Educational Technology) के उपयोग में किसे राष्ट्रीय स्तर पर नोडल एजेंसी बनाने का सुझाव दिया?",
    options: ["NCERT", "UGC", "CIET (Central Institute of Educational Technology)", "NUEPA"],
    correct: 2,
    explanation: "CIET (अब CIET-NCERT का भाग) को शैक्षिक प्रौद्योगिकी कार्यक्रमों के लिए राष्ट्रीय स्तर पर नोडल एजेंसी के रूप में प्रस्तावित किया गया।"
  },
  {
    q: "NPE 1986 में 'Rural Universities' और 'Rural Institutes' की स्थापना किस उद्देश्य से प्रस्तावित की गई?",
    options: [
      "शहरी प्रवास रोकने के लिए",
      "ग्रामीण विकास से जुड़ी शिक्षा एवं अनुसंधान को बढ़ावा देने हेतु",
      "कृषि को ही एकमात्र विषय बनाने हेतु",
      "ग्रामीण छात्रों को शहरी विश्वविद्यालयों से दूर रखने हेतु"
    ],
    correct: 1,
    explanation: "ग्रामीण विश्वविद्यालयों और संस्थानों की स्थापना ग्रामीण विकास से जुड़ी शिक्षा, अनुसंधान और समुदाय सेवा को बढ़ावा देने के लिए प्रस्तावित की गई।"
  },
  {
    q: "NPE 1986 के अनुसार 'District Institutes of Education and Training' (DIET) की स्थापना किस उद्देश्य से की गई?",
    options: [
      "उच्च शिक्षा के लिए",
      "प्रारंभिक शिक्षकों के प्रशिक्षण, पुनर्प्रशिक्षण एवं शैक्षिक नवाचार हेतु",
      "इंजीनियरिंग शिक्षा हेतु",
      "केवल अनुसंधान हेतु"
    ],
    correct: 1,
    explanation: "DIET की स्थापना प्रत्येक जिले में प्रारंभिक शिक्षकों के प्री-सर्विस एवं इन-सर्विस प्रशिक्षण, शैक्षिक अनुसंधान और नवाचार को बढ़ावा देने हेतु की गई।"
  },
  {
    q: "NPE 1986 ने 'सतत शिक्षा' (Continuing Education) की अवधारणा किसके लिए प्रस्तावित की?",
    options: [
      "केवल शिक्षकों के लिए",
      "नव-साक्षरों और प्रौढ़ शिक्षार्थियों के लिए ताकि उनकी शिक्षा जारी रह सके",
      "केवल स्नातकोत्तर छात्रों के लिए",
      "केवल सरकारी कर्मचारियों के लिए"
    ],
    correct: 1,
    explanation: "सतत शिक्षा कार्यक्रम नव-साक्षरों और प्रौढ़ शिक्षार्थियों के लिए प्रस्तावित किया गया ताकि वे साक्षरता अर्जित करने के बाद भी शिक्षा प्रक्रिया में बने रहें।"
  },
  {
    q: "NPE 1986 का संशोधित संस्करण (Modified NPE) कब प्रकाशित हुआ?",
    options: ["1990", "1992", "1994", "1988"],
    correct: 1,
    explanation: "NPE 1986 का संशोधित संस्करण 1992 में प्रकाशित हुआ, जो आचार्य राममूर्ति समिति और जनार्दन रेड्डी समिति की सिफारिशों पर आधारित था।"
  },
  {
    q: "NPE 1986 में 'महिला समाख्या' (Mahila Samakhya) कार्यक्रम किस उद्देश्य से शुरू किया गया?",
    options: [
      "महिला शिक्षिकाओं की भर्ती के लिए",
      "ग्रामीण एवं वंचित महिलाओं के शैक्षिक सशक्तिकरण हेतु",
      "केवल शहरी महिलाओं की उच्च शिक्षा हेतु",
      "महिला खेल को बढ़ावा देने हेतु"
    ],
    correct: 1,
    explanation: "महिला समाख्या कार्यक्रम 1989 में NPE 1986 के प्रावधानों के अंतर्गत शुरू किया गया ताकि ग्रामीण एवं सामाजिक रूप से वंचित महिलाओं को शिक्षा एवं सशक्तिकरण के अवसर प्रदान किए जा सकें।"
  },
  {
    q: "NPE 1986 ने 'Minimum Levels of Learning' (MLL) की अवधारणा क्यों प्रस्तावित की?",
    options: [
      "परीक्षा को कठिन बनाने के लिए",
      "प्रत्येक कक्षा स्तर पर न्यूनतम अधिगम योग्यताएँ सुनिश्चित करने हेतु",
      "छात्रों को फेल करने के लिए",
      "केवल प्रतिभाशाली छात्रों को चिह्नित करने हेतु"
    ],
    correct: 1,
    explanation: "MLL की अवधारणा यह सुनिश्चित करने के लिए प्रस्तावित की गई कि सभी विद्यालयों में, चाहे वे किसी भी क्षेत्र या प्रकार के हों, प्रत्येक कक्षा में छात्रों को कुछ न्यूनतम अधिगम स्तर प्राप्त हो।"
  },
  {
    q: "NPE 1986 ने स्वतंत्र भारत की कौन-सी शिक्षा नीति थी?",
    options: ["पहली", "दूसरी", "तीसरी", "चौथी"],
    correct: 1,
    explanation: "NPE 1986 स्वतंत्र भारत की दूसरी राष्ट्रीय शिक्षा नीति थी। पहली राष्ट्रीय शिक्षा नीति 1968 में आई थी।"
  },
  {
    q: "NPE 1986 ने 'विकलांग बच्चों की शिक्षा' (Education of Children with Disabilities) के लिए कौन-सा दृष्टिकोण अपनाया?",
    options: [
      "विकलांग बच्चों को अलग विशेष विद्यालयों में ही पढ़ाया जाए",
      "यथासंभव समावेशी शिक्षा (Integration) का दृष्टिकोण अपनाया जाए",
      "विकलांग बच्चों की शिक्षा अनावश्यक है",
      "केवल गृह-शिक्षा का प्रावधान हो"
    ],
    correct: 1,
    explanation: "NPE 1986 ने विकलांग बच्चों को यथासंभव सामान्य विद्यालयों में ही समावेशी शिक्षा (Integration with mainstream education) प्रदान करने का दृष्टिकोण अपनाया।"
  },
  {
    q: "NPE 1986 में 'National Literacy Mission' (राष्ट्रीय साक्षरता मिशन) का उद्देश्य किस आयु वर्ग के लिए साक्षरता प्राप्त करना था?",
    options: ["6–14 वर्ष", "15–35 वर्ष", "18–45 वर्ष", "25–50 वर्ष"],
    correct: 1,
    explanation: "राष्ट्रीय साक्षरता मिशन (1988 में स्थापित) का उद्देश्य 15–35 वर्ष आयु वर्ग के निरक्षर व्यक्तियों को कार्यात्मक साक्षरता प्रदान करना था।"
  },
  {
    q: "NPE 1986 ने 'शिक्षा में मूल्य' (Value Education) के अंतर्गत किन मूल्यों को पाठ्यक्रम में शामिल करने पर बल दिया?",
    options: [
      "केवल धार्मिक मूल्य",
      "भारत की सांस्कृतिक विरासत, धर्मनिरपेक्षता, समानता, लोकतंत्र, वैज्ञानिक दृष्टिकोण",
      "केवल पश्चिमी मूल्य",
      "केवल आर्थिक मूल्य"
    ],
    correct: 1,
    explanation: "NPE 1986 ने भारत की सांस्कृतिक विरासत, धर्मनिरपेक्षता, समानता, लोकतंत्र, समाजवाद, वैज्ञानिक दृष्टिकोण एवं पर्यावरण संरक्षण जैसे मूल्यों को पाठ्यक्रम में शामिल करने पर बल दिया।"
  },
  {
    q: "NPE 1986 ने तकनीकी एवं प्रबंधन शिक्षा (Technical & Management Education) हेतु किस संस्था को प्रमुख नियामक भूमिका दी?",
    options: ["UGC", "NCERT", "AICTE", "CBSE"],
    correct: 2,
    explanation: "NPE 1986 ने तकनीकी एवं प्रबंधन शिक्षा के नियमन, योजना एवं विकास हेतु AICTE (All India Council for Technical Education) को प्रमुख नियामक भूमिका प्रदान की। AICTE को 1987 में वैधानिक दर्जा दिया गया।"
  },
  {
    q: "NPE 1986 ने 'Semester System' और 'Credit-based System' किस स्तर पर लागू करने की सिफारिश की?",
    options: [
      "प्राथमिक स्तर पर",
      "माध्यमिक स्तर पर",
      "उच्च शिक्षा (विश्वविद्यालय) स्तर पर",
      "प्रारंभिक शिक्षा स्तर पर"
    ],
    correct: 2,
    explanation: "NPE 1986 ने उच्च शिक्षा (विश्वविद्यालय) स्तर पर सेमेस्टर प्रणाली और क्रेडिट-आधारित प्रणाली लागू करने की सिफारिश की ताकि मूल्यांकन अधिक प्रभावी और लचीला हो।"
  },
  {
    q: "NPE 1986 में 'Vocationalization of Secondary Education' (माध्यमिक शिक्षा का व्यावसायीकरण) का लक्ष्य किस कक्षा से शुरू करने का रखा गया?",
    options: ["कक्षा 8 से", "कक्षा 9 से", "कक्षा 11 (+2 स्तर) से", "कक्षा 6 से"],
    correct: 2,
    explanation: "NPE 1986 में +2 स्तर (कक्षा 11–12) से व्यावसायिक धाराओं का प्रारंभ करने का प्रावधान किया गया, जिसका लक्ष्य था कि +2 स्तर पर 25% छात्र व्यावसायिक शिक्षा प्राप्त करें।"
  },
  {
    q: "NPE 1986 ने +2 स्तर पर व्यावसायिक शिक्षा में नामांकन का लक्ष्य कितना प्रतिशत रखा?",
    options: ["10%", "25%", "50%", "15%"],
    correct: 1,
    explanation: "NPE 1986 ने +2 स्तर पर कुल नामांकन का 25% व्यावसायिक शिक्षा में होने का लक्ष्य निर्धारित किया था।"
  },
  {
    q: "NPE 1986 में 'Restructuring and Reorganization of Teacher Education' के लिए कौन-सी संस्था बनाने का प्रस्ताव था?",
    options: [
      "NCTE (National Council for Teacher Education)",
      "NUEPA",
      "NAAC",
      "NIEPA"
    ],
    correct: 0,
    explanation: "NPE 1986 ने शिक्षक शिक्षा के पुनर्गठन हेतु NCTE (National Council for Teacher Education) को वैधानिक दर्जा देने का प्रस्ताव रखा। NCTE को 1993 में वैधानिक संस्था बनाया गया।"
  },
  {
    q: "NPE 1986 ने 'Indian Council of Social Science Research (ICSSR)' जैसी संस्थाओं के माध्यम से किस क्षेत्र में अनुसंधान को बढ़ावा देने पर बल दिया?",
    options: [
      "केवल प्राकृतिक विज्ञान",
      "सामाजिक विज्ञान अनुसंधान",
      "केवल चिकित्सा विज्ञान",
      "केवल अंतरिक्ष विज्ञान"
    ],
    correct: 1,
    explanation: "NPE 1986 ने ICSSR, UGC एवं अन्य संस्थाओं के माध्यम से सामाजिक विज्ञान अनुसंधान को बढ़ावा देने पर विशेष बल दिया।"
  },
  {
    q: "NPE 1986 ने 'Kendriya Vidyalaya Sangathan' (KVS) के विस्तार का उद्देश्य क्या बताया?",
    options: [
      "केवल सैन्य बच्चों को शिक्षा देना",
      "केन्द्र सरकार के स्थानांतरणीय कर्मचारियों के बच्चों को एकसमान गुणवत्तापूर्ण शिक्षा देना",
      "निजी विद्यालयों को बंद करना",
      "ग्रामीण बच्चों को शहरी शिक्षा देना"
    ],
    correct: 1,
    explanation: "NPE 1986 ने KVS के विस्तार को केन्द्र सरकार के स्थानांतरणीय कर्मचारियों के बच्चों को देश भर में एकसमान CBSE पैटर्न पर गुणवत्तापूर्ण शिक्षा प्रदान करने हेतु महत्वपूर्ण बताया।"
  },
  {
    q: "NPE 1986 में 'अनुसूचित जाति, अनुसूचित जनजाति एवं अन्य पिछड़े वर्गों' की शिक्षा हेतु कौन-सा विशेष प्रावधान किया गया?",
    options: [
      "इन वर्गों की शिक्षा हेतु कोई प्रावधान नहीं था",
      "छात्रवृत्ति, छात्रावास, प्रोत्साहन, आरक्षण एवं विशेष उपचारात्मक कार्यक्रम",
      "केवल आरक्षण",
      "केवल पुस्तकें वितरित करना"
    ],
    correct: 1,
    explanation: "NPE 1986 में SC/ST/OBC वर्गों की शिक्षा हेतु छात्रवृत्ति, छात्रावास सुविधा, प्रोत्साहन राशि, आरक्षण, उपचारात्मक शिक्षण (Remedial Coaching) एवं विशेष भर्ती अभियान जैसे प्रावधान किए गए।"
  },
  {
    q: "NPE 1986 ने 'National Assessment and Accreditation Council (NAAC)' जैसी संस्था की स्थापना की पृष्ठभूमि कैसे तैयार की?",
    options: [
      "उच्च शिक्षा में गुणवत्ता मूल्यांकन एवं प्रत्यायन प्रणाली की आवश्यकता पर बल देकर",
      "विश्वविद्यालयों को बंद करने हेतु",
      "केवल तकनीकी संस्थानों के लिए",
      "विदेशी विश्वविद्यालयों से तुलना करने हेतु"
    ],
    correct: 0,
    explanation: "NPE 1986 ने उच्च शिक्षा में गुणवत्ता सुनिश्चित करने हेतु मूल्यांकन एवं प्रत्यायन प्रणाली की आवश्यकता पर बल दिया, जिसके फलस्वरूप 1994 में NAAC की स्थापना हुई।"
  },
  {
    q: "NPE 1986 में 'Micro-Planning' (सूक्ष्म योजना) का संबंध किससे था?",
    options: [
      "विश्वविद्यालय प्रशासन से",
      "प्रत्येक गाँव/बस्ती स्तर पर शिक्षा के सार्वभौमीकरण की योजना बनाने से",
      "केवल बजट आवंटन से",
      "केवल शिक्षक नियुक्ति से"
    ],
    correct: 1,
    explanation: "सूक्ष्म योजना (Micro-Planning) प्रत्येक गाँव और बस्ती स्तर पर बच्चों की पहचान, नामांकन, ठहराव एवं गुणवत्ता सुनिश्चित करने हेतु विस्तृत योजना बनाने की प्रक्रिया थी।"
  },
  {
    q: "NPE 1986 ने 'Adult Education' (प्रौढ़ शिक्षा) को 'Mass Movement' (जन आंदोलन) बनाने हेतु किस रणनीति पर बल दिया?",
    options: [
      "केवल सरकारी कर्मचारियों को पढ़ाना",
      "स्वयंसेवी संगठनों, पंचायतों एवं समुदाय की सक्रिय भागीदारी",
      "केवल विदेशी सहायता लेना",
      "केवल टेलीविजन कार्यक्रम चलाना"
    ],
    correct: 1,
    explanation: "NPE 1986 ने प्रौढ़ शिक्षा को जन आंदोलन बनाने हेतु स्वयंसेवी संगठनों (NGOs), पंचायती राज संस्थाओं, महिला संगठनों एवं समुदाय की सक्रिय भागीदारी पर बल दिया।"
  },
  {
    q: "NPE 1986 ने 'Environmental Education' (पर्यावरण शिक्षा) को किस प्रकार पाठ्यक्रम में शामिल करने का सुझाव दिया?",
    options: [
      "एक अलग विषय के रूप में केवल उच्च कक्षाओं में",
      "सभी स्तरों पर एकीकृत दृष्टिकोण (Integrated Approach) से",
      "केवल विज्ञान विषय में",
      "केवल बाह्य गतिविधियों में"
    ],
    correct: 1,
    explanation: "NPE 1986 ने पर्यावरण शिक्षा को सभी शैक्षिक स्तरों पर एकीकृत दृष्टिकोण (Integrated Approach) से पाठ्यक्रम में शामिल करने का सुझाव दिया, न कि एक अलग विषय के रूप में।"
  },
  {
    q: "NPE 1986 में 'State Institutes of Educational Management and Training (SIEMAT)' किस उद्देश्य हेतु प्रस्तावित किए गए?",
    options: [
      "शिक्षक प्रशिक्षण हेतु",
      "शैक्षिक प्रशासकों एवं प्रबंधकों के प्रशिक्षण हेतु",
      "छात्रों के परामर्श हेतु",
      "पाठ्यपुस्तक लेखन हेतु"
    ],
    correct: 1,
    explanation: "SIEMAT शैक्षिक योजना एवं प्रबंधन में कार्यरत प्रशासकों, अधिकारियों और प्रबंधकों के प्रशिक्षण एवं क्षमता विकास हेतु प्रस्तावित किए गए।"
  },
  {
    q: "NPE 1986 में 'शिक्षा में कम्प्यूटर साक्षरता' (Computer Literacy in Schools) कार्यक्रम किस रूप में प्रस्तावित था?",
    options: [
      "CLASS (Computer Literacy and Studies in Schools)",
      "SCOPE (Systematic Computer Programme in Education)",
      "CLAP (Computer Learning Action Programme)",
      "DICE (Digital Initiative for Computer Education)"
    ],
    correct: 0,
    explanation: "NPE 1986 ने CLASS (Computer Literacy and Studies in Schools) कार्यक्रम को विद्यालयों में कम्प्यूटर साक्षरता एवं कम्प्यूटर-सहायक शिक्षण (CAI) के लिए प्रस्तावित किया।"
  },
  {
    q: "NPE 1986 ने 'शिक्षा के विकेन्द्रीकरण' (Decentralization of Education) के अंतर्गत किन संस्थाओं को अधिक अधिकार देने की बात कही?",
    options: [
      "केवल केन्द्र सरकार को",
      "पंचायती राज संस्थाओं, जिला बोर्डों एवं स्थानीय निकायों को",
      "केवल निजी संस्थाओं को",
      "केवल राज्यपाल को"
    ],
    correct: 1,
    explanation: "NPE 1986 ने शिक्षा के विकेन्द्रीकरण के अंतर्गत पंचायती राज संस्थाओं, जिला बोर्डों, नगरपालिकाओं एवं स्थानीय निकायों को शैक्षिक योजना एवं प्रबंधन में अधिक अधिकार देने की सिफारिश की।"
  },
  {
    q: "NPE 1986 के 1992 संशोधन में 'Common School System' (समान विद्यालय प्रणाली) की अवधारणा को किस प्रकार स्पष्ट किया गया?",
    options: [
      "सभी निजी विद्यालय बंद करने की बात कही गई",
      "एक ऐसी प्रणाली जिसमें सभी वर्गों के बच्चे बिना भेदभाव के समान गुणवत्ता की शिक्षा प्राप्त करें",
      "केवल सरकारी विद्यालयों को अनिवार्य बनाया गया",
      "केवल अंग्रेजी माध्यम विद्यालय बनाए जाएँ"
    ],
    correct: 1,
    explanation: "समान विद्यालय प्रणाली का अर्थ था कि एक ऐसी शिक्षा व्यवस्था विकसित की जाए जिसमें सभी सामाजिक-आर्थिक वर्गों के बच्चे बिना भेदभाव के समान गुणवत्ता की शिक्षा प्राप्त कर सकें।"
  },
  {
    q: "NPE 1986 ने 'शिक्षकों की जवाबदेही' (Teacher Accountability) सुनिश्चित करने के लिए कौन-सा उपाय सुझाया?",
    options: [
      "शिक्षकों को कोई जवाबदेही नहीं होनी चाहिए",
      "शिक्षकों के प्रदर्शन का नियमित मूल्यांकन, अकादमिक ऑडिट एवं समुदाय की निगरानी",
      "शिक्षकों को केवल सरकार के प्रति जवाबदेह बनाना",
      "शिक्षकों की नौकरी स्थायी न करना"
    ],
    correct: 1,
    explanation: "NPE 1986 ने शिक्षकों के प्रदर्शन का नियमित मूल्यांकन, अकादमिक ऑडिट, स्व-मूल्यांकन एवं समुदाय की निगरानी के माध्यम से शिक्षकों की जवाबदेही सुनिश्चित करने का सुझाव दिया।"
  },
  {
    q: "NPE 1986 में 'Media and Educational Technology' के अंतर्गत किन माध्यमों को शिक्षा में प्रयोग करने पर बल दिया गया?",
    options: [
      "केवल रेडियो",
      "रेडियो, टेलीविजन, फिल्म, कम्प्यूटर एवं उपग्रह (Satellite) संचार",
      "केवल समाचार पत्र",
      "केवल कम्प्यूटर"
    ],
    correct: 1,
    explanation: "NPE 1986 ने शिक्षा में रेडियो, दूरदर्शन, शैक्षिक फिल्म, कम्प्यूटर, उपग्रह-आधारित संचार (INSAT) एवं अन्य शैक्षिक प्रौद्योगिकियों के प्रयोग पर बल दिया।"
  },
  {
    q: "NPE 1986 ने 'Total Literacy Campaign' (संपूर्ण साक्षरता अभियान) के सफल मॉडल के रूप में किस जिले का उदाहरण प्रस्तुत किया (कार्यान्वयन चरण में)?",
    options: ["वाराणसी", "एर्नाकुलम (केरल)", "जयपुर", "पटना"],
    correct: 1,
    explanation: "NPE 1986 के कार्यान्वयन के दौरान एर्नाकुलम (केरल) जिला 1990 में भारत का पहला संपूर्ण साक्षर जिला घोषित हुआ, जो TLC का सफल मॉडल बना।"
  }
];


// ══════════════════ APP STATE ══════════════════
let state = {
  userName: "",
  currentQ: 0,
  answers: new Array(quizData.length).fill(null),
  submitted: false,
  mapVisible: false
};

// ══════════════════ DOM REFERENCES ══════════════════
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const welcomeScreen  = $("#welcome-screen");
const quizScreen     = $("#quiz-screen");
const resultScreen   = $("#result-screen");

const userNameInput  = $("#user-name");
const nameError      = $("#name-error");
const startBtn       = $("#start-btn");

const userDisplay    = $("#user-display");
const progressText   = $("#progress-text");
const progressBar    = $("#progress-bar");
const questionNumber = $("#question-number");
const questionText   = $("#question-text");
const optionsList    = $("#options-list");
const prevBtn        = $("#prev-btn");
const nextBtn        = $("#next-btn");
const submitBtn      = $("#submit-btn");
const toggleMapBtn   = $("#toggle-map-btn");
const questionMap    = $("#question-map");

const confirmModal   = $("#confirm-modal");
const modalMessage   = $("#modal-message");
const modalCancel    = $("#modal-cancel");
const modalConfirm   = $("#modal-confirm");

const resultUserName   = $("#result-user-name");
const scoreNumber      = $("#score-number");
const scorePercentage  = $("#score-percentage");
const scoreRemark      = $("#score-remark");
const statCorrect      = $("#stat-correct");
const statWrong        = $("#stat-wrong");
const statUnanswered   = $("#stat-unanswered");
const reviewList       = $("#review-list");
const retryBtn         = $("#retry-btn");
const ringFill         = $("#ring-fill");

// ══════════════════ SVG GRADIENT (for score ring) ══════════════════
(function injectSVGGradient() {
  const svg = document.querySelector(".score-ring");
  if (!svg) return;
  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  const gradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
  gradient.setAttribute("id", "scoreGradient");
  gradient.setAttribute("x1", "0%"); gradient.setAttribute("y1", "0%");
  gradient.setAttribute("x2", "100%"); gradient.setAttribute("y2", "0%");
  const stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
  stop1.setAttribute("offset", "0%"); stop1.setAttribute("stop-color", "#6366f1");
  const stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
  stop2.setAttribute("offset", "100%"); stop2.setAttribute("stop-color", "#8b5cf6");
  gradient.appendChild(stop1);
  gradient.appendChild(stop2);
  defs.appendChild(gradient);
  svg.insertBefore(defs, svg.firstChild);
})();

// ══════════════════ SCREEN MANAGEMENT ══════════════════
function showScreen(screen) {
  [welcomeScreen, quizScreen, resultScreen].forEach(s => s.classList.remove("active"));
  screen.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ══════════════════ WELCOME SCREEN LOGIC ══════════════════
startBtn.addEventListener("click", () => {
  const name = userNameInput.value.trim();
  if (!name) {
    nameError.textContent = "⚠️ कृपया अपना नाम दर्ज करें। नाम खाली नहीं छोड़ सकते।";
    userNameInput.classList.add("input-error");
    userNameInput.focus();
    return;
  }
  nameError.textContent = "";
  userNameInput.classList.remove("input-error");
  state.userName = name;
  userDisplay.textContent = `👤 ${name}`;
  showScreen(quizScreen);
  renderQuestion();
  renderQuestionMap();
});

userNameInput.addEventListener("input", () => {
  if (userNameInput.value.trim()) {
    nameError.textContent = "";
    userNameInput.classList.remove("input-error");
  }
});

userNameInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") startBtn.click();
});

// ══════════════════ QUESTION RENDERING ══════════════════
function renderQuestion() {
  const idx = state.currentQ;
  const q = quizData[idx];
  const total = quizData.length;

  questionNumber.textContent = `प्रश्न ${idx + 1}`;
  questionText.textContent = q.q;
  progressText.textContent = `प्रश्न ${idx + 1} / ${total}`;
  progressBar.style.width = `${((idx + 1) / total) * 100}%`;

  // Navigation
  prevBtn.disabled = idx === 0;
  nextBtn.textContent = idx === total - 1 ? "अंतिम प्रश्न" : "अगला प्रश्न →";

  // Options
  const labels = ["A", "B", "C", "D"];
  optionsList.innerHTML = "";
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn" + (state.answers[idx] === i ? " selected" : "");
    btn.setAttribute("role", "radio");
    btn.setAttribute("aria-checked", state.answers[idx] === i ? "true" : "false");
    btn.innerHTML = `
      <span class="option-label">${labels[i]}</span>
      <span class="option-text">${opt}</span>
    `;
    btn.addEventListener("click", () => selectOption(i));
    optionsList.appendChild(btn);
  });

  updateQuestionMap();
}

function selectOption(optionIndex) {
  state.answers[state.currentQ] = optionIndex;
  renderQuestion();
}

// ══════════════════ NAVIGATION ══════════════════
prevBtn.addEventListener("click", () => {
  if (state.currentQ > 0) {
    state.currentQ--;
    renderQuestion();
  }
});

nextBtn.addEventListener("click", () => {
  if (state.currentQ < quizData.length - 1) {
    state.currentQ++;
    renderQuestion();
  }
});

// ══════════════════ QUESTION MAP ══════════════════
function renderQuestionMap() {
  questionMap.innerHTML = "";
  quizData.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "map-dot";
    dot.textContent = i + 1;
    dot.setAttribute("aria-label", `प्रश्न ${i + 1} पर जाएँ`);
    dot.addEventListener("click", () => {
      state.currentQ = i;
      renderQuestion();
    });
    questionMap.appendChild(dot);
  });
  updateQuestionMap();
}

function updateQuestionMap() {
  const dots = questionMap.querySelectorAll(".map-dot");
  dots.forEach((dot, i) => {
    dot.classList.remove("answered", "current");
    if (i === state.currentQ) dot.classList.add("current");
    else if (state.answers[i] !== null) dot.classList.add("answered");
  });
}

toggleMapBtn.addEventListener("click", () => {
  state.mapVisible = !state.mapVisible;
  questionMap.classList.toggle("hidden", !state.mapVisible);
  toggleMapBtn.textContent = state.mapVisible ? "✕ सूची बंद करें" : "📋 प्रश्न सूची";
});

// ══════════════════ SUBMIT LOGIC ══════════════════
submitBtn.addEventListener("click", () => {
  const unanswered = state.answers.filter(a => a === null).length;
  if (unanswered > 0) {
    modalMessage.innerHTML = `आपने <strong>${unanswered}</strong> प्रश्नों के उत्तर नहीं दिए हैं।<br>क्या आप फिर भी टेस्ट जमा करना चाहते हैं?`;
  } else {
    modalMessage.textContent = "क्या आप टेस्ट जमा करना चाहते हैं? जमा करने के बाद उत्तर बदले नहीं जा सकेंगे।";
  }
  confirmModal.classList.remove("hidden");
});

modalCancel.addEventListener("click", () => {
  confirmModal.classList.add("hidden");
});

modalConfirm.addEventListener("click", () => {
  confirmModal.classList.add("hidden");
  state.submitted = true;
  showResults();
});

// Close modal on overlay click
confirmModal.addEventListener("click", (e) => {
  if (e.target === confirmModal) confirmModal.classList.add("hidden");
});

// ══════════════════ RESULTS ══════════════════
function showResults() {
  const total = quizData.length;
  let correct = 0, wrong = 0, unanswered = 0;

  quizData.forEach((q, i) => {
    if (state.answers[i] === null) unanswered++;
    else if (state.answers[i] === q.correct) correct++;
    else wrong++;
  });

  const pct = Math.round((correct / total) * 100);

  resultUserName.textContent = `🎓 ${state.userName}`;
  scoreNumber.textContent = correct;
  scorePercentage.textContent = `${pct}%`;
  statCorrect.textContent = correct;
  statWrong.textContent = wrong;
  statUnanswered.textContent = unanswered;

  // Remark
  if (pct >= 90) scoreRemark.textContent = "🏆 उत्कृष्ट! अद्भुत प्रदर्शन!";
  else if (pct >= 70) scoreRemark.textContent = "👏 बहुत अच्छा! शानदार प्रयास!";
  else if (pct >= 50) scoreRemark.textContent = "👍 अच्छा! और अभ्यास करें।";
  else if (pct >= 30) scoreRemark.textContent = "📖 और मेहनत की जरूरत है।";
  else scoreRemark.textContent = "💪 निराश न हों, दोबारा प्रयास करें!";

  // Animate ring
  const circumference = 2 * Math.PI * 54; // ~339.292
  const offset = circumference - (correct / total) * circumference;
  setTimeout(() => {
    ringFill.style.strokeDashoffset = offset;
  }, 100);

  // Build review
  buildReview();

  showScreen(resultScreen);
}

function buildReview() {
  const labels = ["A", "B", "C", "D"];
  reviewList.innerHTML = "";

  quizData.forEach((q, i) => {
    const userAns = state.answers[i];
    const isCorrect = userAns === q.correct;
    const isUnanswered = userAns === null;

    let statusClass, badgeClass, badgeText;
    if (isUnanswered) {
      statusClass = "review-unanswered";
      badgeClass = "badge-unanswered";
      badgeText = "अनुत्तरित";
    } else if (isCorrect) {
      statusClass = "review-correct";
      badgeClass = "badge-correct";
      badgeText = "✅ सही";
    } else {
      statusClass = "review-wrong";
      badgeClass = "badge-wrong";
      badgeText = "❌ गलत";
    }

    let optionsHTML = "";
    q.options.forEach((opt, j) => {
      let cls = "review-option is-neutral";
      let prefix = `${labels[j]}. `;
      let suffix = "";

      if (j === q.correct) {
        cls = "review-option is-correct";
        suffix = " ✅ (सही उत्तर)";
      }
      if (userAns === j && j !== q.correct) {
        cls = "review-option is-wrong-selected";
        suffix = " ❌ (आपका उत्तर)";
      }
      if (userAns === j && j === q.correct) {
        suffix = " ✅ (आपका उत्तर — सही)";
      }

      optionsHTML += `<div class="${cls}">${prefix}${opt}${suffix}</div>`;
    });

    const item = document.createElement("div");
    item.className = `review-item ${statusClass}`;
    item.innerHTML = `
      <div class="review-q-number">प्रश्न ${i + 1}</div>
      <span class="review-status-badge ${badgeClass}">${badgeText}</span>
      <p class="review-q-text">${q.q}</p>
      <div class="review-options">${optionsHTML}</div>
      <div class="review-explanation"><strong>व्याख्या:</strong> ${q.explanation}</div>
    `;
    reviewList.appendChild(item);
  });
}

// ══════════════════ RETRY ══════════════════
retryBtn.addEventListener("click", () => {
  state.currentQ = 0;
  state.answers = new Array(quizData.length).fill(null);
  state.submitted = false;
  state.mapVisible = false;
  questionMap.classList.add("hidden");
  toggleMapBtn.textContent = "📋 प्रश्न सूची";
  ringFill.style.strokeDashoffset = 339.292;
  showScreen(welcomeScreen);
  userNameInput.value = "";
  userNameInput.focus();
});

// ══════════════════ KEYBOARD NAV ══════════════════
document.addEventListener("keydown", (e) => {
  if (!quizScreen.classList.contains("active") || state.submitted) return;
  if (e.key === "ArrowLeft" && state.currentQ > 0) {
    state.currentQ--;
    renderQuestion();
  } else if (e.key === "ArrowRight" && state.currentQ < quizData.length - 1) {
    state.currentQ++;
    renderQuestion();
  } else if (e.key >= "1" && e.key <= "4") {
    selectOption(parseInt(e.key) - 1);
  }
});
