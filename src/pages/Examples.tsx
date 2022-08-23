import React from "react"
import { IonRouterOutlet } from "@ionic/react"
import { Route } from "react-router-dom"

import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
	IonList,
	IonItem,
	IonLabel,
} from "@ionic/react"

// const ExamplesOutlet: React.FC = () => {
// 	return (
// 		<IonRouterOutlet>
// 			<Route exact path="/tabs/examples" render={() => <Examples />} />
// 		</IonRouterOutlet>
// 	)
// }

const Examples: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Ionic Examples</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonList>
					{/* ITEMS */}
					<IonItem routerLink="/tabs/examples/action-sheet">
						<IonLabel>Action Sheet</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/alert">
						<IonLabel>Alert</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/avatar">
						<IonLabel>Avatar</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/back-button">
						<IonLabel>Back Button</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/backdrop">
						<IonLabel>Backdrop</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/button">
						<IonLabel>Button</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/buttons">
						<IonLabel>Buttons</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/card">
						<IonLabel>Card</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/checkbox">
						<IonLabel>Checkbox</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/chip">
						<IonLabel>Chip</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/content">
						<IonLabel>Content</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/fab-button">
						<IonLabel>Fab Button</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/fab-list">
						<IonLabel>Fab List</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/fab">
						<IonLabel>Fab</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/footer">
						<IonLabel>Footer</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/grid">
						<IonLabel>Grid</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/header">
						<IonLabel>Header</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/img">
						<IonLabel>Img</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/infinite-scroll-content">
						<IonLabel>Infinite Scroll Content</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/infinite-scroll">
						<IonLabel>Infinite Scroll</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/input">
						<IonLabel>Input</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/item-divider">
						<IonLabel>Item Divider</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/item-group">
						<IonLabel>Item Group</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/item-sliding">
						<IonLabel>Item Sliding</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/label">
						<IonLabel>Label</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/list-header">
						<IonLabel>List Header</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/list">
						<IonLabel>List</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/loading">
						<IonLabel>Loading</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/menu-toggle">
						<IonLabel>Menu Toggle</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/menu">
						<IonLabel>Menu</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/note">
						<IonLabel>Note</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/progress-bar">
						<IonLabel>Progress Bar</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/radio-group">
						<IonLabel>Radio Group</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/radio">
						<IonLabel>Radio</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/refresher">
						<IonLabel>Refresher</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/reorder">
						<IonLabel>Reorder</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/ripple-effect">
						<IonLabel>Ripple Effect</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/searchbar">
						<IonLabel>Searchbar</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/segment">
						<IonLabel>Segment</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/select-option">
						<IonLabel>Select Option</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/skeleton-text">
						<IonLabel>Skeleton Text</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/slides">
						<IonLabel>Slides</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/spinner">
						<IonLabel>Spinner</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/split-pane">
						<IonLabel>Split Pane</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/tab-bar">
						<IonLabel>Tab Bar</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/tab-button">
						<IonLabel>Tab Button</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/tabs">
						<IonLabel>Tabs</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/textarea">
						<IonLabel>Textarea</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/thumbnail">
						<IonLabel>Thumbnail</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/title">
						<IonLabel>Title</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/toast">
						<IonLabel>Toast</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/toggle">
						<IonLabel>Toggle</IonLabel>
					</IonItem>
					<IonItem routerLink="/tabs/examples/toolbar">
						<IonLabel>Toolbar</IonLabel>
					</IonItem>
				</IonList>
			</IonContent>
		</IonPage>
	)
}

export default Examples
