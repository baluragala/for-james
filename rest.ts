let members = ['James','John','Jack','Helly', 'Kelly'];

// rest operator
function makeTeam(manager,lead,...team){
    console.log(manager);
    console.log(lead);
    console.log(team);
}   

makeTeam('James','John','Jack','Helly', 'Kelly')