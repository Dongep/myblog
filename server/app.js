const koa = require('koa');
const app = new koa();
let router = require('koa-router');
const body_parser = require('koa-bodyparser');

app.use(body_parser());

app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});
router.get('/login',async(ctx,next)=>{

})