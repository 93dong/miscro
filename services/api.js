module.exports = function api (options) {

  var valid_ops = {sum: 'sum', product: 'product'}

  this.add('role:api,path:calculate', function (msg, respond) {
    var operation = msg.args.params.operation;
    var left = msg.args.query.left;
    var right = msg.args.query.right;
    this.act('role:math', {
      cmd: valid_ops[operation],
      left: left,
      right: right,
    }, respond)
  })
  this.add('role:api,path:goods', function (msg, respond) {
    var operation = msg.args.params.method;
    var params = msg.args.query;
    console.log(operation);
    // respond(params);
    this.act('role:goods', {
      method: operation,
      params,
    }, respond)
  });

  this.add('role:api,method:query', function (msg, respond) {
    respond({
      a: 123,
      b: 321,
    })
  });
  this.add('role:api,path:calculate', function (msg, respond) {
    var operation = msg.args.params.operation
    var left = msg.args.query.left
    var right = msg.args.query.right
    this.act('role:math', {
      cmd: valid_ops[operation],
      left: left,
      right: right,
    }, respond)
  })

  this.add('role:api,method:query', function (msg, respond) {
    respond({
      a: 123,
      b: 321,
    })
  });
  this.add('init:api', function (msg, respond) {
    this.act('role:web', {
      routes: {
        prefix: '/api',
        pin: 'role:api,method:*',
        map: {
          calculate: {GET: true, suffix: '/:operation'},
          query: {GET: true},
          goods: {GET: true, suffix: '/:method'},
        }
      }
    }, respond)
  })

}
