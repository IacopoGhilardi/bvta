<template>
  <footer id="contact" class="w-full bg-background-primary border-t border-gray-800">
    <UContainer class="py-12">
      <!-- Social Links -->
      <div class="flex justify-center items-center space-x-6 mb-6">
        <!-- Left Divider -->
        <div class="hidden md:block w-24 h-px bg-gray-800 flex-grow"></div>
        
        <div class="flex space-x-6">
          <a href="#" class="text-gray-400 hover:text-primary transition-colors">
            <UIcon name="i-simple-icons-instagram" class="w-6 h-6" />
          </a>
          <a href="#" class="text-gray-400 hover:text-primary transition-colors">
            <UIcon name="i-simple-icons-whatsapp" class="w-6 h-6" />
          </a>
          <a href="#" class="text-gray-400 hover:text-primary transition-colors">
            <UIcon name="i-simple-icons-gmail" class="w-6 h-6" />
          </a>
        </div>

        <!-- Right Divider -->
        <div class="hidden md:block w-24 h-px bg-gray-800 flex-grow"></div>
      </div>

      <!-- Logo -->
      <div class="flex flex-col items-center justify-center mb-4">
        <h2 class="text-2xl font-bold text-white mb-2 ">BVTA</h2>
        <div class="text-gray-400 text-sm">
            © 2024 BVTA. Tutti i diritti riservati.
        </div>
      </div>

      <!-- Navigation Links -->
      <nav>
        <ul class="flex justify-center space-x-6">
          <li v-for="item in menuItems" :key="item.path">
            <a 
              :href="item.path"
              class="text-gray-400 hover:text-primary transition-colors text-sm underline"
              @click="(e) => handleNavClick(item.path, e)"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>

    </UContainer>
  </footer>
</template>

<script setup>
import { useScrollTo } from '~/composables/useScrollTo'

const { scrollToElement } = useScrollTo()

const menuItems = [
  { label: 'Home', path: '#hero' },
  { label: 'Chi Siamo', path: '#about' },
  { label: 'Partner', path: '#partners' }
]

const handleNavClick = (path, event) => {
  event.preventDefault()
  if (path.startsWith('#')) {
    scrollToElement(path)
  }
}
</script>
