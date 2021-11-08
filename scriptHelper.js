// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (testInput.value === '') {
        return "Empty";
    }
    if (isNaN(Number(testInput.value))) {
        return "Not a Number";
    }
    if (!isNaN(Number(testInput.value))) {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty"|| 
        validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty") {
        alert("All fields required.");
        event.preventDefault();
    }
    if (validateInput(pilot) === "Is a Number") {
        alert("Pilot name must be a string");
        event.preventDefault();
    }
    if (validateInput(copilot) === "Is a Number") {
        alert("Co-pilot name must be a string");
        event.preventDefault();
    }
    if (validateInput(fuelLevel) === "Not a Number") {
        alert("Fuel level must be a number");
        event.preventDefault();
    }
    if (validateInput(cargoMass) === "Not a Number") {
        alert("Cargo mass must be a number");
        event.preventDefault();
    }

    faultyItems.innerHTML = `
    <ol>
        <li id="pilotStatus" data-testid="pilotStatus">Pilot: ${pilot.value} Ready</li>
        <li id="copilotStatus" data-testid="copilotStatus">Co-pilot: ${copilot.value} Ready</li>
        <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
        <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
    </ol>`
    if (fuelLevel < 10000) {
        faultyItems.style.visibility = "visible";
    }
    console.log(faultyItems)
}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
