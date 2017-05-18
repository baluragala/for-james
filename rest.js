var members = ['James', 'John', 'Jack', 'Helly', 'Kelly'];
function makeTeam(manager, lead) {
    var team = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        team[_i - 2] = arguments[_i];
    }
    console.log(manager);
    console.log(lead);
    console.log(team);
}
makeTeam('James', 'John', 'Jack', 'Helly', 'Kelly');
