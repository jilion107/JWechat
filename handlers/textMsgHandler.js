/**
 * Created by jilion.chen on 2016/7/4.
 */
"use strict";
let settings = require('../settings');

module.exports = {
    handler: function(msg, res) {
        var keywords = settings.keywords;
        var equalKeyword = keywords.equalWord.split(',');
        var containKeyword = keywords.containWord.split(',');
        var content = msg.Content;
        for(let v of equalKeyword) {
            if(content === v) {
                console.log("match equal: " + v);
                res.reply('吃早餐是一种习惯，是一种观念，是我们对生活的态度。生活的脚步也许匆忙，但我们不能因此省略掉那些必须的步骤。');
                return;
            }
        }
        for(let v of containKeyword) {
            if(content.indexOf(v) > -1 && content !== v) {
                console.log("match contain: " + v);
                res.reply('全麦吐司、鸡蛋、生菜叶子、西红柿、火腿');
                return;
            }
        }
        res.reply('hehe');
    }
}