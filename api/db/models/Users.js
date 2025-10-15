const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true},
    is_active:{type:Boolean,default:true},
    first_name:String,
    last_name:String,
    phone_number:String,

},{//otomatik olarak created at ve updated at alanlarını ekler ama bu yapiyla isimlendirerizde
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