import AuthorService from "../model/Post"

const fetchAuthor = () => {
    const url = "https://jsonplaceholder.typicode.com/users"

    return (fetch(url)
        .then(res => res.json())
        .then(data => {

            const MyAuthor = data.map(authorData => {
                return new Post(authorData)
            })
            return MyAuthor
        }))


}

export default AuthorService