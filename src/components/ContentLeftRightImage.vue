<script setup>
import { ArrowNarrowRightIcon } from "@heroicons/vue/solid";
</script>

<template>
  <div class="pt-10 sm:pt-28">
    <div class="mx-auto flex justify-center relative">
      <div class="w-[80%] sm:w-[75%] flex-row sm:flex items-center sm:justify-between">
        <div class="text-left">
          <h1 class="font-bold text-xl lg:text-2xl xl:text-4xl">
            Hey I’m Bryan,
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
              >Frontend Developer</span
            >
          </h1>
          <div class="max-w-sm lg:max-w-2xl mt-10">
            <p class="font-medium text-md lg:text-lg text-left">
              Outside of programming, I enjoy playing guitar and listening to music. If you are
              <span class="underline underline-offset-4 decoration-indigo-500">building projects</span> or playing music
              maybe we can hang out together or
              <span class="underline underline-offset-4 decoration-green-500">code together</span>, Would love to know
              more about <span class="underline underline-offset-4 decoration-amber-500">you.</span>
            </p>
          </div>
          <div class="flex flex-col sm:flex-row sm:items-center mt-10 sm:mt-20 sm:space-x-7">
            <router-link class="flex" to="/project">
              <div class="text-base xl:text-md font-semibold hover:underline hover:underline-offset-4">Projects</div>
              <ArrowNarrowRightIcon class="w-7 ml-2" />
            </router-link>
            <router-link class="flex" to="/about-me">
              <div class="text-base xl:text-md font-semibold hover:underline hover:underline-offset-4">About me</div>
              <ArrowNarrowRightIcon class="w-7 ml-2" />
            </router-link>
            <router-link class="flex" to="/contact">
              <div class="text-base xl:text-md font-semibold hover:underline hover:underline-offset-4">Contact</div>
              <ArrowNarrowRightIcon class="w-7 ml-2" />
            </router-link>
          </div>
        </div>
        <div
          class="xl:absolute xl:filter xl:opacity-70 xl:blur-xl xl:mix-blend-overlay xl:w-64 xl:h-64 xl:bg-fuchsia-100 xl:rounded-full xl:right-52 xl:-top-24"
        ></div>
        <div
          class="xl:absolute xl:filter xl:opacity-70 xl:blur-xl xl:mix-blend-overlay xl:w-80 xl:h-80 xl:bg-pink-100 xl:rounded-full xl:right-44"
        ></div>
        <div
          class="xl:absolute xl:filter xl:opacity-70 xl:blur-xl xl:mix-blend-overlay xl:w-64 xl:h-64 xl:bg-violet-100 xl:rounded-full xl:right-52 xl:top-28"
        ></div>
        <div class="hidden sm:flex xl:opacity-90 sm:absolute -right-24 xl:right-36">
          <div class="">
            <img src="../assets/group.png" alt="memoji" class="rounded-3xl w-[60%] lg:w-[70%] xl:w-[90%]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
