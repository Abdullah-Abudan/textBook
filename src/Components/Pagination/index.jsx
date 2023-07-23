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

  const handleTagClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    // Get the current pathname from the location object
    const currentPath = location.pathname; // property of the window object in the browser's JavaScript environment

    // Extract the number from the pathname to determine the active index
    const activeIndexFromPath = Number(currentPath.replace('/Activity', '')) - 1;

    // Update the active state based on the extracted index
    setActiveIndex(activeIndexFromPath);
  }, [location]);

  return (
    <TagsArea>
      <TagsList>
        <TagItem>
          <TagLink
            to="/Activity3"
            className={activeIndex === 2 ? 'active' : ''}
            onClick={() => handleTagClick(2)}
          >
            3
          </TagLink>
        </TagItem>

        <TagItem>
          <TagLink
            to="/Activity2"
            className={activeIndex === 1 ? 'active' : ''}
            onClick={() => handleTagClick(1)}
          >
            2
          </TagLink>
        </TagItem>

        <TagItem>
          <TagLink
            to="/Activity1"
            className={activeIndex === 0 ? 'active' : ''}
            onClick={() => handleTagClick(0)}
          >
            1
          </TagLink>
        </TagItem>
      </TagsList>
    </TagsArea>
  );
};

export default Pagination;
