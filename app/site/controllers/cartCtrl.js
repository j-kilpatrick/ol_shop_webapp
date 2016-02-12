app.controller('cartCtrl', cartCtrl);

function cartCtrl($uibModal, $log) {
var ctrl = this;

	ctrl.items = ['item1', 'item2', 'item3'];

	  ctrl.animationsEnabled = true;

	  ctrl.open = function (size) {

	    var modalInstance = $uibModal.open({
	      animation: ctrl.animationsEnabled,
	      templateUrl: 'cart.html',
	      controller: 'modalCtrl',
	      size: size,
	      resolve: {
	        items: function () {
	          return ctrl.items;
	        }
	      }
	    });

	    modalInstance.result.then(function (selectedItem) {
	      ctrl.selected = selectedItem;
	    }, function () {
	      $log.info('Modal dismissed at: ' + new Date());
	    });
	  };

	  ctrl.toggleAnimation = function () {
	    ctrl.animationsEnabled = !ctrl.animationsEnabled;
	  };

};