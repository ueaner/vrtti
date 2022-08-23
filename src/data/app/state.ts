// An interface for our state
export interface AppState {
	// 配合业务策略的话，可能需要知道看过的时间，如10小时内不重复弹出广告；是否安装后首次打开，首次打开展示引导说明等
	hasSeenSplashScreen: boolean // 开屏广告，特性/引导说明等
	isDarkMode: boolean
	isLoggedin: boolean
	loading: boolean
}

export const initialAppState: AppState = {
	hasSeenSplashScreen: false,
	isDarkMode: false,
	isLoggedin: false,
	loading: false,
}
