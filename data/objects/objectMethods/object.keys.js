// returns an array of an object's own property names

const person = {
    age: 30,
    location: "New York"   
};

const keys = Object.keys(person);

console.log(keys); // ['age', 'location']

const myTeam = {
    name: 'my team',
    members: 12,
    rank: '#3',
    bench: 'none',
    gamesLeft: 10
};

Object.keys(myTeam).forEach(key => {
    console.log(`key: ${key}, Value: ${myTeam[key]}`);
})