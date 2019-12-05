
import Post from "../model/Post"

const fetchPost = (id) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`

    return fetch(url)
        .then(res => res.json())
        .then(apiPosts => new Post(apiPosts)

        )

}


const fetchPosts = () => {
    const url = "https://jsonplaceholder.typicode.com/posts"

    return fetch(url)
        .then(res => res.json())
        .then(apiPosts => {
            return apiPosts.map(apiPost => {
                return new Post(apiPost)

            })
        })
}

const fetchMorePosts = (userId) => {
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`

    return fetch(url)
        .then(res => res.json())
        .then(apiPosts => {

            return apiPosts.map(apiPost => {
                return new Post(apiPost)

            })
        })
}



export { fetchPost, fetchPosts, fetchMorePosts }
