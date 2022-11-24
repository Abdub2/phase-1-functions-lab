function distanceFromHqInBlocks(distance){
    const hq=42
    if (distance>hq){
        return(distance-hq);
    }else if(distance<hq){
        return(hq-distance);
    }
}
distanceFromHqInBlocks(13);

function distanceFromHqInFeet(distanceF){
  return 264 *distanceFromHqInBlocks(distanceF);

}
distanceFromHqInFeet(43);

function distanceTravelledInFeet(start,destination){
    if(start>destination){
        return (start -destination)*264
    }else {
        return(destination-start)*264
    }
}
distanceTravelledInFeet(50,58);

function calculatesFarePrice(start,destination){
    const distance= distanceTravelledInFeet(start,destination);
    if (distance>2500){
        return "cannot travel that far";
    } else if(distance>2000) {
        return 25;
    } else if (distance<=400){
        return 0;
    }else if(400<distance<2000){
        return 0.02*(distance -400);
    }

}

calculatesFarePrice(34,24);