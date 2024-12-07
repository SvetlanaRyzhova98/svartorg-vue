<template>
  <div class="category_all_container">
    <div class="category_container">
      <div
        v-for="category in filteredCategories"
        :key="category.id"
        class="category_container_item"
      >
        <NuxtLink
          :to="`/catalog/${category.id}`"
          class="category_item"
          @click="handleCategoryClick"
        >
          <div class="title">{{ category.name }}</div>

          <!-- Теги -->
          <div v-if="category.id === 1">
            <div class="tags">
              <button
                v-for="(tag, index) in category.tags"
                :key="index"
                class="tag-link"
                @click="navigateToTag($event, category.id, index + 1)"
              >
                {{ tag.name }}
              </button>
            </div>
          </div>
          <div v-if="category.img" class="items-end justify-end">
            <img :src="getFullImageUrl(category.img)" alt="category.name" />
          </div>
        </NuxtLink>
      </div>
    </div>
    <div class="special_category_container">
      <div v-for="category in specialCategories" :key="category.id" class="w-full h-full">
        <NuxtLink :to="`/catalog/${category.id}`" class="category_item">
          <div class="title">{{ category.name }}</div>
          <div v-if="category.img" class="items-end justify-end">
            <img :src="getFullImageUrl(category.img)" alt="category.name" />
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useFetch } from "#app";

const router = useRouter();

// Функция для добавления базового URL к изображениям
const getFullImageUrl = (imgPath) => {
  const baseUrl = "https://galaktika-svarki.ru"; // Замените на ваш базовый URL, если он другой
  return `${baseUrl}${imgPath}`;
};

const categories = ref([]);

// Получение категорий с сервера
const { data: categoriesData, error } = await useFetch(
  "https://galaktika-svarki.ru/api/categories?populate=*"
);

if (error.value) {
  console.error("Ошибка при получении категорий:", error.value);
} else {
  categories.value = categoriesData.value.data.map((category) => ({
    id: category.id,
    name: category.attributes.name,
    img: category.attributes.img?.data?.attributes?.url || "",
    tags: category.attributes.tegs.data.map((tag) => tag.attributes),
  }));
}

// Категории, которые не имеют id 4 и 6
const filteredCategories = computed(() =>
  categories.value.filter((category) => category.id !== 4 && category.id !== 6)
);

// Категории с id 4 и 6
const specialCategories = computed(() =>
  categories.value.filter((category) => category.id === 4 || category.id === 6)
);

// Обработчик клика по категории
const handleCategoryClick = (event) => {
  console.log("Category link clicked");
  // Позволяет работать стандартной навигации NuxtLink
};

// Обработчик клика по тегу
const navigateToTag = (event, categoryId, tagIndex) => {
  event.preventDefault(); // Предотвращает действие по умолчанию для ссылки
  router.push({
    path: `/catalog/${categoryId}`,
    query: {
      tag: tagIndex,
      page: 1,
    },
  });
};
</script>

<style>
.category_container {
  display: grid;
  align-items: center;
  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  border-radius: 5px;
}
.category_all_container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 50px;
}
.special_category_container {
  display: grid;
  align-items: center;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  border-radius: 5px;
}
.category_container_item:first-child .category_item {
  position: relative;
  height: 100%;
  background: #efeded69;
  justify-content: flex-end;
  gap: 0;
}
.category_container_item:first-child .category_item .title {
  font-weight: 500;
  font-size: 24px;
  color: #333;
  text-align: end;
  position: absolute;
  padding: 0;
  right: 40px;
  top: 18px;
}
.category_container_item {
  height: 100%;
}
.category_container_item:first-child .category_item .items-end {
  justify-content: flex-start;
}
.category_container_item:first-child img {
  height: 425px;
  object-fit: contain;
}
.category_container_item:first-child {
  grid-row: span 2;
  grid-column: span 2;
  height: 100%;
}

.category_item .title {
  font-size: 20px;
  font-weight: 500;
  color: #333;
  margin-left: 10px;
  margin-top: 10px;
}
.category_item {
  background-color: #e8e5e59c;
  padding: 20px;
  border-radius: 5px;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #333;
  gap: 20px;
  justify-content: space-between;
}
.category_item img {
  height: 160px;
  object-fit: contain;
}
.items-end {
  display: flex;
  align-items: flex-end;
}

.justify-end {
  justify-content: flex-end;
}
.tags {
  display: flex;
  flex-direction: row;
  gap: 10px;
  position: absolute;
  top: 80px;
  right: 40px;
}
.tag-link {
  background-color: #ffffff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  font-weight: 500;
  text-decoration: none;
  color: #333;
  text-transform: uppercase;
  box-shadow: 0px 1px 5px 0px #0000000c;
  cursor: pointer;
}
@media (max-width: 1200px) {
  .category_container_item:first-child img {
    height: 350px;
  }
  .category_item .title {
    font-size: 17px;
    margin: 0px;
    word-break: break-word;
    hyphens: auto;
  }
  .category_container_item:first-child .category_item .title {
    font-size: 21px;
    right: 27px;
    top: 20px;
  }
  .tags {
    top: 70px;
    right: 28px;
  }
  .footer .wrapper_footer {
    gap: 35px;
  }

  .carousel__viewport .carousel__slide img {
    max-height: 300px;
    min-height: 300px;
  }
}

@media (max-width: 800px) {
  .category_container_item:first-child .category_item .title {
    position: relative;
    top: 0;
    right: 0;
  }
  .tags {
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: sticky;
    padding: 20px 0;
  }
  .tag-link {
    display: block;
  }
}

@media (max-width: 760px) {
  .category_container {
    gap: 15px;
    grid-template-columns: 1fr 1fr;
  }
  .category_container_item:first-child .category_item .title {
    text-align: start;
  }
  .hiro.wrapper {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  .category_container_item:first-child img {
    height: 270px;
  }

  @media (max-width: 560px) {
    .category_container_item:first-child img {
      height: 225px;
    }
  }
}
</style>
