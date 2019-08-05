import styled from "styled-components";

const Image = styled.img`
  width: ${props => props.sizex};
  height: ${props => props.sizey};
  min-width: ${props => props.minsizex};
  min-height: ${props => props.minsizey};
`;

export default Image;
