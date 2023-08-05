import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './projects.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Projects = ({ projectsList }) => {
  console.log('ProjectsList prop:', projectsList);

  if (!projectsList || !projectsList.data) {
    return <p>en construction...</p>;
  }

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h2>{`{mes projets}`}</h2>
      <Slider {...settings}>
        {projectsList.data.map((project, index) => (
          <div key={index}>
            <Link to={`/projects/${project.attributes.slug}`}>{project.attributes.name}</Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
