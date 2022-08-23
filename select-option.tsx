import React from 'react';
import { IonContent, IonItem, IonLabel, IonSelect, IonSelectOption, IonPage } from '@ionic/react';

export const SelectOptionExample: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonItem>
          <IonLabel>Select</IonLabel>
          <IonSelect>
            <IonSelectOption value="brown">Brown</IonSelectOption>
            <IonSelectOption value="blonde">Blonde</IonSelectOption>
            <IonSelectOption value="black">Black</IonSelectOption>
            <IonSelectOption value="red">Red</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};
