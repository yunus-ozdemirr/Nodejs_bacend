const mongoose = require('mongoose');
const { version } = require('react');

const Schema = mongoose.Schema({
    roles_name:{type:String,required:true},
    is_active:{type:Boolean,default:true},
    creted_by:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
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