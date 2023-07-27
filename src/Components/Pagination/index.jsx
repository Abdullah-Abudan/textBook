import React, { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { TagItem, TagLink, TagsArea, TagsList } from './style';

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
