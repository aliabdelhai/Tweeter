const Renderer = function(){
    

    const renderPosts = function(posts)
    {
        $('#posts').empty()
        for(let post of posts)
        {
            console.log(posts)
            let postBox = $(`<div class="post" data-id="${post.id}"><p class="post-text">${post.text}</p><ul class="comments">${renderComments(post.comments)}</ul></div>`)
            $("#posts").append(postBox)
        }
    }

    const renderComments = function(comments){
        let finalComment = ""
        for(let comment of comments){
            finalComment += `<li data-id="${comment.id}">${comment.text}</li>`
        }
        return finalComment
    }


    return {
        renderPosts
    }
}


