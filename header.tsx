import React from 'react';
import { IonHeader, IonContent, IonPage, IonToolbar, IonButtons, IonBackButton, IonTitle } from '@ionic/react';

export const HeaderExample: React.FC = () => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
        </IonButtons>
        <IonTitle>My Navigation Bar</IonTitle>
      </IonToolbar>
    
      <IonToolbar>
        <IonTitle>Subheader</IonTitle>
      </IonToolbar>
    </IonHeader>
    
    {/*-- Header without a border --*/}
    <IonHeader className="ion-no-border">
     <IonToolbar>
      <IonTitle>Header - No Border</IonTitle>
     </IonToolbar>
    </IonHeader>
    
    <IonPage><IonContent>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">My Navigation Bar</IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonContent></IonPage>
    
    {/*-- Fade Header with collapse header --*/}
    <IonHeader collapse="fade" translucent={true}>
      <IonToolbar>
        <IonTitle>Header</IonTitle>
      </IonToolbar>
    </IonHeader>
    
    <IonPage><IonContent fullscreen={true}>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Header</IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonContent></IonPage>
  </>
);
