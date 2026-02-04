import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const themeChange = set => ({
    theme: 'light',
    themeToggle: () => set(s => ({ theme: s.theme === 'light' ? 'dark' : 'light' }))
})

const languageChange = set => ({
    lang: 'en',
    langToggle: () => set(s => ({ lang: s.lang === 'en' ? 'ge' : 'en' }))
})

export const useStore = create(
    persist(
        set => ({
            ...themeChange(set),
            ...languageChange(set)
        })
    ), { name: 'goa-academy-data' }
)