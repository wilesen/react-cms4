/*
 * @Author: tingzi.wen 
 * @Date: 2019-09-10 17:26:50 
 * @Last Modified by: tingzi.wen
 * @Last Modified time: 2019-09-10 17:30:24
 */


export const setCookie = function (name: string, value: any, time?: number) {
    if (time) {     //当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
        var expires = time * 24 * 60 * 60 * 1000;
        var date = new Date(+new Date() + expires);
        document.cookie = name + "=" + escape(value) + ";expires=" + date.toUTCString();
    } else {
        document.cookie = name + "=" + escape(value);
    }
};

export const getCookie = function (name: string) {
    var arr;
    var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
        return JSON.parse(unescape(arr[2]));
    }
    return null;
};
