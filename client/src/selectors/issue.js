export const selectIssues = state => state.issue.data
export const countIssues = state => state.issue.data.length
export const loadingIssues = state => state.issue.loading
export const issueErrors = state => state.issue.error
export const selectIssuesByStatus = (state, status) => {
  const data = state.issue.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  return status ? data.filter(issue => issue.status.id === status) : data
}
export const selectIssuesByCategoryId = (state, categoryId) =>
  state.issue.data
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .filter(issue => issue.category.id === categoryId)
export const selectIssuesByCategoryName = (state, categoryName) =>
  state.issue.data.filter(issue => issue.category.name === categoryName)
export const selectIssuesByCategoryAndId = (state, hardwareId, categoryId) => {
  const allByCategories = selectIssuesByCategoryId(state, categoryId)
  return allByCategories.filter(issue => issue.hardwareId === hardwareId)
}
export const selectIssuesByCategoryAndName = (state, hardwareId, categoryName) => {
  const allByCategories = selectIssuesByCategoryName(state, categoryName)
  return allByCategories.filter(issue => issue.hardwareId === hardwareId)
}
export const selectIssuesByStatusOrByCategoryAndName = (
  state,
  status = false,
  hardwareId = null,
  categoryName = null
) =>
  hardwareId && categoryName
    ? selectIssuesByCategoryAndName(state, hardwareId, categoryName)
    : selectIssuesByStatus(state, status)
export const selectIssueMessages = state => state.issueMessage.data
export const loadingIssueMessages = state => state.issueMessage.loading
export const issueMessagesErrors = state => state.issueMessage.error
export const selectSidebarCategories = state => {
  return state.issue.data.reduce((categories, el, index) => {
    const category = categories[el.category.name]
    let hardwares = []
    if (!Array.isArray(category)) {
      hardwares = [{ id: el.hardwareId, name: el.hardwareName }]
    } else {
      if (category.find(hardware => hardware.id === el.hardwareId)) {
        return categories
      }
      hardwares = [...category, { id: el.hardwareId, name: el.hardwareName }]
    }
    return {
      ...categories,
      [el.category.name]: hardwares,
    }
  }, {})
}
