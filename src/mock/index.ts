import * as Mock from 'mockjs';

export default Mock.mock('/getdata', 'get', {
    success: true,
    'list|1-3': [{
        'sid|+1': 1,
        'userId|5': '',
        "sex|1-2": true,
        "city|2-4": {
            "110000": "北京市",
            "120000": "天津市",
            "130000": "河北省",
            "140000": "山西省"
        },
        "grade|1": [
            "1年级",
            "2年级",
            "3年级"
        ],
        'guid': '@guid',
        'id': '@id',
        'title': '@title()',
        'paragraph': '@cparagraph',
        'image': "@image('200x100', '#FFC0CB', 'Hello')",
        'address': '@county(true)',
        'date': '@date("yyyy-MM-dd")',
        'time': '@time("HH:mm:ss")',
        'url': '@url',
        'email': '@email',
        'ip': '@ip',
        'regexp': /[a-z][A-Z][0-9]/,
    }],
    "message": '@cparagraph',
})