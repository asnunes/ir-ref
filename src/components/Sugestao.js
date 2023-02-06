export default function Sugestao(props) {
    return props.data.map((element) =>
        <div className="sugestao" key={element}>
            <div className="usuario">
                <img alt="" src={`assets/img/${element}.svg`} />
                <div className="texto">
                    <div className="nome">{element}</div>
                    <div className="razao">Segue você</div>
                </div>
            </div>
            <div className="seguir">Seguir</div>
        </div>
    )
}
