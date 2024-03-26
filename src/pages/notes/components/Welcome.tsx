import { useSelector } from 'react-redux'
import { RootState } from 'store'

function Welcome() {
  const { user } = useSelector((state: RootState) => state.auth)
  return (
    <div className="bg-white w-[450px] rounded-lg p-6 space-y-4">
      <div>
        <span>Welcome, </span>
        <span className="font-bold italic">{user?.username}</span>
      </div>
    </div>
  )
}

export default Welcome
