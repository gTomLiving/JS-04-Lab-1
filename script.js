const reditPage = document.querySelector('.text-area');
const inputForm = document.querySelector('#input-form');



function addPost(newPost) {
    // create a div to store the info
   
    const pageEl = document.createElement('div');
    
    //Adding the title 
    const pageTitle = document.createElement('h2');
    pageTitle.innerText = newPost.title;
    pageEl.appendChild(pageTitle);
    
    reditPage.appendChild(pageEl);

    //add img

    if(newPost.thumbnail !== "default"){
        const postImage = document.createElement('img');
        postImage.src = newPost.thumbnail;
        pageEl.appendChild(postImage);
    } else {
        const postImage = document.createElement('img');
        postImage.src = "https://cache.desktopnexus.com/thumbseg/2469/2469602-bigthumbnail.jpg";
        pageEl.appendChild(postImage);
    }

    const postLink = document.createElement('a');

    let link = document.createTextNode("Click to learn about the post");

    postLink.appendChild(link);

    postLink.title = "Learn more about the post";

    postLink.href = "https://www.reddit.com/" + newPost.permalink;
      
    //add btn and input active listener

    let form = document.createElement('form');
    let label = document.createElement('label');
    let inputField = document.createElement('input');

    

    pageEl.appendChild(postLink);
    console.log(postLink);
    


    
}
 


fetch(' https://www.reddit.com/r/aww/.json').then((response) => {
    return response.json();
}).then((data) => {
    // console.log(data);
    const pageData = data.data.children;
    let count = 0;
    pageData.forEach((page) => {
    //    console.log(page.data)
       console.log(count);
    if(count <= 9) {
       let newPost = page.data;

       console.log(newPost);
       addPost(newPost);
        count++;
    }
    })
    
    
    
    // let i = 0;
    // for(let page of pageData) {
    //     page[i].data;
    // }
   
    
})

//todo : loop through .children and display on the page to show the posts...

// display title
// display img
// display working link