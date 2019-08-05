import styled from 'styled-components';

const Section = styled.div`
  margin: 0;
  padding: 0 20px;
  padding-top: 20px;
  width: 100%;
  background: ${(props) => (props.backColor)};
`

export default Section;