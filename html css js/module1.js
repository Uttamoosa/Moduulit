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
    var squareint = parseInt(prompt("number: "))

    if (squareint < 0) {
        document.querySelector("#square").innerHTML = "The square root of a negative number is not defined"
    } else {
        document.querySelector("#square").innerHTML = Math.sqrt(squareint)
    }

} else {
    document.querySelector("#square").innerHTML = "The square root is not calculated"
}

const dicenum = parseInt(prompt("Number of dice: "))
var dicesum = 0

for (var i = 0; i < dicenum; i++) {
    dicesum += Math.floor(Math.random() * 6)
}

console.log("Sum of dice: " + dicesum)

var iyear = parseInt(prompt("Start year: "))
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
var isprime = true

for (var i = 2; i < primeint; i++) {
    if (primeint % i == 0) {
        isprime = false
        console.log(`${primeint} is not a prime number`)
        break
    }
}

if (isprime) {
    console.log(`${primeint} is a prime number`)
}

const dicenum2 = parseInt(prompt("Number of dice"))
var dicesum

for (i = 1; i < dicenum2; i++) {
    dicesum
}