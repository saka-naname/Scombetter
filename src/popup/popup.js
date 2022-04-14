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
    "18:50~20:30",
    "20:40~22:00"
]

const coursePath = "https://scombz.shibaura-it.ac.jp/lms/course"

function initPopup(){
    chrome.storage.local.get(defaults, (items) => {
        //  チェックボックスに現在の状態を反映し、変更時の保存イベントを登録する
        for(const key in items.settings){
            const element = document.getElementsByName(key)[0];
            if(element) element.checked = items.settings[key];
        }

        console.log(items.timetable, (new Date()).getDay());
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
        alert("設定を保存しました");
    });
}

function renderWeekTimetable(timetable, weekday){
    if(weekday < 0 || 5 < weekday){
        renderWeekTimetable(timetable, 0);
    }

    let target = document.getElementById("timetable");
    while(target.firstChild){
        target.removeChild(target.firstChild);
    }

    let timetableElement = document.createElement("table");
    for(let _i = 0; _i < timetable[weekday].length; _i++){
        let subject = timetable[weekday][_i];
        let rowElement = document.createElement("tr");

        let timeDataElement = document.createElement("td");
        timeDataElement.classList = "timetable-data-time";
        timeDataElement.innerHTML = `${_i + 1}限<br><span class="time-term">${terms[_i]}</span>`
        rowElement.appendChild(timeDataElement);

        if(subject){
            let detailDataElement = document.createElement("td");
            detailDataElement.classList = "timetable-data-subject";
            detailDataElement.innerHTML = `<div class="subject-title"><a href="${coursePath}?idnumber=${subject.id}" target="_blank" rel="noopener noreferrer">${subject.title}</a></div><div class="subject-detail"><span class="venue">${subject.venue}</span><span>${subject.teacher}</span></div>`
            rowElement.appendChild(detailDataElement);
        }

        timetableElement.appendChild(rowElement);
    }

    target.appendChild(timetableElement);
}

initPopup();

document.getElementById("button-save").addEventListener("click", (e) => {
    saveSettings();
});