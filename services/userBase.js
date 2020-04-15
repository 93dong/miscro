/**
 * @desc 获取用户信息
 * @msg userID:用户标号
 * @msg userName:用户名
 * @msg carGoods:购物车商品
 */
module.exports = function user (options) {

  this.add({role: 'user', method: 'addUser'}, function (msg, replay) {
    replay({})
  });

  this.add({role: 'user', method: 'delUser'}, function (msg, replay) {
    replay({})
  });

  this.add({role: 'user', method: 'editUser'}, function (msg, replay) {
    replay({})
  });

  this.add({role: 'user', method: 'queryUser'}, function (msg, replay) {
    replay(msg)
  });

};



