import AddNote from './components/AddNote'
import NoteList from './components/NoteList'
import Welcome from './components/Welcome'

function Notes() {
  return (
    <div className="bg-green-gradient">
      <div className="container h-screen flex flex-col lg:flex-row items-center justify-between p-8 gap-4 ">
        <div className="space-y-2">
          <Welcome />
          <AddNote />
        </div>
        <NoteList />
      </div>
    </div>
  )
}

export default Notes
