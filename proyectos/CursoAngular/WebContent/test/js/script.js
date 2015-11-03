function controladorSimple($scope) {
	
	$scope.preguntas = [{id: 1,
						pregunta: 'Capital de España', 
						respuestaCorrecta: 1,
						respuestaUsuario: '',
						estado : '',
						respuestas : [{id: 1, respuesta: 'Madrid'},
						              {id: 2, respuesta: 'Barcelona'},
						              {id: 3, respuesta: 'Bilbao'}]},
						
		              {id: 2,
					   pregunta: 'Presidente de EEUU', 
						respuestaCorrecta: 3,
						respuestaUsuario: '',
						estado : '',
						respuestas : [{id: 1, respuesta: 'Clinton'},
						              {id: 2, respuesta: 'Bush'},
						              {id: 3, respuesta: 'Obama'}]}];
	
	$scope.totalAciertos = 0;	

	
	$scope.validarRespuesta = function(pregunta) {
		
		if (pregunta.respuestaCorrecta == pregunta.respuestaUsuario) {
			$scope.totalAciertos++;
			pregunta.estado= 'ok';
		} else {
			
			if (pregunta.estado == 'ok') {
				$scope.totalAciertos--;			
			}
		
			pregunta.estado= 'error';
		}		
			
		$scope.actualizarResultado();
		
	};
	
	
	$scope.actualizarResultado = function() {
		
		var resultado = $scope.totalAciertos * 100 / $scope.preguntas.length; 
		if (resultado == 0) {
			$scope.classResultado = 'looser';
		} else if (resultado == 100) {
			$scope.classResultado = 'guru';
		} else {
			$scope.classResultado = 'poor';
		}
		
	};
		
}