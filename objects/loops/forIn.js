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