import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
	state: () => {
		return { 
			nickName: "",
			avatar: "",
			phoneNumber: "",
			createUser: "",
		};
	},
	getters:{
		
	},
	actions: {
    
	},
});