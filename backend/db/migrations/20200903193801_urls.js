/* eslint-disable */

exports.up = function(knex) {
  return knex.schema.createTable('urls', t => {
    t.increments('id')
    t.string('url').notNullable();
    t.string('toUrl').notNullable();
    t.integer('visits').nullable();
    t.boolean('deleteAfterVisit').defaultTo('false');
    t.timestamp('expiresOn', { useTz: true} ).nullable()
    t.timestamps(true,true)
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('urls');
};
