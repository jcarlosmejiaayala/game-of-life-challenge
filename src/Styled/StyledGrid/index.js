import styled from 'styled-components'

const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 0 0 ${({ size }) => `${size * 20}px`};
  margin: auto 40px 50px;

  @media screen and (min-width: 1400px) {
    margin: auto auto 50px;
  }
`

export default StyledGrid
