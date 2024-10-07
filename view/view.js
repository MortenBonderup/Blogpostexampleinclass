export default class View  {
    constructor() {
        // Get the container for displaying posts
        this.postsContainer = document.getElementById("posts");
        // Get the information about typed in post title
        this.titleInput = document.getElementById("new-post-title");
        // Get the information about typed in post content
        this.contentInput = document.getElementById("new-post-content");
        // Get information about the add button
        this.addButton = document.getElementById("add-post");
    }

    // Method to get the blog title and content from the input fields
    getPostInput() {
        return {
            title: this.titleInput.value,
            content: this.contentInput.value
        };
    }

    // Method that shows all blog posts to user 
    renderPosts(posts) {
        this.postsContainer.innerHTML = ""; // clear blog list
        posts.forEach(post => {
            const postElement = `
            <div class="post">
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            </div>
            `;
            this.postsContainer.innerHTML += postElement;
        })
    }

    // Method to bind the add button to a handler function
    // Handler = controller method handleaddpost
    bindAddPost(handler) {
        this.addButton.addEventListener("click", () => {
            const post = this.getPostInput(); 
            if (post.title !== "" && post.content !== "") {
                handler(post);
                this.clearInput();
            }
        })
    }

    // Method to clear the input fields
    clearInput() {
        this.titleInput.value = ""; // clear title input field
        this.contentInput.value = ""; // clear content input field
    }

}