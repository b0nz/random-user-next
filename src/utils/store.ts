import create from 'zustand'
import _ from 'lodash'

export interface User {
  gender?: string
  name?: {
    first?: string
    last?: string
  }
  email?: string
  dob?: {
    date?: string
    age?: number
  }
  phone?: string
  id?: {
    name?: string
    value?: string
  }
  picture?: {
    large?: string
    medium?: string
    thumbnail?: string
  }
}

export interface IState {
  currentPage: number
  users: User[]
  usersChunk: User[][]
  loading: boolean
  getUsers: () => void
  goToPage: (num: string) => void
  handleSearch: (value: string) => void
}

export const useStore = create<IState>()((set, get) => ({
  users: [],
  usersChunk: [],
  loading: false,
  currentPage: 1,
  getUsers: async () => {
    set({ loading: true })
    try {
      const req = await fetch('https://randomuser.me/api/?results=30', {
        method: 'GET',
      })
      const res = await req.json()
      const newChunk: User[][] = _.chunk(res.results, 5)
      set({ users: res.results, usersChunk: newChunk, loading: false })
    } catch (error) {
      set({ loading: false })
      console.log(error)
    }
  },
  goToPage: (num) => {
    if (Number(num) >= 0 || Number(num) === get().usersChunk?.length) {
      set({ currentPage: Number(num) || 0 })
    }
  },
  handleSearch: (value) => {
    if (value) {
      set((state) => ({
        usersChunk: _.chunk(
          state.users.filter((f) =>
            `${f?.name?.first} ${f?.name?.last}`.toLowerCase().includes(value),
          ),
          5,
        ),
        currentPage: 1,
      }))
    } else {
      set((state) => ({ usersChunk: _.chunk(state.users, 5), currentPage: 1 }))
    }
  },
}))
