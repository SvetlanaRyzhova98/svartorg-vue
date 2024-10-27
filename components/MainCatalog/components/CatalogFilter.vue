<template>
  <div class="filter_box">
    <div class="tags_filter">
      <!-- <h3>Фильтр по тегам: {{id}}</h3> -->
      <div class="tags_list">
        <button
          v-for="(tag, index) in tags"
          :key="index"
          @click="selectTag(tag.id)"
          :class="{ active: id == tag.id }"
        >
          {{ tag.attributes.name }}  
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const route = useRoute();
const router = useRouter();

const props = defineProps({
  tags: Array,
  modelValue: Object,
});

let id = route.query.tag;

const selectTag = (tagId) => {
  props;

  const isActive = id == tagId;

  router.push({
    path: route.path,
    query: {
      ...route.query,
      tag: isActive ? undefined : tagId, // Убираем тег, если он уже активен
    },
  });
};

watch(() => route.query.tag, async (tagId) => {
  id = tagId;
});
</script>

<style scoped>
.filter_box {
  margin:10px 0 10px;
}
.tags_filter {
  margin-bottom: 20px;
}
.tags_list {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.tags_list button {
  padding: 5px 10px;
  border: none;
  background-color: #e0e0e0;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
}
.tags_list button.active {
  background-color: #3395c5;
  color: #fff;
}
</style>
