/**
 * Created by jilion.chen on 2016/7/4.
 */
"use strict";

let EVENTTYPE = {
    SUBSCRIBE: 'subscribe',
    UNSUBSCRIBE: 'unsubscribe',
    SCAN: 'SCAN',
    LOCATION: 'LOCATION',
    CLICK: 'CLICK',
    VIEW: 'VIEW'
}

module.exports = {
    handler: function(msg, res) {
        switch(msg.Event) {
            case EVENTTYPE.SUBSCRIBE:
                this.subscribe(msg, res);
                break;
            case EVENTTYPE.UNSUBSCRIBE:
                this.unsubscribe(msg, res);
                break;
            case EVENTTYPE.SCAN:
                this.scanHandler(msg, res);
                break;
            case EVENTTYPE.LOCATION:
                this.locationHandler(msg, res);
                break;
            case EVENTTYPE.CLICK:
                this.clickHandler(msg, res);
                break;
            case EVENTTYPE.VIEW:
                this.viewHandler(msg, res);
                break;
            default:
                console.log(msg.Event);
                res.reply('');
                break;
        }
    },

    subscribe: function(msg, res) {
        if(msg.EventKey) {
            console.log('EventKey: ' + msg.EVENTKey + '//' + 'Ticket: ' + msg.Ticket);
            res.reply({
                type: 'image',
                content: {
                    picurl: 'https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=' + msg.Ticket
                }
            });
        } else {
            res.reply([
                {
                    title: '小食光',
                    description: '懒周末，焙新鲜',
                    picurl: 'http://img.cms.xmfish.com/data/upload/20166/file_1466650704.jpg',
                    url: 'http://nodeapi.cloudfoundry.com/'
                }
            ]);
        }
    },

    unsubscribe: function (msg, res) {
        console.log("user " + msg.FromUserName + " unsubscribe.");
        res.reply('');
    },

    scanHandler: function(msg, res) {
        console.log('EventKey: ' + msg.EVENTKey + '//' + 'Ticket: ' + msg.Ticket);
        res.reply('');
    },

    locationHandler: function(msg, res) {//用户同意后，每次进入公众号或者进入后没5秒，上报地理位置
        console.log('user\'s latest location: ' + msg.Latitude + '-' + msg.Longitude + '-' + msg.Precision);
        res.reply('');
    },

    clickHandler: function(msg, res) {
        console.log('user click: ' + msg.EventKey);
        res.reply('');
    },

    viewHandler: function(msg, res) {
        console.log('user goes to url: ' + msg.EventKey);
        res.reply('');
    }
}