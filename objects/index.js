


// //question1

// const instagramPost = new Object();
// instagramPost.handleOfAuthor = 'mufasatundeednut';
// instagramPost.content = 'image';
// instagramPost.anImageLinkPostedByTheAuthorOfThePost = 'https://www.instagram.com/p/Co__YOWusPq/?utm_source=ig_web_copy_link';

// instagramPost.numberOfViews = 117036;
// instagramPost.numberOfLikes = 116720;
// instagramPost.displayNumberOfViews = function(){
//     return this.numberOfViews;
// }

// console.log(instagramPost)

// console.log('handle of authur is ' + instagramPost.handleOfAuthor)

// console.log('numberOfViews is ' + instagramPost.numberOfViews)


function instagramPost(handleOfAuthor,  content, anImageLinkPostedByTheAuthorOfThePost, numberOfViews, numberOfLikes) {
    this.handleOfAuthor = handleOfAuthor;
    this.content = content;
    this.anImageLinkPostedByTheAuthorOfThePost = anImageLinkPostedByTheAuthorOfThePost;
    this.numberOfViews = numberOfViews;
    this.numberOfLikes = numberOfLikes;
}
 //Question 2

let marwanedev = new instagramPost('marwanedev', 'image', 'link', 9655, 83077);
console.log (marwanedev)

let mufasatundeednut = new instagramPost('mufasatundeednut', 'image', 'link', 117036, 116720);
console.log(mufasatundeednut)

//Quesion3

// factory function
function musa(name, age, location) {
    return {
      name: name,
      age: age,
      location: location,
    };
  }
  
  const musa = musa("musaDauda", "19", "lekki-lagos");
  console.log(musa);
  

  const student = {
    firstName: "musa",
    lastName: "dauda",
    age: 19,
    jambScores: {
        ENG: 70,
        GOV: 85,
        LIT: 82,
        CRK: 94,
      },
    }
  
    console.log(student)
  
    let chemScore = student.jambScores.CRK; // using dot notation
    console.log('chemScore is ' + crkScore)
  
    let mthScore = student['jambScores']['LIT'];
    console.log('maths Score is ' + litScore)
  
  
  