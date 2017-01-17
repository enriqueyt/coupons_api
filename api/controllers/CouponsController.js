/**
 * CouponsController
 *
 * @description :: Server-side logic for managing coupons
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 var CouponsController = {
	getCoupons 		: getCoupons,
	addCoupons 		: addCoupons,
	deleteCoupons 	: deleteCoupons,
	updateCoupons 	: updateCoupons,
	listCoupons 	: listCoupons,
	getBalance 		: getBalance
};


function getBalance (req, res){

	stripeServices
		.getBalance(function(err, result){
			return res.json(result);
		})

};

function getCoupons (req, res){

	stripeServices
		.getCoupons(req.allParams(), function(err, result){
			return res.json(result);
		});
};

function addCoupons (req, res){

	stripeServices
		.addCoupons(req, function(err, result){
			return res.json(result);
		});
};

function deleteCoupons (req, res){

	stripeServices
		.deleteCoupons(req.allParams(), function(err, result){
			return res.json(result);
		});
		
};

function updateCoupons (req, res){

	stripeServices
		.updateCoupons(req.allParams(), function(err, result){
			return res.json(result);
		});

};

function listCoupons (req, res){

	stripeServices
		.listCoupons(req.allParams(), function(err, result){				
				return res.json(result);
			});
};

module.exports = CouponsController;