// An enum with all the types of actions to use in our reducer
export enum AppActionKind {
	SetDarkMode = "AppSetDarkMode",
	SetLoggedin = "AppSetLoggedin",
}

// An interface for our actions
export interface AppAction {
	type: AppActionKind
	payload: boolean
}
