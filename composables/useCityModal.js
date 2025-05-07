import { ref } from 'vue'
import { useLocationStore } from '../store/location'

export function useCityModal() {
  const showModal = ref(false)
  const locationStore = useLocationStore()

  const openModal = () => {
    showModal.value = true
  }

  const closeModal = () => {
    showModal.value = false
  }

  const handleCitySelect = (cityKey) => {
    locationStore.setLocation(cityKey)
    closeModal()
  }

  const checkAndShowModal = () => {
    if (typeof window !== 'undefined') {
      const savedLocation = localStorage.getItem('selectedLocation')
      if (!savedLocation) {
        openModal()
      }
    }
  }

  return {
    showModal,
    openModal,
    closeModal,
    handleCitySelect,
    checkAndShowModal
  }
} 