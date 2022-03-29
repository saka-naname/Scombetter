const iconClasses = {
    "portal-home-icon": {
        fa_class: "fa-solid fa-house-chimney",
        color: "#03832e"
    },
    "lms-icon": {
        fa_class: "fa-solid fa-graduation-cap",
        color: "#0062c6"
    },
    "task-icon": {
        fa_class: "fa-solid fa-clipboard-list",
        color: "#0062c6"
    },
    "online-icon": {
        fa_class: "fa-solid fa-users-rectangle",
        color: "#0062c6"
    }
}

export default function replaceSideMenuIcons(){
    

    for(const targetClass in iconClasses){
        let targetElements = document.getElementsByClassName(targetClass);
        for(let i = 0; i < targetElements.length; i++){
            $(targetElements[i]).removeClass(targetClass)   //  ::beforeの付くclassを取り除くことで無理やり元のアイコンを消す
                .addClass("icon-replaced-menu")             //  sidemenu.scssでスタイルをいじるために適用
                .prepend(`<i class="${iconClasses[targetClass].fa_class} replaced-icon" style="color: ${iconClasses[targetClass].color}"></i>`);
        }
    }
}