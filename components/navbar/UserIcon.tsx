import { currentUser, auth } from '@clerk/nextjs/server'
import { LuUser } from 'react-icons/lu'

const UserIcon = async () => {
  const user = await currentUser();
  const profileImage = user?.imageUrl

  if (profileImage) {
    return <img src={profileImage} alt="profile image" className='h-6 w-6 rounded-full' />
  }
  return (
    <LuUser className='h-7 w-7 rounded-full bg-primary text-white'/>
  )
}

export default UserIcon