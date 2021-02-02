
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {id: 1, 
          name: "hoe",
          description: "cannot be enchanted with loyalty",
          price: 200,
          location: "NY"},
        {id: 2, 
          name: "rice",
          description: "goes with everything",
          price: 10,
          location: "cha"},
      ]);
    });
};
