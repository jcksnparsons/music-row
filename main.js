let jumpStopRecords = []
let chattenRecords = []
let polarRecords = []

const createFunkOrRapArtist = (name, genre, age) => {
    return {
        "name": name,
        "genre": genre,
        "age": age,
    }
}

const createCountryOrBluegrassArtist = (name, genre, age) => {
    return {
        "name": name,
        "genre": genre,
        "age": age,
    }
}

const createPopArtist = (name, age) => {
    return {
        "name": name,
        "genre": "pop",
        "age": age,
    }
}

const dreFunkz = createFunkOrRapArtist("Dre Funkz", "Funk", 25)
const dustaGrimes = createFunkOrRapArtist("Dusta Grimes", "Rap", 21)
const loyonce = createFunkOrRapArtist("Loyoncé Branis", "Rap", 27)

jumpStopRecords.push(dreFunkz, dustaGrimes, loyonce)

const bruceAitkins = createCountryOrBluegrassArtist("Bruce Aitkins", "Country", 23)
const bartDanielson = createCountryOrBluegrassArtist("Bartholemew Danielson", "Bluegrass", 23)
const avileeDallas = createCountryOrBluegrassArtist("Avilee Dallas", "Country", 19)

chattenRecords.push(bruceAitkins, bartDanielson, avileeDallas)

const jensenBrown = createPopArtist("Jensen Brown", 20)
const austinKinkaid = createPopArtist("Austin Kinkaid", 22)

polarRecords.push(jensenBrown, austinKinkaid)

console.log("JumpStop Records", jumpStopRecords)
console.log("Chatten Records", chattenRecords)
console.log("Polar Records", polarRecords)