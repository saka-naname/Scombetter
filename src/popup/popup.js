//  初期状態（設定が保存されていない場合に適用される）
const defaults = {
    settings: {
        hidePageTopButton: false
    },
    timetable: []
}

const terms = [
    "9:00~10:40",
    "10:50~12:30",
    "13:20~15:00",
    "15:10~16:50",
    "17:00~18:40",
    "18:50~20:30"
]

const weekdays = [
    "月",
    "火",
    "水",
    "木",
    "金",
    "土"
]

const coursePath = "https://scombz.shibaura-it.ac.jp/lms/course"

function escapeHtml(str){
    return str.replace(/&/g, "&amp;")
            .replace(/>/g, "&gt;")
            .replace(/</g, "&lt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#x27;")
            .replace(/`/g, "&#x60;");
}

function initPopup(){
    chrome.storage.local.get(defaults, (items) => {
        //  チェックボックスに現在の状態を反映し、変更時の保存イベントを登録する
        for(const key in items.settings){
            const element = document.getElementsByName(key)[0];
            if(element) element.checked = items.settings[key];
        }

        renderWeekTimetable(items.timetable, (new Date()).getDay() - 1);
    });
}

function saveSettings(){
    let data = {};
    data.settings = {};

    document.querySelectorAll(".setting-item input").forEach(element => {
        data.settings[element.name] = element.checked;
    });

    chrome.storage.local.set(data, () => {
        
    });
}

function renderWeekTimetable(timetable, weekday){
    if(weekday < 0 || 5 < weekday){
        return renderWeekTimetable(timetable, 0);
    }

    let target = document.getElementById("timetable");
    while(target.firstChild){
        target.removeChild(target.firstChild);
    }

    if(timetable.length === 0){
        target.innerHTML = "ScombZの時間割を拡張機能に保存するとここに表示されます<ol><li>ScombZにアクセスする</li><li>左サイドメニューの「LMS」をクリックして時間割を表示する</li><li>「Scombetterに時間割を保存」ボタンをクリック</li></ol>";
        return;
    }

    let weekdayTabsContainer = document.createElement("div");
    weekdayTabsContainer.id = "weekdayTabsContainer";
    for(let _i = 0; _i < 6; _i++){
        let weekdayTabElement = document.createElement("span");
        weekdayTabElement.innerText = weekdays[_i];
        if( _i === weekday ){
            weekdayTabElement.classList = "weekday-tab active";
        }else{
            weekdayTabElement.classList = "weekday-tab";
            weekdayTabElement.addEventListener("click", function(e){
                renderWeekTimetable(timetable, _i);
            });
        }

        weekdayTabsContainer.appendChild(weekdayTabElement);
    }
    target.appendChild(weekdayTabsContainer);

    let timetableElement = document.createElement("table");
    for(let _i = 0; _i < 6; _i++){
        let subject = timetable[weekday][_i];
        let rowElement = document.createElement("tr");

        let timeDataElement = document.createElement("td");
        timeDataElement.classList = "timetable-data-time";
        timeDataElement.innerHTML = `${_i + 1}限<br><span class="time-term">${terms[_i]}</span>`
        rowElement.appendChild(timeDataElement);

        if(subject){
            let detailDataElement = document.createElement("td");
            detailDataElement.classList = "timetable-data-subject";
            detailDataElement.innerHTML = `<div class="subject-title"><a href="${coursePath}?idnumber=${escapeHtml(subject.id)}" target="_blank" rel="noopener noreferrer">${escapeHtml(subject.title)}</a></div><div class="subject-detail"><span class="venue">${escapeHtml(subject.venue)}</span><span>${escapeHtml(subject.teacher)}</span></div>`
            rowElement.appendChild(detailDataElement);
        }else{
            let dummyDetailDataElement = document.createElement("td");
            dummyDetailDataElement.classList = "timetable-data-subject timetable-data-subject-dummy";
            rowElement.appendChild(dummyDetailDataElement);
        }

        timetableElement.appendChild(rowElement);
    }

    target.appendChild(timetableElement);
}

initPopup();

document.querySelectorAll(".setting-item input").forEach(element => {
    element.addEventListener("click", (e => {
        saveSettings();
    }), false)
});