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