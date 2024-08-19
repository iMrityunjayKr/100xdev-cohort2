const startTime = Date.now();

setTimeout(()=>{
    const endTime = Date.now();
    let delay = endTime - startTime;
    console.log(`Delay in second: ${delay/1000}`)    
},1000)