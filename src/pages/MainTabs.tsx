import React from "react"
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from "@ionic/react"
import { Route, Redirect } from "react-router"
import { home, logoIonic, settings } from "ionicons/icons"

import Home from "./Home"
import SomeDetail from "./SomeDetail"
import Examples from "./Examples"
import Settings from "./Settings"

// IMPORTS
import { ActionSheetExample } from "../examples/action-sheet"
import { AlertExample } from "../examples/alert"
import { AvatarExample } from "../examples/avatar"
import { BackButtonExample } from "../examples/back-button"
import { BackdropExample } from "../examples/backdrop"
import { ButtonExample } from "../examples/button"
import { ButtonsExample } from "../examples/buttons"
import { CardExample } from "../examples/card"
import { CheckboxExample } from "../examples/checkbox"
import { ChipExample } from "../examples/chip"
import { ContentExample } from "../examples/content"
import { FabButtonExample } from "../examples/fab-button"
import { FabListExample } from "../examples/fab-list"
import { FabExample } from "../examples/fab"
import { FooterExample } from "../examples/footer"
import { GridExample } from "../examples/grid"
import { HeaderExample } from "../examples/header"
import { ImgExample } from "../examples/img"
import { InfiniteScrollContentExample } from "../examples/infinite-scroll-content"
import { InfiniteScrollExample } from "../examples/infinite-scroll"
import { InputExample } from "../examples/input"
import { ItemDividerExample } from "../examples/item-divider"
import { ItemGroupExample } from "../examples/item-group"
import { ItemSlidingExample } from "../examples/item-sliding"
import { LabelExample } from "../examples/label"
import { ListHeaderExample } from "../examples/list-header"
import { ListExample } from "../examples/list"
import { LoadingExample } from "../examples/loading"
import { MenuToggleExample } from "../examples/menu-toggle"
import { MenuExample } from "../examples/menu"
import { NoteExample } from "../examples/note"
import { ProgressBarExample } from "../examples/progress-bar"
import { RadioGroupExample } from "../examples/radio-group"
import { RadioExample } from "../examples/radio"
import { RefresherExample } from "../examples/refresher"
import { ReorderExample } from "../examples/reorder"
import { RippleEffectExample } from "../examples/ripple-effect"
import { SearchbarExample } from "../examples/searchbar"
import { SegmentExample } from "../examples/segment"
import { SelectOptionExample } from "../examples/select-option"
import { SkeletonTextExample } from "../examples/skeleton-text"
import { SlidesExample } from "../examples/slides"
import { SpinnerExample } from "../examples/spinner"
import { SplitPaneExample } from "../examples/split-pane"
import { TabBarExample } from "../examples/tab-bar"
import { TabButtonExample } from "../examples/tab-button"
import { TabsExample } from "../examples/tabs"
import { TextareaExample } from "../examples/textarea"
import { ThumbnailExample } from "../examples/thumbnail"
import { TitleExample } from "../examples/title"
import { ToastExample } from "../examples/toast"
import { ToggleExample } from "../examples/toggle"
import { ToolbarExample } from "../examples/toolbar"

interface MainTabsProps {}

const MainTabs: React.FC<MainTabsProps> = () => {
	return (
		<IonTabs>
			<IonRouterOutlet>
				<Redirect exact path="/tabs" to="/tabs/home" />
				{/*
          Using the render method prop cuts down the number of renders your components will have due to route changes.
          Use the component prop when your component depends on the RouterComponentProps passed in automatically.
        */}
				<Route exact path="/tabs/home" render={() => <Home />} />
				<Route path="/tabs/home/:id" component={SomeDetail} />
				<Route exact path="/tabs/examples" render={() => <Examples />} />
				<Route exact path="/tabs/settings" render={() => <Settings />} />

				{/* ROUTES */}
				<Route path="/tabs/examples/action-sheet" component={ActionSheetExample} />
				<Route path="/tabs/examples/alert" component={AlertExample} />
				<Route path="/tabs/examples/avatar" component={AvatarExample} />
				<Route path="/tabs/examples/back-button" component={BackButtonExample} />
				<Route path="/tabs/examples/backdrop" component={BackdropExample} />
				<Route path="/tabs/examples/button" component={ButtonExample} />
				<Route path="/tabs/examples/buttons" component={ButtonsExample} />
				<Route path="/tabs/examples/card" component={CardExample} />
				<Route path="/tabs/examples/checkbox" component={CheckboxExample} />
				<Route path="/tabs/examples/chip" component={ChipExample} />
				<Route path="/tabs/examples/content" component={ContentExample} />
				<Route path="/tabs/examples/fab-button" component={FabButtonExample} />
				<Route path="/tabs/examples/fab-list" component={FabListExample} />
				<Route path="/tabs/examples/fab" component={FabExample} />
				<Route path="/tabs/examples/footer" component={FooterExample} />
				<Route path="/tabs/examples/grid" component={GridExample} />
				<Route path="/tabs/examples/header" component={HeaderExample} />
				<Route path="/tabs/examples/img" component={ImgExample} />
				<Route path="/tabs/examples/infinite-scroll-content" component={InfiniteScrollContentExample} />
				<Route path="/tabs/examples/infinite-scroll" component={InfiniteScrollExample} />
				<Route path="/tabs/examples/input" component={InputExample} />
				<Route path="/tabs/examples/item-divider" component={ItemDividerExample} />
				<Route path="/tabs/examples/item-group" component={ItemGroupExample} />
				<Route path="/tabs/examples/item-sliding" component={ItemSlidingExample} />
				<Route path="/tabs/examples/label" component={LabelExample} />
				<Route path="/tabs/examples/list-header" component={ListHeaderExample} />
				<Route path="/tabs/examples/list" component={ListExample} />
				<Route path="/tabs/examples/loading" component={LoadingExample} />
				<Route path="/tabs/examples/menu-toggle" component={MenuToggleExample} />
				<Route path="/tabs/examples/menu" component={MenuExample} />
				<Route path="/tabs/examples/note" component={NoteExample} />
				<Route path="/tabs/examples/progress-bar" component={ProgressBarExample} />
				<Route path="/tabs/examples/radio-group" component={RadioGroupExample} />
				<Route path="/tabs/examples/radio" component={RadioExample} />
				<Route path="/tabs/examples/refresher" component={RefresherExample} />
				<Route path="/tabs/examples/reorder" component={ReorderExample} />
				<Route path="/tabs/examples/ripple-effect" component={RippleEffectExample} />
				<Route path="/tabs/examples/searchbar" component={SearchbarExample} />
				<Route path="/tabs/examples/segment" component={SegmentExample} />
				<Route path="/tabs/examples/select-option" component={SelectOptionExample} />
				<Route path="/tabs/examples/skeleton-text" component={SkeletonTextExample} />
				<Route path="/tabs/examples/slides" component={SlidesExample} />
				<Route path="/tabs/examples/spinner" component={SpinnerExample} />
				<Route path="/tabs/examples/split-pane" component={SplitPaneExample} />
				<Route path="/tabs/examples/tab-bar" component={TabBarExample} />
				<Route path="/tabs/examples/tab-button" component={TabButtonExample} />
				<Route path="/tabs/examples/tabs" component={TabsExample} />
				<Route path="/tabs/examples/textarea" component={TextareaExample} />
				<Route path="/tabs/examples/thumbnail" component={ThumbnailExample} />
				<Route path="/tabs/examples/title" component={TitleExample} />
				<Route path="/tabs/examples/toast" component={ToastExample} />
				<Route path="/tabs/examples/toggle" component={ToggleExample} />
				<Route path="/tabs/examples/toolbar" component={ToolbarExample} />
			</IonRouterOutlet>

			<IonTabBar slot="bottom" className="border-t dark:border-t-gray-900">
				<IonTabButton tab="home" href="/tabs/home">
					<IonIcon icon={home} />
					<IonLabel>Home</IonLabel>
				</IonTabButton>
				<IonTabButton tab="examples" href="/tabs/examples">
					<IonIcon icon={logoIonic} />
					<IonLabel>Examples</IonLabel>
				</IonTabButton>
				<IonTabButton tab="settings" href="/tabs/settings">
					<IonIcon icon={settings} />
					<IonLabel>Settings</IonLabel>
				</IonTabButton>
			</IonTabBar>
		</IonTabs>
	)
}

export default MainTabs
