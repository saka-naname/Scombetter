//  ポータルメニューのダイアログを大きくする

const observer = new MutationObserver((mutations) => {
    const dialog = $("[aria-describedby='infoDetailView']");
    const progressDialog = $("[aria-describedby='progress_dialog']");
    const notificationDialog = $("[aria-describedby='info_detail_view2']");

    //  ポータルホームのダイアログの処理
    if(dialog.length > 0 && progressDialog.length === 0 && dialog.css("display") != "none"){
        //  ダイアログが開かれた時のみ処理を実行する
        $("#infoDetailView").css("max-height", "calc(90vh - 40px)").css("height", "calc(90vh - 40px)");
        dialog.css("position", "fixed").css("inset", "0").css("margin", "auto").css("height", "fit-content");
    }

    //  お知らせのダイアログの処理
    if(notificationDialog.length > 0 && notificationDialog.css("display") != "none"){
        //  ダイアログが開かれた時のみ処理を実行する
        $("#info_detail_view2").css("max-height", "calc(90vh - 40px)").css("height", "calc(90vh - 40px)");
        notificationDialog.css("position", "fixed").css("inset", "0").css("margin", "auto").css("height", "fit-content");
    }
});

const config = {
    childList: true
}

const target = document.body;

observer.observe(target, config);