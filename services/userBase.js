var seneca = require('seneca')({
  tag: 'user',
  debug: {
    undead: true,
    deprecation: false,
  },
  timedOut: 10000,
});

/**
 * @desc 获取用户信息
 * @msg userID:用户标号
 * @msg userName:用户名
 * @msg carGoods:购物车商品
 */
seneca.add({role: 'user', method: 'registerUser'}, function (msg, replay) {
  replay()
});

seneca.add({role: 'user', method: 'editUser'}, function (msg, replay) {
  replay()
});

seneca.add({role: 'user', method: 'getUser'}, function (msg, replay) {
  replay()
});



