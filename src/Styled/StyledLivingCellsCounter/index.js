import styled from 'styled-components'

const StyledLivingCellsCounter = styled.div`
  color: ${({ existsLivingCells }) => (existsLivingCells ? 'green' : 'red')};
  font-size: 1.2em;
  font-weight: 700;
  margin-left: auto;
  margin-right: auto;

  h3 {
    margin: 0.5em 0;
    display: inline-block;
  }
`

export default StyledLivingCellsCounter
