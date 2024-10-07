export default class Model {
    #posts; // prevent direct manipulation of blog posts
    constructor(postsFromStorage) {
        this.#posts = postsFromStorage; // create empty array for blogposts
    }

    // Method that adds a new blog post to the posts array
    addPost(title, content) {
        this.#posts.push({ title, content }); // Add new blogpost to end of array
        localStorage.setItem("posts", JSON.stringify(this.#posts));
    }

    // Method to get the current list of blog posts
    getPosts() {
        return this.#posts;
    }
}