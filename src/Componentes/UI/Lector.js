

const Lector = () =>{


    const reader = new FileReader();
    const text = new File([],'/FAQ.txt', { type : "text/plain"})
    const eventLog = document.querySelector('.event-log-contents');


    function handleEvent(event) {
        eventLog.textContent = eventLog.textContent + `${event.type}: ${event.loaded} bytes transferred\n`;
    
        if (event.type === "load") {
            text.src = reader.result;
        }
    }
    
    function addListeners(reader) {
        reader.addEventListener('loadstart', handleEvent);
        reader.addEventListener('load', handleEvent);
        reader.addEventListener('loadend', handleEvent);
        reader.addEventListener('progress', handleEvent);
        reader.addEventListener('error', handleEvent);
        reader.addEventListener('abort', handleEvent);
    }

    
       
   
  

    function cargararchivos(e) {
        eventLog.textContent = '';
        
        if (text) {
            addListeners(reader);
            reader.readAsBinaryString(text) 
        }
    }
    
    

    return (cargararchivos)

};


export default Lector