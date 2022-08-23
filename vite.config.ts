import path from "path"

import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	define: {
		"process.env": { PUBLIC_URL: "http://localhost:5173/" },
	},
	resolve: {
		alias: {
			// monorepo 场景下：
			// @ 表示当前项目下目录，
			// ~ 表示访问当前 monorepo 下其他 package 中的组件
			"@": path.resolve(__dirname, "src"),
		},
	},
})
