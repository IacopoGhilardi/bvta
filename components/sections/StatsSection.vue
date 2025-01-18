<template>
  <section class="py-24 bg-background-primary text-white">
    <UContainer>
      <div class="text-center mb-12">
        <h2 
          ref="titleRef"
          class="text-3xl md:text-4xl font-bold mb-4"
        >
          I Nostri Numeri
        </h2>
        <p 
          ref="subtitleRef"
          class="text-lg"
        >
          L'impatto del nostro lavoro in numeri
        </p>
      </div>

      <div 
        ref="statsRef"
        class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
      >
        <div 
          v-for="stat in stats" 
          :key="stat.id"
          class="text-center space-y-2"
        >
          <div class="text-4xl md:text-5xl font-bold">
            {{ stat.value }}{{ stat.suffix }}
          </div>
          <div class="text-sm md:text-base">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'

const titleRef = ref(null)
const subtitleRef = ref(null)
const statsRef = ref(null)

const stats = [
  { 
    id: 1, 
    value: '150',
    suffix: '+',
    label: 'Affiliazioni nel 2023' 
  },
  { 
    id: 2, 
    value: '25',
    suffix: '',
    label: 'Tornei Organizzati' 
  },
  { 
    id: 3, 
    value: '1.2',
    suffix: 'K',
    label: 'Partecipanti Totali' 
  },
  { 
    id: 4, 
    value: '8',
    suffix: '',
    label: 'Anni di Esperienza' 
  }
]

onMounted(() => {
  if (process.client) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.value,
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
      }
    })

    tl.from(titleRef.value, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out'
    })
    .from(subtitleRef.value, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.6')
    .from(statsRef.value.children, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out'
    }, '-=0.6')
  }
})
</script> 