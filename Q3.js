// Lower Case
var personName = "Rowa";
console.log("lowercase:", personName.toLowerCase());
// Upper Case
console.log("uppercase:", personName.toLocaleUpperCase());
// Title Case
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
