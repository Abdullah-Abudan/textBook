import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TagsArea = styled.div`
  padding: 25px;
  justify-content: space-between;
  padding: 25px 10px;
`;

export const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 0.25rem;
  padding-top: 0.25rem;
  list-style: none;
  justify-content: center;
`;

export const TagItem = styled.li`
  padding: 5px;
`;

export const TagLink = styled(Link)`
  color: #000;
  line-height: 2;
  border: 1px solid #f6f9fb;
  border-radius: 3px;
  color: #0e2c53;
  line-height: 40px;
  padding: 0 15px;
  text-decoration: none;
  cursor: pointer;
  &:hover, &.active {
    background: #17a2b8;
    color: #fff;
    border-color: #17a2b8;
  }
`;