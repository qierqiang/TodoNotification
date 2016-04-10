function notify(title, body, tag) {
    var n = new Notification(title, { icon:"notice.png", body: body, tag: tag });
}

function getHost(url) {
    var a = document.createElement('a');
    a.href = url;
    return a.host;
}

function checkUrl(tabId, changeInfo, tab) {
    if (getHost(tab.url).toLowerCase() == "cn.bing.com") {
        chrome.pageAction.show(tabId);
        notify("title", "body", new Date().getMinutes());
    }
}

function ajax() {
    var _data = "{\"BaseOUGuid\": \"-1\",\"UserGuid\": \"8623cf12-b066-4dab-9d33-0a89e331a1d0\"}";
    var _url = "http://172.18.18.18/hftpframe/ZHManageMis_HFZTB/MainPages/TP_Main_OA/TP_Main_OA.aspx/GetMissionContent";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4) {
            //HTTP响应已经完全接收才调用
            read(data);
        }
    };
    xmlHttp.open("post", _url, false);
    xmlHttp.send(_data);
}

function read(data){
    
}

chrome.tabs.onUpdated.addListener(checkUrl);