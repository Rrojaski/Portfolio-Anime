import styled from 'styled-components';

const Title = styled.div`
  font-size: ${(props) => (props.largeFont ? '3.5rem' : '1.5rem')};
  font-weight: 600;
  color: ${(props) => (props.color)};
`

export default Title;