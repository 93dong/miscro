const MongoClient = require('mongodb').MongoClient;

var options = {
  db_user:'dongjf',
  db_pwd:'mLove950120',
  db_host: "144.67.112.15",
  db_port: 27017,
  db_name: "admin",//数据库名称
};
var dbURL = "mongodb://" + options.db_user + ":" + options.db_pwd + "@" + options.db_host + ":" + options.db_port + "/" + options.db_name;
MongoClient.connect(dbURL, {useUnifiedTopology: true}, function (err, db) {
  if (err) {
    console.log(err);
    console.log("数据库连接失败");
  }
  else {
    console.log('连接成功');
  }
});
