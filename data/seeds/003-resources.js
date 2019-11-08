
exports.seed = function(knex) {
  return knex('resources').insert([
    {
      resource_name: '1 resource',
      resource_description: 'a description'
    }, 
    {
      resource_name: '2 resource',
      resource_description: 'a description'
    },
    {
      resource_name: '3 resource',
      resource_description: 'a description'
    },
    {
      resource_name: '4 resource',
      resource_description: 'a description'
    },
    {
      resource_name: '5 resource',
      resource_description: 'a description'
    },
    {
      resource_name: '6 resource',
      resource_description: 'a description'
    },
  ])

};
