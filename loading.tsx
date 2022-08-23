import React, { useState } from 'react';
import { IonLoading, IonButton, IonContent, IonPage } from '@ionic/react';

export const LoadingExample: React.FC = () => {
  const [showLoading, setShowLoading] = useState(false);

  return (
    <IonPage><IonContent>
      <IonButton onClick={() => setShowLoading(true)}>Show Loading</IonButton>
      <IonLoading
        cssClass='my-custom-class'
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={'Please wait...'}
        duration={5000}
      />
    </IonContent></IonPage>
  );
};
