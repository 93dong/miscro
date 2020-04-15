module.exports = function api (options) {
  this.add('init:api', function (msg, respond) {
    this.act('role:web', {
      routes: {
        prefix: '/api',
        pin: 'role:api,path:*',
        map: {
          calculate: {GET: true, suffix: '/:operation'},
          query: {GET: true},
          goods: {GET: true, suffix: '/:method'},
        }
      }
    }, respond)
  })
}
