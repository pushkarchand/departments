const router = require('express')['Router']();
const userContoller=require('../controllers/user-controller');
const jwt=require('../utils/jwttoken');

router.get('/',jwt.authorizeToken,userContoller.enumerateUsers);
router.get('/:id',jwt.authorizeToken,userContoller.getUserDetails);
router.post('/',jwt.authorizeToken,userContoller.createUser);
router.put('/',jwt.authorizeToken,userContoller.updateUser);
router.delete('/:id',jwt.authorizeToken,userContoller.removeUser);

module.exports = router;