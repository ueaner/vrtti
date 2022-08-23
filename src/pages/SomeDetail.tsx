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
import { RouteComponentProps } from "react-router"

type SomeDetailProps = RouteComponentProps<{
	id: string
}>

const SomeDetail: React.FC<SomeDetailProps> = ({ match }) => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonBackButton />
					</IonButtons>
					<IonTitle>Some Detail</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className="p-4">params.id: {match.params.id}</IonContent>
		</IonPage>
	)
}

export default SomeDetail
