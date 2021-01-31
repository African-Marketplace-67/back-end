exports.up = function (knex) {
    return knex.schema
      .createTable("roles", tbl => {
        tbl.increments();
        tbl.string("name", 128).notNullable().unique();
      })
      .createTable("users", tbl => {
        tbl.increments();
  
        tbl.string("username", 128).notNullable().unique().index();
        tbl.string("password", 256).notNullable();
        tbl
          .integer("role")
          .unsigned()
          .references("roles.id")
          inTable('roles')
          .onDelete("RESTRICT")
          .onUpdate("CASCADE")
          .defaultTo(2);
      })
      .createTable('locations', tbl =>{
          tbl.increments()
          tbl.string('location_name',128).notNullable()
          tbl.integer('item_id')
          .unsigned()
          .notNullable()
          .references('item.id')
          .inTable('items')
          .onDelete('RESTRICT')
      })
      .createTable('items', tbl =>{
        tbl.increments()
        tbl.string('item_name', 128).notNullable()
        tbl.integer('price').notNullable()
        tbl.integer('location_id')
        .unsigned()
        .notNullable()
        .references("location.id")
        .inTable('locations')
        .onDelete('RESTRICT')
        
      })
  };
  
  exports.down = function (knex) {
    return knex.schema
    .dropTableIfExists("items")
    .dropTableIfExists("locations")
    .dropTableIfExists("users")
    .dropTableIfExists("roles")
  };
  