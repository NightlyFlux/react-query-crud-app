import { Link } from 'react-router-dom'
import { Flex, Box, Link as StyledLink, Image } from 'rebass/styled-components'
import Container from '../Container'
import logo from '../../../assets/logo.svg'

const Navbar = () => (
  <Flex bg='black' color='white' justifyContent='center'>
    <Container>
      <Flex px={2} width='100%' alignItems='center'>
        <Image size={20} src={logo} />
        <Link component={StyledLink} variant='nav' to='/'>
          React Query CRUD
        </Link>
        <Box mx='auto' />
        <Link component={StyledLink} variant='nav' to='/create-book'>
          + Add new book
        </Link>
      </Flex>
    </Container>
  </Flex>
)

export default Navbar
