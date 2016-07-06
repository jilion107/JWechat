/**
 * Created by jilion.chen on 2016/7/5.
 */
'use strict'

module.exports = {
    getCSList: function(api, res) {
        api.getCustomServiceList(function(error, result) {
            //let csList = JSON.parse(result);
            console.log(result);
        });
    },

    addCS: function (api, res) {
        api.addKfAccount('jilion@gh_04d437791d4d', 'jilion', '123456', function(error, result) {
            console.log('Jwechat:' + result);
            res.reply('');
        });
    }
}