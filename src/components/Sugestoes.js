import Sugestao from './Sugestao';

const users = ['bad.vibes.memes', 'chibirdart', 'razoesparaacreditar', 'adorable_animals', 'smallcutecats'];

export default function Sugestoes() {
    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            <Sugestao data={users}/>
        </div>
    )
}
