module.exports = function userAPI (options) {
  this.add({role: 'user', method: 'getUserById'}, function (msg, respond) {
    this.act('role:user', {
      method: 'queryUser',
      params:msg.args.query,
    }, respond);
  });
  this.add('init:userAPI', function (msg, respond) {
    this.act('role:web', {
      routes: {
        prefix: '/api',
        pin: 'role:user,method:*',
        map: {
          getUserById: {GET: true},
        }
      }
    }, respond)
  })
}
