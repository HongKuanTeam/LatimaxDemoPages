/* ==========================================
   BEDSIDE TERMINAL DEMO - INTERACTIVE SCRIPT
   ========================================== */

// Translation Dictionary (ENG / 繁中 / 简中 / BM)
const translations = {
  en: {
    doctor_in_charge: "Doctor in charge",
    doctor_name: "Dr. Yahya bin Awang",
    nurse_in_charge: "Nurse in charge",
    nurse_name: "Sreeranjani Sundra Moorthy",
    dob_label: "Date Of Birth",
    mrn_label: "MRN",
    admission_label: "Admission Date",
    status_banner_text: "Patient arrival to Operating room",
    banner_birthday: "🎂 Happy Birthday! Wishing you a speedy recovery!",
    banner_bill: "Outstanding bill pending — please visit the billing counter.",
    banner_meal: "Please inform the nurse of your meal preference.",
    banner_discharge_tmr: "You are scheduled for discharge tomorrow.",
    no_food_drink: "No food no drink",
    fall_caution: "Fall Caution",
    special_precaution_title: "Special Precaution",
    precaution_1: "Complete rest in bed",
    precaution_2: "Fluid restriction",
    precaution_3: "Preserve hand",
    precaution_4: "Restrict visitors",
    allergy_title: "Allergy",
    allergy_1: "Penicillin",
    allergy_2: "Latex",
    allergy_3: "Seafood",
    allergy_4: "Peanuts",

    // Buttons
    btn_intake: "Intake Output Recording",
    btn_treatment: "Treatment Plan",
    btn_medication: "Medication Education",
    btn_health: "Health Education",
    btn_discharge: "Discharge Status",
    btn_notification: "Notification",
    btn_survey: "Satisfaction Survey",
    btn_hospital: "Hospital Information",
    btn_fire: "Fire Plan",
    btn_menu: "User Menu",

    // Call Functions
    call_pain: "Pain Assist",
    call_drip: "Drip Issue",
    call_water: "Request Water",
    call_toilet: "Toileting",
    call_bed: "Bed Making",
    call_housekeeping: "Housekeeping",
    call_active_status: "Calling...",

    // Modals
    modal_intake_title: "Intake Output Recording",
    modal_treatment_title: "Treatment Plan",
    treat_1_title: "Ward Rounds",
    treat_1_desc: "Dr. Yahya bin Awang physical checkup.",
    treat_2_title: "Intravenous Medication",
    treat_2_desc: "Antibiotics administration by Nurse Sreeranjani.",
    treat_3_title: "Rehabilitation Therapy",
    treat_3_desc: "Physical therapist session at Bedside.",

    modal_medication_title: "Medication Education",
    med_aspirin_desc: "Once daily after breakfast. Prevent blood clots.",
    med_ceft_desc: "Every 12 hours. Antibiotic treatment.",

    modal_health_title: "Health Education",
    edu_card_1_title: "Diabetes Self-Care Guide",
    edu_card_1_desc: "Learn how to manage blood sugar, diet, and insulin injection guidelines.",
    edu_card_2_title: "Post-Surgery Recovery",
    edu_card_2_desc: "Important precautions to take after your surgery to ensure safe recovery.",

    modal_discharge_title: "Discharge Status",
    discharge_step_1: "Physician Approval",
    discharge_step_2: "Medication Ready",
    discharge_step_3: "Financial Clearance",
    discharge_step_4: "Discharge Complete",

    modal_notification_title: "System Notifications",
    clear_all_notifications: "Clear All",
    modal_survey_title: "Satisfaction Survey",
    survey_q1: "How satisfied are you with the nursing care?",
    survey_q2: "Any other comments or feedback?",
    survey_submit: "Submit Feedback",
    survey_success: "Thank you for your feedback! We will keep improving.",

    modal_hospital_title: "Hospital Information",
    hosp_wifi: "Wi-Fi Connection",
    hosp_wifi_desc: "No password required. Connect and accept terms in browser.",
    hosp_hours: "Visiting Hours",
    hosp_hours_val: "Daily: 11:00 AM - 2:00 PM, 5:00 PM - 8:00 PM",
    hosp_rules: "Hospital Rules",
    hosp_rules_desc: "Keep noise to a minimum. Maximum 2 visitors per bed at any time.",

    modal_fire_title: "Fire Evacuation Plan",
    fire_banner: "⚠️ In case of fire, remain calm and follow instructions from staff.",
    fire_steps_title: "Evacuation Steps:",
    fire_step_1: "Do not use lifts. Always use fire stairs.",
    fire_step_2: "Follow the green exit indicators in the corridor.",
    fire_step_3: "Assemble in the designated zone outside the main lobby.",

    modal_menu_title: "User Settings & Menu",
    set_volume: "Volume",
    set_brightness: "Brightness",
    set_screenlock: "Screen Lock",

    call_requested_text: "is requested...",
    btn_cancel_call: "Cancel Call"
  },

  zh: {
    doctor_in_charge: "主治醫師",
    doctor_name: "葉海亞 醫師 (Dr. Yahya)",
    nurse_in_charge: "負責護理師",
    nurse_name: "舒利蘭賈尼 護理師",
    dob_label: "出生日期",
    mrn_label: "病歷號碼",
    admission_label: "入院日期",
    status_banner_text: "病人已抵達手術室",
    banner_birthday: "🎂 生日快樂！祝您早日康復！",
    banner_bill: "💳 帳單待支付 — 請前往收費櫃台辦理繳費。",
    banner_meal: "🍱 用餐提醒：請告知護理師您的餐點需求。",
    banner_discharge_tmr: "🏠 提醒：您預定明日出院，請準備個人物品。",
    no_food_drink: "禁食禁水",
    fall_caution: "防跌倒警示",
    special_precaution_title: "特別注意事項",
    precaution_1: "絕對臥床休息",
    precaution_2: "水分限制",
    precaution_3: "保護肢體",
    precaution_4: "限制訪客",
    allergy_title: "過敏原",
    allergy_1: "盤尼西林 (Penicillin)",
    allergy_2: "乳膠 (Latex)",
    allergy_3: "海鮮 (Seafood)",
    allergy_4: "花生 (Peanuts)",

    // Buttons
    btn_intake: "輸入輸出記錄",
    btn_treatment: "今日照護計畫",
    btn_medication: "住院用藥指導",
    btn_health: "衛教宣導資訊",
    btn_discharge: "出院準備狀態",
    btn_notification: "系統訊息通知",
    btn_survey: "服務滿意度調查",
    btn_hospital: "環境與生活指南",
    btn_fire: "消防避難指引",
    btn_menu: "螢幕偏好設定",

    // Call Functions
    call_pain: "疼痛協助呼叫",
    call_drip: "點滴問題排除",
    call_water: "需要飲用開水",
    call_toilet: "協助如廁需求",
    call_bed: "更換/整理床位",
    call_housekeeping: "病房環境清潔",
    call_active_status: "呼叫中...",

    // Modals
    modal_intake_title: "輸入輸出水分記錄",
    modal_treatment_title: "照護計畫時程",
    treat_1_title: "醫師巡房",
    treat_1_desc: "葉海亞 醫師病房巡視與臨床檢查。",
    treat_2_title: "靜脈給藥",
    treat_2_desc: "護理師舒利蘭賈尼進行抗生素注射給藥。",
    treat_3_title: "床邊復健",
    treat_3_desc: "物理治療師協助進行關節與肌力運動。",

    modal_medication_title: "藥物指導說明",
    med_aspirin_desc: "每日一次，早餐後口服。用於預防血栓形成。",
    med_ceft_desc: "每 12 小時注射一次。主要用於細菌感染治療。",

    modal_health_title: "衛教資源中心",
    edu_card_1_title: "糖尿病自我照護指南",
    edu_card_1_desc: "學習如何監測血糖、飲食控制及胰島素注射步驟。",
    edu_card_2_title: "外科手術後傷口照護",
    edu_card_2_desc: "了解術後傷口觀察、早期離床活動防護措施。",

    modal_discharge_title: "出院準備進度",
    discharge_step_1: "醫師核准出院醫囑",
    discharge_step_2: "出院藥袋核對備妥",
    discharge_step_3: "出院費用審核中",
    discharge_step_4: "手續完成即可出院",

    modal_notification_title: "通知中心",
    clear_all_notifications: "清除所有通知",
    modal_survey_title: "服務滿意度調查表",
    survey_q1: "您對本次住院護理服務滿意度如何？",
    survey_q2: "您有其他任何建議或意見嗎？",
    survey_submit: "送出滿意度調查",
    survey_success: "感謝您的寶貴回饋！",

    modal_hospital_title: "醫院生活須知",
    hosp_wifi: "免費 Wi-Fi",
    hosp_wifi_desc: "免密碼連線。連線至 Hospital-Patient-Free 後在瀏覽器同意條款即可。",
    hosp_hours: "病房探病時間",
    hosp_hours_val: "每日開放：上午 11:00 - 下午 2:00，下午 5:00 - 晚上 8:00",
    hosp_rules: "維護病房秩序",
    hosp_rules_desc: "請保持安靜，避免高聲交談。每床限 2 位訪客。",

    modal_fire_title: "消防避難計畫",
    fire_banner: "⚠️ 發生火警時請配合廣播引導，保持鎮靜避難。",
    fire_steps_title: "避難三大原則：",
    fire_step_1: "禁止搭乘電梯！請務必經由安全樓梯下樓。",
    fire_step_2: "沿走廊綠色出口指示燈方向前進。",
    fire_step_3: "至大樓外指定戶外避難廣場集合。",

    modal_menu_title: "螢幕偏好設定",
    set_volume: "音量調整",
    set_brightness: "螢幕亮度",
    set_screenlock: "防誤觸鎖定",

    call_requested_text: "服務呼叫已送出...",
    btn_cancel_call: "取消呼叫"
  },

  "zh-cn": {
    doctor_in_charge: "主治医师",
    doctor_name: "叶海亚 医师 (Dr. Yahya)",
    nurse_in_charge: "负责护理师",
    nurse_name: "舒利兰贾尼 护理师",
    dob_label: "出生日期",
    mrn_label: "病历号码",
    admission_label: "入院日期",
    status_banner_text: "患者已抵达手术室",
    banner_birthday: "🎂 生日快乐！祝您早日康复！",
    banner_bill: "💳 账单待支付 — 请前往收费柜台办理缴费。",
    banner_meal: "🍱 用餐提醒：请告知护理师您的餐点需求。",
    banner_discharge_tmr: "🏠 提醒：您预定明日出院，请准备个人物品。",
    no_food_drink: "禁食禁水",
    fall_caution: "防跌倒警示",
    special_precaution_title: "特别注意事项",
    precaution_1: "绝对卧床休息",
    precaution_2: "水分限制",
    precaution_3: "保护肢体",
    precaution_4: "限制访客",
    allergy_title: "过敏原",
    allergy_1: "青霉素 (Penicillin)",
    allergy_2: "乳胶 (Latex)",
    allergy_3: "海鲜 (Seafood)",
    allergy_4: "花生 (Peanuts)",

    // Buttons
    btn_intake: "出入量记录",
    btn_treatment: "今日护理计划",
    btn_medication: "住院用药指导",
    btn_health: "健康宣教资讯",
    btn_discharge: "出院准备状态",
    btn_notification: "系统消息通知",
    btn_survey: "服务满意度调查",
    btn_hospital: "环境与生活指南",
    btn_fire: "消防疏散指引",
    btn_menu: "屏幕偏好设置",

    // Call Functions
    call_pain: "疼痛协助呼叫",
    call_drip: "输液问题排除",
    call_water: "需要饮用开水",
    call_toilet: "协助如厕需求",
    call_bed: "更换/整理床位",
    call_housekeeping: "病房环境清洁",
    call_active_status: "呼叫中...",

    // Modals
    modal_intake_title: "出入量记录",
    modal_treatment_title: "护理计划时程",
    treat_1_title: "医师查房",
    treat_1_desc: "叶海亚医师病房巡视与临床检查。",
    treat_2_title: "静脉给药",
    treat_2_desc: "护理师舒利兰贾尼进行抗生素注射给药。",
    treat_3_title: "床边康复",
    treat_3_desc: "物理治疗师协助进行关节与肌力运动。",

    modal_medication_title: "药物指导说明",
    med_aspirin_desc: "每日一次，早餐后口服。用于预防血栓形成。",
    med_ceft_desc: "每12小时注射一次。主要用于细菌感染治疗。",

    modal_health_title: "健康宣教中心",
    edu_card_1_title: "糖尿病自我管理指南",
    edu_card_1_desc: "学习如何监测血糖、饮食控制及胰岛素注射步骤。",
    edu_card_2_title: "外科手术后伤口护理",
    edu_card_2_desc: "了解术后伤口观察、早期离床活动防护措施。",

    modal_discharge_title: "出院准备进度",
    discharge_step_1: "医师核准出院医嘱",
    discharge_step_2: "出院药袋核对备妥",
    discharge_step_3: "出院费用审核中",
    discharge_step_4: "手续完成即可出院",

    modal_notification_title: "通知中心",
    clear_all_notifications: "清除所有通知",
    modal_survey_title: "服务满意度调查表",
    survey_q1: "您对本次住院护理服务的满意度如何？",
    survey_q2: "您有其他任何建议或意见吗？",
    survey_submit: "提交满意度调查",
    survey_success: "感谢您的宝贵反馈！",

    modal_hospital_title: "医院生活须知",
    hosp_wifi: "免费 Wi-Fi",
    hosp_wifi_desc: "无需密码。连接 Hospital-Patient-Free 后在浏览器同意条款即可。",
    hosp_hours: "病房探视时间",
    hosp_hours_val: "每日开放：上午 11:00 - 下午 2:00，下午 5:00 - 晚上 8:00",
    hosp_rules: "维护病房秩序",
    hosp_rules_desc: "请保持安静，避免高声交谈。每床限 2 位访客。",

    modal_fire_title: "消防疏散计划",
    fire_banner: "⚠️ 发生火警时请配合广播引导，保持镇定疏散。",
    fire_steps_title: "疏散三大原则：",
    fire_step_1: "禁止乘坐电梯！请务必经由安全楼梯下楼。",
    fire_step_2: "沿走廊绿色出口指示灯方向前进。",
    fire_step_3: "至大楼外指定户外避难广场集合。",

    modal_menu_title: "屏幕偏好设置",
    set_volume: "音量调整",
    set_brightness: "屏幕亮度",
    set_screenlock: "防误触锁定",

    call_requested_text: "服务呼叫已发出...",
    btn_cancel_call: "取消呼叫"
  },

  ms: {
    doctor_in_charge: "Doktor yang bertanggungjawab",
    doctor_name: "Dr. Yahya bin Awang",
    nurse_in_charge: "Jururawat yang bertanggungjawab",
    nurse_name: "Sreeranjani Sundra Moorthy",
    dob_label: "Tarikh Lahir",
    mrn_label: "No. Rekod Perubatan",
    admission_label: "Tarikh Masuk Wad",
    status_banner_text: "Pesakit tiba di Bilik Pembedahan",
    banner_birthday: "🎂 Selamat Hari Jadi! Semoga cepat sembuh!",
    banner_bill: "💳 Bil belum dibayar — sila ke kaunter pembayaran.",
    banner_meal: "🍱 Peringatan pesanan makan: Sila maklumkan pilihan makanan anda kepada jururawat.",
    banner_discharge_tmr: "🏠 Peringatan: Anda dijadualkan keluar wad esok. Sila sediakan barang peribadi anda.",
    no_food_drink: "Tiada makanan & minuman",
    fall_caution: "Awas Jatuh",
    special_precaution_title: "Langkah Berjaga-jaga Khas",
    precaution_1: "Rehat sepenuhnya di atas katil",
    precaution_2: "Hadkan pengambilan cecair",
    precaution_3: "Jaga tangan",
    precaution_4: "Hadkan pelawat",
    allergy_title: "Alahan",
    allergy_1: "Penisilin (Penicillin)",
    allergy_2: "Lateks (Latex)",
    allergy_3: "Makanan laut (Seafood)",
    allergy_4: "Kacang (Peanuts)",

    // Buttons
    btn_intake: "Rekod Pengambilan & Pengeluaran",
    btn_treatment: "Pelan Rawatan",
    btn_medication: "Pendidikan Ubat-ubatan",
    btn_health: "Pendidikan Kesihatan",
    btn_discharge: "Status Keluar Wad",
    btn_notification: "Pemberitahuan",
    btn_survey: "Tinjauan Kepuasan",
    btn_hospital: "Maklumat Hospital",
    btn_fire: "Pelan Kebakaran",
    btn_menu: "Menu Pengguna",

    // Call Functions
    call_pain: "Bantuan Kesakitan",
    call_drip: "Masalah Titisan IV",
    call_water: "Minta Air Minuman",
    call_toilet: "Bantuan Ke Tandas",
    call_bed: "Tukar/Kemas Katil",
    call_housekeeping: "Kebersihan Wad",
    call_active_status: "Memanggil...",

    // Modals
    modal_intake_title: "Rekod Pengambilan & Pengeluaran",
    modal_treatment_title: "Pelan Rawatan",
    treat_1_title: "Rondaan Wad",
    treat_1_desc: "Pemeriksaan fizikal oleh Dr. Yahya bin Awang.",
    treat_2_title: "Ubat Intravena",
    treat_2_desc: "Pemberian antibiotik oleh Jururawat Sreeranjani.",
    treat_3_title: "Terapi Pemulihan",
    treat_3_desc: "Sesi ahli fisioterapi di tepi katil.",

    modal_medication_title: "Pendidikan Ubat-ubatan",
    med_aspirin_desc: "Sekali sehari selepas sarapan. Mencegah pembentukan bekuan darah.",
    med_ceft_desc: "Setiap 12 jam. Rawatan antibiotik.",

    modal_health_title: "Pendidikan Kesihatan",
    edu_card_1_title: "Panduan Penjagaan Diabetes",
    edu_card_1_desc: "Belajar cara mengurus gula darah, diet, dan panduan suntikan insulin.",
    edu_card_2_title: "Pemulihan Selepas Pembedahan",
    edu_card_2_desc: "Langkah berjaga-jaga penting selepas pembedahan untuk pemulihan selamat.",

    modal_discharge_title: "Status Keluar Wad",
    discharge_step_1: "Kelulusan Doktor",
    discharge_step_2: "Ubat Siap Sedia",
    discharge_step_3: "Penjelasan Kewangan",
    discharge_step_4: "Keluar Wad Selesai",

    modal_notification_title: "Pemberitahuan Sistem",
    clear_all_notifications: "Padam Semua",
    modal_survey_title: "Tinjauan Kepuasan",
    survey_q1: "Sejauh mana anda berpuas hati dengan penjagaan jururawat?",
    survey_q2: "Ada komen atau maklum balas lain?",
    survey_submit: "Hantar Maklum Balas",
    survey_success: "Terima kasih atas maklum balas anda! Kami akan terus meningkatkan perkhidmatan.",

    modal_hospital_title: "Maklumat Hospital",
    hosp_wifi: "Sambungan Wi-Fi",
    hosp_wifi_desc: "Tiada kata laluan. Sambung dan terima terma dalam pelayar.",
    hosp_hours: "Waktu Lawatan",
    hosp_hours_val: "Setiap hari: 11:00 PG - 2:00 TG, 5:00 PTG - 8:00 MLM",
    hosp_rules: "Peraturan Hospital",
    hosp_rules_desc: "Kurangkan bising. Maksimum 2 pelawat setiap katil pada satu masa.",

    modal_fire_title: "Pelan Pemindahan Kebakaran",
    fire_banner: "⚠️ Jika berlaku kebakaran, tenangkan diri dan ikuti arahan kakitangan.",
    fire_steps_title: "Langkah Pemindahan:",
    fire_step_1: "Jangan guna lif. Sentiasa guna tangga kecemasan.",
    fire_step_2: "Ikuti petunjuk keluar hijau di koridor.",
    fire_step_3: "Berkumpul di zon yang ditetapkan di luar lobi utama.",

    modal_menu_title: "Tetapan & Menu Pengguna",
    set_volume: "Kelantangan",
    set_brightness: "Kecerahan",
    set_screenlock: "Kunci Skrin",

    call_requested_text: "sedang dipanggil...",
    btn_cancel_call: "Batal Panggilan"
  }
};

// Language label map for the button display text
const langLabels = {
  en: 'ENG',
  zh: '繁中',
  'zh-cn': '简中',
  ms: 'BM'
};

// Empty notification messages per language
const emptyNotifMsg = {
  en: 'No new notifications.',
  zh: '目前無新訊息。',
  'zh-cn': '暂无新消息。',
  ms: 'Tiada pemberitahuan baharu.'
};

// Days of week per language
const daysOfWeek = {
  en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  zh: ['週日', '週一', '週二', '週三', '週四', '週五', '週六'],
  'zh-cn': ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
  ms: ['Ahd', 'Isn', 'Sel', 'Rab', 'Kha', 'Jum', 'Sab']
};

// Application State
let currentLang = 'en';
let activeCallId = null;
let notificationCount = 8;
let systemNotifications = [
  {
    id: 1, type: "med", time: "08:00",
    text_en: "Antibiotic Ceftriaxone injection is scheduled at 10:30.",
    text_zh: "抗生素注射 Ceftriaxone 排定於 10:30 施打。",
    "text_zh-cn": "抗生素注射 Ceftriaxone 预定于 10:30 进行。",
    text_ms: "Suntikan antibiotik Ceftriaxone dijadualkan pada pukul 10:30."
  },
  {
    id: 2, type: "doc", time: "07:45",
    text_en: "Dr. Yahya bin Awang will perform ward rounds around 09:00.",
    text_zh: "主治醫師 葉海亞 預計於 09:00 左右巡房。",
    "text_zh-cn": "主治医师叶海亚预计于 09:00 左右查房。",
    text_ms: "Dr. Yahya bin Awang akan membuat rondaan wad sekitar pukul 09:00."
  },
  {
    id: 3, type: "diet", time: "07:30",
    text_en: "Dietary restriction: Please confirm NPO status with your nurse.",
    text_zh: "飲食提示：請與您的照護護理師確認目前禁食禁水細節。",
    "text_zh-cn": "饮食提示：请与您的护理师确认禁食禁水详情。",
    text_ms: "Sekatan diet: Sila sahkan status NPO dengan jururawat anda."
  },
  {
    id: 4, type: "survey", time: "07:00",
    text_en: "Please take a moment to complete the Satisfaction Survey.",
    text_zh: "請抽空點選完成住院滿意度問卷調查。",
    "text_zh-cn": "请抽空完成住院满意度问卷调查。",
    text_ms: "Sila luangkan masa untuk melengkapkan Tinjauan Kepuasan."
  },
  {
    id: 5, type: "discharge", time: "06:30",
    text_en: "Discharge preparation assessment has started.",
    text_zh: "出院準備評估工作已啟動。",
    "text_zh-cn": "出院准备评估工作已启动。",
    text_ms: "Penilaian persediaan keluar wad telah bermula."
  }
];

// Elements
const langBtn = document.getElementById('langBtn');
const langDropdown = document.getElementById('langDropdown');
const timeEl = document.querySelector('.current-time');
const dateEl = document.querySelector('.current-date');
const globalCallBanner = document.getElementById('globalCallBanner');
const callingItemName = document.getElementById('callingItemName');
const cancelCallGlobal = document.getElementById('cancelCallGlobal');
const notificationBadge = document.getElementById('notificationBadge');
const notificationList = document.getElementById('notificationList');
const clearNotificationsBtn = document.getElementById('clearNotificationsBtn');

// 1. Clock & Date Updating Logic
function updateClock() {
  const now = new Date();

  // Format Time
  let hours = now.getHours();
  let minutes = now.getMinutes();
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  timeEl.textContent = `${hours}:${minutes}`;

  // Format Date
  let day = now.getDate();
  let month = now.getMonth() + 1;
  let year = now.getFullYear();

  day = day < 10 ? '0' + day : day;
  month = month < 10 ? '0' + month : month;

  const dayNames = daysOfWeek[currentLang] || daysOfWeek['en'];
  const dayName = dayNames[now.getDay()];

  dateEl.textContent = `${day}/${month}/${year} ${dayName}`;
}

// 2. Language Switch Renderer
function setLanguage(lang) {
  currentLang = lang;

  // Update UI texts mapped to translation keys
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update button language display label
  langBtn.querySelector('span').textContent = langLabels[lang] || 'ENG';

  // Refresh notifications list to update display language
  renderNotifications();

  // Update current time date layout format
  updateClock();
}

// Language Dropdown toggles
langBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  langDropdown.classList.toggle('show');
});

document.addEventListener('click', () => {
  langDropdown.classList.remove('show');
});

langDropdown.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const selectedLang = e.target.getAttribute('data-lang');
    setLanguage(selectedLang);
    langDropdown.classList.remove('show');
  });
});

// 3. Floating Modal Controller
const modalOverlays = document.querySelectorAll('.modal-overlay');
const funcButtons = document.querySelectorAll('.func-btn');

funcButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'flex';

      // If clicking Notification modal, clear badge count
      if (modalId === 'notificationModal') {
        notificationCount = 0;
        notificationBadge.style.display = 'none';

        // Remove red dot in discharge button if clicked as well
        const dischargeDot = document.querySelector('[data-modal="dischargeModal"] .unread-dot');
        if (dischargeDot) dischargeDot.style.display = 'none';
      }
    }
  });
});

// Modal close button event setup
document.querySelectorAll('.modal-close').forEach(closeBtn => {
  closeBtn.addEventListener('click', (e) => {
    const modal = e.target.closest('.modal-overlay');
    modal.style.display = 'none';
  });
});

// Click outside modal content to close it
modalOverlays.forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.style.display = 'none';
    }
  });
});

// 4. Clinical Survey Form Submit
const surveyForm = document.getElementById('surveyForm');
const surveySuccessMessage = document.getElementById('surveySuccessMessage');

if (surveyForm) {
  surveyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    surveyForm.style.display = 'none';
    surveySuccessMessage.style.display = 'block';

    // Simulate API feedback delay and reset form
    setTimeout(() => {
      surveySuccessMessage.style.display = 'none';
      surveyForm.reset();
      surveyForm.style.display = 'block';
      document.getElementById('surveyModal').style.display = 'none';
    }, 3000);
  });
}

// 5. Notifications List Renderer
function renderNotifications() {
  if (!notificationList) return;
  notificationList.innerHTML = '';

  if (systemNotifications.length === 0) {
    const emptyMsg = document.createElement('p');
    emptyMsg.style.textAlign = 'center';
    emptyMsg.style.color = '#7f8c8d';
    emptyMsg.style.padding = '20px';
    emptyMsg.textContent = emptyNotifMsg[currentLang] || emptyNotifMsg['en'];
    notificationList.appendChild(emptyMsg);
    clearNotificationsBtn.style.display = 'none';
    return;
  }

  clearNotificationsBtn.style.display = 'block';

  systemNotifications.forEach(notif => {
    const item = document.createElement('div');
    item.className = 'notif-item';

    // Pick the text for the current language, falling back to English
    const textKey = `text_${currentLang}`;
    const text = notif[textKey] || notif.text_en;

    item.innerHTML = `
      <div class="notif-header">
        <span>${notif.type.toUpperCase()}</span>
        <span>${notif.time}</span>
      </div>
      <div class="notif-body">${text}</div>
    `;
    notificationList.appendChild(item);
  });
}

clearNotificationsBtn.addEventListener('click', () => {
  systemNotifications = [];
  renderNotifications();
});

// 6. Interactive Nurse Call System
const callButtons = document.querySelectorAll('.call-btn');

callButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.id;
    const key = btn.querySelector('.call-label').getAttribute('data-key');
    const callLabelText = translations[currentLang][key];

    // If clicking already active calling button -> cancel call
    if (activeCallId === id) {
      cancelActiveCall();
    } else {
      // Deactivate current active call first
      if (activeCallId) {
        document.getElementById(activeCallId).classList.remove('calling-active');
      }

      // Set new active call
      activeCallId = id;
      btn.classList.add('calling-active');

      // Update global call alert banner details
      callingItemName.textContent = callLabelText;
      globalCallBanner.classList.add('banner-active');
    }
  });
});

// Cancel active call helper
function cancelActiveCall() {
  if (activeCallId) {
    document.getElementById(activeCallId).classList.remove('calling-active');
    activeCallId = null;
  }
  globalCallBanner.classList.remove('banner-active');
}

cancelCallGlobal.addEventListener('click', () => {
  cancelActiveCall();
});

// 8. Status Banner Cycling (5 notices, click to cycle)
const statusBannerEl = document.getElementById('statusBanner');
const bannerTextEl = document.getElementById('bannerText');
const bannerDotEls = document.querySelectorAll('.banner-dot');

// Each notice: translation key only
const bannerNotices = [
  { key: 'status_banner_text' },
  { key: 'banner_birthday' },
  { key: 'banner_bill' },
  { key: 'banner_meal' },
  { key: 'banner_discharge_tmr' },
];

let currentNoticeIndex = 0;

function applyBannerNotice(index, animate = true) {
  const notice = bannerNotices[index];
  const text = (translations[currentLang] && translations[currentLang][notice.key])
    ? translations[currentLang][notice.key]
    : translations['en'][notice.key];

  if (animate) {
    bannerTextEl.classList.add('fade-out');
    setTimeout(() => {
      bannerTextEl.textContent = text;
      bannerTextEl.classList.remove('fade-out');
      // Reset marquee animation
      bannerTextEl.style.animation = 'none';
      void bannerTextEl.offsetWidth;
      bannerTextEl.style.animation = '';
    }, 300);
  } else {
    bannerTextEl.textContent = text;
  }
}

// Banner click → cycle to next
statusBannerEl.addEventListener('click', () => {
  currentNoticeIndex = (currentNoticeIndex + 1) % bannerNotices.length;
  applyBannerNotice(currentNoticeIndex);
});

// Re-apply banner text on language change
window._bannerLangRefresh = function () {
  applyBannerNotice(currentNoticeIndex, false);
};

// Initialize first banner
applyBannerNotice(0, false);

// 7. Initialization
setLanguage('en'); // Default to English to match mockup exactly
window._bannerLangRefresh();
renderNotifications();
setInterval(updateClock, 1000);
updateClock();
console.log("Bedside Terminal Script v16 successfully loaded!");
