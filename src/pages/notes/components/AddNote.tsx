import { Form, useForm } from 'components/form'
import Input from 'components/input'
import Button from 'components/button'
import InputTextArea from 'components/input-textarea'
import { useAppDispatch, AppDispatch } from 'store'
import { addNote } from 'store/NotesReducer'
import { INoteForm, validationSchema } from '../validation'

const defaultValues: INoteForm = {
  title: '',
  description: ''
}

function AddNote() {
  const form = useForm({ schema: validationSchema, defaultValues })
  const { register, reset } = form
  const dispatch: AppDispatch = useAppDispatch()

  const handleSubmit = (payload: INoteForm) => {
    dispatch(
      addNote({ id: Math.random().toString(36).slice(2, 7), ...payload })
    )
    reset(defaultValues)
  }
  return (
    <div className="bg-white w-[450px] rounded-lg p-6 space-y-4">
      <div className="font-bold">Add Note</div>
      <Form
        className="space-y-8"
        form={form}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <div className="space-y-4">
          <Input {...register('title')} label="Title" autoFocus />
          <InputTextArea
            {...register('description')}
            label="Description"
            rows={4}
          />
        </div>
        <Button className="w-full" type="submit" variant="primary">
          Add Note
        </Button>
      </Form>
    </div>
  )
}

export default AddNote
