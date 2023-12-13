// Code your solution in this file!
let headquater = 42;

function distanceFromHqInBlocks(location) {
    if (location < headquater) {
        return headquater - location;
    } else {
        return location - headquater;
    }
}

function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(start, end) {
    return Math.abs(start - end) * 264;
}

function calculatesFarePrice(start, end){
    let dist = distanceTravelledInFeet(start, end);

    if (dist <= 400){
        return 0;
    }else if (dist >= 400 && dist< 2000 ){
        return ((dist - 400) * 2) / 100;
    }else if(dist > 2000 && dist < 2500){
        return 25;
    }else{
        return 'cannot travel that far';
    }
}
