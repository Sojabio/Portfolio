import {useParams} from 'react-router-dom'

const Projectapi = ({projectsList}) => {

  const {slug} = useParams();

  const projectData = projectsList.data.find((project) => project.attributes.slug === slug);

  if (!projectData) {
    return <p>Project not found.</p>;
  }

  return (
    <>
    <div className="card">
      <div className="container">
        <h4><b>{projectData.attributes.name}</b></h4>
        <p>{projectData.attributes.content}</p>
      </div>
      <img src="./public/favicon-32x32.png" alt={projectData.attributes.slug} style={{ width: '100%' }} />
    </div>
    </>
  )

}

export default Projectapi;
