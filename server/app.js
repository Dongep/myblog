const koa = require('koa');
const app = new koa();
const body_parser = require('koa-bodyparser');
app.use(body_parser());
require('./router');
app.listen(8110);
app.use(async (ctx, next) => {
    // await next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});
