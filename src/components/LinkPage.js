import React from 'react'
import AboutCard from './AboutCard';
import Container from '@mui/material/Container';
import PossibilityCard from './PossibilityCard';
import BlogCard from './BlogCard';


function LinkPage() {
  return (
    <div>
      <Container>
          <AboutCard />
          <BlogCard />
          <PossibilityCard />
      </Container> 
    </div>
  )
}

export default LinkPage