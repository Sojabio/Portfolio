import {Link} from 'react-router-dom'

const Projects = ({ projectsList }) => {
  console.log('ProjectsList prop:', projectsList);

  if (!projectsList || !projectsList.data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>Voici la liste de tous mes projets</p>
      {projectsList.data.map((project, index) => (
        <div key={index}>
          <Link to={`/projects/${project.attributes.slug}`}> {project.attributes.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Projects;
