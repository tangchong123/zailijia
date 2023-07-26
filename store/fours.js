import { defineStore } from 'pinia';

export const useFoursStore = defineStore('fours', {
	state: () => {
		return { theme: "dark" };
	},
	getters:{
		
	},
	// 也可以这样定义
	actions: {
		changeTheme(theme) {
			this.theme = theme;
		}
	},
});