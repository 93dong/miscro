module.exports = function orderAPI (options) {
  this.add({role: 'order', method: 'getOrderById'}, function (msg, respond) {
    this.act('role:order', {
      method: 'queryOrder',
      params:msg.args.query,
    }, respond);
  });
  this.add('init:orderAPI', function (msg, respond) {
    this.act('role:web', {
      routes: {
        prefix: '/api',
        pin: 'role:order,method:*',
        map: {
          getOrderById: {GET: true},
        }
      }
    }, respond)
  })
}
