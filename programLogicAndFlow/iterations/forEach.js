const myTeam = {
    rank: '#3',
    bench: 'none',
    gamesLeft: 10,
    members: 12
}

Object.keys(myTeam).forEach(key => {
    console.log(`key: ${key}, Value: ${myTeam[key]}`);
});