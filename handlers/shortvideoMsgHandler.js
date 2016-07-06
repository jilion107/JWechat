/**
 * Created by jilion.chen on 2016/7/4.
 */
"use strict";

module.exports = {
    handler: function(msg, res) {
        res.reply({
            type: 'text',
            content: '唯有美食与爱不可辜负'
        });
    }
}