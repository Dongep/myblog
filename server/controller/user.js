let user = {};
user.login = async (ctx, next) => {
    let name = ctx.request.body.name||'';
    let password = ctx.request.body.password||'';
    // 暂时写死
    if(name=='dong'&&password=='123456'){
        ctx.response.body={
            code: 0,
            data: 'success!'
        }
    }
}

module.exports = user;