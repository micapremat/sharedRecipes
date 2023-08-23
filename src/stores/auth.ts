import { defineStore } from 'pinia'

export const authStore = defineStore('auth', {
    state: () => ({
        loggedUser: false

    }),
  actions: {
    setLoggedUser() {
        this.loggedUser = localStorage.getItem("loggedUser") ? true : false
        console.log(this.loggedUser)
      },
  },
  getters: {
    isLoggedUser(): boolean {
        return this.loggedUser;
    }
  }
});
