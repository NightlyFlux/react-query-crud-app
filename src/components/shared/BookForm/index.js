import { useForm } from 'react-hook-form'
import { Box, Button } from 'rebass/styled-components'
import { Label, Input } from '@rebass/forms'
import Loader from 'react-loader-spinner'

const BookForm = ({ defaultValues, onFormSubmit, isLoading }) => {
  const { register, handleSubmit } = useForm({ defaultValues })

  const onSubmit = handleSubmit((data) => {
    onFormSubmit(data)
  })

  return (
    <form onSubmit={onSubmit}>
      <Box mb={3}>
        <Label htmlFor='title'>Title</Label>
        <Input ref={register} id='title' name='title' />
      </Box>
      <Box mb={3}>
        <Label htmlFor='author'>Author</Label>
        <Input ref={register} id='author' name='author' />
      </Box>
      <Button>
        {isLoading ? (
          <Loader type='ThreeDots' color='#fff' height='10' />
        ) : (
          'Submit'
        )}
      </Button>
    </form>
  )
}

export default BookForm
