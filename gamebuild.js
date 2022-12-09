//開始建構
startbuild(scriptsetvalue);
//建構
function startbuild(value) {
    for (let type in value) {
        buildmain(value[type]);
    }
}
//主頁面建構
function buildmain(obj) {
    for (let val in obj) {
        let div = creatediv(val, obj[val]);
        document.body.appendChild(div);
    }
    for (let val in obj) {
        if (obj[val]['button']) {
            buttonfuncre(val, obj[val]['button']);
        }
    }
}
//文字段落建構
function createpre(pre) {
    let node = document.createElement("p");

    let textvalue = pre;
    textvalue.forEach((e) => {
        let textnode = document.createTextNode(e);
        let br = document.createElement("br");
        node.appendChild(textnode);
        node.appendChild(br);
    })
    return node;
}
//按鈕建構
function createbutton(id, bid, obj) {
    let button = document.createElement("button");
    button.setAttribute("id", `${id}_${bid}`);
    button.textContent = obj['text'];
    return button;
}
//章節建構
function creatediv(id, obj) {
    let div = document.createElement("div");
    div.setAttribute("id", id);
    div.setAttribute('style', `display:${obj['display']}`);
    let hr = document.createElement("hr");
    let pre = createpre(obj['pre']);
    div.appendChild(pre);
    if (obj['type'] != 'good') {
        let buttonlist = [];
        for (let bid in obj['button']) {
            buttonlist.push(createbutton(id, bid, obj['button'][bid]));
        }
        buttonlist.forEach((e) => {
            let br = document.createElement("br");
            div.appendChild(e);
            div.appendChild(br)
        })
    }
    div.appendChild(hr);
    if (obj['type'] == 'good') {
        let node = document.createElement("p");
        let textnode = document.createTextNode(obj['text']);
        node.appendChild(textnode);
        div.appendChild(node);
    }
    return div;
}
//按鈕功能
function actmove(arr, id, foc) {
    arr.forEach((e) => { document.getElementById(e).style.display = "none"; })
    document.getElementById(id).style.display = "block";
    if (foc != '') { document.getElementById(foc).focus(); }
}
//按鈕功能篩選
const actfun = (obj) => {
    let foc = obj['foc'] ? obj['next'] + '_A' : '';
    actmove(obj['hidden'], obj['next'], foc);
}
//按鈕功能賦予
function buttonfuncre(id, obj) {
    for (let val in obj) {
        let bid = `${id}_${val}`;
        document.getElementById(bid).onclick = () => {
            actfun(obj[val]);
        }
    }
}


