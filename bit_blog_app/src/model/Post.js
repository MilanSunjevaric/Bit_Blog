class Post {
    constructor(postData) {

        this.userID = postData.userId;
        this.titleID = postData.id;
        this.title = postData.title;
        this.body = postData.body;
    }
}
export default Post