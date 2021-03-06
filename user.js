const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const koaBody = require('koa-body');
const SenecaWeb = require('seneca-web');
const Seneca = require('seneca');
const seneca = Seneca();

app.use(koaBody());
app.use(Router().routes());
app.use(Router().allowedMethods());
app.listen(3002);


const senecaWebConfig = {
  context: Router(),
  adapter: require('seneca-web-adapter-koa2')
};
seneca.use(SenecaWeb, senecaWebConfig );
seneca.use('./services/userBase');
seneca.use('./API/user');
seneca.client({});
seneca.ready(() => {
  app.use(seneca.export('web/context')().routes())
});

