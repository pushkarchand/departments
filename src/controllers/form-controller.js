const formDBA=require('../mongodb/models/form');
const responseHandler=require('../utils/responsehandler');
const rejected="REJECTED";
const approved="APPROVED";
const pending="PENDING";

exports.getFormDetails=async (req,res)=>{
    try{
            const formId=req.params.id;
            const formDBAResponse = await formDBA.findById(formId).populate('createdBy',{password:0}).populate('assignedTo',{password:0}).exec()
            responseHandler.successResponse(req,res,formDBAResponse);
    }
    catch(err){
            console.log(err);
            responseHandler.errorResponse(req,res,err,500);
    }
}


exports.updateForm=async(req,res)=>{
    try{
        const formId=req.body._id;
        const formPayLoad=req.body;
        delete formPayLoad._id
        const formDBAResponse=await formDBA.update({"id":formId},formPayLoad).exec()
        responseHandler.successResponse(req,res,formDBAResponse);
    }
    catch(err){
        console.log(err);
        responseHandler.errorResponse(req,res,err,500);
    }
}


exports.createForm=async (req,res)=>{
    try{
        const form=req.body;
        delete form._id;
        delete form.createdAt;
        delete form.updatedAt;
        const formDBAResponse= await new formDBA(form).save();
        responseHandler.successResponse(req,res,formDBAResponse);
    }
    catch(err){
        console.log(err);
        responseHandler.errorResponse(req,res,'Internal server error',500);
    }
}

exports.enumerateForms=async (req,res)=>{
    try{
        const formDBAResponse=await formDBA.find().exec();
        responseHandler.successResponse(req,res,formDBAResponse);
    }
    catch(err){
        console.log(err);
        responseHandler.errorResponse(req,res,err,500);
    }
}


exports.enumerateApprovedForms=async (req,res)=>{
    try{
        const formDBAResponse=await formDBA.find({status:approved}).exec();
        responseHandler.successResponse(req,res,formDBAResponse);
    }
    catch(err){
        console.log(err);
        responseHandler.errorResponse(req,res,err,500);
    }
}


exports.enumeratePendingForms=async (req,res)=>{
    try{
        const formDBAResponse=await formDBA.find({status:pending}).exec();
        responseHandler.successResponse(req,res,formDBAResponse);
    }
    catch(err){
        console.log(err);
        responseHandler.errorResponse(req,res,err,500);
    }
}


exports.enumerateRejectedForms=async (req,res)=>{
    try{
        const formDBAResponse=await formDBA.find({status:rejected}).exec();
        responseHandler.successResponse(req,res,formDBAResponse);
    }
    catch(err){
        console.log(err);
        responseHandler.errorResponse(req,res,err,500);
    }
}


exports.removeForm=async(req,res)=>{
    try{
        const formId=req.params.id;
        const deleteResponse=await formDBA.deleteOne({_id:formId})
        responseHandler.successResponse(req,res,deleteResponse);
    }
    catch(err){
        console.log(err);
        responseHandler.errorResponse(req,res,err,500);
    }
}