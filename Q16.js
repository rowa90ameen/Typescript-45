var guest = ['syed', 'zaidi', 'rizvi'];
// for(let i=0; i<guest.length; i++){
//     console.log(`Dear `+guest[i]+ `,\nYou are invited to the dinner for Sunday`)
// }
var not_come = "syed";
var new_guest = "shaikh";
guest[0] = new_guest;
for (var i = 0; i < guest.length; i++) {
    console.log("Dear " + guest[i] + ",\nYou are invited to the dinner for Sunday");
}
console.log("Mr ".concat(not_come, " is not coming tomorrow."));
guest.unshift('ayesha', 'mohd');
guest[5] = 'raza';
for (var i = 0; i < guest.length; i++) {
    console.log("Dear " + guest[i] + ",\nYou are invited to the dinner for Sunday");
}
