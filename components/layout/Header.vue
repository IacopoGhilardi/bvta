<template>
  <header 
    ref="header" 
    class="border-b border-primary fixed w-full z-50 bg-background-primary shadow-lg"
    :class="{ 'header-hidden': isHeaderHidden }"
  >
    <UContainer>
      <div class="flex justify-between items-center h-16 px-4 text-white">
        <div class="flex items-center">
          <NuxtLink to="/" class="text-xl font-bold">
            <img src="~/assets/images/logo.png" alt="Logo" class="max-h-42">
          </NuxtLink>
        </div>

        <nav class="hidden md:flex space-x-4"> 
          <UButton
            v-for="(item, index) in menuItems"
            :key="index"
            :to="item.path"
            variant="ghost"
            color="gray"
            @click="(e) => handleNavClick(item.path, e)"
          >
            {{ item.label }}
          </UButton>
        </nav>

        <!-- Mobile Menu Button -->
        <UButton
          class="md:hidden"
          color="gray"
          variant="ghost"
          icon="i-heroicons-bars-3"
          @click="isMenuOpen = !isMenuOpen"
        />
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform -translate-y-2 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-2 opacity-0"
      >
        <div 
          v-if="isMenuOpen" 
          class="md:hidden py-6 px-4 space-y-4 border-t text-white"
        >
          <UButton
            v-for="(item, index) in menuItems"
            :key="index"
            :to="item.path"
            variant="ghost"
            color="gray"
            class="w-full justify-start text-lg py-3"
            @click="(e) => handleNavClick(item.path, e)"
          >
            {{ item.label }}
          </UButton>
        </div>
      </Transition>
    </UContainer>
  </header>
</template>

<script setup>
import { useWindowScroll } from '@vueuse/core'
import gsap from 'gsap'
import { useScrollTo } from '~/composables/useScrollTo'

const header = ref(null)
const isHeaderHidden = ref(false)
const isMenuOpen = ref(false)
const lastScrollPosition = ref(0)
const { y: scrollY } = useWindowScroll()
const { scrollToElement } = useScrollTo()

const menuItems = [
  { label: 'Home', path: '#hero' },
  { label: 'Chi Siamo', path: '#about' },
  { label: 'Partner', path: '#partners' },
  { label: 'Contatti', path: '#contact' }
]

const handleNavClick = (path, event) => {
  // Previeni il comportamento predefinito del link
  event.preventDefault()
  
  isMenuOpen.value = false
  if (path.startsWith('#')) {
    scrollToElement(path)
  }
}

watch(scrollY, (newY) => {
  if (isMenuOpen.value) return
  
  lastScrollPosition.value = newY
})
</script>
