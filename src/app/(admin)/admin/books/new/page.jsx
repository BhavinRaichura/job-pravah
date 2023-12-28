import { addBook } from './serverAction'
import BooksForm from './component'

const BooksPage = async () => {
  return (
    <div>
        <h1 className=' text-center font-light text-5xl my-20'>Books form</h1>
        <BooksForm addBook={addBook} />
    </div>
  )
}

export default BooksPage