import styled from 'styled-components'

const StyledCell = styled.div`
  border: 1px solid black;
  height: 20px;
  width: 20px;
  background-color: ${({ isAlive }) => (isAlive ? 'green' : 'white')};
`

export default StyledCell