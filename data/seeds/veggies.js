
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('veggies')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('veggies').insert([
        { name: 'broccilli', like_it: 1 },
        { name: 'squash', like_it: 0 },
        { name: 'carrots' }
      ]);
    });
};
