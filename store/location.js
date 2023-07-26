import { defineStore } from 'pinia';
import QQMapWX from "../utils/qqmap-jssdk.min.js"

export const useLocationStore = defineStore('location', {
	state: () => {
		return { locationInfo: "" };
	},
	getters:{
		
	},
	actions: {
    
	},
});