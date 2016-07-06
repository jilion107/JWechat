/**
 * Created by jilion.chen on 2016/7/4.
 */
"use strict";

module.exports = {
    handler: function(msg, res) {
        console.log("Jilion: " + msg.MsgType);
        res.reply({
            type: "video",
            content: {
                title: '早餐',
                description: '唯有美食与爱不可辜负',
                mediaId: msg.MediaId
            }
        });
    }
}