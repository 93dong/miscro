module.exports = function goodsAPI (options) {
  this.add({role: 'goods', method: 'getGoodsById'}, function (msg, respond) {
    this.act('role:goods', {
      method: 'query',
      params:msg.args.query,
    }, respond);
  });
  this.add('init:goodsAPI', function (msg, respond) {
    this.act('role:web', {
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
