import { Button, Flex, Link as StyledLink, Text } from 'rebass'
import { Link } from 'react-router-dom'
import { useMutation, useQueryClient } from 'react-query'
import { removeBook } from '../../../api'
import Loader from 'react-loader-spinner'

const BookItem = ({ id, title, author }) => {
  const queryClient = useQueryClient()
  const { mutateAsync, isLoading } = useMutation(removeBook)

  const removeBookHandler = async () => {
    await mutateAsync(id)
    queryClient.invalidateQueries('books')
  }

  return (
    <Flex p={3} width='100%' alignItems='center'>
      <Link component={StyledLink} to={`/update-book/${id}`} mr='auto'>
        {title}
      </Link>
      <Text>{author}</Text>
      <Button ml={5} onClick={removeBookHandler}>
        {isLoading ? (
          <Loader type='ThreeDots' color='#fff' height={10} />
        ) : (
          'Remove'
        )}
      </Button>
    </Flex>
  )
}

export default BookItem
