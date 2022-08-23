import React from "react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonBadge,
  IonContent,
  IonPage,
} from "@ionic/react";
import { calendar, personCircle, map, informationCircle } from "ionicons/icons";

export const TabsExample: React.FC = () => (
  <IonPage>
    <IonContent>
      <IonTabs>
        <IonTabBar slot="bottom">
          <IonTabButton tab="schedule">
            <IonIcon icon={calendar} />
            <IonLabel>Schedule</IonLabel>
            <IonBadge>6</IonBadge>
          </IonTabButton>

          <IonTabButton tab="speakers">
            <IonIcon icon={personCircle} />
            <IonLabel>Speakers</IonLabel>
          </IonTabButton>

          <IonTabButton tab="map">
            <IonIcon icon={map} />
            <IonLabel>Map</IonLabel>
          </IonTabButton>

          <IonTabButton tab="about">
            <IonIcon icon={informationCircle} />
            <IonLabel>About</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonContent>
  </IonPage>
);
