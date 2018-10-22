let router = require('koa-router')();
let user = require('./controller/user');
router.post('/login',user.login);
module.exports = router;