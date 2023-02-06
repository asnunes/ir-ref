import { IonIcon } from '@ionic/react';
import { chevronForwardCircle } from 'ionicons/icons';
import Story from './Story';

const users = ['9gag', 'meowed', 'barked', 'nathanwpylestrangeplanet', 'wawawicomics', 'respondeai', 'filomoderna', 'memeriagourmet'];

export default function Stories() {
    return (
        <div className="stories">
            <Story data={users}/>
            <div className="setinha">
                <IonIcon icon={chevronForwardCircle} />
            </div>
        </div>
    )
}
