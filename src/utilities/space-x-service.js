var URL = "https://api.spacexdata.com";
var VERISON = "/v3";

function getCompanyInfo(){
    return fetch(`${URL}${VERISON}/info`)
    .then(response=>response.json(),
    error=>console.log(error));
}

function getRocketInfo(){
    return fetch(`${URL}${VERISON}/launches`)
    .then(response=>response.json(),
    error=>console.log(error));
}

export{
    getCompanyInfo,
    getRocketInfo
}