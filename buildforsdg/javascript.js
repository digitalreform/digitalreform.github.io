// This is Test data that is replaced into the result to enable the page to work without an actual endpoint

let test_result =
{
    "data": {
        "region": {
            "name": "Africa",
            "avgAge": 19.7,
            "avgDailyIncomeInUSD": 5,
            "avgDailyIncomePopulation": 0.71
        },
        "periodType": "days",
        "timeToElapse": 58,
        "reportedCases": 674,
        "population": 66622705,
        "totalHospitalBeds": 1380614
    },
    "impact": {
        "currentlyInfected": 6740,
        "infectionsByRequestedTime": 3533701120,
        "severeCasesByRequestedTime": 530055168,
        "hospitalBedsByRequestedTime": 529902955,
        "casesForICUByRequestedTime": 176685056,
        "casesForVentilatorsByRequestedTime": 10601103,
        "dollarsInFlight": 14409616760549518
    },
    "severeImpact": {
        "currentlyInfected": 33700,
        "infectionsByRequestedTime": 17668505600,
        "severeCasesByRequestedTime": 2650275840,
        "hospitalBedsByRequestedTime": 2650123627,
        "casesForICUByRequestedTime": 883425280,
        "casesForVentilatorsByRequestedTime": 53005516,
        "dollarsInFlight": 72048083802747584
    }
}

let test_url = 'https://jsonplaceholder.typicode.com/posts'
// End of Test Data


function PopulateData(data){
     
    document.getElementById("currentInfected").innerText = data.impact.currentlyInfected.toLocaleString();
    document.getElementById("periodInfected").innerText = data.impact.infectionsByRequestedTime.toLocaleString();
    document.getElementById("severeCases").innerText = data.impact.severeCasesByRequestedTime.toLocaleString();
    document.getElementById("hospBeds").innerText = data.impact.hospitalBedsByRequestedTime.toLocaleString();
    document.getElementById("ICUCases").innerText = data.impact.casesForICUByRequestedTime.toLocaleString();
    document.getElementById("ventilatorCases").innerText = data.impact.casesForVentilatorsByRequestedTime.toLocaleString();
    document.getElementById("dollarLoss").innerText = data.impact.dollarsInFlight.toLocaleString();

    document.getElementById("ScurrentInfected").innerText = data.severeImpact.currentlyInfected.toLocaleString();
    document.getElementById("SperiodInfected").innerText = data.severeImpact.infectionsByRequestedTime.toLocaleString();
    document.getElementById("SsevereCases").innerText = data.severeImpact.severeCasesByRequestedTime.toLocaleString();
    document.getElementById("ShospBeds").innerText = data.severeImpact.hospitalBedsByRequestedTime.toLocaleString();
    document.getElementById("SICUCases").innerText = data.severeImpact.casesForICUByRequestedTime.toLocaleString();
    document.getElementById("SventilatorCases").innerText = data.severeImpact.casesForVentilatorsByRequestedTime.toLocaleString();
    document.getElementById("SdollarLoss").innerText = data.severeImpact.dollarsInFlight.toLocaleString();

}
    
$('#data-go-estimate').click(function(){
    
    // Get all the values from the form
    let population = document.getElementById("data-population").value;
    let reported = document.getElementById("data-reported-cases").value;
    let beds = document.getElementById("data-total-hospital-beds").value;
    let time = document.getElementById("data-time-to-elapse").value;
    let timeType = document.getElementById("data-period-type").value;

    //Setup and execute http request
    
    const url = 'http://www.endpointurl.com?population=' + population + '&reportedCases=' + reported + 
    '&totalHospitalBeds=' + beds + '&timeToElapse=' + time + '&periodType=' + timeType;
    
    //url is console.logged to check if url construction is valid
    console.log(url);

    //test_url and test_result should be replaced by url and result respectively below after testing if and
    //end point is available
    $.getJSON(test_url, function(result){

    PopulateData(test_result);
    })

})
