<template>
  <section class="py-24 bg-background-primary">
    <UContainer>
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
          <h2 
            ref="titleRef"
            class="text-4xl font-bold text-primary mb-4"
          >
            Contattaci
          </h2>
          <p 
            ref="subtitleRef"
            class="text-xl text-gray-600"
          >
            Siamo qui per aiutarti. Non esitare a contattarci.
          </p>
        </div>

        <!-- Contact Cards -->
        <div 
          ref="cardsRef"
          class="grid md:grid-cols-2 gap-8"
        >
          <!-- Phone Card -->
          <div class="bg-white p-8 rounded-lg shadow-lg text-center">
            <div class="w-16 h-16 bg-primary-lightest text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <UIcon
                name="i-heroicons-phone"
                class="w-8 h-8"
              />
            </div>
            <h3 class="text-2xl font-semibold mb-4">Telefono</h3>
            <a 
              href="tel:+390123456789" 
              class="text-xl text-primary hover:text-primary-dark transition-colors"
            >
              +39 012 345 6789
            </a>
          </div>

          <!-- Email Card -->
          <div class="bg-white p-8 rounded-lg shadow-lg text-center">
            <div class="w-16 h-16 bg-primary-lightest text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <UIcon
                name="i-heroicons-envelope"
                class="w-8 h-8"
              />
            </div>
            <h3 class="text-2xl font-semibold mb-4">Email</h3>
            <a 
              href="mailto:info@example.com" 
              class="text-xl text-primary hover:text-primary-dark transition-colors"
            >
              info@example.com
            </a>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const titleRef = ref(null)
const subtitleRef = ref(null)
const cardsRef = ref(null)

onMounted(() => {
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
    duration: 1,
    ease: 'power3.out'
  })
  .from(subtitleRef.value, {
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.6')
  .from(cardsRef.value.children, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
  }, '-=0.4')
})
</script>
