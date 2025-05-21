'use client'

import {useEffect} from 'react'

export function ScrollToHashElement() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleHashChange = () => {
      try {
        const hash = window.location.hash;

        if (hash) {
          const id = hash.replace('#', '')
          const element = document.getElementById(id)
          if (element) {
            window.scrollTo({top: element.offsetTop, behavior: 'smooth'})
          } else {
            setTimeout(() => {
              window.scrollTo({top: 0, behavior: 'smooth'})
            }, 100)
          }
        } else {
          setTimeout(() => {
            window.scrollTo({top: 0, behavior: 'smooth'})
          }, 100)
        }
      } catch (error) {
        console.error('Erro ao tentar processar o hash:', error)
      }
    }

    // Executa na montagem (caso a página já carregue com hash)
    handleHashChange()

    // Adiciona o listener de mudanças no hash
    window.addEventListener('hashchange', handleHashChange)

    // Remove o listener na desmontagem
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return null
}
