import { ref } from 'vue'

const currentCity = ref(null)
const showModal = ref(false)

export function useCity() {
  const initCity = () => {
    const savedCity = localStorage.getItem('selectedCity')
    if (savedCity) {
      currentCity.value = JSON.parse(savedCity)
    } else {
      showModal.value = true
    }
  }

  const setCity = (city) => {
    currentCity.value = city
    localStorage.setItem('selectedCity', JSON.stringify(city))
    showModal.value = false
  }

  const openModal = () => {
    showModal.value = true
  }

  const closeModal = () => {
    showModal.value = false
  }

  return {
    currentCity,
    showModal,
    initCity,
    setCity,
    openModal,
    closeModal
  }
}