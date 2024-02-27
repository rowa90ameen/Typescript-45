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
// Original array of magician's names
var original_magicians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Creating a copy of the original array
var copied_magicians = original_magicians.slice();
// Calling make_great with the copied array
var great_magicians = make_great(copied_magicians);
// Calling the function to show original magician's names
console.log("Original Magicians:");
show_magicians(original_magicians);
// Calling the function to show magician's names with "the Great" added
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
