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