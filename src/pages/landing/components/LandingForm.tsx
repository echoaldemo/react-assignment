import Button from 'components/button'
import { Form, useForm } from 'components/form'
import Input from 'components/input'
import InputPassword from 'components/input-password'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, AppDispatch } from 'store'
import { setUser } from 'store/AuthReducer'
import { ILandingForm, validationSchema } from '../validation'
import { userLogin } from '../actions'

function LandingForm() {
  const navigate = useNavigate()
  const dispatch: AppDispatch = useAppDispatch()
  const form = useForm({ schema: validationSchema })
  const { register, setError } = form
  const handleSubmit = (payload: ILandingForm) => {
    if (userLogin(payload)) {
      dispatch(setUser(payload))
      navigate('/notes')
      return
    }
    setError('password', { message: 'Invalid username/password.' })
  }
  return (
    <Form
      className="space-y-8"
      form={form}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <div className="space-y-4">
        <Input {...register('username')} label="Username" autoFocus />
        <InputPassword {...register('password')} label="Password" />
      </div>
      <Button className="w-full" type="submit" variant="primary">
        Login
      </Button>
    </Form>
  )
}

export default LandingForm
