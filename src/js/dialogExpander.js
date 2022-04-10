//  ポータルメニューのダイアログを大きくする

const observer = new MutationObserver((mutations) => {
    const dialog = $("[aria-describedby='infoDetailView']");
    const progressDialog = $("[aria-describedby='progress_dialog']");
    const lmsDialog = $("[aria-describedby='info_detail_view2']");

    //  ポータルホームのダイアログの処理
    if(dialog.length > 0 && progressDialog.length === 0 && dialog.css("display") != "none"){
        //  ダイアログが開かれた時のみ処理を実行する
        $("#infoDetailView").css("max-height", "calc(90vh - 40px)").css("height", "calc(90vh - 40px)");
        dialog.css("position", "fixed").css("inset", "0").css("margin", "auto").css("height", "fit-content");
    }

    //  LMSのダイアログの処理
    if(lmsDialog.length > 0 && lmsDialog.css("display") != "none"){
        //  ダイアログが開かれた時のみ処理を実行する
        $("#info_detail_view2").css("max-height", "calc(90vh - 40px)").css("height", "calc(90vh - 40px)");
        lmsDialog.css("position", "fixed").css("inset", "0").css("margin", "auto").css("height", "fit-content");
    }
});

const config = {
    childList: true
}

const target = document.body;

observer.observe(target, config);