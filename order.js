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
app.listen(3001);


const senecaWebConfig = {
  context: Router(),
  adapter: require('seneca-web-adapter-koa2')
};
seneca.use(SenecaWeb, senecaWebConfig);
seneca.use('./services/orderBase');
seneca.use('./API/order');
seneca.client({});
seneca.listen({post: 3000, type: 'tcp', pin: 'role:order'});
seneca.ready(() => {
  app.use(seneca.export('web/context')().routes())
});

