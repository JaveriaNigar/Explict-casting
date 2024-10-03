// narrowing
var person = "javeria nigar";
person = 19;
console.log(person);
//narrowing
if (typeof person === "string") {
    console.log(person.length);
}
//explict casting
var student = "yes";
console.log(student.length);
// Never
// Function returning never must not have a reachable end point
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something failed");
}
// Function returning never must not have a reachable end point
function infiniteLoop() {
    while (true) { }
}
