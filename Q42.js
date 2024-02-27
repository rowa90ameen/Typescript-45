function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var great_magicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        great_magicians.push("".concat(magician, " the Great"));
    }
    return great_magicians;
}
// Array of magician's names
var magicians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Calling make_great to modify the array
magicians = make_great(magicians);
// Calling the function to show magician's names after modification
show_magicians(magicians);
