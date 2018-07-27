import styled from 'styled-components'

const StyledTabPanel = styled.div`
  border: 1px solid gray;
  display: ${({ isSelected }) => (isSelected ? 'block' : 'none')};
  flex: 1;
  padding: 10px;
  text-align: center;
`

export default StyledTabPanel
