import {Link} from 'react-router-dom'

const Projects = ({ projectsList }) => {
  console.log('ProjectsList prop:', projectsList);

  if (!projectsList || !projectsList.data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {projectsList.data.map((project, index) => (
        <div key={index}>
          <Link to={`/projects/${project.attributes.slug}`}> {project.attributes.name}</Link>
        </div>
      ))}
       <br></br>
    </div>
  );
};

export default Projects;
