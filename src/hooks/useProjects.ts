import { projects } from "../fakeDB"

interface UseProjectsQuery {
  searchInput?: string
  tag?: string
  status?: string
}

const useProjects = ({ searchInput = "", tag = "All", status = "All" }: UseProjectsQuery) => {
  return projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchInput.toLowerCase())

    const matchesTag =
      tag === "All" || project.tag.toLowerCase() === tag.toLowerCase()

    const matchesStatus =
      status === "All" || project.status.toLowerCase() === status.toLowerCase()

    return matchesSearch && matchesTag && matchesStatus
  })
}

export default useProjects
