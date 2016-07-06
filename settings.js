"use strict";
let settings = {
    token: 'jilionchen',
    appid: 'wx2b9e932d37aa196f',
    encodingAESKey: '',
    appsecret: '09b91e1af2cef116cf52c9e3060a2b97',
    keywords: {
        equalWord: 'breakfast,早餐',
        containWord: 'today,今天'
    },
    manager: 'oyROSwt1v3Il6IpeQXVdAXHqZWn0',
    menu: {
        "button":[
            {
                "name": "一刻",
                "sub_button": [
                    {
                        "type": "view",
                        "name": "八点一刻",
                        "url": "http://www.xiachufang.com/"
                    },
                    {
                        "type": "view",
                        "name": "三点一刻",
                        "url": "http://www.21cake.com/"
                    },
                    {
                        "type": "click",
                        "name": "赞一下我们",
                        "key": "V1001_GOOD"
                    }
                ]
            },
            {
                "name":"扫码",
                "sub_button":[
                    {
                        "type": "scancode_push",
                        "name": "扫码推事件",
                        "key": "JWechatSMT"
                    },
                    {
                        "type": "scancode_waitmsg",
                        "name": "扫码带提示",
                        "key": "JWechatSMTS"
                    },
                    {
                        "type": "location_select",
                        "name": "发送位置",
                        "key": "JWechatFSWZ"
                    }
                ]
            },
            {
                "name":"发图",
                "sub_button":[
                    {
                        "type": "pic_sysphoto",
                        "name": "系统拍照发图",
                        "key": "JWechatSTPZFT"
                    },
                    {
                        "type":"pic_photo_or_album",
                        "name":"拍照或者相册发图",
                        "key":"JWechatXCFT"
                    },
                    {
                        "type":"pic_weixin",
                        "name":"微信相册发图",
                        "key":"JWechatWXFT"
                    }]
            }
            ]
    },
    customMenu: {
        "button":[
            {
                "type":"click",
                "name":"今日歌曲",
                "key":"V1001_TODAY_MUSIC"
            },
            {
                "name":"菜单",
                "sub_button":[
                    {
                        "type":"view",
                        "name":"搜索",
                        "url":"http://www.soso.com/"
                    },
                    {
                        "type":"view",
                        "name":"视频",
                        "url":"http://v.qq.com/"
                    },
                    {
                        "type":"click",
                        "name":"赞一下我们",
                        "key":"V1001_GOOD"
                    }]
            }],
        "matchrule":{
            //"tag_id":"2",
            "sex":"2"//,
            //"country":"中国",
            //"province":"广东",
            //"city":"广州",
            //"client_platform_type":"2",
            //"language":"zh_CN"
        }
    }

}

module.exports = settings