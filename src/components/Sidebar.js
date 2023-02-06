import Usuario from './Usuario';
import Sugestoes from './Sugestoes';

const usuario = {
    usuario: "catanacomics",
    nome: "Catana"
}

export default function Sidebar() {
    return (
        <div className="sidebar">
            <Usuario data={usuario}/>
            <Sugestoes />
            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>
            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}
