// use for...in to loop through the properties of an object, 
// to perform some action on each property or access their values.

const myTeam = {
    name: 'my team',
    members: 12,
    rank: '#3',
}

for (const key in myTeam) {
    console.log(`key: ${key}, Value: ${myTeam[key]}`);
}

// key: name, Value: my team
// VM77:8 key: members, Value: 12
// VM77:8 key: rank, Value: #3

// OR

Object.keys(myTeam).map(key => {
    console.log(key); // name member rank
})

// OR


for (const key in myTeam) {
    if (myTeam.hasOwnProperty(key)) {
        const value = myTeam[key];
        console.log(key, value);
    }
}

// name my team 
// members 12
// rank #3

// EXAMPLE:

const jeopardyWinnings = {
    regularPlay: 2522700,
    watsonChallenge: 300000,
    tournamentOfChampions: 500000,
    battleOfTheDecades: 100000
};

for (let property in jeopardyWinnings) {
    console.log(property, jeopardyWinnings[property]); 
};

// regularPlay 2522700
// watsonChallenge 300000
// tournamentOfChampions 500000
// battleOfTheDecades 100000