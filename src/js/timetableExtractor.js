//  LMSから時間割データを抽出する

const semesters = {
    first: 10,
    second: 20
}

const lmsPath = "https://scombz.shibaura-it.ac.jp/lms/timetable";

function extractTimetableOnLMS(){
    const currentPath = location.origin + location.pathname;

    if(lmsPath != currentPath){
        console.error(`extractTimetableOnLMS()は ${lmsPath} を開いている時のみ動作します`);
        return [];
    }

    const timetableRows = document.querySelectorAll("#selectTimetable .div-table .div-table-data-row");
    let timetable = [
        [], //  Mon
        [], //  Tue
        [], //  Wed
        [], //  Thu
        [], //  Fri
        []  //  Sat
    ]

    for(let i = 0; i < timetableRows.length; i++){
        let timetableCols = timetableRows[i].querySelectorAll(".div-table-cell");
        for(let j = 0; j < 6; j++){
            timetable[j].push(parseSubjectCell(timetableCols[j]));
        }
    }

    return timetable;
}

function parseSubjectCell(tableCell){
    if (tableCell.children.length === 0) return null;

    const topCell = tableCell.querySelector(".timetable-course-top-btn");
    const detailCell = tableCell.querySelector(".div-table-cell-detail");
    let subject = {};

    subject.title = topCell.innerText;
    subject.id = topCell.id;
    subject.venue = detailCell.children[0].title;
    subject.teacher = "";
    detailCell.querySelectorAll("span").forEach(teacher_ => {
        subject.teacher += teacher_.innerText;
    });

    return subject;
}

console.table(extractTimetableOnLMS());
console.log(extractTimetableOnLMS()[4][2]);