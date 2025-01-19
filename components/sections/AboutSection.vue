<template>
  <section class="pt-24 overflow-hidden bg-background-primary">
    <UContainer>
      <div class="grid md:grid-cols-2 gap-12 items-center px-4 md:px-0">
        <div class="relative order-2 md:order-1">
          <div ref="imageWrapperRef" class="relative z-10">
            <img
              src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=2070"
              alt="Beach Volley"
              class="rounded-lg shadow-xl w-full"
            />
          </div>
          <div
            ref="shapeRef"
            class="absolute -left-4 md:-left-8 -bottom-4 md:-bottom-8 w-full h-full border-8 border-primary rounded-lg -z-10"
          ></div>
        </div>

        <div class="space-y-6 order-1 md:order-2 text-white">
          <h2 
            ref="titleRef"
            class="text-3xl md:text-4xl font-bold text-gray-150"
          >
            {{ content.title }}
          </h2>
          <div 
            ref="contentRef"
            class="space-y-4 text-gray-150"
          >
            <p v-for="paragraph in content.description" :key="paragraph">
              {{ paragraph }}
            </p>
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
import aboutContent from '~/content/about.json'

gsap.registerPlugin(ScrollTrigger)

const imageWrapperRef = ref(null)
const shapeRef = ref(null)
const titleRef = ref(null)
const contentRef = ref(null)
const buttonRef = ref(null)
const content = ref(aboutContent)

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: imageWrapperRef.value,
      start: 'top bottom-=100',
      toggleActions: 'play none none reverse'
    }
  })

  tl.from(imageWrapperRef.value, {
    opacity: 0,
    x: -50,
    duration: 1,
    ease: 'power3.out'
  })
  .from(shapeRef.value, {
    opacity: 0,
    x: -30,
    duration: 1,
    ease: 'power3.out'
  }, '-=0.8')
  .from(titleRef.value, {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: 'power3.out'
  }, '-=0.8')
  .from(contentRef.value.children, {
    opacity: 0,
    y: 20,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
  }, '-=0.8')
  .from(buttonRef.value, {
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.6')
})
</script>
