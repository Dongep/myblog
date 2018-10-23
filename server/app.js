const Koa = require('koa');
const app = new Koa();
//  解析body
const body_parser = require('koa-bodyparser');
app.use(body_parser());
// 路由
let router = require('./router');

app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});
app.use(router.routes());

app.listen(8110);
