/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
      id:{

      },
      fb_id:{
        type:"string"
      },
      username:{
        type:"string"
      },
      name:{
        type:"string"
      },
      phone:{
        type:"string"
      },
      location_id:{
        type:"integer"
      },
      gender:{
        type:"integer"
      },
      friend_count:{
        type:"integer"
      },
      author_type:{
        type:"integer"
      },
      influence_score:{
        type:"integer"
      },
      avatar:{
        type:"string"
      },
  }
};

