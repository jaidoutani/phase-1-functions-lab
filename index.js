// Returns the number of blocks from Scuber's headquarters to the pickup location
function distanceFromHqInBlocks(pickUpLoc) {
    const scuberHq = 42;
    if (pickUpLoc >= scuberHq) {
        return pickUpLoc - 42;
    } else if (pickUpLoc <= scuberHq) {
        return Math.abs(scuberHq - pickUpLoc);
    }
}

// Returns the number of feet from Scuber's headquarters to the pickup location
function distanceFromHqInFeet(pickUpLoc) {
    const scuberHq = 42;
    if (pickUpLoc >= scuberHq) {
        return (pickUpLoc - 42) * 264;
    } else if (pickUpLoc <= scuberHq) {
        return Math.abs(scuberHq - pickUpLoc) * 264;
    }
}

// Calculates the number of feet a passenger travels given a starting block and an ending block
function distanceTravelledInFeet(start, dest) {
    return Math.abs(start - dest) * 264;
}

// Given the same starting and ending block as the previous test, return the fare for the customer.
function calculatesFarePrice(start, destination) {
    const fareCalc = Math.abs((start - destination) * 264);
    if (fareCalc < 400) {
        return 0
    } else if (fareCalc > 400 && fareCalc < 2000) {
        return (fareCalc - 400) * .02
    } else if (fareCalc > 2000 && fareCalc <= 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}