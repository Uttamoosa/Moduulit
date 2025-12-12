var array = []
for (i = 1; i <= 5; i++) {
    array.push(parseInt(prompt("Integer")))
}
for (i = 1; i <= 5; i++) {
    console.log(array[array.length - i])
}

const participants = parseInt(prompt("Number of participants"))

const ol = document.getElementById("list");

var partlist = []
for (i = 1; i <= participants; i++) {
    partlist.push(prompt("Name " + i))
}

partlist.sort()

for (i of partlist) {
    const li = document.createElement('li');
    li.textContent = i
    ol.appendChild(li)
}

const ul = document.getElementById("list2");

var doglist = []
for (i = 1; i <= 6; i++) {
    doglist.push(prompt("Dog name " + i))
}

doglist.sort().reverse()

for (i of doglist) {
    const li = document.createElement('li');
    li.textContent = i
    ul.appendChild(li)
}

let numlist = []

while (true) {
    let num = parseInt(prompt("Number"))

    if (num == 0) {
        break
    }

    numlist.push(num)
}

numlist.sort((a, b) => (a - b));

for (num in numlist) {
    console.log(num)
}

//ei jaksa kaikkia nii tässä vika

const numCandidates = parseInt(prompt("Number of candidates"))

let candidateList = []
for (let i = 1; i <= numCandidates; i++) {
    candidateList.push({name: prompt("Candidate name" + i), votes: 0})
}

const numOfVoters = parseInt(prompt("Number of voters"))

for (let i = 1; i <= numOfVoters; i++) {
    vote = prompt("Who do you vote for?")
    if (candidateList.some(c => c.name === vote)) {
        const candidate = candidateList.find(c => c.name === vote);
        candidate.votes++;
    }
}   

const sorted = [...candidateList].sort((a, b) => b.votes - a.votes);

console.log("The winner is ", sorted[0].name, " with ", sorted[0].votes, " votes");
 
console.log("Ranking:");
sorted.forEach((c, i) => {
    console.log(`${c.name}: ${c.votes} votes`);
});
