class Input{

    static mouseX = 0;

    static mouseY = 0;
  
    static lastMouseX = 0;
  
    static lastMouseY = 0;
    
    static lastWheel = 0;
  
    static mouseDown = false;

    static  keysDown = [];

    static keysUp = null;



    static finishFrame(){
        Input.lastWheel = 0;
    }

    static start(){
        //Grab a reference to our canvas
        let canvas = document.querySelector("#canv")
    
        //Add the mousemove event to the canvas. See https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event
        canvas.addEventListener("mousemove", (e) => { 
          Input.lastMouseX = Input.mouseX;
          Input.lastMouseY = Input.mouseY;
    
          Input.mouseX = e.clientX
          Input.mouseY = e.clientY
        });

        canvas.addEventListener("mousedown", (e) => {
          Input.lastMouseX = Input.mouseX;
          Input.lastMouseY = Input.mouseY;
    
          Input.mouseX = e.clientX
          Input.mouseY = e.clientY
          Input.mouseDown = true;
          });
    
        canvas.addEventListener("mouseup", (e) => { 
          Input.lastMouseX = Input.mouseX;
          Input.lastMouseY = Input.mouseY;
    
          Input.mouseX = e.clientX
          Input.mouseY = e.clientY
          Input.mouseDown = false;
         });
    
        canvas.addEventListener("wheel", (e) => { 
          Input.lastWheel = e.deltaY;
         });

        document.addEventListener("keyup", (e) => { 
            Input.keysDown[e.key] = false
            Input.keysUp = e.key;
            if (e.key == "p") {
                pause = !pause
            }
         });
    
        document.addEventListener("keydown", (e) => { 
          Input.keysDown[e.key] = true
          if (e.key == " ") {
              e.preventDefault()
          }
         });
        
        document.addEventListener("keypress", (e) => { });
    
        canvas.addEventListener("touchstart", (e) => {  })

        canvas.addEventListener("touchend", (e) => {  })
    
        canvas.addEventListener("touchmove", (e) => { 
          for(let touchEvent of e.touches){
          }
          e.preventDefault(); 
        })

        //Prevents Context menu
        document.getElementsByTagName("html")[0].addEventListener("contextmenu", (e)=>{
          e.preventDefault();
        })
      }
}

window.Input = Input;
export default Input;