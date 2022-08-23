// export default {
// 	plugins: {
// 		tailwindcss: {},
// 		autoprefixer: {},
// 	},
// }

// ESM for postcss.config.js
// import tailwind from "tailwindcss"
// import autoprefixer from "autoprefixer"
// // 处理 tailwind 配置文件使用 ESM 问题
// import tailwindConfig from "./tailwind.config.js"
//
// export default {
// 	plugins: [tailwind(tailwindConfig), autoprefixer],
// }

// CommonJS for postcss.config.cjs
module.exports = {
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
	},
}
