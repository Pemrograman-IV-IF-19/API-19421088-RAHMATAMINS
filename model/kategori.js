const monggoose = require('mongoose')

const userModel = monggoose.Schema({
    namaKategori: {
        type: String
    },
    keterangan: {
        type: String
    }
})

module.exports = monggoose.model('kategori', userModel)