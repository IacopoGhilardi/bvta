<template>
  <Hero
    imageUrl="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=2070"
    imageAlt="Beach Volley Action"
  >
    <div class="max-w-2xl text-white">
      <h1 
        ref="titleRef"
        class="text-5xl md:text-6xl font-bold mb-6 leading-tight"
      >
        BVTA
      </h1>
      <p 
        ref="subtitleRef"
        class="text-xl md:text-2xl mb-8 text-gray-200"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim corporis natus expedita fugiat doloribus repellat, officia doloremque consequatur optio sequi reiciendis. Nobis soluta maxime cum maiores! Ex, doloremque error?
      </p>
      <div ref="buttonsRef" class="flex gap-4">
        <UButton
          size="xl"
          color="white"
          class="font-semibold"
        >
          Inizia Ora
        </UButton>
        <UButton
          size="xl"
          variant="ghost"
          color="white"
          class="font-semibold"
        >
          Scopri i Corsi
        </UButton>
      </div>
    </div>
  </Hero>
</template>

<script setup>
import Hero from '../atoms/Hero.vue'
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const titleRef = ref(null)
const subtitleRef = ref(null)
const buttonsRef = ref(null)

onMounted(() => {
  const tl = gsap.timeline({
    defaults: {
      ease: 'power3.out',
      duration: 1
    }
  })

  tl.from(titleRef.value, {
    opacity: 0,
    y: 50,
  })
  .from(subtitleRef.value, {
    opacity: 0,
    y: 30,
  }, '-=0.6')
  .from(buttonsRef.value, {
    opacity: 0,
    y: 20,
  }, '-=0.6')
})
</script>