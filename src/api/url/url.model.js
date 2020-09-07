const { Model } = require('objection');

class Urls extends Model {
  static get tableName() {
    return 'urls';
  }
  /*  static get jsonSchema() {
    return {
      type: 'object',
      required: ['firstName', 'lastName', 'username', 'email', 'password'],

      properties: {
        id: { type: 'integer' },
        firstName: { type: 'string', minLength: 1, maxLength: 128 },
        lastName: { type: 'string', minLength: 1, maxLength: 128 },
        username: { type: 'string', minLength: 2, maxLength: 128 },
        email: { type: 'string', minLength: 1, maxLength: 255 },
        password: { type: 'string', minLength: 8, maxLength: 255 }
      }
    };
  } */

  /* static get relationMappings() {
    // eslint-disable-next-line global-require
    const Tokens = require('../tokens/tokens.model');
    return {
      token: {
        relation: Model.HasOneRelation,
        modelClass: Tokens,
        join: {
          from: 'users.id',
          to: 'tokens.userId'
        }
      }
    };
  } */
}

module.exports = Urls;
