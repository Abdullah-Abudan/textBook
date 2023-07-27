import React, { useState,useEffect  } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const TagsArea = styled.div`
  padding: 25px;
  justify-content: space-between;
  padding: 25px 10px;
`;

const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 0.25rem;
  padding-top: 0.25rem;
  list-style: none;
  justify-content: center;
`;

const TagItem = styled.li`
  padding: 5px;
`;

const TagLink = styled(Link)`
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

const Pagination = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();



  useEffect(() => {
    // Get the current pathname from the location object
    const currentPath = location.pathname;

    // Extract the index from the pathname
    const activeIndexFromPath = Number(currentPath.replace('/Question', '')) - 1;

    // Update the active state based on the extracted index
    setActiveIndex(activeIndexFromPath);
  }, [location]);

  return (
    <TagsArea>
      <TagsList>
        <TagItem>
          <TagLink
            to="/Question3"
            className={activeIndex === 2 ? 'active' : ''}
          >
            3
          </TagLink>
        </TagItem>

        <TagItem>
          <TagLink
            to="/Question2"
            className={activeIndex === 1 ? 'active' : ''}
          >
            2
          </TagLink>
        </TagItem>

        <TagItem>
          <TagLink
            to="/Question1"
            className={activeIndex === 0 ? 'active' : ''}
          >
            1
          </TagLink>
        </TagItem>
      </TagsList>
    </TagsArea>
  );
};

export default Pagination;
