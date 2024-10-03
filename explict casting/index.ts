// narrowing

let person :unknown ="javeria nigar";
person =19

console.log(person);
 //narrowing

 if (typeof person === "string"){

    console.log(person.length);
 }

//explict casting

 let student :unknown = "yes";

 console.log((student as string).length);
