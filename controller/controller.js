export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        // Bind the add post method to the views add button
        this.view.bindAddPost(this.handleAddPost.bind(this));

        // Call the method that shows the existing blogposts to the user on UI
        this.updateView();

    }

    // Method to update the view with the current list of posts
    updateView() {
        const blogposts = this.model.getPosts();
        this.view.renderPosts(blogposts);
    }

    // Method to handle adding a new blog pst
    handleAddPost(post) {
        this.model.addPost(post.title, post.content); 
        this.updateView();
    }
}