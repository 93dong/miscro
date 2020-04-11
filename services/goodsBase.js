var seneca = require('seneca')({tag: 'goods'});

/**
 * 商品服务
 */
seneca.add({role: 'goods', method: 'getGoods'}, function (msg, replay) {
  replay({})
});

seneca.add({role: 'goods', method: 'addGoods'}, function (msg, replay) {
  replay({})
});

seneca.add({role: 'goods', method: 'delGoods'}, function (msg, replay) {
  replay({})
});

seneca.add({role: 'goods', method: 'editGoods'}, function (msg, replay) {
  replay({})
});


