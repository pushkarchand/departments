const formDBA=require('../mongodb/models/department');
const responseHandler=require('../utils/responsehandler');

exports.getFormDetails=async (req,res)=>{
    try{
            const formId=req.params.id;
            const formDBAResponse = await formDBA.findById(formId).populate('department').populate('department').exec()
            responseHandler.successResponse(req,res,formDBAResponse);
    }
    catch(err){
            console.log(err);
            responseHandler.errorResponse(req,res,err,500);
    }
}


exports.updateForm=(req,res)=>{
    const formId=req.body._id;
    const formPayLoad=req.body;
    delete formPayLoad._id
    return formDBA.update({"id":formId},formPayLoad)
        .then(formDBAResponse=>{
            console.log(formDBAResponse);
            responseHandler.successResponse(req,res,formDBAResponse);
        })
        .catch(err=>{
            console.log(err);
            responseHandler.errorResponse(req,res,err,500);
        })
}


exports.createForm=(req,res)=>{
    const form=req.body;
    delete form._id;
    delete form.createdAt;
    delete form.updatedAt;
    return formDBA.create(Store)
        .then(formDBAResponse=>{
            console.log(formDBAResponse);
            responseHandler.successResponse(req,res,formDBAResponse);
        })
        .catch(err=>{
            console.log(err);
            responseHandler.errorResponse(req,res,'Internal server error',500);
        })
}

exports.enumerateForms=(req,res)=>{
    return formDBA.find()
        .then(formDBAResponse=>{
            console.log(formDBAResponse);
            responseHandler.successResponse(req,res,formDBAResponse);
        })
        .catch(err=>{
            console.log(err);
            responseHandler.errorResponse(req,res,err,500);
        })
}


exports.removeForm=(req,res)=>{
    const formId=req.params.id;
    formDBA.deleteOne({_id:formId})
    .then(deleteResponse=>{
        responseHandler.successResponse(req,res,deleteResponse);
    })
    .catch(err=>{
        console.log(err);
        responseHandler.errorResponse(req,res,err,500);
    })
}