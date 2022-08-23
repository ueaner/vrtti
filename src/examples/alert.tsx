import React, { useState } from "react";
import { IonAlert, IonButton, IonContent, IonPage } from "@ionic/react";

export const AlertExample: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <IonPage><IonContent>
      <IonButton onClick={() => setShowAlert(true)}>Click Me</IonButton>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header="Alert"
        subHeader="Important message"
        message="This is an alert!"
        buttons={["OK"]}
      />
    </IonContent></IonPage>
  );
};
