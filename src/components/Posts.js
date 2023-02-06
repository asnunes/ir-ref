import Post from './Post';



export default function Posts() {
    const postdata = [
        {"id": 0, "usuario": "meowed", "img": "gato-telefone", "curtidopor": "respondeai", "curtidas": 101523, "saved": false, "liked": false},
        {"id": 1, "usuario": "barked", "img": "dog", "curtidopor": "adorable_animals", "curtidas": 99159, "saved": false, "liked": false}
    ]

    return (
        <div className="posts">
            {postdata.map(p => <Post data={p} key={p.id} />)}
        </div>
    )
}
