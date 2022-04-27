<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="bg-dark min-h-screen text-white overflow-hidden overflow-x-hidden">
    <Navbar />
    <router-view />
  </div>
</template>
