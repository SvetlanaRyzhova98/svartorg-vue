import { defineStore } from 'pinia';

export const useLocationStore = defineStore({
  id: 'location-store',
  state: () => {
    return {
      location: "KRD",
    }
  },
  actions: {
    setLocation(location) {
        this.location = location;
      },
  },
  getters: {
    getLocation: state => state.location,
  },
})