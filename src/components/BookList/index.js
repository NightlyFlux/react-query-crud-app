import Loader from 'react-loader-spinner'
import { useQuery } from 'react-query'
import { Flex } from 'rebass'
import { getAllBooks } from '../../api'
import Container from '../shared/Container'
import BookItem from './BookItem'

const BookList = () => {
  const { data, error, isLoading, isError } = useQuery('books', getAllBooks)

  if (isLoading) {
    return (
      <Container>
        <Flex py={5} justifyContent='center'>
          <Loader type='ThreeDots' color='#ccc' height={30} />
        </Flex>
      </Container>
    )
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <Container>
      <Flex flexDirection='column' alignItems='center'>
        {data.map(({ id, title, author }) => (
          <BookItem key={id} id={id} title={title} author={author} />
        ))}
      </Flex>
    </Container>
  )
}

export default BookList
