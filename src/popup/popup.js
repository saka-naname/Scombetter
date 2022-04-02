//  初期状態（設定が保存されていない場合に適用される）
const defaults = {
    settings: {
        hidePageTopButton: false
    }
}

function initSettingForm(){
    //  チェックボックスに現在の状態を反映し、変更時の保存イベントを登録する
    chrome.storage.local.get(defaults, (items) => {
        for(const key in items.settings){
            const element = document.getElementsByName(key)[0];
            if(element) element.checked = items.settings[key];
        }
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

initSettingForm();

document.getElementById("button-save").addEventListener("click", (e) => {
    saveSettings();
});