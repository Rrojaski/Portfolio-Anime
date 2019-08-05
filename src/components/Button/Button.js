import styled from 'styled-components';

const Button = styled.button`
  box-sizing: border-box;
  margin: 20px 0;
  padding: 15px 50px;
  background: none;
  color: #ffb637;
  border: 1px solid #ffb637;
  border-radius: 5px;
  font-size: .75rem;
  &:hover {
    cursor: pointer;
    color: #fff;
    background: #ffb637;
  }
`

export default Button;