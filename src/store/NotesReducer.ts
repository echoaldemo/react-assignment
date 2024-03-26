import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface NotesDetails {
  id: string
  title: string
  description: string
}

export interface NotesInitialState {
  projectNotes: NotesDetails[]
}

const initialState: NotesInitialState = {
  projectNotes: []
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<NotesDetails>) => {
      state.projectNotes = [...state.projectNotes, action.payload]
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.projectNotes = state.projectNotes.filter(
        (x) => x.id !== action.payload
      )
    }
  }
})

export const { addNote, deleteNote } = notesSlice.actions
export default notesSlice.reducer
