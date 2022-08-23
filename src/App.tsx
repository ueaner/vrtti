import React, { useMemo } from "react"
import { Route, Redirect } from "react-router"

import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react"
import { IonReactRouter } from "@ionic/react-router"

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css"

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css"
import "@ionic/react/css/structure.css"
import "@ionic/react/css/typography.css"

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css"
import "@ionic/react/css/float-elements.css"
import "@ionic/react/css/text-alignment.css"
import "@ionic/react/css/text-transformation.css"
import "@ionic/react/css/flex-utils.css"
import "@ionic/react/css/display.css"

/* Theme variables */
import "./theme/variables.css"

/* Tailwind styles */
import "./theme/tailwind.css"

import { AppContextProvider, useAppContext } from "@/data/app/context"
import MainTabs from "@/pages/MainTabs"
import SplashScreen from "@/pages/SplashScreen"

setupIonicReact()

const App: React.FC = () => {
	return (
		<AppContextProvider>
			<MyApp />
		</AppContextProvider>
	)
}

const MyApp: React.FC = () => {
	const { state } = useAppContext()

	return useMemo(() => {
		console.log("MyApp [re-]render")
		return (
			// class: dark-theme 支持 ionic dark mode
			// class: dark 支持 tailwind 配置 darkMode: "class"
			<IonApp className={`${state.isDarkMode ? "dark-theme dark" : ""}`}>
				<IonReactRouter>
					<IonRouterOutlet>
						{/*
					0. 两层路由
					   - App 中定义第一层路由 MainTabs login register logout splash-screen 等顶级路由
					   - MainTabs 中定义第二层路由，为具体某个模块的相关路由
					1. tabs 上每个 tab 的首页组件使用 render
					2. 内部使用 Redirect 的组件使用 render
					3. 内部使用 IonRouterOutlet 的组件使用 render
				*/}
						<Route path="/tabs" render={() => <MainTabs />} />
						<Route path="/splash-screen" component={SplashScreen} />
						{/* TODO 检查 Session 信息确定是否跳转到首页或启动页（登录页等） */}
						<Redirect exact path="/" to="/tabs" />
					</IonRouterOutlet>
				</IonReactRouter>
			</IonApp>
		)
	}, [state.isDarkMode])
}

export default App
