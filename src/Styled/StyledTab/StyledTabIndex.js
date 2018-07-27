import styled from 'styled-components'

const StyledTabIndex = styled.button`
  border: ${({ isSelected }) => (isSelected ? '1px solid gray' : 'none')};
  border-bottom: none;
  outline: none;
  padding: 5px;
  position: relative;

  &:after {
    content: '';
    display: ${({ isSelected }) => (isSelected ? 'block' : 'none')};
    margin-left: -5px;
    background-color: white;
    position: absolute;
    width: 100%;
    height: 6px;
  }

  &:hover {
    cursor: pointer;
  }
`

export default StyledTabIndex
