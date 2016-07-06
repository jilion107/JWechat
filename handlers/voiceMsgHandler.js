/**
 * Created by jilion.chen on 2016/7/4.
 */
"use strict";

module.exports = {
    handler: function(msg, res) {
        res.reply({
            type: 'voice',
            mediaId: msg.MediaId
        });
    }
}
