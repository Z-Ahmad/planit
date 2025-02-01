import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type CardView = "intro" | "login" | "block-setup" | "task-setup" | "schedule"

interface NavigationState {
  currentView: CardView
  actions: {
    goToIntro: () => void
    goToLogin: () => void
    goToBlockSetup: () => void
    goToTaskSetup: () => void
    goToSchedule: () => void
    goBack: () => void
  }
}

const useNavigationStore = create<NavigationState>()(
  immer((set) => ({
    currentView: "intro",
    actions: {
      goToIntro: () => set((state) => { state.currentView = "intro" }),
      goToLogin: () => set((state) => { state.currentView = "login" }),
      goToBlockSetup: () => set((state) => { state.currentView = "block-setup" }),
      goToTaskSetup: () => set((state) => { state.currentView = "task-setup" }),
      goToSchedule: () => set((state) => { state.currentView = "schedule" }),
      goBack: () => set((state) => { 
        state.currentView = state.currentView === "login" ? "intro" 
          : state.currentView === "task-setup" ? "login" 
          : "task-setup"
      }),
    },
  }))
)

// Export actions separately for better tree-shaking and usage in non-component contexts
export const useNavigationActions = () => useNavigationStore((state) => state.actions)
export const useCurrentView = () => useNavigationStore((state) => state.currentView) 