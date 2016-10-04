var map = L.map('map',{zoomControl: false}).setView([51.5000, 11.41333], 6);
	mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
	L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data &copy;' + mapLink,
	maxZoom: 18}).addTo(map);
    L.control.zoom({position:'bottomright'}).addTo(map);

var Power_Plants = [];
var markers = L.markerClusterGroup();
var wind_marker_cluster = L.markerClusterGroup();

/*==================================*/
/* Variables for fitting map bounds */
/*==================================*/

var all_marker = [];
var hydro_marker = [];
var gas_marker = [];
var coal_marker = [];
var oil_marker = [];
var lignite_marker = [];
var pumpedStorage_marker = [];
var wind_marker = [];
var nuclear_marker = [];
var biomass_marker = [];
var garbage_marker = [];
var seasonalStore_marker = [];
var others_marker = [];

/*=============================*/
/* Variables for marker layers */
/*=============================*/

var all_marker_layer = [];
var hydro_marker_layer = [];
var	gas_marker_layer = [];
var	coal_marker_layer = [];
var	oil_marker_layer = [];
var	lignite_marker_layer = [];
var	pumpedStorage_marker = [];
var	wind_marker_layer = [];
var	nuclear_marker_layer = [];
var	biomass_marker_layer = [];
var	garbage_marker_layer = [];
var	seasonalStore_marker_layer = [];
var	others_marker_layer = [];

var _380KV_layer = [];
var _220KV_layer = [];
var _110KV_layer = [];
var _DE_layer = []; 

/*===========================*/
/* Get JSON from the Server  */
/*===========================*/

var xmlhttp = new XMLHttpRequest();

var url = './data_kazi/' + fileName_powerUnit + '.json';

console.log(url);

xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        markerPlotter(xmlhttp.responseText);
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

function markerPlotter(response) {
    Power_Plants = JSON.parse(response);
    var i;

    for (var i = 0; i < Power_Plants.length ; i++) {

    	all_marker.push(markerProperties(i));
    	// var marker = L.marker([Power_Plants[i].WGS84Latitude, Power_Plants[i].WGS84Longitude]).addTo(map);

        if (Power_Plants[i].Source == "gas" || Power_Plants[i].Source == "coal-derived-gas") {
        	gas_marker.push(markerProperties(i));
            // _gas.push(markerProperties(i));
        }
        else if (Power_Plants[i].Source == "coal") {
        	coal_marker.push(markerProperties(i));
            // _coal.push(markerProperties(i));
        }
        else if (Power_Plants[i].Source == "oil") {
        	oil_marker.push(markerProperties(i));
            // _oil.push(markerProperties(i));
        }
        else if (Power_Plants[i].Source == "lignite") {
        	lignite_marker.push(markerProperties(i));
            // _lignite.push(markerProperties(i));
        }
        else if (Power_Plants[i].Source == "pumped-storage") {
        	pumpedStorage_marker.push(markerProperties(i));
            // _pumpedStorage.push(markerProperties(i));
        }
        else if (Power_Plants[i].Source == "wind-offshore" || Power_Plants[i].Source == "wind-onshore") {
        	wind_marker.push(markerProperties(i));
            wind_marker_cluster.addLayer(markerProperties(i));            
            // _windoffshore.push(markerProperties(i));
        }
        else if (Power_Plants[i].Source == "run-of-the-river") {
        	hydro_marker.push(markerProperties(i));
            // _hydro.push(markerProperties(i));
        }
        else if (Power_Plants[i].Source == "uranium") {
        	nuclear_marker.push(markerProperties(i));
            // _nuclear.push(markerProperties(i));
        }
        else if (Power_Plants[i].Source == "biomass") {
        	biomass_marker.push(markerProperties(i));
            // _biomass.push(markerProperties(i));
        }
        else if (Power_Plants[i].Source == "garbage") {
        	garbage_marker.push(markerProperties(i));
            // _garbage.push(markerProperties(i));
        }
        else if (Power_Plants[i].Source == "seasonal-store") {
        	seasonalStore_marker.push(markerProperties(i));
            // _seasonalStore.push(markerProperties(i));
        }
        else {
        	others_marker.push(markerProperties(i));
            // _others.push(markerProperties(i));
        }

        markers.addLayer(markerProperties(i));

    }

    /**/

    all_marker_layer = L.layerGroup(all_marker);
    hydro_marker_layer = L.layerGroup(hydro_marker);
	gas_marker_layer = L.layerGroup(gas_marker);
	coal_marker_layer = L.layerGroup(coal_marker);
	oil_marker_layer = L.layerGroup(oil_marker);
	lignite_marker_layer = L.layerGroup(lignite_marker);
	pumpedStorage_marker_layer = L.layerGroup(pumpedStorage_marker);
	wind_marker_layer = L.layerGroup(wind_marker);
	nuclear_marker_layer = L.layerGroup(nuclear_marker);
	biomass_marker_layer = L.layerGroup(biomass_marker);
	garbage_marker_layer = L.layerGroup(garbage_marker);
	seasonalStore_marker_layer = L.layerGroup(seasonalStore_marker);
	others_marker_layer = L.layerGroup(others_marker);

    //updateMap(gas_marker, gas_marker_layer);

	var overlayMaps = {
		"Hydro Power": hydro_marker_layer,
		"Biomass": biomass_marker_layer,
		"Uranium": nuclear_marker_layer,
		"Brown Coal": lignite_marker_layer,
		"Hard Coal": coal_marker_layer,
		"Oil": oil_marker_layer,
		"Gas": gas_marker_layer,
		"Others": others_marker_layer,
		"Pumped Storage": pumpedStorage_marker,
		"Seasonal Storage": seasonalStore_marker_layer,
		"Wind": wind_marker_layer
	}


	// map.addLayer(all_marker_layer);

	//map.addControl(controlLayer);

	map.addLayer(markers);
    DeutschbundesLander();


	// $( ".leaflet-control-layers-selector").change(function(){
 //        map.removeLayer(all_marker_layer);
 //    });

}