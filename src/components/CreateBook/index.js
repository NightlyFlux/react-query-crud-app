import { useMutation } from 'react-query'
import { useHistory } from 'react-router-dom'
import { Box, Heading } from 'rebass/styled-components'
import { createBook } from '../../api'
import BookForm from '../shared/BookForm'
import Container from '../shared/Container'

const CreateBook = () => {
  const history = useHistory()
  const { mutateAsync, isLoading } = useMutation(createBook)

  const onFormSubmit = async (data) => {
    await mutateAsync({ ...data })
    history.push('/')
  }
  return (
    <Container>
      <Box py={3}>
        <Heading mb={3}>Create New Book</Heading>
        <BookForm onFormSubmit={onFormSubmit} isLoading={isLoading} />
      </Box>
    </Container>
  )
}

export default CreateBook
