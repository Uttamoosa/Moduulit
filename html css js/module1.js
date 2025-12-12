console.log("I'm printing to console!")

const name1 = prompt("Your name")
const list = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"]

document.querySelector("#target").innerHTML = "Hello, " + name1 + "!"
document.querySelector("#class").innerHTML = name1 + ", you are " + list[Math.floor(Math.random() * 4)]

const int1 = parseInt(prompt("int 1"))
const int2 = parseInt(prompt("int 2"))
const int3 = parseInt(prompt("int 3"))

document.querySelector("#sum").innerHTML = "Sum: " + (int1 + int2 + int3)
document.querySelector("#product").innerHTML = "Product: " + (int1 * int2 * int3)
document.querySelector("#average").innerHTML = "Average: " + (int1 + int2 + int3) / 3

const year = parseInt(prompt("Choose a year: "))

function isleap(leapyear) {
    if (leapyear <= 0) {return false}

    if (leapyear % 4 == 0) {
        if (leapyear % 100 == 0) {
            if (leapyear % 400 == 0) {
                return true
            } else {
                return false
            }

        } else {
            return true
        }

    } else {
        return false
    }}

if (isleap(year)) {
    document.querySelector("#leap").innerHTML = `Year ${year} is a leap year`
} else {
    document.querySelector("#leap").innerHTML = `Year ${year} is not a leap year`
}

if (confirm("Should I calculate the square root?")) {
    let squareint = parseInt(prompt("number: "))

    if (squareint < 0) {
        document.querySelector("#square").innerHTML = "The square root of a negative number is not defined"
    } else {
        document.querySelector("#square").innerHTML = Math.sqrt(squareint)
    }

} else {
    document.querySelector("#square").innerHTML = "The square root is not calculated"
}

const dicenum = parseInt(prompt("Number of dice: "))
let dicesum = 0

for (let i = 0; i < dicenum; i++) {
    dicesum += Math.floor(Math.random() * 6)
}

console.log("Sum of dice: " + dicesum)

let iyear = parseInt(prompt("Start year: "))
const endyear = parseInt(prompt("End year: "))

const ul = document.getElementById("yearlist")

while (iyear <= endyear) {
    if (isleap(iyear)) {
        const li = document.createElement("li");
        li.textContent = iyear;
        ul.appendChild(li);
    }

    iyear += 1
}

const primeint = parseInt(prompt("Integer"))
let isprime = true

for (let i = 2; i < primeint; i++) {
    if (primeint % i == 0) {
        isprime = false
        console.log(`${primeint} is not a prime number`)
        break
    }
}

if (isprime) {
    console.log(`${primeint} is a prime number`)
}

const numofdice = parseInt(prompt("number of dice to roll"))
const target = parseInt(prompt("target value"))

let hits = 0
for (i = 0; i < 50000; i++) {
    let temp = 0
    for (i2 = 0; i2 < numofdice; i2++) {
        temp +=  Math.floor(Math.random() * 6) + 1
    }

    if (temp == target) {
        hits++
    }
}

console.log(`${numofdice} dice sum ${target}, probability is about ${(hits / 50000) * 100}%`)