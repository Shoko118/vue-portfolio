<script setup>
import { MenuAlt1Icon } from "@heroicons/vue/solid";
const props = defineProps({
  details: {
    type: Array,
  },
});
</script>

<template>
  <div class="mt-10 md:max-w-xl lg:max-w-2xl">
    <div class="grid grid-cols-2 gap-2 w-full">
      <!-- grid 1 -->
      <div v-for="item in details" :key="item">
        <div class="flex items-center">
          <div>
            <component :is="item.icon" class="w-5 h-5" />
          </div>
          <div class="ml-4">
            <div>{{ item.title }}</div>
            <div>{{ item.desc }}</div>
          </div>
        </div>
      </div>
      <!-- grid 2 -->
    </div>
  </div>
</template>
