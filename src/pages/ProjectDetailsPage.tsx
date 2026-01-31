import { useParams } from "react-router-dom"
import PageHeading from "../components/PageHeading"

const ProjectDetailsPage = () => {

  const {id} = useParams();

  return (
    <PageHeading title={`Project ${id}`} subtitle="Project details and activity" />
  )
}

export default ProjectDetailsPage