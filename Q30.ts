let employess: string[]=['raza', 'admin', 'mohd', 'mohid', 'ahmed'];
for(let i=0; i<employess.length; i++){
    if(employess[i]=='admin'){
        console.log("Hello admin, would you like to see a status report?")
    }else{
        console.log(`Hello ${employess[i]}, thank you for logging in again.`)
    }
}