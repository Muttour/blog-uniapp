import {
	createSSRApp
} from 'vue'
import App from './App'
import api from './service/api/index.js'

export function createApp() {
	const app = createSSRApp(App)
	app.config.globalProperties.$api = api
	return {
		app
	}
}