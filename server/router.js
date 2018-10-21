let router = require('koa-router');
let user = require('./controller/user');
router.get('/login',user.login);
module.exports = router;