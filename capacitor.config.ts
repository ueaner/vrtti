import { CapacitorConfig } from "@capacitor/cli"

const config: CapacitorConfig = {
	appId: "com.example.ionic",
	appName: "ionic-examples",
	webDir: "dist",
	bundledWebRuntime: false,
	server: {
		url: "http://192.168.31.183:5173/",
		cleartext: true,
	},
}

export default config
