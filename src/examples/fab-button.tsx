import React from 'react';
import { IonContent, IonPage, IonFab, IonFabButton } from '@ionic/react';

export const FabButtonExample: React.FC = () => (
  <IonPage><IonContent>
    {/*-- Fixed Floating Action Button that does not scroll with the content --*/}
    <IonFab slot="fixed">
      <IonFabButton>Button</IonFabButton>
    </IonFab>

    {/*-- Default Floating Action Button that scrolls with the content.--*/}
    <IonFabButton>Default</IonFabButton>

    {/*-- Mini --*/}
    <IonFabButton size="small">Mini</IonFabButton>

    {/*-- Colors --*/}
    <IonFabButton color="primary">Primary</IonFabButton>
    <IonFabButton color="secondary">Secondary</IonFabButton>
    <IonFabButton color="danger">Danger</IonFabButton>
    <IonFabButton color="light">Light</IonFabButton>
    <IonFabButton color="dark">Dark</IonFabButton>
  </IonContent></IonPage>
);
