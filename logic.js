const Tweeter = function(){


    const posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

    let postIdCounter = 3
    let commentIdCounter = 7

    const getPosts = () => posts

    const addPost = function(text){
        newComment = []
        let newID = "p" + postIdCounter
        let obj = {text: text, id: newID, comments: newComment}
        posts.push(obj)
        postIdCounter++

    }

    const removePost = function(postID)
    {
        for(let p=0; p < posts.length; p++)
        {
            if(posts[p].id == postID)
            {
                posts.splice(p,1)
            }
        }
        postIdCounter--
    }

    const addComment = function(text, postID)
    {
        let newID = "c" + commentIdCounter
        let obj = {id: newID, text:text}
        for(let p=0; p < posts.length; p++)
        {
            if(posts[p].id == postID)
            {
                posts[p].comments.push(obj)
            }
        }
        commentIdCounter++
    }

    const removeComment = function(postID, commentID)
    {
        for(let p=0; p < posts.length; p++)
        {
            if(posts[p].id == postID)
            {
                for(let c = 0; c < posts[p].comments.length; c++)
                {
                    if(posts[p].comments[c].id == commentID)
                    {
                        posts[p].comments.splice(c, 1)
                    }
                }
                
            }
        }
        commentIdCounter--

    }

    return {
        getPosts, addPost, removePost, addComment, removeComment
    }

}



// const tweeter = Tweeter()

// tweeter.addPost("This is my own post!")
// console.log(tweeter.getPosts())
//This should be added to the posts array:
//{text: "This is my own post!", id: "p3", comments: []}



// tweeter.removePost("p1")
// console.log(tweeter.getPosts())
//There should only be two posts in the post's array:
//{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
//{text: "This is my own post!", id: "p3", comments: []}


// tweeter.addComment("Damn straight it is!", "p3")
// tweeter.addComment("Second the best!", "p2")
// console.log(tweeter.getPosts())
//This should be added to the third post's comments array:
//{id: "c7", text: "Damn straight it is!"}

//This should be added to the second post's comments array:
//{id: "c8", text: "Second the best!"}


// tweeter.removeComment("p2", "c6")
// console.log(tweeter.getPosts())
//This comment should be removed:
//{id: "c6", text: "Haha second place what a joke."}