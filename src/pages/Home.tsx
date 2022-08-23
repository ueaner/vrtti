import { useState } from "react"
import { Link } from "react-router-dom"

import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonButton,
	IonCard,
	IonItem,
	IonIcon,
	IonLabel,
} from "@ionic/react"

// https://icon-sets.iconify.design/vscode-icons/file-type-ionic/
import ionicLogo from "../assets/ionic.svg"
import reactLogo from "../assets/react.svg"
import tailwindLogo from "../assets/tailwind.svg"
import tsLogo from "../assets/typescript.svg"
import viteLogo from "../assets/vite.svg"

const Home: React.FC = () => {
	const [count, setCount] = useState(0)
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>vrtti</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonCard>
					<IonItem href="https://vitejs.dev/">
						<IonIcon src={viteLogo} slot="start" />
						<IonLabel>Vite</IonLabel>
					</IonItem>
					<IonItem href="https://reactjs.org/">
						<IonIcon src={reactLogo} slot="start" />
						<IonLabel>React</IonLabel>
					</IonItem>
					<IonItem href="https://www.typescriptlang.org/">
						<IonIcon src={tsLogo} slot="start" />
						<IonLabel>TypeScript</IonLabel>
					</IonItem>
					<IonItem href="https://tailwindcss.com/">
						<IonIcon src={tailwindLogo} slot="start" />
						<IonLabel>Tailwind CSS</IonLabel>
					</IonItem>
					<IonItem href="https://ionicframework.com/react">
						<IonIcon src={ionicLogo} slot="start" />
						<IonLabel>Ionic React</IonLabel>
					</IonItem>
				</IonCard>

				<div className="m-0 m-auto text-center">
					<div className="flex flex-row justify-center">
						<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
							<img src="/vite.svg" className="h-24 p-4" alt="Vite logo" />
						</a>
						<a href="https://reactjs.org" target="_blank" rel="noreferrer">
							<img src={reactLogo} className="h-24 p-4" alt="React logo" />
						</a>
					</div>
					<h1>Vite + React</h1>
					<div className="p-8">
						<IonButton onClick={() => setCount((count) => count + 1)} shape="round" fill="outline">
							count is {count}
						</IonButton>
						<p>
							Edit <code>src/App.tsx</code> and save to test HMR
						</p>
					</div>
					<p className="text-slate-400">Click on the Vite and React logos to learn more</p>

					<Link to="/tabs/home/1">link to some detail: params.id 1</Link>
					<br />
					<Link to="/splash-screen">link to splash-screen</Link>
				</div>
			</IonContent>
		</IonPage>
	)
}

export default Home
