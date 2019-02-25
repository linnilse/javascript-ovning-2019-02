var yourArray = [23, 45, 54, 12, 77];
//Ändra sista värdet i yourArray genom att tilldela det nya värdet 1.
yourArray[4] = 1;
console.log(yourArray);

var bestArray = [1, 2, 3, 4, 5];
//Nu ska du loopa igenom arrayen och skriva ut varje värde i arrayen.
bestArray.forEach(value => console.log(value))

// multiplicera varje värde i arrayen med summan av det föregående värdet.
let sum = bestArray.reduce((sum, value) => sum * value)
console.log(sum);

//Filtrera array efter längd på innehållet inte längre än 5 tecken
var okArray = ["fine", "FINE", "good", "what is this stuff?", "sweet", "i don't even live here"];
for (let i = 0; i < okArray.length; i++) {
    if (okArray[i].length <= 5) {
        console.log(okArray[i]);
    }
}

//skriva ut strängen om strängen är "fine". Detta gäller alltså för både "fine"och "FINE".
for (let i = 0; i < okArray.length; i++) {
    if (okArray[i].toLowerCase() == 'fine') {
        console.log(okArray[i]);
    }
}

/*Filtrera array baserad på sträng eller nummer*/
var worstArrayYet = ["string", true, 42, "another string", 54, null, 12];
let sum2 = 0;
for (let i = 0; i < worstArrayYet.length; i++) {
    if (isNaN(worstArrayYet[i])) {
        console.log(worstArrayYet[i]);
    } else if (typeof worstArrayYet[i] == "number") {
        sum2 += worstArrayYet[i];
    }
}
console.log(sum2);