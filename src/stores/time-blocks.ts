import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

export type DayOfWeek = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'

type TimeBlock = {
  id: string
  name: string
  start: string
  end: string
  days: DayOfWeek[]
}

interface TimeBlocksState {
  blocks: TimeBlock[]
  actions: {
    addBlock: (block: Omit<TimeBlock, 'id'>) => void
    removeBlock: (id: string) => void
    updateBlock: (id: string, updates: Partial<TimeBlock>) => void
  }
}

const useTimeBlocksStore = create<TimeBlocksState>()(
  immer((set) => ({
    blocks: [],
    actions: {
      addBlock: (block) => set((state) => {
        state.blocks.push({ ...block, id: crypto.randomUUID() })
      }),
      removeBlock: (id) => set((state) => {
        state.blocks = state.blocks.filter(b => b.id !== id)
      }),
      updateBlock: (id, updates) => set((state) => {
        const index = state.blocks.findIndex(b => b.id === id)
        if (index !== -1) {
          state.blocks[index] = { ...state.blocks[index], ...updates }
        }
      }),
    },
  }))
)

export const useTimeBlocks = () => useTimeBlocksStore((state) => state.blocks)
export const useTimeBlockActions = () => useTimeBlocksStore((state) => state.actions) 