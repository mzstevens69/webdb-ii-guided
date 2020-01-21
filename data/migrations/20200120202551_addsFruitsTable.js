
exports.up = function(knex) {
  return knex.schema.createTable('fruits', fruits => {
      fruits.increments();

      fruits
        .string('name', 128)
        .notNullable()
        .unique();
      fruits.float('avgWeightOz');
      fruits.boolean('deliscious').defaultTo(true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('fruits');
};
