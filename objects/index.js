


//question1

const instagramPost = new Object();
instagramPost.handleOfAuthor = 'mufasatundeednut';
instagramPost.content = 'image';
instagramPost.anImageLinkPostedByTheAuthorOfThePost = 'https://www.instagram.com/p/Co__YOWusPq/?utm_source=ig_web_copy_link';

instagramPost.numberOfViews = 117036;
instagramPost.numberOfLikes = 116720;
instagramPost.displayNumberOfViews = function(){
    return this.numberOfViews;
}

console.log(instagramPost)

//question2

console.log('handle of authur is ' + instagramPost.handleOfAuthor)

console.log('numberOfViews is ' + instagramPost.numberOfViews)