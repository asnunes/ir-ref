import { IonIcon } from '@ionic/react';
import { logoInstagram } from 'ionicons/icons';
import { compassOutline } from 'ionicons/icons';
import { heartOutline } from 'ionicons/icons';
import { personOutline } from 'ionicons/icons';
import { paperPlaneOutline } from 'ionicons/icons';

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <IonIcon icon={logoInstagram} />
                    <div className="separador"></div>
                    <img alt="" src="assets/img/logo.png" />
                </div>

                <div className="logo-mobile">
                    <IonIcon icon={logoInstagram} />
                </div>

                <div className="instagram-mobile">
                    <img alt="" src="assets/img/logo.png" />
                </div>

                <div className="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>

                <div className="icones">
                    <IonIcon icon={paperPlaneOutline} />
                    <IonIcon icon={compassOutline} />
                    <IonIcon icon={heartOutline} />
                    <IonIcon icon={personOutline} />
                </div>

                <div className="icones-mobile">
                    <IonIcon icon={paperPlaneOutline} />
                </div>
            </div>
        </div>
    )
}
