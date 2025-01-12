<template>
  <div 
    ref="logoRef"
    class="p-4 flex items-center justify-center opacity-0"
  >
    <img 
      :src="imageUrl" 
      :alt="name"
      class="max-h-12 grayscale hover:grayscale-0 transition-all duration-300"
    >
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'

const props = defineProps({
  imageUrl: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

const logoRef = ref(null)

onMounted(() => {
  gsap.to(logoRef.value, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: 'power2.out'
  })
})
</script>