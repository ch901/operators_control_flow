//question3

//Science Subjects - Physics, Chemistry, Biology, Technical Drawing 
//Social Science Subjects - Accounting, Commerce, Marketing, Geography
//Arts Subjects - Government, Economics, Literature, History
//General Subjects - English, Mathematics


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