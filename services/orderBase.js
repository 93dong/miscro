/**
 * 订单服务
 */
module.exports = function order (options) {

  this.add({role: 'order', method: 'addOrder'}, function (msg, replay) {
    replay({})
  });

  this.add({role: 'order', method: 'delOrder'}, function (msg, replay) {
    replay({})
  });

  this.add({role: 'order', method: 'editOrder'}, function (msg, replay) {
    replay({})
  });

  this.add({role: 'order', method: 'queryOrder'}, function (msg, replay) {
    replay({
      orderId:'dasdasda',
      orderName:'钮宝宝买戒指了'
    })
  });

};

