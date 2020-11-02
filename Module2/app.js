(function (){
	'use strict';

	angular.module('ShoppingListCheckOff',[])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	//Buy List Controller
	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService) {
			var buylist = this;
			buylist.items = ShoppingListCheckOffService.getbuyItems();
			buylist.boughtitem = function (itemIndex) {
				ShoppingListCheckOffService.buyItem(itemIndex);
			};
		}

	//Bought List Controller
	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var boughtlist = this;
		boughtlist.items = ShoppingListCheckOffService.getboughtItems();
	}
	console.log(buyitems);

	// ShoppingListCheckOffService
	function ShoppingListCheckOffService() {
  var service = this;

  // Buy List
  var buyitems = [
		{ name: "cookies", quantity: "10" },
		{ name: "sodas", quantity: "5" },
		{ name: "chocolates", quantity: "2" },
		{ name: "chips", quantity: "7" },
		{ name: "juices", quantity: "4" }
	];

	//Already Bought List
	var boughtitems = [];

	//Get buy items
	service.getbuyItems = function () {
    return buyitems;
  };

	//Get bought items
	service.getboughtItems = function () {
    return boughtitems;
  };

	// Buy item
	service.buyItem = function (itemIndex) {
		var newitem = buyitems[itemIndex];
		boughtitems.push(newitem);
    buyitems.splice(itemIndex, 1);
  };
}

})();
