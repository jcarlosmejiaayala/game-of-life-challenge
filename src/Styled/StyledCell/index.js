import styled from 'styled-components'

const StyledCell = styled.button`
  animation: 0.5s all linear;
  background-color: ${({ isAlive }) => (isAlive ? 'green' : 'white')};
  border: 1px solid black;
  height: 20px;
  width: 20px;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`

export default StyledCell
