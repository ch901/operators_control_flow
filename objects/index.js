


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

// //question2

// console.log('handle of authur is ' + instagramPost.handleOfAuthor)

// console.log('numberOfViews is ' + instagramPost.numberOfViews)

function instagramPost(handleOfAuthor,  content, anImageLinkPostedByTheAuthorOfThePost, numberOfViews, numberOfLikes) {
    this.handleOfAuthor = handleOfAuthor;
    this.content = content;
    this.anImageLinkPostedByTheAuthorOfThePost = anImageLinkPostedByTheAuthorOfThePost;
    this.numberOfViews = numberOfViews;
    this.numberOfLikes = numberOfLikes;

}

let marwanedev = new instagramPost('marwanedev', 'image', 'link', 9655, 83077);
console.log (marwanedev)

let mufasatundeednut = new instagramPost('mufasatundeednut', 'image', 'link', 117036, 116720);