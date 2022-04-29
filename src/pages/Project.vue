<script setup>
import { useStore } from "../store/store";
import { storeToRefs } from "pinia";
import ProjectsDetails from "../components/ProjectsDetails.vue";

const store = useStore();
const { details } = storeToRefs(store);
</script>

<template>
  <div class="pt-10 sm:pt-24">
    <div class="mx-auto flex justify-center">
      <div class="w-[70%] lg:w-[58%]">
        <h1 class="font-bold text-3xl sm:text-4xl">Projects</h1>
        <ProjectsDetails :details="details" />
      </div>
    </div>
  </div>
</template>
