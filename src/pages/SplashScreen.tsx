import React from "react"
import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
	IonBackButton,
	IonButtons,
} from "@ionic/react"

interface SplashScreenProps {}

const SplashScreen: React.FC<SplashScreenProps> = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonBackButton />
					</IonButtons>
					<IonTitle>Splash Screen</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>Splash Screen Page</IonContent>
		</IonPage>
	)
}

export default SplashScreen
