// Code your solution in this file!
const cityBlock = 264;
const headQuarters = 42;
function calculateVertical(beginning, destination)
{
  return (beginning - destination) * 264;
  // that takes in the beginning and destination blocks and returns the number of feet travelled.
}


function distanceFromHqInBlocks(destination)
{
  if(destination > headQuarters)
  {
    return destination - headQuarters;
  }else{
    return headQuarters - destination;
  }
}
function distanceFromHqInFeet (destination)
{
  distInBlocks = distanceFromHqInBlocks(destination);
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function
  return calculateVertical(headQuarters + distInBlocks, headQuarters);
}

function distanceTravelledInFeet(start, destination)
{
  distance = calculateVertical(start, destination)
  if (destination < distance)
  {
    return distance
  }else
  {
    return calculateVertical(destination, start)
  }

}

function calculatesFarePrice(start, destination)
{
  let distInBlocks = start - destination
  let distInFeet = distanceTravelledInFeet(start, destination)
  let centsPerFoot = 0.02
  let fairAmount = 0;

  if(distInFeet <= 400)
  {
    return 0;
  }else if(distInFeet > 400 && distInFeet < 2000)
  {
    return centsPerFoot * distInFeet;
  }else if(distInFeet > 2000 && distInFeet< 2500)
  {
    return 25;
  }else
  {
    return "cannot travel that far"
  }








}
