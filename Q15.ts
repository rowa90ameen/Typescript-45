let guest: string[]=['syed', 'zaidi', 'rizvi'];
for(let i=0; i<guest.length; i++){
    console.log(`Dear `+guest[i]+ `,\nYou are invited to the dinner for Sunday`)
}
let not_come: string= "syed";
let new_guest: string= "shaikh";
guest[0]=new_guest;
for(let i=0; i<guest.length; i++){
    console.log(`Dear `+guest[i]+ `,\nYou are invited to the dinner for Sunday`)
}
console.log(`Mr ${not_come} is not coming tomorrow.`);