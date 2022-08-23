import React from "react"
import {
	IonContent,
	IonPage,
	IonFooter,
	IonToolbar,
	IonTitle,
} from "@ionic/react"

export const FooterExample: React.FC = () => (
	<IonPage>
		<IonContent>
			{/*-- Footer without a border --*/}
			<IonFooter className="ion-no-border">
				<IonToolbar>
					<IonTitle>Footer - No Border</IonTitle>
				</IonToolbar>
			</IonFooter>

			<IonFooter>
				<IonToolbar>
					<IonTitle>Footer</IonTitle>
				</IonToolbar>
			</IonFooter>

			{/*-- Fade Footer --*/}
			<IonFooter collapse="fade">
				<IonToolbar>
					<IonTitle>Footer</IonTitle>
				</IonToolbar>
			</IonFooter>
		</IonContent>
	</IonPage>
)
