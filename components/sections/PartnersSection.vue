<template>
  <section class="py-16 bg-gray-50 overflow-hidden">
    <UContainer>
      <h2 
        ref="titleRef" 
        class="text-3xl font-bold text-center text-primary mb-12"
      >
        I Nostri Partner
      </h2>
      
      <div ref="sliderRef" class="relative">
        <div 
          ref="trackRef"
          class="flex gap-8 items-center"
        >
          <PartnerLogo
            v-for="partner in duplicatedPartners"
            :key="partner.id"
            :image-url="partner.imageUrl"
            :name="partner.name"
          />
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import PartnerLogo from '../atoms/PartnerLogo.vue'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const titleRef = ref(null)
const sliderRef = ref(null)
const trackRef = ref(null)

const partners = [
  {
    id: 1,
    name: 'Partner 1',
    imageUrl: 'https://placehold.co/200x80?text=Partner+1'
  },
  {
    id: 2,
    name: 'Partner 2',
    imageUrl: 'https://placehold.co/200x80?text=Partner+2'
  },
  {
    id: 3,
    name: 'Partner 3',
    imageUrl: 'https://placehold.co/200x80?text=Partner+3'
  },
  {
    id: 4,
    name: 'Partner 4',
    imageUrl: 'https://placehold.co/200x80?text=Partner+4'
  }
]

// Duplica i partner per il carosello infinito
const duplicatedPartners = computed(() => {
  return [...partners, ...partners.map(p => ({...p, id: p.id + '_clone'}))]
})

onMounted(() => {
  // Title animation
  gsap.from(titleRef.value, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: titleRef.value,
      start: 'top bottom-=100',
      toggleActions: 'play none none reverse'
    }
  })

  const tl = gsap.timeline({
    repeat: -1,
    defaults: { ease: 'none' }
  })

  const singleSetWidth = trackRef.value.offsetWidth / 2

  tl.to(trackRef.value, {
    x: -singleSetWidth,
    duration: 20,
    ease: 'none'
  })

  tl.set(trackRef.value, { x: 0 })
})
</script>

<style scoped>
.partner-track {
  will-change: transform;
}
</style>