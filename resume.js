console.log('Name: Justin Timothy Huntley'.toUpperCase()) 
console.log('Birmingham, AL');
console.log('Java Developer');
console.log('I like turtles');
console.log('My Interests:');
console.log('* Rap Music');
console.log('* Sleeping');
console.log('* Videogames');
console.log('* Coding');
console.log('My Previous Experience:');


function displayPosition(companyName, jobTitle, description) {
  console.log('Worked at ' + companyName + ' as a ' + jobTitle + ' ' + description);
} 

displayPosition('Sams Club' , 'Cart Attendant', 'where I would avoid work as much as possible');
displayPosition('Hyundai Glovis' , 'Shuttle Driver', 'where I would avoid work as much as possible');


function displaySkill(skillName, isItCool) {
    if (isItCool === true) {
        console.log ('Check It: ' + skillName);
    } else {
        console.log(skillName);
    
    }
}

displaySkill('My Skills:');
displaySkill('Sleeping', true);
displaySkill('Hearing without listening');
displaySkill('An amazing freestyler');


 
