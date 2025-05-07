import { defineStore } from 'pinia';

export const useLocationStore = defineStore({
  id: 'location-store',
  state: () => {
    // Пытаемся получить значение из localStorage при инициализации store
    let initialLocation = "KRD";
    if (typeof window !== 'undefined') {
      const savedLocation = localStorage.getItem('selectedLocation');
      if (savedLocation) {
        initialLocation = savedLocation;
      }
    }
    return {
      location: initialLocation,
    }
  },
  actions: {
    setLocation(location) {
      this.location = location;
      // Сохраняем в localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('selectedLocation', location);
      }
    },
  },
  getters: {
    getLocation: state => state.location,
  },
})