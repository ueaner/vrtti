import { AppAction, AppActionKind } from "./actions"
import { AppState } from "./state"

// https://devtrium.com/posts/how-to-use-react-usereducer-hook#redux-an-overpowered-usereducer
// const reducer = ({ count }, { type, payload }) => {
export const appReducer = (state: AppState, { type, payload }: AppAction) => {
	// function appReducer(state: AppState, action: AppAction) {
	// const { type, payload } = action
	switch (type) {
		case AppActionKind.SetDarkMode:
			return {
				...state,
				isDarkMode: payload,
			}
		case AppActionKind.SetLoggedin:
			return {
				...state,
				isLoggedin: payload,
			}
		default:
			// return state
			throw new Error(`[appReducer] Unknown action type: ${type}`)
	}
}
