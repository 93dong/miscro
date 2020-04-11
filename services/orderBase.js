var seneca = require('seneca')({tag:'order'});

/**
 * 订单服务
 */
seneca.add({role:'order', method:'getOrder'},function(msg,replay){
  replay({})
});

seneca.add({role:'order', method:'createOrder'},function(msg,replay){
  replay({})
});

seneca.add({role:'order', method:'cancelOrder'},function(msg,replay){
  replay({})
});

seneca.add({role:'order', method:'editOrder'},function(msg,replay){
  replay({})
});


