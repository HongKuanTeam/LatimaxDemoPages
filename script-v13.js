/* ==========================================
   BEDSIDE TERMINAL DEMO - INTERACTIVE SCRIPT
   ========================================== */

// Translation Dictionary (ENG / 繁中)
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
    no_food_drink: "No food no drink",
    fall_caution: "Fall Caution",
    special_precaution_title: "Special Precaution",
    precaution_1: "Complete rest in bed",
    precaution_2: "Fluid restriction",
    precaution_3: "Preserve hand",
    precaution_4: "Restrict visitors",
    allergy_title: "Allergy",
    allergy_1: "Complete rest in bed",
    allergy_2: "Fluid restriction",
    allergy_3: "Preserve hand",
    allergy_4: "Restrict visitors",
    
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
    no_food_drink: "禁食禁水",
    fall_caution: "防跌倒警示",
    special_precaution_title: "特別注意事項",
    precaution_1: "絕對臥床休息",
    precaution_2: "水分限制",
    precaution_3: "保護肢體",
    precaution_4: "限制訪客",
    allergy_title: "過敏原",
    allergy_1: "絕對臥床休息",
    allergy_2: "水分限制",
    allergy_3: "保護肢體",
    allergy_4: "限制訪客",
    
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
  }
};

// Application State
let currentLang = 'en';
let activeCallId = null;
let notificationCount = 8;
let systemNotifications = [
  { id: 1, type: "med", time: "08:00", text_en: "Antibiotic Ceftriaxone injection is scheduled at 10:30.", text_zh: "抗生素注射 Ceftriaxone 排定於 10:30 施打。" },
  { id: 2, type: "doc", time: "07:45", text_en: "Dr. Yahya bin Awang will perform ward rounds around 09:00.", text_zh: "主治醫師 葉海亞 預計於 09:00 左右巡房。" },
  { id: 3, type: "diet", time: "07:30", text_en: "Dietary restriction: Please confirm NPO status with your nurse.", text_zh: "飲食提示：請與您的照護護理師確認目前禁食禁水細節。" },
  { id: 4, type: "survey", time: "07:00", text_en: "Please take a moment to complete the Satisfaction Survey.", text_zh: "請抽空點選完成住院滿意度問卷調查。" },
  { id: 5, type: "discharge", time: "06:30", text_en: "Discharge preparation assessment has started.", text_zh: "出院準備評估工作已啟動。" }
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
  let month = now.getMonth() + 1; // January is 0
  let year = now.getFullYear();
  
  day = day < 10 ? '0' + day : day;
  month = month < 10 ? '0' + month : month;
  
  const daysOfWeekEn = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const daysOfWeekZh = ['週日', '週一', '週二', '週三', '週四', '週五', '週六'];
  
  const dayName = currentLang === 'en' 
    ? daysOfWeekEn[now.getDay()] 
    : daysOfWeekZh[now.getDay()];
    
  dateEl.textContent = `${day}/${month}/${year} ${dayName}`;
}

// 2. Language Switch Renderer
function setLanguage(lang) {
  currentLang = lang;
  
  // Update UI texts mapped to translation keys
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update button language display
  langBtn.querySelector('span').textContent = lang === 'en' ? 'ENG' : '繁中';
  
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
    emptyMsg.textContent = currentLang === 'en' ? "No new notifications." : "目前無新訊息。";
    notificationList.appendChild(emptyMsg);
    clearNotificationsBtn.style.display = 'none';
    return;
  }
  
  clearNotificationsBtn.style.display = 'block';
  
  systemNotifications.forEach(notif => {
    const item = document.createElement('div');
    item.className = 'notif-item';
    
    const text = currentLang === 'en' ? notif.text_en : notif.text_zh;
    
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

// 7. Initialization
setLanguage('en'); // Default to English to match mockup exactly
renderNotifications();
setInterval(updateClock, 1000);
updateClock();
console.log("Bedside Terminal Script successfully loaded!");
