var fileName_powerUnit = "power_units_2016";

var Icon = L.Icon.extend({
        options: {
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

	var group = data;
	var layer = Layer;

	map.addLayer(layer);
	
	var group = new L.featureGroup(group);

 	map.fitBounds(group.getBounds(), {padding: [50, 50], animate: true});

}

function markerProperties(i) {

    var startDateUNIX = Date.parse(Power_Plants[i].StartDate);
    var endDateUNIX = Date.parse(Power_Plants[i].EndDate);
    var startDate = new Date(startDateUNIX);
    var endDate = new Date(endDateUNIX);
    var startmonth = startDate.getMonth() + 1;
    var endmonth = endDate.getMonth() + 1;


	var marker = L.marker([Power_Plants[i].WGS84Latitude,Power_Plants[i].WGS84Longitude],{icon: iconSelector(i) ,draggable: false,riseOnHover: true})
                .bindPopup('<div class="custom-popup"'+ 'style="background-color:'+ Power_Plants[i].color +'">'+
                    '<b>ProdConsName:</b> ' + Power_Plants[i].ProdConsName + '<br>' + 
                    '<b>ProdConsID: </b>'+ Power_Plants[i].ProdConsID + '<br>' +
                    '<b>Unit Name: </b>' + Power_Plants[i].UnitName + '<br>' + 
                    '<b>Unit ID: </b>' + Power_Plants[i].UnitID + '<br>' + 
                    '<b>Source:</b> ' + Power_Plants[i].Source+ '<br>' + 
                    '<b>Capacity: </b>' + Power_Plants[i].Capacity + ' MW' + '<br>' +
                    '<b>Company Name:</b> ' + Power_Plants[i].CompanyName + '<br>' +
                    '<b>Company ID:</b> ' + Power_Plants[i].CompanyID + '<br>' +
                    '<b>Reporting Reason:</b> ' + Power_Plants[i].ReportingReason+ '<br>' +
                    '<b>Connecting Area:</b> ' + Power_Plants[i].ConnectingArea + '<br>' +
                    '<b>Start Date:</b> ' + startDate.getDate() + '-' + startmonth + '-' + startDate.getFullYear() + '<br>' +
                    '<b>End Date:</b> ' + endDate.getDate() + '-' + endmonth + '-' + endDate.getFullYear() + '<br>' +
                    '<b>Link To: <a target="_blank" href="./power.htm?source='+ Power_Plants[i].Source +'&ID='+ Power_Plants[i].UnitID +'&chart=1'+'">Energy-Chart</a>' + '<br>' +
                    '</div>', {closeButton: true})
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

    function iconSelector(i) {
            if (Power_Plants[i].Source == "gas" || Power_Plants[i].Source == "coal-derived-gas") {
                            return gasIcon;
                        }
            else if (Power_Plants[i].Source == "coal") {
                    return coalIcon;
            }
            else if (Power_Plants[i].Source == "oil") {
                    return oilIcon;
            }
            else if (Power_Plants[i].Source == "lignite") {
                    return ligniteIcon;
            }
            else if (Power_Plants[i].Source == "garbage") {
                    return garbageIcon;
            }
            else if (Power_Plants[i].Source == "wind-offshore" || Power_Plants[i].Source == "wind-onshore") {
                    return windIcon;
            }
            else if (Power_Plants[i].Source == "biomass") {
                    return biomassIcon;
            }
            else if (Power_Plants[i].Source == "run-of-the-river") {
                    return hydroIcon;
            }
            else if (Power_Plants[i].Source == "uranium") {
                    return nuclearIcon;
            }
            else if (Power_Plants[i].Source == "biomass") {
                    return biomassIcon;
            }
            else if (Power_Plants[i].Source == "seasonal-store") {
                    return seasonalStoreIcon;
            }
            else if (Power_Plants[i].Source == "pumped-storage") {
                    return psIcon;
            }
            else {
                return otherIcon;
            }
        }