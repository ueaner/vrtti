import React from "react";
import { IonContent, IonPage } from "@ionic/react";

export const ContentExample: React.FC = () => (
  <IonPage><IonContent
    scrollEvents={true}
    onIonScrollStart={() => {}}
    onIonScroll={() => {}}
    onIonScrollEnd={() => {}}
  >
    <h1>Main Content</h1>

    <div slot="fixed">
      <h1>Fixed Content</h1>
    </div>
  </IonContent></IonPage>
);
