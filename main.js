const tweeter = Tweeter()
const renderer = Renderer()


tweeter.addPost("This is my own post!")
tweeter.removePost("p1")
tweeter.addComment("Damn straight it is!", "p3")
tweeter.addComment("Second the best!", "p2")
tweeter.removeComment("p2", "c6")

renderer.renderPosts(tweeter.getPosts())
