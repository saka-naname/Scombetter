import "./styles/sidemenu.scss";

import replaceSideMenuIcons from "./js/replaceSideMenuIcons";

//  初期状態（設定が保存されていない場合に適用される）
const defaults = {
    settings: {
        replaceSideMenuIcons: false
    }
}

chrome.storage.local.get(defaults, (data) => {
    if(data.settings.replaceSideMenuIcons === true) replaceSideMenuIcons();
});