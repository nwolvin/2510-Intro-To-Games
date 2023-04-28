/**
 * The time class
 * Make static calls to this class to get timing information
 * 
 * Notable differences from Unity:
 * - We do not allow for time to be scaled (sped up or slowed down)
 * - We only update at a fixed rate, so deltaTime maps to fixedDeltaTime in Unity
 * - We don't store time values in different formats because js is dynamically typed
 */
class Time{
    /** The time in seconds between frames */
    static fpsTarget = 30
    static deltaTime = 1/Time.fpsTarget

    static time = 0
  
    static frameCount = 0

    static secondsCount = 0
  
    static update(){
      Time.time += Time.deltaTime
      Time.frameCount++;
      Time.secondsCount = Time.frameCount/Time.fpsTarget;
    }
    static formatTimerString(startTime){
      let time =  Time.secondsCount - startTime
      let myArray = String(time).split(".");
      let second = "";

      if(myArray.length > 1){
          if(myArray[1].length < 2){
              second = myArray[1].substring(0,1)+"0";
          } else {
              second = myArray[1].substring(0,2);
          }
      } else {
          second = "00"
      }
      return myArray[0] + "."+second+"s"
    } 

    static getTimeString(time){
      let myArray = String(time).split(".");
      let second = "";

      if(myArray.length > 1){
          if(myArray[1].length < 2){
              second = myArray[1].substring(0,1)+"0";
          } else {
              second = myArray[1].substring(0,2);
          }
      } else {
          second = "00"
      }
      return myArray[0] + "."+second+"s"
    } 
  }

  
  
  
  window.Time = Time
  export default Time;