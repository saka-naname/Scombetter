import "./styles/sidemenu.scss";
import "./styles/portal_home.scss"

//  初期状態（設定が保存されていない場合に適用される）
const defaults = {
    settings: {
        hidePageTopButton: false
    }
}

chrome.storage.local.get(defaults, (items) => {
    if(items.settings.hidePageTopButton === true){
        $(".page-top-btn").css("visibility", "hidden");
    }
});

import "./js/dialogExpander";
import "./js/timetableExtractor";