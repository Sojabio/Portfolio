import {useParams} from 'react-router-dom'

const Project = ({projectsList}) => {

  const {slug} = useParams();

  const projectData = projectsList.data.find((project) => project.attributes.slug === slug);

  if (!projectData) {
    return <p>Project not found.</p>;
  }

  return (
    <>
    <p>nom : {projectData.attributes.name}</p>
    <p>description : {projectData.attributes.content}</p>
    <p>date de création : {projectData.attributes.publishedAt}</p>
    {projectData.attributes.client && (
    <p>{projectData.attributes.client}</p>
    )}

    </>
  )

}

export default Project;
