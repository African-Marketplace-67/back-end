const db = require('../../database/dbConfig')

module.exports = {
	add,
	find,
	findBy,
	findById,
} 

async function add(user){
    const a = await db('users').insert(user)
    return { Message: `User ${user.username} created!` }
}
//yeah right
function find(){
    return db('users').select('id', 'username')
}

function findBy(filter){
    return db('users')
    .select('id', 'username', 'password')
    .where(filter)
}

function findById(id){
    return db('users')
    .select('id', 'username')
    .where({id})
    .first()
}


