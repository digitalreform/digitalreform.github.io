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
    const url= 'https://jsonplaceholder.typicode.com/posts';


    $.getJSON(url, function(result){

        //PopulateData(result);
    })

})
