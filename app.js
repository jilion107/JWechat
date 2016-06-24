var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var wechat = require('wechat');

var routes = require('./routes/index');
var users = require('./routes/users');
var settings = require('./settings');

var app = express();
var config = {
  token : settings.token,
  appid : settings.appid,
  encodingAESKey : settings.encodingAESKey
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', routes);
//app.use('/users', users);
app.use(express.query());
app.use('/', wechat(config, function(req, res, next) {
    // ΢��������Ϣ����req.weixin��
    console.log(req.query.signature + "//" + req.query.timestamp);
    var info = req.weixin;
    if (info.FromUserName === 'diaosi') {
      res.reply('hehe');
    } else if (info.FromUserName === 'test') {
      res.reply({
        content: 'text object',
        type: 'text'
      });
    } else if (info.FromUserName === 'hehe') {
      res.reply({
        title: "Nothin",
        description: "Nothing to show",
        musicUrl: "http://mp3.com/xx.mp3?a=b&c=d",
        hqMusicUrl: "http://mp3.com/xx.mp3?foo=bar"
      });
    } else if (info.FromUserName === 'cs') {
      res.transfer2CustomerService();
    } else if (info.FromUserName === 'kf') {
      res.transfer2CustomerService('test1@test');
    } else if (info.FromUserName === 'ls') {
      res.reply(info.SendLocationInfo.EventKey);
    } else if (info.FromUserName === 'pic_weixin') {
      res.reply(info.SendPicsInfo.EventKey);
    } else if (info.FromUserName === 'web') {
      res.reply('web message ok');
    } else if (info.FromUserName === 'empty') {
      res.reply('');
    } else {
      res.reply([
        {
          title: 'Test中文',
          description: 'This a sample for test日本料理',
          picurl: 'http://img.cms.xmfish.com/data/upload/20166/file_1466650704.jpg',
          url: 'http://nodeapi.cloudfoundry.com/'
        }
      ]);
    }
}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
