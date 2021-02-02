exports.up = function (knex) {
    return knex.schema
      .createTable("roles", tbl => {
        tbl.increments('r_id');
  
        tbl.string("name", 128).notNullable().unique();
      })
      .createTable("users", tbl => {
        tbl.increments();
        tbl.string("username", 128).notNullable().unique().index();
        tbl.string("password", 256).notNullable();
        tbl.string('email',128).notNullable()
        tbl
          .integer("role")
          .unsigned()
          .references("r_id")
          .inTable('roles')
          .onDelete("CASCADE")
          .onUpdate("CASCADE")
          .defaultTo(1);
      })
      .createTable('items', tbl =>{
        tbl.increments()
        tbl.string('name', 128).notNullable()
        tbl.string('description', 128).notNullable()
        tbl.integer('price').notNullable()
        tbl.string('location')
      })
      
  };
  
  exports.down = function (knex) {
    return knex.schema
    .dropTableIfExists("items")
    .dropTableIfExists("users")
    .dropTableIfExists("roles")
}