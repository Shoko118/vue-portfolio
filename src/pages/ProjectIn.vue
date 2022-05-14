<script setup>
import { useStore } from "../store/store";

const props = defineProps({
  id: {
    type: String,
  },
});

const store = useStore();

const detailID = parseInt(props.id);

const { heading1, content, hrefs, p, p2 } = store.getDetailByID(detailID);
</script>

<template>
  <div class="pt-10 pb-20 sm:pt-24">
    <div class="mx-auto flex justify-center">
      <div class="w-[70%] lg:w-[58%]">
        <h1 class="font-bold text-3xl sm:text-4xl">Overview</h1>
        <div class="mt-14 space-y-4">
          <h2 class="text-2xl font-semibold">{{ heading1 }}</h2>
          <p class="">{{ content }}</p>
          <div class="flex items-center">
            <h2 class="text-lg font-semibold">Techs:</h2>
            <p class="ml-3 text-lg">{{ p }}</p>
          </div>
          <p class="text-base">{{ p2 }}</p>
          <p>
            Feel free to check the website
            <a class="text-md bg-gray-600 hover:bg-gray-500 rounded-full px-3 py-0.5" :href="hrefs">Here</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
