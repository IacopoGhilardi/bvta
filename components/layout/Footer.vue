<template>
  <footer class="w-full bg-background-primary border-t border-gray-800">
    <UContainer class="py-12">
      <!-- Social Icons -->
      <div class="flex flex-col items-center justify-center mb-4">
        <!-- Contenitore delle icone sociali con spazio orizzontale -->
        <div class="flex items-center justify-center gap-4 w-full">
          <!-- Linea sinistra -->
          <div class="hidden md:block h-px bg-gray-800 flex-grow"></div>
          
          <!-- Icone sociali -->
          <div class="flex items-center gap-4">
            <a v-for="link in socialLinks" :href="link.path" 
               class="text-gray-400 hover:text-primary transition-colors" 
               target="_blank"
            >
              <UIcon :name="link.icon" class="w-6 h-6" />
            </a>
          </div>

          <!-- Linea destra -->
          <div class="hidden md:block h-px bg-gray-800 flex-grow"></div>
        </div>
      </div>

      <!-- Logo and Copyright -->
      <div class="flex flex-col items-center justify-center mb-8">
        <h2 class="text-2xl font-bold text-white mb-4">BVTA</h2>
        <div class="text-gray-400 text-sm">
          © 2025 BVTA. Tutti i diritti riservati.
        </div>
      </div>

      <!-- Navigation -->
      <nav class="flex justify-center">
        <ul class="flex flex-wrap justify-center gap-6">
          <li v-for="item in menuItems" :key="item.path">
            <a 
              :href="item.path"
              class="text-gray-400 hover:text-primary transition-colors text-sm"
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
import footerContent from '~/content/footer.json'
import logoBVTA from '~/assets/images/logo/logo.png'

const { scrollToElement } = useScrollTo()

const menuItems = ref(footerContent.footerMenu)
const socialLinks = ref(footerContent.socialLinks)


const handleNavClick = (path, event) => {
  event.preventDefault()
  if (path.startsWith('#')) {
    scrollToElement(path)
  }
}
</script>
