import { UserDetails } from 'store/AuthReducer'
import USERS from 'data/users.json'

export const userLogin = ({ username, password }: UserDetails) =>
  Boolean(
    USERS.find(
      (user) => user.username === username && user.password === password
    )
  )
