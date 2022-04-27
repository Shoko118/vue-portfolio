<script setup>
import ProjectsDetails from "../components/ProjectsDetails.vue";
import { MenuAlt1Icon } from "@heroicons/vue/solid";

const details = [
  {
    icon: MenuAlt1Icon,
    title: "asdsad",
    desc: "Lorem ipsum dolor sit amet.",
  },
  {
    icon: MenuAlt1Icon,
    title: "asdsad",
    desc: "Lorem ipsum dolor sit amet.",
  },
  {
    icon: MenuAlt1Icon,
    title: "asdsad",
    desc: "Lorem ipsum dolor sit amet.",
  },
];
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
