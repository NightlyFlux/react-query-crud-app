import { Box } from 'rebass'

const Container = ({ children }) => (
  <Box sx={{ width: '100%', maxWidth: '1024px', mx: 'auto' }}>{children}</Box>
)

export default Container
