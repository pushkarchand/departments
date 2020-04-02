let mongoose = require('../index');
let Schema = mongoose.Schema;
mongoose.set('useFindAndModify', false);

let formSchema = new Schema({
  name: String,
  description:String,
  status:String,
  createdBy:{type: mongoose.Schema.Types.ObjectId,ref: 'User'},
  assignedTo:{type: mongoose.Schema.Types.ObjectId,ref: 'User'},
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now}  
});
module.exports = mongoose.model('Form', formSchema);