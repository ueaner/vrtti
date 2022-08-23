/* Using with useIonActionSheet Hook */

import React from "react";
import {
  IonButton,
  IonContent,
  IonPage,
  useIonActionSheet,
} from "@ionic/react";

export const ActionSheetExample: React.FC = () => {
  const [present, dismiss] = useIonActionSheet();

  return (
    <IonPage>
      <IonContent>
        <IonButton
          expand="block"
          onClick={() =>
            present({
              buttons: [{ text: "Ok" }, { text: "Cancel" }],
              header: "Action Sheet",
            })
          }
        >
          Show ActionSheet
        </IonButton>
        <IonButton
          expand="block"
          onClick={() =>
            present([{ text: "Ok" }, { text: "Cancel" }], "Action Sheet")
          }
        >
          Show ActionSheet using params
        </IonButton>
        <IonButton
          expand="block"
          onClick={() => {
            present([{ text: "Ok" }, { text: "Cancel" }], "Action Sheet");
            setTimeout(dismiss, 3000);
          }}
        >
          Show ActionSheet, hide after 3 seconds
        </IonButton>
      </IonContent>
    </IonPage>
  );
};
