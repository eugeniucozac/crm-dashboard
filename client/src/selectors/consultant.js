export const selectConsultants = state => state.consultant.data.sort((a, b) => a.role.id - b.role.id)
export const selectConsultantsManagers = state =>
  state.consultant.data
    .filter(consultant => consultant.role.name === "Technical manager")
    .map(consultant => consultant.id)
export const loadingConsultants = state => state.consultant.loading
export const consultantErrors = state => state.consultant.error
export const selectRole = state => state.role.data
