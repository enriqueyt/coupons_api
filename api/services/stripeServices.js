
var stripe = require("stripe")("sk_test_nU6sehuztFIFfc7XrgtIkCRm");

var stripeServices = { 
  getBalance	: getBalance,
  getCoupons	: getCoupons,
  addCoupons	: addCoupons,
  deleteCoupons : deleteCoupons,
  updateCoupons : updateCoupons,
  listCoupons 	: listCoupons
};

function getBalance (done){

	stripe
		.balance
		.retrieve()
		.then(function(res) {
		  console.log(res)
		  return done(false, res);
		})
		.catch(function(err) {
		  return done(true, err);		  
		});
};

function getCoupons (req, done){

	stripe
		.coupons
		.retrieve(req.id)
		.then(function(res) {
	    	return done(false, res)
	  	})
	  	.catch(function(err) {
		  	return done(true, err);		  
		});
};

function addCoupons (req, done){

	stripe
		.coupons
		.create(req.body)
		.then(function(res) {
		  	return done(false, res);
		})
		.catch(function(err) {
		  	return done(true, err);
		});
};

function deleteCoupons (req, done){

	stripe
		.coupons
		.del("25OFF")
		.then(function(res) {
			console.log(res)
		  return done(false, res);
		})
		.catch(function(err) {
			console.log(err)
		  	return done(true, err);
		});
};

function updateCoupons (req, done){

	stripe
		.coupons
		.update("25OFF", {
	  		metadata: {
	  			order_id: "6735"
	  		}
		})
		.then(function(res) {
		  return done(false, res);
		})
		.catch(function(err) {
		  	console.log(err)
		 	return done(true, err);
		});

};

function listCoupons (req, done){

	stripe
		.coupons
		.list({ 
  			limit: req.limit 
  		})
  		.then(function(res) {
  			return done(false, res.data);
  		})
  		.catch(function(err) {
  			console.log('listCoupons')
		  	console.log(err)
		 	return done(true, err);
		});
};

module.exports = stripeServices;