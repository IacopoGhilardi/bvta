import { useRouter } from 'vue-router'
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

// Registra il plugin ScrollTo di GSAP
gsap.registerPlugin(ScrollToPlugin)

export const useScrollTo = () => {
  const router = useRouter()

  const scrollToElement = (elementId: string) => {
    const id = elementId.replace('#', '')
    const element = document.getElementById(id)
    
    if (element) {
      // Usa GSAP per uno scroll più fluido
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: element,
          offsetY: 80, // Offset per l'header fisso
          autoKill: false
        },
        ease: 'power2.inOut'
      })
      
      // Aggiorna l'URL senza ricaricare la pagina
      history.pushState(null, '', elementId)
    }
  }

  return {
    scrollToElement
  }
} 