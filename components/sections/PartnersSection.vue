<template>
  <section class="py-16 overflow-hidden">
    <UContainer>
      <h2 
        ref="titleRef" 
        class="text-3xl font-bold text-center text-primary mb-12"
      >
        {{ content.title }}
      </h2>
      
      <div ref="sliderRef" class="relative overflow-hidden">
        <div 
          ref="trackRef"
          class="flex gap-8 items-center"
          :style="{ width: `${trackWidth}px` }"
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
import partnersContent from '~/content/partners.json'
import logoVince from '~/assets/images/partners/logo_vince.jpg'
import logoGorgoroni from '~/assets/images/partners/logo_gorgoroni.png'
import logoBalestri from '~/assets/images/partners/logo_fede_balestri.png'
import logoCalortech from '~/assets/images/partners/logo_calortech.png'
import logoOrangeBeach from '~/assets/images/partners/logo_orange_beach.png'
import logoPardi from '~/assets/images/partners/logo_pardi.png'

const content = ref({
  title: partnersContent.title,
  partners: [
    {
      id: 1,
      name: "Vince",
      imageUrl: logoVince
    },
    {
      id: 2,
      name: "Gorgoroni", 
      imageUrl: logoGorgoroni
    },
    {
      id: 3,
      name: "Federico Balestri",
      imageUrl: logoBalestri
    },
    {
      id: 4,
      name: "Calortech",
      imageUrl: logoCalortech
    },
    {
      id: 5,
      name: "OrangeBeach",
      imageUrl: logoOrangeBeach
    },
    {
      id: 6,
      name: "Pardi",
      imageUrl: logoPardi
    }
  ]
})

const duplicatedPartners = computed(() => {
  return [...content.value.partners, ...content.value.partners.map(p => ({...p, id: p.id + '_clone'}))]
})

const titleRef = ref(null)
const sliderRef = ref(null)
const trackRef = ref(null)
const trackWidth = ref(0)

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

  // Calculate total width after images are loaded
  const calculateWidth = () => {
    const logos = trackRef.value.children
    let totalWidth = 0
    for (let logo of logos) {
      totalWidth += logo.offsetWidth + 32 // 32px is the gap (gap-8)
    }
    trackWidth.value = totalWidth - 32 // Subtract last gap
  }

  // Wait for images to load
  const images = trackRef.value.getElementsByTagName('img')
  let loadedImages = 0
  for (let img of images) {
    if (img.complete) {
      loadedImages++
    } else {
      img.addEventListener('load', () => {
        loadedImages++
        if (loadedImages === images.length) {
          calculateWidth()
          initAnimation()
        }
      })
    }
  }

  if (loadedImages === images.length) {
    calculateWidth()
    initAnimation()
  }

  function initAnimation() {
    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: 'none' }
    })

    const singleSetWidth = trackWidth.value / 2

    tl.to(trackRef.value, {
      x: -singleSetWidth,
      duration: 20,
      ease: 'none',
      modifiers: {
        x: gsap.utils.unitize(x => {
          // When we reach the end, jump back to start
          return ((parseFloat(x) % singleSetWidth) + singleSetWidth) % singleSetWidth - singleSetWidth
        })
      }
    })
  }
})
</script>

<style scoped>
.partner-track {
  will-change: transform;
}
</style>