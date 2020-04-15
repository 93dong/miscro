module.exports = function goodsAPI (options) {
  const _this = this;
  this.add({role: 'goods', method: 'getGoodsById'}, function (msg, respond) {
    _this.act('role:order', {
      method: 'getOrderById',
      args:{
        query:msg.args.query
      },
    }, respond);
  });
  this.add('init:goodsAPI', function (msg, respond) {
    _this.act('role:web', {
      routes: {
        prefix: '/api',
        pin: 'role:goods,method:*',
        map: {
          getGoodsById: {GET: true},
        }
      }
    }, respond)
  })
}
