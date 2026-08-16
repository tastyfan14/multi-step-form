import { create } from 'zustand'
import type { MultiStepFormStore } from './types'
import { persist } from 'zustand/middleware'

export const useMultiStepFormStore = create<MultiStepFormStore>()(
    persist(
        (set) => ({
            form: {},

            setForm: (data) =>
                set((state) => ({
                    form: {
                        ...state.form,
                        ...data
                    },
            })),

            resetForm: () =>
                set({
                    form: {},
                }),
        }),
        {
            name: 'multi-step-form',
        }
    )
)