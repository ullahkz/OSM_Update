/*===============================================================*/
/*                                                               */
/* Globarl Variables - Filenames - Can be changed on requirement */
/*                                                               */
/*===============================================================*/

var fileName_powerUnit = "power_units_2016";
var _geoJSON_folder_Name = "powerline_geojson";
var _110KV_powerlline_filename = "110kv_w.geojson";
var _220KV_powerline_filename = "220kv_way.geojson";
var _380KV_powerline_filename = "380kv_w.geojson";

/*===============================================================*/
/*                                End                            */
/*===============================================================*/

var Icon = L.Icon.extend({
        options: {
            //shadowUrl: './css_kazi/images/markers-shadow.png',
            iconSize:     [40, 40],
            iconAnchor:   [20, 40],
            popupAnchor:  [0, -40]
        }
    });

var greenIcon = new Icon({iconUrl: './icon_kazi/icon/lightgreen.png'});
var biomassIcon = new Icon({iconUrl: './icon_kazi/icon2/biomass.png'});
var gasIcon = new Icon({iconUrl: './icon_kazi/icon2/gas.png'});
var coalIcon = new Icon({iconUrl: './icon_kazi/icon2/coal.png'});
var windIcon = new Icon({iconUrl: './icon_kazi/icon2/wind.png'});
var hydroIcon = new Icon(({iconUrl: './icon_kazi/icon2/hydro.png'}));
var nuclearIcon = new Icon(({iconUrl: './icon_kazi/icon2/nuclear.png'}));
var oilIcon = new Icon(({iconUrl: './icon_kazi/icon2/oil.png'}));
var ligniteIcon = new Icon(({iconUrl: './icon_kazi/icon2/lignite.png'}));
var otherIcon = new Icon(({iconUrl: './icon_kazi/icon2/others.png'}));
var garbageIcon = new Icon(({iconUrl: './icon_kazi/icon2/garbage.png'}));
var psIcon = new Icon(({iconUrl: './icon_kazi/icon2/ps.png'}));
var seasonalStoreIcon = new Icon(({iconUrl: './icon_kazi/icon2/seasonalStorage.png'}));

var defaultIcon = new Icon(({iconUrl: './icon_kazi/icon/red2.png'}));



function updateMap(data, Layer){

	var group_data = data;
	var _layer = Layer;

	map.addLayer(_layer);
	
	var group = new L.featureGroup(group_data);

 	map.fitBounds(group.getBounds(), {padding: [50, 50], animate: true});

}

function markerProperties(i) {

    var startDateUNIX = Date.parse(Power_Plants[i].StartDate);
    var endDateUNIX = Date.parse(Power_Plants[i].EndDate);
    var startDate = new Date(startDateUNIX);
    var endDate = new Date(endDateUNIX);
    var startmonth = startDate.getMonth() + 1;
    var endmonth = endDate.getMonth() + 1;


	var marker = L.marker([Power_Plants[i].WGS84Latitude,Power_Plants[i].WGS84Longitude],{icon: iconSelector(i) ,draggable: false,riseOnHover: true, riseOffset: 500})
                .bindPopup('<div class="custom-popup"'+ 'style="background-color:'+ Power_Plants[i].color +'; opacity: 0.8;"><table class="popUpTable">'+
                    '<tr><td><b>ProdConsName:</b></td><td>' + Power_Plants[i].ProdConsName + '</td></tr>' + 
                    '<tr><td><b>ProdConsID: </b></td><td>'+ Power_Plants[i].ProdConsID + '</td></tr>' +
                    '<tr><td><b>Unit Name: </b></td><td>' + Power_Plants[i].UnitName + '</td></tr>' + 
                    '<tr><td><b>Unit ID: </b></td><td>' + Power_Plants[i].UnitID + '</td></tr>' + 
                    '<tr><td><b>Source:</b></td><td>' + Power_Plants[i].Source+ '</td></tr>' + 
                    '<tr><td><b>Capacity: </b></td><td>' + Power_Plants[i].Capacity + ' MW' + '</td></tr>' +
                    '<tr><td><b>Company Name:</b> </td><td>' + Power_Plants[i].CompanyName + '</td></tr>' +
                    '<tr><td><b>Company ID:</b> </td><td>' + Power_Plants[i].CompanyID + '</td></tr>' +
                    '<tr><td><b>Reporting Reason:</b> </td><td>' + Power_Plants[i].ReportingReason+ '</td></tr>' +
                    '<tr><td><b>Connecting Area:</b> </td><td>' + Power_Plants[i].ConnectingArea + '</td></tr>' +
                    '<tr><td><b>Start Date:</b> </td><td>' + startDate.getDate() + '-' + startmonth + '-' + startDate.getFullYear() + '</td></tr>' +
                    '<tr><td><b>End Date:</b> </td><td>' + endDate.getDate() + '-' + endmonth + '-' + endDate.getFullYear() + '</td></tr>' +
                    '<tr><td><b>Link To: </td><td><a class="EC-link" target="_blank" href="./power.htm?source='+ Power_Plants[i].Source +'&ID='+ Power_Plants[i].UnitID +'&chart=1'+'">Energy-Chart</a>' + '</td></tr>' +
                    '</table></div>', {closeButton: true})
                .bindLabel('<p class="labelvalue" style="background-color:'+ Power_Plants[i].color +'"></p>' +
                    '<p class="labelname">ProdConsName: ' + Power_Plants[i].ProdConsName+'</p>' + 
                    '<p class="labelvalue">ProdConsID: ' + Power_Plants[i].ProdConsID+'</p>' +
                    '<p class="labelname">Unit Name: ' + Power_Plants[i].UnitName+'</p>' +
                    '<p class="labelvalue">Unit ID: ' + Power_Plants[i].UnitID+'</p>' +
                    '<p class="labelname">Capacity: ' + Power_Plants[i].Capacity +' MW'+ '</p>'+ 
                    '<p class="labelvalue">Source: ' + Power_Plants[i].Source + '</p>' +
                    '<p class="labelname">Company Name: ' + Power_Plants[i].CompanyName + '</p>'+ 
                    '<p class="labelvalue">Company ID: ' + Power_Plants[i].CompanyID + '</p>' +
                    '<p class="labelname">Reporting Reason: ' + Power_Plants[i].ReportingReason + '</p>'+ 
                    '<p class="labelvalue">Connecting Area: ' + Power_Plants[i].ConnectingArea + '</p>'
                    );
        return marker;
}

function circleProperties(i) {

    var radious = Power_Plants[i].Capacity * 75;
    var startDateUNIX = Date.parse(Power_Plants[i].StartDate);
    var endDateUNIX = Date.parse(Power_Plants[i].EndDate);
    var startDate = new Date(startDateUNIX);
    var endDate = new Date(endDateUNIX);
    var startmonth = startDate.getMonth() + 1;
    var endmonth = endDate.getMonth() + 1;

    var circle = new L.circle([Power_Plants[i].WGS84Latitude, Power_Plants[i].WGS84Longitude], radious,{color: 'white', fillColor: Power_Plants[i].color, fillOpacity: 0.8,riseOnHover: true})
                    .bindPopup('<div class="custom-popup"'+ 'style="background-color:'+ Power_Plants[i].color +'; opacity: 0.8;"><table class="popUpTable">'+
                    '<tr><td><b>ProdConsName:</b></td><td>' + Power_Plants[i].ProdConsName + '</td></tr>' + 
                    '<tr><td><b>ProdConsID: </b></td><td>'+ Power_Plants[i].ProdConsID + '</td></tr>' +
                    '<tr><td><b>Unit Name: </b></td><td>' + Power_Plants[i].UnitName + '</td></tr>' + 
                    '<tr><td><b>Unit ID: </b></td><td>' + Power_Plants[i].UnitID + '</td></tr>' + 
                    '<tr><td><b>Source:</b></td><td>' + Power_Plants[i].Source+ '</td></tr>' + 
                    '<tr><td><b>Capacity: </b></td><td>' + Power_Plants[i].Capacity + ' MW' + '</td></tr>' +
                    '<tr><td><b>Company Name:</b> </td><td>' + Power_Plants[i].CompanyName + '</td></tr>' +
                    '<tr><td><b>Company ID:</b> </td><td>' + Power_Plants[i].CompanyID + '</td></tr>' +
                    '<tr><td><b>Reporting Reason:</b> </td><td>' + Power_Plants[i].ReportingReason+ '</td></tr>' +
                    '<tr><td><b>Connecting Area:</b> </td><td>' + Power_Plants[i].ConnectingArea + '</td></tr>' +
                    '<tr><td><b>Start Date:</b> </td><td>' + startDate.getDate() + '-' + startmonth + '-' + startDate.getFullYear() + '</td></tr>' +
                    '<tr><td><b>End Date:</b> </td><td>' + endDate.getDate() + '-' + endmonth + '-' + endDate.getFullYear() + '</td></tr>' +
                    '<tr><td><b>Link To: </td><td><a class="EC-link" target="_blank" href="./power.htm?source='+ Power_Plants[i].Source +'&ID='+ Power_Plants[i].UnitID +'&chart=1'+'">Energy-Chart</a>' + '</td></tr>' +
                    '</table></div>', {closeButton: true})
                .bindLabel('<p class="labelvalue" style="background-color:'+ Power_Plants[i].color +'"></p>' +
                    '<p class="labelname">ProdConsName: ' + Power_Plants[i].ProdConsName+'</p>' + 
                    '<p class="labelvalue">ProdConsID: ' + Power_Plants[i].ProdConsID+'</p>' +
                    '<p class="labelname">Unit Name: ' + Power_Plants[i].UnitName+'</p>' +
                    '<p class="labelvalue">Unit ID: ' + Power_Plants[i].UnitID+'</p>' +
                    '<p class="labelname">Capacity: ' + Power_Plants[i].Capacity +' MW'+ '</p>'+ 
                    '<p class="labelvalue">Source: ' + Power_Plants[i].Source + '</p>' +
                    '<p class="labelname">Company Name: ' + Power_Plants[i].CompanyName + '</p>'+ 
                    '<p class="labelvalue">Company ID: ' + Power_Plants[i].CompanyID + '</p>' +
                    '<p class="labelname">Reporting Reason: ' + Power_Plants[i].ReportingReason + '</p>'+ 
                    '<p class="labelvalue">Connecting Area: ' + Power_Plants[i].ConnectingArea + '</p>'
                    );
    return  circle;
}

function iconSelector(i) {
        if (Power_Plants[i].Source == "gas" || Power_Plants[i].Source == "coal-derived-gas") {
                return L.AwesomeMarkers.icon({icon: 'fire', markerColor: 'orange', prefix: 'fa', iconColor: 'white'});
                    }
        else if (Power_Plants[i].Source == "coal") {
                //return coalIcon;
                return L.ExtraMarkers.icon({icon: 'fa-industry', markerColor: 'black', shape: 'square', prefix: 'fa'});
        }
        else if (Power_Plants[i].Source == "oil") {
                return oilIcon;
        }
        else if (Power_Plants[i].Source == "lignite") {
                return ligniteIcon;
        }
        else if (Power_Plants[i].Source == "garbage") {
                //return garbageIcon;
                return L.AwesomeMarkers.icon({icon: 'trash-o', markerColor: 'lightgray', prefix: 'fa', iconColor: 'white'});
        }
        else if (Power_Plants[i].Source == "wind-offshore" || Power_Plants[i].Source == "wind-onshore") {
                //return windIcon;
                return L.ExtraMarkers.icon({icon: 'fa-spinner', markerColor: 'green-light', shape: 'star', prefix: 'fa', spin: true});
        }
        else if (Power_Plants[i].Source == "biomass") {
                //return biomassIcon;
                return L.ExtraMarkers.icon({icon: 'fa-leaf', markerColor: 'green', shape: 'penta', prefix: 'fa'});
        }
        else if (Power_Plants[i].Source == "run-of-the-river") {
                //return hydroIcon;
                return L.ExtraMarkers.icon({icon: 'fa-tint', markerColor: 'blue', shape: 'star', prefix: 'fa'});
        }
        else if (Power_Plants[i].Source == "uranium") {
                //return nuclearIcon;
                return L.AwesomeMarkers.icon({icon: 'spinner', markerColor: 'red', prefix: 'fa', iconColor: 'white', spin: true});

        }
        //else if (Power_Plants[i].Source == "biomass") {
                //return biomassIcon;
                //return L.ExtraMarkers.icon({icon: 'fa-coffee', markerColor: 'green', shape: 'square', prefix: 'fa'});
        //}
        else if (Power_Plants[i].Source == "seasonal-store") {
                //return seasonalStoreIcon;
                return L.AwesomeMarkers.icon({icon: 'mixcloud', markerColor: 'lightblue', prefix: 'fa', iconColor: 'white'});

        }
        else if (Power_Plants[i].Source == "pumped-storage") {
                //return psIcon;
                return L.AwesomeMarkers.icon({icon: 'gear', markerColor: 'blue', prefix: 'fa', iconColor: 'white'});

        }
        else {
            //return otherIcon;
             return L.ExtraMarkers.icon({icon: 'fa-bolt', markerColor: 'purple', shape: 'square', prefix: 'fa'});
        }
    }

function DeutschbundesLander() {
                var xmlhttp = new XMLHttpRequest();

                var url = './data_kazi/dataBundesLander.json';

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
                    Bundesland_data = geojsonFeature;
                    var defaultStyle = {
                        color: 'red',
                        weight: 4
                    };

                    var _berlin = {
                        color: 'green',
                        weight: 4
                    }

                    function onEachFeature(feature, layer) {
                          // does this feature have a property named popupContent?
                          // if (feature.properties && feature.properties.NAME_1 == "Bayern") {
                          //   layer.setStyle(defaultStyle);
                          // }
                          // else if (feature.properties && feature.properties.NAME_1 == "Baden-Württemberg") {
                          //   layer.setStyle(_berlin);
                          // }
                          // else {
                          layer.setStyle({color: '#179c7d', weight: 2, opacity: 1, fillColor: '#179c7d', fillOpacity: 0.2});
                          //}
                          layer.bindPopup('<p class="labelname">Name: ' + feature.properties.NAME_1 +'</p>');
                          layer.bindLabel('<p class="labelname" align="center">'+ feature.properties.NAME_1 +'</p>');
                          if (feature.properties.NAME_1 == "Baden-Württemberg") {
                            var element = JSON.stringify(feature);
                            //_BW_layer = '{'+'"type"'+':'+'"FeatureCollection"' +','+'"features":['+ element+'}';
                            _BW_layer = element;
                            console.log(_BW_layer);
                          }
                    }


                    _DE_layer = L.geoJson(geojsonFeature, {onEachFeature: onEachFeature});

                    //map.removeLayer(markers);
                    map.addLayer(_DE_layer);
                    //map.fitBounds(_110KV_layer.getBounds());
                }
}

function getColor(d) {
    return d > 1000 ? '#800026' :
           d > 500  ? '#BD0026' :
           d > 200  ? '#E31A1C' :
           d > 100  ? '#FC4E2A' :
           d > 50   ? '#FD8D3C' :
           d > 20   ? '#FEB24C' :
           d > 10   ? '#FED976' :
                      '#FFEDA0';
}

function getPowerPlantColor(name) {
    return name == "Hydro Power"      ? 'rgb(0, 0, 200)'     :
           name == "Biomass"          ? 'rgb(0,150,50)'   :
           name == "Uranium"          ? 'rgb(255,0,0)'     :
           name == "Brown Coal"       ? 'rgb(150,125,100)' :
           name == "Hard Coal"        ? 'rgb(50,50,50)'    :
           name == "Oil"              ? 'rgb(125,100,75)'  :
           name == "Gas"              ? 'rgb(250,150,75)'  :
           name == "Others"           ? 'rgb(150,125,175)' :
           name == "Pumped Storage"   ? 'rgb(0,150,225)'   :
           name == "Seasonal Storage" ? 'rgb(175,200,255)' :
           name == "Wind"             ? 'rgb(155,175,145)' :
           name == "Garbage"          ? 'rgb(158,152,148)' :
                                        'rgb(0,0,0)';
}