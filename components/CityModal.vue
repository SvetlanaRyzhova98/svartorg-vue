<template>
  <div v-if="isOpen" class="modal-overlay" @click="close">
    <div class="modal-content" @click.stop>
      <h2>Выберите город</h2>
      <div class="cities-list">
        <div 
          v-for="(city, key) in Locations" 
          :key="key"
          class="city-item"
          @click="selectCity(key)"
        >
          {{ city.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Locations } from "../consts/location";

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['close', 'select-city']);

const close = () => {
  emit('close');
};

const selectCity = (cityKey) => {
  emit('select-city', cityKey);
  close();
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  min-width: 300px;
}

[data-theme="dark"] .modal-content {
  background: #2e2e2e;
  color: #e8e5e5;
}

h2 {
  margin-bottom: 20px;
  text-align: center;
  font-size: 20px;
}

.cities-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.city-item {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

[data-theme="dark"] .city-item {
  border-color: #444;
}

.city-item:hover {
  background-color: #f5f5f5;
}

[data-theme="dark"] .city-item:hover {
  background-color: #3d3c3c;
}
</style> 