import Author from '../model/Author'

const fetchAuthor = (authorId) => {
    const url = "https://jsonplaceholder.typicode.com/users/" + authorId

    return (fetch(url)
        .then(res => res.json())
        .then(authorData => {
            return new Author(authorData)
        }))


}

export { fetchAuthor }