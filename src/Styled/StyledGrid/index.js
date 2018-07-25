import styled from 'styled-components'

const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  margin-top: 50px;
  width: ${({ size }) => `${size * 20}px`};
`

export default StyledGrid
