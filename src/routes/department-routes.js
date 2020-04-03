const router = require('express')['Router']();
const departmentContoller=require('../controllers/department-controller');
const jwt=require('../utils/jwttoken');

router.get('/',jwt.authorizeToken,departmentContoller.enumerateDepartments);
router.get('/:id',jwt.authorizeToken,departmentContoller.getDepartmentDetails);
router.post('/',jwt.authorizeToken,departmentContoller.createDepartment);
router.put('/',jwt.authorizeToken,departmentContoller.updateDepartment);
router.delete('/:id',jwt.authorizeToken,departmentContoller.removeDepartment);

module.exports = router;