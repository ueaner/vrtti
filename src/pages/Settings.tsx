import React, { useContext, useMemo } from "react"

import {
	IonPage,
	IonContent,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonToggle,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonListHeader,
} from "@ionic/react"
import { moon, sunny, phonePortrait } from "ionicons/icons"

import { AppActionKind } from "@/data/app/actions"
import { useAppContext } from "@/data/app/context"

interface SettingsProps {}

const Settings: React.FC<SettingsProps> = () => {
	const { state, dispatch } = useAppContext()

	function ToggleDarkMode() {
		dispatch({ type: AppActionKind.SetDarkMode, payload: !state.isDarkMode })
	}

	return useMemo(() => {
		console.log("Settings [re-]render")
		return (
			<IonPage>
				<IonHeader>
					<IonToolbar>
						<IonTitle>Settings</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent>
					<IonList>
						<IonItem>
							<IonIcon slot="start" icon={state.isDarkMode ? moon : sunny}></IonIcon>
							<IonLabel>Dark Mode</IonLabel>
							<IonToggle checked={state.isDarkMode} onClick={ToggleDarkMode} />
						</IonItem>
					</IonList>
					<IonList lines="none">
						<IonListHeader>Others</IonListHeader>
						<IonItem routerLink="/splash-screen">
							<IonIcon slot="start" icon={phonePortrait} />
							Show Splash Screen
						</IonItem>
					</IonList>
				</IonContent>
			</IonPage>
		)
	}, [state.isDarkMode])
}

export default Settings
