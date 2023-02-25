//question3

const scienceSubjects = ['Physics', 'Chemistry', 'Biology', 'Technical Drawing'];
const socialScienceSubjects = ['Accounting', 'Commerce', 'Marketing', 'Geography'];
const artsSubjects = ['Government', 'Economics', 'Literature', 'History']
const generalSubjects = ['English', 'Mathematics']

let isScienceStudent;
let isArtStudent = true;
let isSocialScienceStudent;

if (isSocialScienceStudent === true){
    console.log(`${generalSubjects} + ${scienceSubjects}`)
}
else if(isScienceStudent === true) {
console.log(`${generalSubjects}, ${scienceSubjects}`)
}else if(isArtStudent === true) {
console.log(`${generalSubjects}, ${artsSubjects}`)
}
else{
console.log(generalSubjects)
}

//question5
function FindPowerOfTwoNearestToNumber(number) {
    let pwr = 0
    let rise = 0
  
    //   while do loop
    do {
      pwr = Math.pow(2, rise)
      rise++
    } while (pwr < number)
  
    // if else statement
    if (pwr - number > number - Math.pow(2, rise - 2)) {
      pwr = Math.pow(2, rise - 2)
    }
      
    return 'The number ' + pwr + ' is the power of 2 nearest to ' +number
  }
  
  const res = FindPowerOfTwoNearestToNumber(40)
  
  console.log(res)