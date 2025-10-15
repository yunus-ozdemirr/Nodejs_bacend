const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    role_id:{type:mongoose.Schema.Types.ObjectId,ref:'Roles',required:true},
    permission:{type:String,required:true},
    created_by:{
        type:mongoose.Schema.Types.ObjectId,required:true,
    }

},{//otomatik olarak created at ve updated at alanlarını ekler ama bu yapiyla isimlendirerizde
    versionkey:false, 
    timestamps:{
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});
//extend etmek kalitmak
class Users extends mongoose.Model {

}


Schema.loadClass(Users);
Module.exports = mongoose.model('Users',Schema);