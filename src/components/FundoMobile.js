import { IonIcon } from '@ionic/react';
import { home } from 'ionicons/icons';
import { searchOutline } from 'ionicons/icons';
import { addCircleOutline } from 'ionicons/icons';
import { heartOutline } from 'ionicons/icons';
import { personOutline } from 'ionicons/icons';

export default function FundoMobile() {
    return (
        <div className="fundo-mobile">
            <IonIcon icon={home} />
            <IonIcon icon={searchOutline} />
            <IonIcon icon={addCircleOutline} />
            <IonIcon icon={heartOutline} />
            <IonIcon icon={personOutline} />
        </div>
    );
}
