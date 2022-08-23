import React from "react"
import { IonTitle, IonToolbar, IonContent, IonPage } from "@ionic/react"

export const TitleExample: React.FC = () => (
	<IonPage>
		<IonContent>
			{/*-- Default title --*/}
			<IonToolbar>
				<IonTitle>Default Title</IonTitle>
			</IonToolbar>

			{/*-- Small title --*/}
			<IonToolbar>
				<IonTitle size="small">Small Title above a Default Title</IonTitle>
			</IonToolbar>
			<IonToolbar>
				<IonTitle>Default Title</IonTitle>
			</IonToolbar>

			{/*-- Large title --*/}
			<IonToolbar>
				<IonTitle size="large">Large Title</IonTitle>
			</IonToolbar>
		</IonContent>
	</IonPage>
)
