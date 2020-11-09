
const tweeter = Tweeter()
const renderer = Renderer()
renderer.renderPosts(tweeter.getPosts())

const post = function(){

    const post = $(input).val()
    $(input).val("")
    tweeter.addPost(post)
    renderer.renderPosts(tweeter.getPosts())
        
}


$('#posts').on('click', '.delete', function(){
    const delPost = $(this).closest('.post').data().id
    tweeter.removePost(delPost)
    renderer.renderPosts(tweeter.getPosts())
})


$('#posts').on('click', '.comment', function(){
    const postID = $(this).closest('.post').data().id
    const inputComment = $(this).closest('.post').find('#input-comment').val()
    $('#input-comment').val("")
    tweeter.addComment(inputComment, postID)
    renderer.renderPosts(tweeter.getPosts())
})

$('#posts').on('click', '.delete-comment', function(){
    const postID = $(this).closest('.post').data().id
    console.log(postID)
    const commentID = $(this).closest('div').data().id
    console.log(commentID)
    tweeter.removeComment(postID, commentID)
    renderer.renderPosts(tweeter.getPosts())

    
})


