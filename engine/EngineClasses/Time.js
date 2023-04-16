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
    static fpsTarget = 144
    static deltaTime = 1/Time.fpsTarget

    static time = 0
  
    static frameCount = 0
  
    static update(){
      Time.time += Time.deltaTime
      Time.frameCount++;
    }
  }
  
  window.Time = Time
  export default Time;