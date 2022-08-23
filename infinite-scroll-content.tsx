import React from "react"
import {
	IonContent,
	IonPage,
	IonInfiniteScroll,
	IonInfiniteScrollContent,
} from "@ionic/react"

export const InfiniteScrollContentExample: React.FC = () => (
	<IonPage>
		<IonContent>
			<IonInfiniteScroll>
				<IonInfiniteScrollContent
					loadingSpinner="bubbles"
					loadingText="Loading more data..."
				></IonInfiniteScrollContent>
			</IonInfiniteScroll>
		</IonContent>
	</IonPage>
)
