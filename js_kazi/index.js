$(document).ready(function(){

	$( 'option[id="0"]' ).prop( 'selected', 'selected' );
	$('#compare-list').hide();

	$('.selectpicker').on('change', function(){
		$(this).find("option:selected").each(function(){

        	if($(this).attr("id") != 0) {
        		map.removeLayer(_state_layer);
        		//map.removeLayer(markers);
        		//map.addLayer(all_marker_layer);
        		var ID = $(this).attr("id");
				//map.removeLayer(_DE_layer);
		        _state_layer = L.geoJson(Bundesland_data, {onEachFeature: onFeature, filter: function(feature, layer){return feature.properties.ID_1 == ID;}, color: 'red',weight: 4,fillColor: 'transparent'});
				map.addLayer(_state_layer);
				map.fitBounds(_state_layer.getBounds(), {padding: [50, 50], animate: true});
			}
			else {
				map.removeLayer(_state_layer);
				//map.addLayer(_DE_layer);
				map.fitBounds((L.featureGroup(all_marker)).getBounds());
				//updateMap(all_marker, all_marker_layer);
			}

			function onFeature(feature, layer) {
				layer.bindPopup('<p class="labelname">Name: ' + feature.properties.NAME_1 +'</p>');
				layer.bindLabel('<p class="labelname">Name: ' + feature.properties.NAME_1 +'</p>');
			}

    	});
	});
	
/*===============================================================*/
/*         Function for setting popup center of the map          */
/*===============================================================*/

	map.on('popupopen', function(centerMarker) {
	    var cM = map.project(centerMarker.popup._latlng); // find the pixel location on the map where the popup anchor is
	    cM.y -= centerMarker.popup._container.clientHeight/2; // find the height of the popup container, divide by 2, subtract from the Y axis of marker location
	    map.panTo(map.unproject(cM),6, {animate: true}); // pan to new center
	});

	$('#Zoom').click(function(){
		var clicks = $(this).data('clicks');
		  if (clicks) {
		    $(this).removeClass('fill');
		  } else {
		  	$(this).addClass('fill');
		  	var zoomLevel = map.getZoom();
 		    alert(zoomLevel);
		  }
		  $(this).data("clicks", !clicks);
		
	});

	$('#hydroCircle').click(function(){
		var clicks = $(this).data('clicks');
		  if (clicks) {
		    $(this).removeClass('fill');
		    map.removeLayer(hydro_marker_layer);
		    if($('circle.location').hasClass('fill') || $('.cables').hasClass('fill')){
		    	map.removeLayer(markers);
		  	 }
		    else{map.addLayer(markers);}
		    map.fitBounds((L.featureGroup(all_marker)).getBounds());
		    //$(this).data("clicks", !clicks);
		  } else {
		  	 $(this).addClass('fill');
		  	 if($('circle.allPPlocation').hasClass('fill')){
			  	 $('circle.allPPlocation').removeClass('fill');
			  	 map.removeLayer(all_marker_layer);
		  	 }
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
		    if($('circle.location').hasClass('fill') || $('.cables').hasClass('fill')){
		    	map.removeLayer(markers);
		  	 }
		    else{map.addLayer(markers);}
 		    map.fitBounds((L.featureGroup(all_marker)).getBounds());
		  } else {
		  	 $(this).addClass('fill');
		  	 if($('circle.allPPlocation').hasClass('fill')){
			  	 $('circle.allPPlocation').removeClass('fill');
			  	 map.removeLayer(all_marker_layer);
		  	 }
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
		    if($('circle.location').hasClass('fill') || $('.cables').hasClass('fill')){
		    	map.removeLayer(markers);
		  	 }
		    else{map.addLayer(markers);}
		    map.fitBounds((L.featureGroup(all_marker)).getBounds());
		  } else {
		  	 $(this).addClass('fill');
		  	 if($('circle.allPPlocation').hasClass('fill')){
			  	 $('circle.allPPlocation').removeClass('fill');
			  	 map.removeLayer(all_marker_layer);
		  	 }
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
		    if($('circle.location').hasClass('fill') || $('.cables').hasClass('fill')){
		    	map.removeLayer(markers);
		  	 }
		    else{map.addLayer(markers);}
		    map.fitBounds((L.featureGroup(all_marker)).getBounds());		     
		  } else {
		  	 $(this).addClass('fill');
		  	 if($('circle.allPPlocation').hasClass('fill')){
			  	 $('circle.allPPlocation').removeClass('fill');
			  	 map.removeLayer(all_marker_layer);
		  	 }
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
		    if($('circle.location').hasClass('fill') || $('.cables').hasClass('fill')){
		    	map.removeLayer(markers);
		  	 }
		    else{map.addLayer(markers);}
		    map.fitBounds((L.featureGroup(all_marker)).getBounds());		     
		  } else {
		  	 $(this).addClass('fill');
		  	 if($('circle.allPPlocation').hasClass('fill')){
			  	 $('circle.allPPlocation').removeClass('fill');
			  	 map.removeLayer(all_marker_layer);
		  	 }
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
		    if($('circle.location').hasClass('fill') || $('.cables').hasClass('fill')){
		    	map.removeLayer(markers);
		  	 }
		    else{map.addLayer(markers);}
		    map.fitBounds((L.featureGroup(all_marker)).getBounds());		     
		  } else {
		  	 $(this).addClass('fill');
		  	 if($('circle.allPPlocation').hasClass('fill')){
			  	 $('circle.allPPlocation').removeClass('fill');
			  	 map.removeLayer(all_marker_layer);
		  	 }
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
		    if($('circle.location').hasClass('fill') || $('.cables').hasClass('fill')){
		    	map.removeLayer(markers);
		  	 }
		    else{map.addLayer(markers);}
		    map.fitBounds((L.featureGroup(all_marker)).getBounds());		     
		  } else {
		  	 $(this).addClass('fill');
		  	 if($('circle.allPPlocation').hasClass('fill')){
			  	 $('circle.allPPlocation').removeClass('fill');
			  	 map.removeLayer(all_marker_layer);
		  	 }
		  	  map.removeLayer(markers);
		  	 updateMap(gas_marker, gas_marker_layer);
		  }
		  $(this).data("clicks", !clicks);
		
	});

	$('#otherCircle').click(function(){
		var clicks = $(this).data('clicks');
		  if (clicks) {
		    $(this).removeClass('fill');
		     map.removeLayer(others_marker_layer)
		    if($('circle.location').hasClass('fill') || $('.cables').hasClass('fill')){
		    	map.removeLayer(markers);
		  	 }
		    else{map.addLayer(markers);}
		    map.fitBounds((L.featureGroup(all_marker)).getBounds());		     ;
		  } else {
		  	 $(this).addClass('fill');
		  	 if($('circle.allPPlocation').hasClass('fill')){
			  	 $('circle.allPPlocation').removeClass('fill');
			  	 map.removeLayer(all_marker_layer);
		  	 }
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
		    if($('circle.location').hasClass('fill') || $('.cables').hasClass('fill')){
		    	map.removeLayer(markers);
		  	 }
		    else{map.addLayer(markers);}
		    map.fitBounds((L.featureGroup(all_marker)).getBounds());		     
		  } else {
		  	 $(this).addClass('fill');
		  	 if($('circle.allPPlocation').hasClass('fill')){
			  	 $('circle.allPPlocation').removeClass('fill');
			  	 map.removeLayer(all_marker_layer);
		  	 }
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
		    if($('circle.location').hasClass('fill') || $('.cables').hasClass('fill')){
		    	map.removeLayer(markers);
		  	 }
		    else{map.addLayer(markers);}
		    map.fitBounds((L.featureGroup(all_marker)).getBounds());		     
		  } else {
		  	 $(this).addClass('fill');
		  	 if($('circle.allPPlocation').hasClass('fill')){
			  	 $('circle.allPPlocation').removeClass('fill');
			  	 map.removeLayer(all_marker_layer);
		  	 }
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
		    if($('circle.location').hasClass('fill') || $('.cables').hasClass('fill')){
		    	map.removeLayer(markers);
		  	 }
		    else{map.addLayer(markers);}
		     map.fitBounds((L.featureGroup(all_marker)).getBounds());		     
		  } else {
		  	 $(this).addClass('fill');
		  	 if($('circle.allPPlocation').hasClass('fill')){
			  	 $('circle.allPPlocation').removeClass('fill');
			  	 map.removeLayer(all_marker_layer);
		  	 }
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
		    if($('circle.location').hasClass('fill') || $('.cables').hasClass('fill')){
		    	map.removeLayer(markers);
		  	 }
		    else{map.addLayer(markers);}
		     map.fitBounds((L.featureGroup(all_marker)).getBounds());		     
		  } else {
		  	 $(this).addClass('fill');
		  	 if($('circle.allPPlocation').hasClass('fill')){
			  	 $('circle.allPPlocation').removeClass('fill');
			  	 map.removeLayer(all_marker_layer);
		  	 }
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
		     //map.fitBounds((L.featureGroup(all_marker)).getBounds());
		  } else {
		  	 $(this).addClass('fill');
		  	  map.removeLayer(markers);
		  	  updateMap(all_marker, all_marker_layer);
		  	  if($('circle.location').hasClass('fill')) {
		  	  	$('.circle.fill').each(function(){
		  	  		$(this).removeClass('fill');
		  	  		var id_name = $(this).attr('id');
		  	  		var index = ids.indexOf(id_name);
		  	  		var layer_name = layer_names[index];
		  	  		map.removeLayer(eval(layer_names[index]));
		  	  		console.log(layer_name);
		  	  	});
		  	  }

		  }
		  $(this).data("clicks", !clicks);

 //    try {
 //    	alert("Visualizing All the Power Plants in Germany!!!");
	// }
	// catch(err) {
	//     document.getElementById("demo").innerHTML = err.message;
	// }
		
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

				var url = './data_kazi/geoJSON/'+_geoJSON_folder_Name+'/'+_380KV_powerline_filename;

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
			            weight: 3,
			            opacity: 1
			        };

			  		function onEachFeature(feature, layer) {
			              // does this feature have a property named popupContent?
			              if (feature.properties || feature.properties.name) {
			                  layer.bindPopup('<p class="labelname">Name: ' + feature.properties.name +'</p>' + 
			                    '<p class="labelvalue">Operator: ' + feature.properties.operator +'</p>' +
			                    '<p class="labelname">Power: ' + feature.properties.power +'</p>' +
			                    '<p class="labelvalue">Voltage: ' + feature.properties.voltage +'</p>' +
			                    '<p class="labelname">Frequency: ' + feature.properties.frequency +' Hz'+ '</p>'+ 
			                    '<p class="labelvalue">Cables: ' + feature.properties.cables + '</p>');
			                  layer.bindLabel('<p class="labelname">Name: ' + feature.properties.name +'</p>' + 
			                    '<p class="labelvalue">Operator: ' + feature.properties.operator +'</p>' +
			                    '<p class="labelname">Power: ' + feature.properties.power +'</p>' +
			                    '<p class="labelvalue">Voltage: ' + feature.properties.voltage +'</p>' +
			                    '<p class="labelname">Frequency: ' + feature.properties.frequency +' Hz'+ '</p>'+ 
			                    '<p class="labelvalue">Cables: ' + feature.properties.cables + '</p>');
			              }

			              layer.setStyle(defaultStyle);
			        }

			        _380KV_layer = L.geoJson(geojsonFeature, {onEachFeature: onEachFeature, filter: function(feature, layer){return feature.geometry.type == "LineString";}});


			        map.removeLayer(markers);
			        map.addLayer(_380KV_layer);
			        //map.fitBounds(_380KV_layer.getBounds());
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

				var url = './data_kazi/geoJSON/'+_geoJSON_folder_Name+'/'+_220KV_powerline_filename;

				//console.log(url);

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
			            weight: 3,
			            opacity: 1
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
			                  layer.bindLabel('<p class="labelname">Name: ' + feature.properties.name +'</p>' + 
			                    '<p class="labelvalue">Operator: ' + feature.properties.operator +'</p>' +
			                    '<p class="labelname">Power: ' + feature.properties.power +'</p>' +
			                    '<p class="labelvalue">Voltage: ' + feature.properties.voltage +'</p>' +
			                    '<p class="labelname">Frequency: ' + feature.properties.frequency +' Hz'+ '</p>'+ 
			                    '<p class="labelvalue">Cables: ' + feature.properties.cables + '</p>');
			              }

			              layer.setStyle(defaultStyle);
			        }
			        var length_test = []; 
			        _220KV_layer = L.geoJson(geojsonFeature, {onEachFeature: onEachFeature, filter: function(feature, layer){ 
			        	if (feature.geometry.type == "LineString" && feature.geometry.coordinates.length > 50) {
			        	//length_test.push(feature.geometry.coordinates.length); 
			        	return feature.geometry.type == "LineString";}}});
				        console.log(length_test);
				        map.removeLayer(markers);
				        map.addLayer(_220KV_layer);
			        //map.fitBounds(_220KV_layer.getBounds());
		    	}
		  }
		  $(this).data("clicks", !clicks);
		
	});

$('input[type=checkbox].filterCables').change(function(){

		var number_of_cables = $(this).attr('value');
		console.log(number_of_cables);
	//$('#110Circle').click(function(){
		var clicks = $(this).data('clicks');
		  if (clicks) {
		  	$('#110Circle').removeClass('fill');
		    //$(this).removeClass('fill');
		    map.addLayer(markers);
		    map.removeLayer(_110KV_layer);
		  } else {
		  		$('#110Circle').addClass('fill');
		  		//$(this).addClass('fill');
		  	 	var xmlhttp = new XMLHttpRequest();

				var url = './data_kazi/geoJSON/'+_geoJSON_folder_Name+'/'+_110KV_powerlline_filename;

				//console.log(url);

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
			            weight: 6,
			            opacity: 1
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
			                  layer.bindLabel('<p class="labelname">Name: ' + feature.properties.name +'</p>' + 
			                    '<p class="labelvalue">Operator: ' + feature.properties.operator +'</p>' +
			                    '<p class="labelname">Power: ' + feature.properties.power +'</p>' +
			                    '<p class="labelvalue">Voltage: ' + feature.properties.voltage +'</p>' +
			                    '<p class="labelname">Frequency: ' + feature.properties.frequency +' Hz'+ '</p>'+ 
			                    '<p class="labelvalue">Cables: ' + feature.properties.cables + '</p>');
			              }

			              layer.setStyle(defaultStyle);
			        }

			        _110KV_layer = L.geoJson(geojsonFeature, {onEachFeature: onEachFeature, filter: function(feature, layer){
	        		 	var bound = map.getBounds();	
			        	if (feature.geometry.type == "LineString" && feature.geometry.coordinates.length > 20) {
    		            	//return bound.contains(feature.properties.geometry);}}});
			        		return feature.properties.cables == number_of_cables;
			        	}}});
			        	//console.log(coordinate);
				        map.removeLayer(markers);
				        map.addLayer(_110KV_layer);
			        //map.fitBounds(_110KV_layer.getBounds());
		    	}
		  }
		  $(this).data("clicks", !clicks);
		
	//});

});
	
/*this zoom function worked*/
	map.on('zoomend', onZoomend);

	function onZoomend(){
	    if(map.getZoom()>=10) {
	    	if($('circle.location').hasClass('fill') || $('circle.allPPlocation').hasClass('fill')) {
		  	  	$('.location.fill').each(function(){
		  	  		var id_name = $(this).attr('id');
		  	  		var index = ids.indexOf(id_name);
		  	  		var layer_name = layer_names[index];
		  	  		map.removeLayer(eval(layer_names[index]));
		  	  		map.addLayer(eval(cluster_names[index]));
		  	  	});
	     	};
	 	};

	 	if(map.getZoom()<10) {
	    	if($('circle.location').hasClass('fill') || $('circle.allPPlocation').hasClass('fill')) {
	    		map.removeLayer(markers);
		  	  	$('.location.fill').each(function(){
		  	  		var id_name = $(this).attr('id');
		  	  		var index = ids.indexOf(id_name);
		  	  		var layer_name = layer_names[index];
		  	  		map.addLayer(eval(layer_names[index]));
		  	  		map.removeLayer(eval(cluster_names[index]));
		  	  		//console.log(layer_name);
		  	  	});
		  	}
	     	//map.addLayer(markers)
	 	};

	   //  if(map.getZoom()<12){
	   //  	map.removeLayer(markers);
	   //   	map.addLayer(all_marker_layer);
	  	// };
	 };
	/*end zoom function*/

	// $.ajax({
	// 	url: './data_kazi/power_units_op_DE_2016_10_12.json',
	// 	datatype: 'json',
	// 	type: 'get',
	// 	cache: false,
	// 	success: function(data) {
	// 		map.removeLayer(markers);
	// 		$(data).each(function(index, value){
	// 			if(value.Source == "gas") {
	// 				var marker = L.marker([value.WGS84Latitude,value.WGS84Longitude]).addTo(map);
	// 			}
	// 		});
	// 	}
	// });



});