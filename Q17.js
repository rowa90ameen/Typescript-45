var guest = ['syed', 'zaidi', 'rizvi'];
var not_come = "syed";
var new_guest = "shaikh";
guest[0] = new_guest;
// for(let i=0; i<guest.length; i++){
//     console.log(`Dear `+guest[i]+ `,\nYou are invited to the dinner for Sunday`)
// }
//console.log(`Mr ${not_come} is not coming tomorrow.`);
guest.unshift('ayesha', 'mohd');
guest[5] = 'raza';
// for(let i=0; i<guest.length; i++){
//     console.log(`Dear `+guest[i]+ `,\nYou are invited to the dinner for Sunday`)
// }
console.log("Unfortunateley! we have just 2 spaces available for the dinner.");
while (guest.length > 2) {
    var remove_guest = guest.pop();
    console.log("Sorry Dear , ".concat(remove_guest, " you are not invited for the dinner."));
}
for (var i = 0; i < guest.length; i++) {
    console.log("Dear " + guest[i] + ",\nYou are still invited to the dinner for Sunday\nThank You");
}
guest.splice(0, 2);
console.log(guest);
