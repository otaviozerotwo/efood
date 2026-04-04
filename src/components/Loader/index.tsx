import { SyncLoader } from 'react-spinners'
import colors from '../../styles/colors'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <SyncLoader color={colors.lobisterPink} />
  </Container>
)

export default Loader
