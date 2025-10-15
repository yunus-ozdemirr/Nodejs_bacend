const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    level:String,
    email:String,
    location:String,
    proe_type:String,
    log:String,

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