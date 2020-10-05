export const selectProjects = state => state.project.data
export const selectLengthOfProjects = state => state.project.data.length
export const loadingProjects = state => state.project.loading
export const projectsErrors = state => state.project.error
export const selectProject = (state, projectId) => state.project.data.find(project => project.id == projectId)
export const selectLastProject = state => state.project.data[state.project.data.length - 1]
export const loadingProject = state => state.project.loading
export const projectErrors = state => state.project.error
export const selectComments = state =>
  state.projectComment.data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
export const loadingComments = state => state.projectComment.loading
export const commentErrors = state => state.projectComment.error
export const selectProjectsSearch = (state, query) => {
  const search = query.toLowerCase()
  return state.project.data.filter(
    project =>
      project.id.includes(search) ||
      project.site.addressName.toLowerCase().includes(search) ||
      (project.site.postCode && project.site.postCode.toLowerCase().includes(search)) ||
      (project.addressBook &&
        project.addressBook.users.filter(user => user.email1.toLowerCase().includes(search)).length > 0)
  )
}
