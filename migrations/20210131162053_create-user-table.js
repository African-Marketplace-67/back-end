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
      .createTable('locations', tbl =>{
        tbl.increments('l_id')
        tbl.string('location_name',128).notNullable()
        tbl.string('location_address', 128)
    })
    .createTable('items', tbl =>{
        tbl.increments()
        tbl.string('item_name', 128).notNullable()
        tbl.string('item_description', 128).notNullable()
        tbl.integer('price').notNullable()
        tbl.integer('location_id')
        .unsigned()
        .notNullable()
        .references("l_id")
        .inTable('locations')
        .onDelete('CASCADE')
      })
      
  };
  
  exports.down = function (knex) {
    return knex.schema
    .dropTableIfExists("items")
    .dropTableIfExists("locations")
    .dropTableIfExists("users")
    .dropTableIfExists("roles")
}