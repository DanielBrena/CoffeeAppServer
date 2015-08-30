/**
* Customer.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	schema: true,
  	attributes: {

        uuid:{
        	type:'string',
        	required:'true',
        	unique: true
        },
        name:{
        	type:'string'
        },
        status:{
        	type:'boolean',
        	defaultsTo:'false'
        },
        orders:{
            collection: 'order',
            via: 'customer'
        }
  	}
};

