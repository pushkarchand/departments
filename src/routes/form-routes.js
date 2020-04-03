const router = require('express')['Router']();
const formController=require('../controllers/form-controller');
const jwt=require('../utils/jwttoken');

router.get('/',jwt.authorizeToken,formController.enumerateForms);
router.get('/approved',jwt.authorizeToken,formController.enumerateApprovedForms);
router.get('/pending',jwt.authorizeToken,formController.enumeratePendingForms);
router.get('/rjected',jwt.authorizeToken,formController.enumerateRejectedForms);
router.get('/:id',jwt.authorizeToken,formController.getFormDetails);
router.post('/',jwt.authorizeToken,formController.createForm);
router.put('/',jwt.authorizeToken,formController.updateForm);
router.delete('/:id',jwt.authorizeToken,formController.removeForm);

module.exports = router;