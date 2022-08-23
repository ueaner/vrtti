import React from "react"
import { IonApp, IonContent, IonPage, IonRippleEffect } from "@ionic/react"
//import "./RippleEffectExample.css"

export const RippleEffectExample: React.FC = () => (
	<IonApp>
		<IonPage>
			<IonContent>
				<div className="ion-activatable ripple-parent">
					A plain div with a bounded ripple effect
					<IonRippleEffect></IonRippleEffect>
				</div>

				<button className="ion-activatable ripple-parent">
					A button with a bounded ripple effect
					<IonRippleEffect></IonRippleEffect>
				</button>

				<div className="ion-activatable ripple-parent">
					A plain div with an unbounded ripple effect
					<IonRippleEffect type="unbounded"></IonRippleEffect>
				</div>

				<button className="ion-activatable ripple-parent">
					A button with an unbounded ripple effect
					<IonRippleEffect type="unbounded"></IonRippleEffect>
				</button>
			</IonContent>
		</IonPage>
	</IonApp>
)
