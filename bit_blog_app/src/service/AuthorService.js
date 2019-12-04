import Author from '../model/Author'

const fetchAuthor = () => {
    const url = "https://jsonplaceholder.typicode.com/users"

    return (fetch(url)
        .then(res => res.json())
        .then(data => {

            const MyAuthor = data.map(authorData => {
                return new Author(authorData)
            })
            return MyAuthor
        }))


}

export { fetchAuthor }