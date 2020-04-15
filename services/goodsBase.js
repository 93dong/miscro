module.exports = function goodsBase (options) {

  this.add({role: 'goods', method: 'add'}, function (msg, respond) {
    respond(msg)
  });

  this.add({role: 'goods', method: 'del'}, function (msg, respond) {
    respond(msg)
  });

  this.add({role: 'goods', method: 'edit'}, function (msg, respond) {
    respond(msg)
  });

  this.add({role:'goods',method:'query'}, function (msg, respond) {
    respond({
      goodsID:'dasdsadsadas',
      goodsName:'钮咕噜',
      ...msg.params,
    })
  });

};
