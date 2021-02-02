const db = require("../../database/dbConfig.js");

module.exports = {
    add,
    list,
    findItem,
    findItemById,
    update,
    remove
}

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
function update(id, changes) {
    return db("items as i")
      .where("i.id", id)
      .update(changes)
  }
  function remove(id) {
    return db("items as i")
      .where("i.id", id)
      .del();
  }
