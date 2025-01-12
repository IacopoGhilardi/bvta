<template>
    <div class="min-h-screen flex flex-col">
      <Header :isHeaderHidden="isHeaderHidden" />
      <div class="pt-16 flex-grow">
        <slot />
      </div>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Header from "@/components/layout/Header.vue";
  import Footer from "@/components/layout/Footer.vue";
  </script>