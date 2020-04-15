module.exports = function goodsAPI (options) {
  const _this = this;
  this.add({role: 'goods', method: 'getGoodsById'}, async function (msg, respond) {
    const orderGoods = {};
    orderGoods.order = await new Promise(function(resolve,reject){
      _this.act('role:order', {
        method: 'getOrderById',
        args:{
          query:msg.args.query
        },
      }, function(place,data){
        resolve(data);
      });
    });
    orderGoods.goods = await new Promise(function(resolve,reject){
      _this.act('role:goods', {
        method: 'query',
        args:{
          query:msg.args.query
        },
      }, function(place,data){
        resolve(data);
      });
    });
    respond(orderGoods);
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
