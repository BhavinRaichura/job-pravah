
import { getCountBooks, getCountPosts, getCountUsers } from './serverAction';
import UsersTableHead from './users/component';
import PostsTable from './articles/component';
import DateFormateElement from '@/components/ui/DateFormateElement';

export const revalidate = 2

const AdminPanel = async () => {
  const countUsers = await getCountUsers();
  const countBooks = await getCountBooks()
  const countPosts = await getCountPosts()
  const date = new Date()
  const day = date.toLocaleDateString()
  return (
    <div className='my-5'>
      <div className=' text-center '>
        <div className='flex flex-wrap m-2 gap-10 max-md:justify-center'>
          <div className=' rounded-xl w-60 h-36 hover:shadow-xl drop-shadow-md'> <div className='  rounded-xl w-full h-full p-5 bg-rose-500  font-semibold'> <p className='text-xl font-extrabold text-white text-left'>Total Users</p> <p className=' text-left text-5xl font-bold p-2 text-white'>{countUsers?.data?.count}</p></div> </div>
          <div className=' rounded-xl w-60 h-36 hover:shadow-xl drop-shadow-md'> <div className='  rounded-xl w-full h-full p-5 bg-yellow-300    font-semibold'> <p className='text-xl font-extrabold text-white text-left'>Total Posts</p> <p className=' text-left text-5xl font-bold p-2 text-white'>{countPosts?.data?.count}</p></div> </div>
          <div className=' rounded-xl w-60 h-36 hover:shadow-xl drop-shadow-md'> <div className='  rounded-xl w-full h-full p-5 bg-violet-500    font-semibold'> <p className='text-xl font-extrabold text-white text-left'>Total Books</p> <p className=' text-left text-5xl font-bold p-2 text-white'>{countBooks?.data?.count}</p></div> </div>
          <div className=' rounded-xl w-60 h-36 hover:shadow-xl drop-shadow-md'> <div className='  rounded-xl w-full h-full p-5 bg-blue-600    font-semibold'> <p className='text-xl font-extrabold text-white text-left'>Date</p> <p className=' text-left text-3xl font-bold py-2 text-white'><DateFormateElement date={date} /> </p></div> </div>
        </div>
       
        <div className='my-10'>
          <h1 className=' text-3xl font-bold text-left pt-10 pb-5 pl-10 text-gray-500'>Posts</h1>
          <PostsTable />

        </div>
        <div className='my-10'>
        <h1  className=' text-3xl font-bold text-left pt-10 pb-5 pl-10 text-gray-500 '>Users</h1>
        
        <UsersTableHead />
        </div>
        
      </div>
    </div>
  )
}

export default AdminPanel