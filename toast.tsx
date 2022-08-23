/* Using the useIonToast Hook */

import React from "react";
import { IonButton, IonContent, IonPage, useIonToast } from "@ionic/react";

export const ToastExample: React.FC = () => {
  const [present, dismiss] = useIonToast();

  return (
    <IonPage>
      <IonContent>
        <IonButton
          expand="block"
          onClick={() =>
            present({
              buttons: [{ text: "hide", handler: () => dismiss() }],
              message: "toast from hook, click hide to dismiss",
              onDidDismiss: () => console.log("dismissed"),
              onWillDismiss: () => console.log("will dismiss"),
            })
          }
        >
          Show Toast
        </IonButton>
        <IonButton
          expand="block"
          onClick={() => present("hello from hook", 3000)}
        >
          Show Toast using params, closes in 3 secs
        </IonButton>
        <IonButton expand="block" onClick={dismiss}>
          Hide Toast
        </IonButton>
      </IonContent>
    </IonPage>
  );
};
