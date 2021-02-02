const db = require("../../database/dbConfig.js");

module.exports = {
    add,
    list,
    findItem,
    findItemById
};

function findItem() {
    return db("items");
}

function findItemById(id) {
    return db("items as i")
        .where("i.id", id)
        .first()
}
function add(item){
    return db('items').insert(item).into('items');
};

function list(){
    return db('items');
}
