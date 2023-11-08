// use for...in to loop through the properties of an object, 
// to perform some action on each property or access their values.

const myTeam = {
    name: 'my team',
    members: 12,
    rank: '#3',
};

for (const key in myTeam) {
    console.log(`key: ${key}, Value: ${myTeam[key]}`);
}

// key: name, Value: my team
// VM77:8 key: members, Value: 12
// VM77:8 key: rank, Value: #3