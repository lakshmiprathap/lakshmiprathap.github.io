var dataList = [];
var filterYear = "";
var filerLaunch = "";
var filterLanding = "";

function myFun() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", 'https://api.spaceXdata.com/v3/launches?limit=100', false);
    xmlHttp.send(null);
    dataList = JSON.parse(xmlHttp.responseText);
    fetchData(dataList);
}
function fetchData(list) {
    var flightList = document.getElementById('flightList');

    flightList.innerHTML = '';
    for (let i = 0; i < list.length; i++) {
        var image = list[i].links.mission_patch;
        var name = list[i].mission_name;
        var id = list[i].flight_number;
        var mission_ids = list[i].mission_id;
        var launch_year = list[i].launch_year;
        var sucessful_launch = list[i].launch_success;
        var sucessful_landing = (list[i].rocket.first_stage.cores[0].land_success == true) ? true : false;



        flightList.innerHTML += '<div class="jumbotron col-sm-12 col-md-6 col-lg-3 cls-1024" >' +
            '<div class="height" style="padding: 10px">' +
            '<div class="img-bg">' +
            '<img src=' + image + '><br>' +
            '</div>' +
            '<a href="#"><h6>' + name + '#' + id + '</h6></a>' +
            '<h6>Mission Ids:</h6>' +
            '<ul>' +
            '<li>' + mission_ids + '</li>' +
            '</ul>' +
            '<p><strong>Launch Year:</strong>' + launch_year + '</p>' +
            '<p><strong>Successful Launch:</strong>' + sucessful_launch + '</p>' +
            '<p><strong>Successful Landing:</strong>' + sucessful_landing + '</p>' +
            '</div>' +
            '</div>';



    }
}
function filter(value, type) {
    if (type == "year") {
        filterYear = value;
        filterData();
    }
    else if (type == "successfulLaunch") {
        filerLaunch = value;
        filterData();
    }
    else {
        filterLanding = value;
        filterData();
    }

}
function filterData() {
    if (filterYear != "" && filterLanding == "" && filerLaunch == "") {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", 'https://api.spaceXdata.com/v3/launches?limit=100&launch_year=' + filterYear, false);
        xmlHttp.send(null);
        dataList = JSON.parse(xmlHttp.responseText);
        fetchData(dataList);

    }
    else if (filterYear == "" && filterLanding != "" && filerLaunch == "") {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", 'https://api.spaceXdata.com/v3/launches?limit=100&land_success=' + filterLanding, false);
        xmlHttp.send(null);
        dataList = JSON.parse(xmlHttp.responseText);
        fetchData(dataList);
    }
    else if (filterYear == "" && filterLanding == "" && filerLaunch != "") {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success=' + filerLaunch, false);
        xmlHttp.send(null);
        dataList = JSON.parse(xmlHttp.responseText);
        fetchData(dataList);
    }
    else if (filterYear != "" && filterLanding == "" && filerLaunch != "") {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", 'https://api.spaceXdata.com/v3/launches?limit=100&launch_year=' + filterYear + '&launch_success=' + filerLaunch, false);
        xmlHttp.send(null);
        dataList = JSON.parse(xmlHttp.responseText);
        fetchData(dataList);
    }
    else if (filterYear != "" && filterLanding != "" && filerLaunch == "") {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", 'https://api.spaceXdata.com/v3/launches?limit=100&launch_year=' + filterYear + '&land_success=' + filterLanding, false);
        xmlHttp.send(null);
        dataList = JSON.parse(xmlHttp.responseText);
        fetchData(dataList);
    }
    else if (filterYear == "" && filterLanding != "" && filerLaunch != "") {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success=' + filerLaunch + '&land_success=' + filterLanding, false);
        xmlHttp.send(null);
        dataList = JSON.parse(xmlHttp.responseText);
        fetchData(dataList);

    }
    else if (filterYear != "" && filterLanding != "" && filerLaunch != "") {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success=' + filerLaunch + '&land_success=' + filterLanding + '&launch_year=' + filterYear, false);
        xmlHttp.send(null);
        dataList = JSON.parse(xmlHttp.responseText);
        fetchData(dataList);
    }

}