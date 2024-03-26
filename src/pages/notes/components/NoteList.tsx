import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch, AppDispatch } from 'store'
import { deleteNote, NotesDetails } from 'store/NotesReducer'
import NoteDetails from './NoteDetails'

function NoteList() {
  const noteList = useSelector((state: RootState) => state.notes.projectNotes)
  const dispatch: AppDispatch = useAppDispatch()

  const [isOpen, setIsOpen] = useState(false)
  const [current, setCurrent] = useState<NotesDetails | null>(null)

  const onNoteClick = (note: NotesDetails) => {
    setIsOpen(true)
    setCurrent(note)
  }

  const onDelete = (id: string) => {
    dispatch(deleteNote(id))
  }

  return (
    <>
      <div className="lg:-mt-8 img-sticky bg-cover w-full lg:flex-1 h-full max-h-full rounded-lg overflow-hidden">
        <div className="h-full">
          {noteList.length === 0 ? (
            <div className="flex h-full items-center justify-center font-semibold">
              There are no notes. Please add notes using the form on the left.
            </div>
          ) : (
            <div className="mt-36 ml-24 list-decimal space-y-4 note-list overflow-y-auto">
              {noteList.map((note: NotesDetails) => (
                <li>
                  <span className="w-fit group space-x-4">
                    <button
                      className="font-semibold transition-all group-hover:text-primary-base group-hover:underline ml-4"
                      onClick={() => onNoteClick(note)}
                    >
                      <span>{note.title}</span>
                    </button>
                    <button
                      type="button"
                      className="transition-all group-hover:opacity-100 opacity-0 text-danger-dark hover:underline hover:font-semibold text-xs"
                      onClick={() => onDelete(note.id)}
                    >
                      Delete
                    </button>
                  </span>
                </li>
              ))}
            </div>
          )}
        </div>
      </div>
      <NoteDetails open={isOpen} setOpen={setIsOpen} data={current} />
    </>
  )
}

export default NoteList
