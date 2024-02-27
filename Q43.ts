function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push(`${magician} the Great`);
    }
    return great_magicians;
}

// Original array of magician's names
let original_magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Creating a copy of the original array
let copied_magicians: string[] = original_magicians.slice();

// Calling make_great with the copied array
let great_magicians: string[] = make_great(copied_magicians);

// Calling the function to show original magician's names
console.log("Original Magicians:");
show_magicians(original_magicians);

// Calling the function to show magician's names with "the Great" added
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
