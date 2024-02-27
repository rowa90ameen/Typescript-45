var employess = ['raza', 'admin', 'mohd', 'mohid', 'ahmed'];
for (var i = 0; i < employess.length; i++) {
    if (employess[i] == 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(employess[i], ", thank you for logging in again."));
    }
}
