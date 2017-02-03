angular.module("cuentaClics", [])
	.component('cuentaClics', {
		templateUrl: './22_componentes/cuenta-clics/cuenta-clics.html',
		controller: function(){
			var vm  = this;
			vm.numClics = 0;
			vm.incrementaClic = function(){
				vm.numClics ++;
			}
		},
		bindings: {			
			numero: "@",
			usuario: "=",
			nombre: "<"
				
		}
	});

