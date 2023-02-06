export default function Story(props) {
    return props.data.map((element, index) =>
        <div className="story" key={index}>
            <div className="imagem">
                <img alt="" src={`assets/img/${element}.svg`} />
            </div>
            <div className="usuario">
                {element}
            </div>
        </div>
    )
}
