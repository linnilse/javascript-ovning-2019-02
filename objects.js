//Objects

var album = {
    albumName: "Blue",
    artist: 'Joni Mitchell',
    year: 1971
};

//dublett and delete and change
let dublett = album;
//delete album.year;
//album.albumName = "red";
console.log(dublett);

for (let prop in dublett) {
    console.log(prop);
}
for (let prop in dublett) {
    console.log(dublett[prop]);
}

/* Skapa en funktion printContent som tar ditt (ett) objekt som argument.
Funktionen ska sedan skriva ut alla värden i objektet och returnera en sträng på
liknande sätt: The album Blue by Joni Mitchell was release in 1971. */

function printContent(object) {
    array = [];
    for (let prop in object) {
        array.push(object[prop]);
    }
    return `The album ${array[0]} by ${array[1]} was release in ${array[2]}`;
}

console.log(printContent(dublett));