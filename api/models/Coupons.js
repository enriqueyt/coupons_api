/**
 * Coupons.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	number : {
  		type:'integer'
  	},
  	exp_month : {
  		type:'integer'
  	},
  	exp_year : {
  		type:'integer'
  	},
  	cvc : {
  		type:'integer'
  	}
  }
};

