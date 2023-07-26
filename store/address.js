import { defineStore } from 'pinia';
import QQMapWX from "../utils/qqmap-jssdk.min.js"

export const useAddressStore = defineStore('address', {
	state: () => {
		return { 
			address: []
		};
	},
	getters:{
		
	},
	actions: {
    
	},
});