$(document).ready(function(){

	$('#fit').click(function(){

		map.removeLayer(all_marker_layer);
		updateMap(hydro_marker, hydro_marker_layer);

	});

	$('#all').click(function(){

		updateMap(all_marker, all_marker_layer);

	});

	map.on('popupopen', function(centerMarker) {
	    var cM = map.project(centerMarker.popup._latlng); // find the pixel location on the map where the popup anchor is
	    cM.y -= centerMarker.popup._container.clientHeight/2; // find the height of the popup container, divide by 2, subtract from the Y axis of marker location
	    map.panTo(map.unproject(cM),6, {animate: true}); // pan to new center
	});

	$('#hydroCircle').click(function(){
		var clicks = $(this).data('clicks');
		  if (clicks) {
		    $(this).removeClass('fill');
		    map.removeLayer(hydro_marker_layer);
		  } else {
		  	 $(this).addClass('fill');
		  	 map.removeLayer(all_marker_layer);
		  	 map.removeLayer(markers);
		  	 updateMap(hydro_marker, hydro_marker_layer);
		  }
		  $(this).data("clicks", !clicks);
		
	});

	$('#biomassCircle').click(function(){
		var clicks = $(this).data('clicks');
		  if (clicks) {
		    $(this).removeClass('fill');
		     map.removeLayer(biomass_marker_layer);
		  } else {
		  	 $(this).addClass('fill');
		  	 map.removeLayer(markers);
		  	 updateMap(biomass_marker, biomass_marker_layer);
		  }
		  $(this).data("clicks", !clicks);
		
	});

	$('#uraniumCircle').click(function(){
		var clicks = $(this).data('clicks');
		  if (clicks) {
		    $(this).removeClass('fill');
		     map.removeLayer(nuclear_marker_layer);
		  } else {
		  	 $(this).addClass('fill');
		  	  map.removeLayer(all_marker_layer);
		  	  map.removeLayer(markers);
		  	 updateMap(nuclear_marker, nuclear_marker_layer);
		  }
		  $(this).data("clicks", !clicks);
		
	});

	$('#ligniteCircle').click(function(){
		var clicks = $(this).data('clicks');
		  if (clicks) {
		    $(this).removeClass('fill');
		     map.removeLayer(lignite_marker_layer);
		  } else {
		  	 $(this).addClass('fill');
		  	  map.removeLayer(all_marker_layer);
		  	  map.removeLayer(markers);
		  	 updateMap(lignite_marker, lignite_marker_layer);
		  }
		  $(this).data("clicks", !clicks);
		
	});

	$('#coalCircle').click(function(){
		var clicks = $(this).data('clicks');
		  if (clicks) {
		    $(this).removeClass('fill');
		     map.removeLayer(coal_marker_layer);
		  } else {
		  	 $(this).addClass('fill');
		  	  map.removeLayer(coal_marker_layer);
		  	  map.removeLayer(markers);
		  	 updateMap(coal_marker, coal_marker_layer);
		  }
		  $(this).data("clicks", !clicks);
		
	});

	$('#oilCircle').click(function(){
		var clicks = $(this).data('clicks');
		  if (clicks) {
		    $(this).removeClass('fill');
		     map.removeLayer(oil_marker_layer);
		  } else {
		  	 $(this).addClass('fill');
		  	  map.removeLayer(all_marker_layer);
		  	  map.removeLayer(markers);
		  	 updateMap(oil_marker, oil_marker_layer);
		  }
		  $(this).data("clicks", !clicks);
		
	});

	$('#gasCircle').click(function(){
		var clicks = $(this).data('clicks');
		  if (clicks) {
		    $(this).removeClass('fill');
		     map.removeLayer(gas_marker_layer);
		  } else {
		  	 $(this).addClass('fill');
		  	  map.removeLayer(all_marker_layer);
		  	  map.removeLayer(markers);
		  	 updateMap(gas_marker, gas_marker_layer);
		  }
		  $(this).data("clicks", !clicks);
		
	});

	$('#otherCircle').click(function(){
		var clicks = $(this).data('clicks');
		  if (clicks) {
		    $(this).removeClass('fill');
		     map.removeLayer(others_marker_layer);
		  } else {
		  	 $(this).addClass('fill');
		  	  map.removeLayer(all_marker_layer);
		  	  map.removeLayer(markers);
		  	 updateMap(others_marker, others_marker_layer);
		  }
		  $(this).data("clicks", !clicks);
		
	});

	$('#psCircle').click(function(){
		var clicks = $(this).data('clicks');
		  if (clicks) {
		    $(this).removeClass('fill');
		     map.removeLayer(pumpedStorage_marker_layer);
		  } else {
		  	 $(this).addClass('fill');
		  	  map.removeLayer(all_marker_layer);
		  	  map.removeLayer(markers);
		  	 updateMap(pumpedStorage_marker, pumpedStorage_marker_layer);
		  }
		  $(this).data("clicks", !clicks);
		
	});

	$('#ssCircle').click(function(){
		var clicks = $(this).data('clicks');
		  if (clicks) {
		    $(this).removeClass('fill');
		     map.removeLayer(seasonalStore_marker_layer);
		  } else {
		  	 $(this).addClass('fill');
		  	  map.removeLayer(all_marker_layer);
		  	  map.removeLayer(markers);
		  	 updateMap(seasonalStore_marker, seasonalStore_marker_layer);
		  }
		  $(this).data("clicks", !clicks);
		
	});

	$('#windCircle').click(function(){
		var clicks = $(this).data('clicks');
		  if (clicks) {
		    $(this).removeClass('fill');
		     map.removeLayer(wind_marker_layer);
		  } else {
		  	 $(this).addClass('fill');
		  	  map.removeLayer(wind_marker_layer);
		  	  map.removeLayer(markers);
		  	 updateMap(wind_marker, wind_marker_layer);
		  }
		  $(this).data("clicks", !clicks);
		
	});

	$('#garbageCircle').click(function(){
		var clicks = $(this).data('clicks');
		  if (clicks) {
		    $(this).removeClass('fill');
		     map.removeLayer(garbage_marker_layer);
		  } else {
		  	 $(this).addClass('fill');
		  	  map.removeLayer(all_marker_layer);
		  	  map.removeLayer(markers);
		  	 updateMap(garbage_marker, garbage_marker_layer);
		  }
		  $(this).data("clicks", !clicks);
		
	});

	$('#showAll').click(function(){
		var clicks = $(this).data('clicks');
		  if (clicks) {
		    $(this).removeClass('fill');
		     map.removeLayer(all_marker_layer);
		     map.addLayer(markers);
		  } else {
		  	 $(this).addClass('fill');
		  	  map.removeLayer(markers);
		  	  map.addLayer(all_marker_layer);
		  }
		  $(this).data("clicks", !clicks);
		
	});

	

	$('#380Circle').click(function(){
		var clicks = $(this).data('clicks');
		  if (clicks) {
		    $(this).removeClass('fill');
		     map.removeLayer(_380KV_layer);
		     map.addLayer(markers);
		  } else {
		  		$(this).addClass('fill');
		  	 	var xmlhttp = new XMLHttpRequest();

				var url = './data_kazi/geoJSON/powerline_geojson/380kv_w.geojson';

				console.log(url);

				xmlhttp.onreadystatechange=function() {
				    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				        myFunction(xmlhttp.responseText);
				    }
				}
				xmlhttp.open("GET", url, true);
				xmlhttp.send();
		  
		  		function myFunction(response) {	
				    var geojsonFeature = JSON.parse(response);
		  			
		  			var defaultStyle = {
			            color: 'red',
			            weight: 8
			        };

			  		function onEachFeature(feature, layer) {
			              // does this feature have a property named popupContent?
			              if (feature.properties && feature.properties.name) {
			                  layer.bindPopup('<p class="labelname">Name: ' + feature.properties.name +'</p>' + 
			                    '<p class="labelvalue">Operator: ' + feature.properties.operator +'</p>' +
			                    '<p class="labelname">Power: ' + feature.properties.power +'</p>' +
			                    '<p class="labelvalue">Voltage: ' + feature.properties.voltage +'</p>' +
			                    '<p class="labelname">Frequency: ' + feature.properties.frequency +' Hz'+ '</p>'+ 
			                    '<p class="labelvalue">Cables: ' + feature.properties.cables + '</p>');
			              }

			              layer.setStyle(defaultStyle);
			        }

			        _380KV_layer = L.geoJson(geojsonFeature, {onEachFeature: onEachFeature});

			        map.removeLayer(markers);
			        map.addLayer(_380KV_layer);
			        map.fitBounds(_380KV_layer.getBounds());
		    	}
		  }
		  $(this).data("clicks", !clicks);
		
	});

	$('#220Circle').click(function(){
		var clicks = $(this).data('clicks');
		  if (clicks) {
		    $(this).removeClass('fill');
		     map.removeLayer(_220KV_layer);
		     map.addLayer(markers);
		  } else {
		  		$(this).addClass('fill');
		  	 	var xmlhttp = new XMLHttpRequest();

				var url = './data_kazi/geoJSON/powerline_geojson/220kv_way.geojson';

				console.log(url);

				xmlhttp.onreadystatechange=function() {
				    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				        myFunction(xmlhttp.responseText);
				    }
				}
				xmlhttp.open("GET", url, true);
				xmlhttp.send();
		  
		  		function myFunction(response) {	
				    var geojsonFeature = JSON.parse(response);
		  			
		  			var defaultStyle = {
			            color: 'green',
			            weight: 8
			        };

			  		function onEachFeature(feature, layer) {
			              // does this feature have a property named popupContent?
			              if (feature.properties && feature.properties.name) {
			                  layer.bindPopup('<p class="labelname">Name: ' + feature.properties.name +'</p>' + 
			                    '<p class="labelvalue">Operator: ' + feature.properties.operator +'</p>' +
			                    '<p class="labelname">Power: ' + feature.properties.power +'</p>' +
			                    '<p class="labelvalue">Voltage: ' + feature.properties.voltage +'</p>' +
			                    '<p class="labelname">Frequency: ' + feature.properties.frequency +' Hz'+ '</p>'+ 
			                    '<p class="labelvalue">Cables: ' + feature.properties.cables + '</p>');
			              }

			              layer.setStyle(defaultStyle);
			        }

			        _220KV_layer = L.geoJson(geojsonFeature, {onEachFeature: onEachFeature});

			        map.removeLayer(markers);
			        map.addLayer(_220KV_layer);
			        map.fitBounds(_220KV_layer.getBounds());
		    	}
		  }
		  $(this).data("clicks", !clicks);
		
	});

	$('#110Circle').click(function(){
		var clicks = $(this).data('clicks');
		  if (clicks) {
		    $(this).removeClass('fill');
		    map.addLayer(markers);
		    map.removeLayer(_110KV_layer);
		  } else {
		  		$(this).addClass('fill');
		  	 	var xmlhttp = new XMLHttpRequest();

				var url = './data_kazi/geoJSON/powerline_geojson/110kv_w.geojson';

				console.log(url);

				xmlhttp.onreadystatechange=function() {
				    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				        myFunction(xmlhttp.responseText);
				    }
				}
				xmlhttp.open("GET", url, true);
				xmlhttp.send();
		  
		  		function myFunction(response) {	
				    var geojsonFeature = JSON.parse(response);
		  			
		  			var defaultStyle = {
			            color: 'blue',
			            weight: 8
			        };

			  		function onEachFeature(feature, layer) {
			              // does this feature have a property named popupContent?
			              if (feature.properties && feature.properties.name) {
			                  layer.bindPopup('<p class="labelname">Name: ' + feature.properties.name +'</p>' + 
			                    '<p class="labelvalue">Operator: ' + feature.properties.operator +'</p>' +
			                    '<p class="labelname">Power: ' + feature.properties.power +'</p>' +
			                    '<p class="labelvalue">Voltage: ' + feature.properties.voltage +'</p>' +
			                    '<p class="labelname">Frequency: ' + feature.properties.frequency +' Hz'+ '</p>'+ 
			                    '<p class="labelvalue">Cables: ' + feature.properties.cables + '</p>');
			              }

			              layer.setStyle(defaultStyle);
			        }

			        _110KV_layer = L.geoJson(geojsonFeature, {onEachFeature: onEachFeature});

			        map.removeLayer(markers);
			        map.addLayer(_110KV_layer);
			        map.fitBounds(_110KV_layer.getBounds());
		    	}
		  }
		  $(this).data("clicks", !clicks);
		
	});

});