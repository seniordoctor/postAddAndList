const posts = [
    { title: 'post1', content: 'post 1 content' },
    { title: 'post2', content: 'post 2 content' },
    { title: 'post3', content: 'post 3 content' }
]

const showPost = () => posts.map((post) => console.log(post.content));

const addPosts = (postNumber) => {
    return new Promise((resolve, reject) => {
        if (!postNumber) {
            reject("Post number girin!");
        }
        posts.push(postNumber);
        resolve(posts);
    });
};

const newPosts = async () => {
    try {
    console.log("Old Post")
    showPost()
    await addPosts({title:'post4', content:'post 4 content'});
    console.log("New Post")
    showPost();
    } catch (err) {
        console.log(err);
    }
};

newPosts();