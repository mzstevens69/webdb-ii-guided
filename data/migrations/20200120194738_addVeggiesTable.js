// a migration describes the changes to apply to the databse

// the up function describes what will be done
exports.up = function(knex) {
  //ALWAYS RETURN THE CALL TO KNEX.SCHEMA
  return knex.schema.createTable('veggies', tbl => {
      // primary key, called id, an int, autoincrements
      tbl.increments('id');
    //unique is a constraint(rules we define to protect against invalid data)
      tbl.string('name', 255)
      .unique()
      .notNullable()
      .index(); //makes searching (faster) for vegetables using this column faster
      
      tbl.boolean('like_it')
      .defaultTo(false);



  })
};
// the down function describes how to revert the changes (like undo for schema)
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('veggies');
};
