
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
		.then(function(balance) {
		  console.log(balance)
		  return done(false, balance);
		})
		.catch(function(err) {
		  return done(true, err);		  
		});
};

function getCoupons (req, done){
	console.log(req)

	stripe
		.coupons
		.retrieve("25OFF")
		.then(function(err, coupon) {
	    	return done(false, coupon)
	  	})
	  	.catch(function(err) {
		  	return done(true, err);		  
		});
};

function addCoupons (req, done){
	console.log(req)

	stripe
		.coupons
		.create({
		  	percent_off: 25,
		  	duration: 'repeating',
		  	duration_in_months: 3,
		  	id: '25OFF'
		})
		.then(function(coupon) {
		  	return done(false, coupon);
		})
		.catch(function(err) {
		  	return done(true, coupon);
		});
};

function deleteCoupons (req, done){

	stripe
		.coupons
		.del("25OFF")
		.then(function(res) {
		  return done(false, coupon);
		})
		.catch(function(err) {
			console.log(err)
		  	return done(true, coupon);
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
		  return done(false, coupon);
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
  		.then(function(err, coupons) {
  			return done(false, coupons);
  		})
  		.catch(function(err) {
		  console.log(err)
		 	return done(true, err);
		});
};

module.exports = stripeServices;