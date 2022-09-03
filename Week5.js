class Superhero {
    constructor(name,superPower,secretIdentity){
    this.name=name
    this.superPower=superPower
    this.secretIdentity=secretIdentity
    }
describe(){
    return `${this.name}'s superpower is ${this.superpower}`
}
}

 class Superteam {
    constructor(name){
        this.name=name;
        this.heros=[]
    }

}

class Menu{
    constructor(){
        this.superTeam=[]
        this.selectedSuperTeam=null
    }
    start(){
        let selection = this.showMainOptions();
        while(selection!=0){
            switch(selection){
                case '1':
                    this.createSuperTeam();
                    break;
                case '2':
                    this.viewSuperTeam();
                    break;
                case '3':
                    this.deleteSuperTeam();
                    break;
                case '4':
                    this.displaySuperTeams();
                    break;
                default:
                    selection=0
            }
        selection=this.showMainOptions();
        }
        alert('Goodbye')
    }

showMainOptions(){
    return prompt(`
    0) Exit
    1) Create new Super Team
    2) View Super Team
    3) Delete Super Team
    4) Display Super Teams
    `)
}

showSuperTeamMenuOptions(superTeamInfo){
    return prompt(`
    0). Back
    1). Create Hero 
    2). Delete Hero
    ||||||||||||||||||||||||
    ${superTeamInfo} 
    `);

}

displaySuperTeams(){
    let superTeamString='';
    for(let i=0; i < this.superTeam.length; i++){
        superTeamString += i + ')' + this.superTeam[i].name + '\n';
    }
alert(superTeamString)
}

createSuperTeam(){
let name = prompt('Enter name for a new Super Team')
this.superTeam.push(new Superteam(name));
}

viewSuperTeam(){
let index = prompt('Enter the index of the Super Team you want to view');
if(index >-1 && index<this.superTeam.length){
    this.selectedSuperTeam = this.superTeam[index]
    let description = 'Team Name: ' + this.selectedSuperTeam.name + '\n';
   
for(let i=0; i<this.selectedSuperTeam.heros.length; i++){
        description+= i + ')'+ this.selectedSuperTeam.heros[i].name + ' - ' + this.selectedSuperTeam.heros[i].superPower + ' - ' + this.selectedSuperTeam.heros[i].secretIdentity + '\n';
    }
let selection = this.showSuperTeamMenuOptions(description);
switch(selection){
    case '1':
        this.createHero();
        break;
    case '2':
        this.deleteHero();
            }
     }
    }
deleteSuperTeam(){
    let index = prompt('Enter the index of the Super Team you wish to delete');
    if (index>-1 && index<this.superTeam.length){
        this.superTeam.splice(index,1);
    }
}

createHero(){
    let name = prompt(`Enter new Hero's name`)
    let power = prompt(`Enter Hero's super power`)
    let identity = prompt(`Enter Hero's secret identity`)
    this.selectedSuperTeam.heros.push(new Superhero(name,power,identity))
}
deleteHero(){
    let index = prompt(`Enter the index of the Hero you wish to delete`);
    if(index>-1 && index<this.selectedSuperTeam.heros.length){
        this.selectedSuperTeam.heros.splice(index,1)
    }

}
}

let menu = new Menu
menu.start()