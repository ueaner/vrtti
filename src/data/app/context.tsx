import React, { useReducer, createContext, useContext } from "react"

import { appReducer } from "./reducer"
import { AppState, initialAppState } from "./state"

interface AppContextState {
	state: AppState
	dispatch: React.Dispatch<any>
}

const AppContext = createContext<AppContextState>({
	state: initialAppState,
	dispatch: () => undefined,
})

type AppContextProviderProps = {
	children: React.ReactNode
}

export const AppContextProvider: React.FC<AppContextProviderProps> = (props: AppContextProviderProps) => {
	const [state, dispatch] = useReducer(appReducer, initialAppState)

	return (
		<AppContext.Provider
			value={{
				state: state,
				dispatch,
			}}
		>
			{props.children}
		</AppContext.Provider>
	)
}

// in component:
// const { state, dispatch } = useAppContext()
// function ToggleDarkMode() {
// 	dispatch({ type: AppActionKind.SetDarkMode, payload: !state.isDarkMode })
// }
export function useAppContext() {
	return useContext(AppContext)
}
