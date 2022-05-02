<script setup>
// Projects
import { TerminalIcon } from "@heroicons/vue/solid";
// About me
import { MenuAlt2Icon } from "@heroicons/vue/solid";
// Contact
import { ChatAlt2Icon } from "@heroicons/vue/solid";
</script>

<template>
  <div>
    <div class="mx-auto w-full pt-5">
      <div class="mx-auto flex items-center justify-between">
        <router-link to="/" class="ml-0 sm:ml-20 hover:animate-pulse">
          <img src="../assets/bry.png" alt="bry" class="w-16 sm:w-20" />
        </router-link>
        <div class="flex items-center space-x-4 mr-5 sm:mr-20 lg:mr-28">
          <router-link to="/project" class="hidden md:flex hover:underline hover:underline-offset-4"
            >Projects</router-link
          >
          <router-link to="/about-me" class="hidden md:flex hover:underline hover:underline-offset-4"
            >About Me</router-link
          >
          <router-link to="/contact" class="hidden md:flex hover:underline hover:underline-offset-4"
            >Contact</router-link
          >
          <router-link to="/project" class="flex md:hidden"><TerminalIcon class="w-7 sm:w-6" /></router-link>
          <router-link to="/about-me" class="flex md:hidden"><MenuAlt2Icon class="w-7 sm:w-6" /></router-link>
          <router-link to="/contact" class="flex md:hidden"><ChatAlt2Icon class="w-7 sm:w-6" /></router-link>
          <!-- <div>
            <a href="GGshoku#3654"> <img src="../assets/discord.png" alt="" class="w-7 md:w-8 lg:w-10" /></a>
          </div> -->
          <div>
            <a href="https://github.com/Shoko118"
              ><img src="../assets/github.png" alt="" class="w-7 md:w-8 lg:w-10 motion-safe:animate-bounce"
            /></a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/bryan-liaw-a92012227/">
              <img src="../assets/linkedin.png" alt="" class="w-7 md:w-8 lg:w-10 motion-safe:animate-bounce"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
