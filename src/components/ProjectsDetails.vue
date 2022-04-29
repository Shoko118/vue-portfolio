<script setup>
const props = defineProps({
  details: {
    type: Array,
  },
});

console.log(props.details);
</script>

<template>
  <div class="mt-10 md:max-w-xl lg:max-w-2xl">
    <div class="flex-col space-y-2 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-3 w-full">
      <!-- grid 1 -->
      <div v-for="item in details" :key="item">
        <router-link
          :to="{
            name: `ProjectIn`,
            params: {
              id: item.id,
            },
          }"
        >
          <div
            class="flex items-center hover:bg-slate-700 transform transtion duration-150 ease-in-out sm:rounded-md sm:py-2 sm:px-3"
          >
            <div>
              <component :is="item.icon" class="w-5 h-5" />
            </div>
            <div class="ml-4">
              <div>{{ item.title }}</div>
              <div>{{ item.desc }}</div>
            </div>
          </div>
        </router-link>
      </div>
      <!-- grid 2 -->
    </div>
  </div>
</template>
