let user = {};
user.login = async (ctx, next) => {
    console.log(1)
    let name = ctx.request.body.name||'';
    let password = ctx.request.body.password||'';
    // 暂时写死
    if(name=='dong'&&password=='123456'){
        ctx.response.body={
            code: 0,
            data: {
                name: 'dong',
                id: '1'
            }
        }
    } else {
        ctx.response.body={
            code: 1,
            data: 'error!'
        }
    }
}

module.exports = user;