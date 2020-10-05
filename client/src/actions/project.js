import { projects } from "@actions/actionTypes"
import * as projectService from "@services/project"

export const getProjects = () => async dispatch => {
  dispatch({ type: projects.GET_PROJECTS_REQUEST })
  try {
    const data = await projectService.getProjects()
    dispatch({
      type: projects.GET_PROJECTS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: projects.GET_PROJECTS_FAILURE,
      payload: error,
    })
  }
}

export const addProject = body => async dispatch => {
  try {
    const data = await projectService.addProject(body)
    dispatch({
      type: projects.ADD_PROJECT_SUCCESS,
      payload: data,
    })
    return data
  } catch (error) {
    dispatch({
      type: projects.ADD_PROJECT_FAILURE,
      payload: error,
    })
    throw error
  }
}

export const updateProject = (id, body) => async dispatch => {
  try {
    await projectService.updateProject(id, body)
    dispatch({
      type: projects.UPDATE_PROJECT_SUCCESS,
      payload: id,
    })
  } catch (error) {
    dispatch({
      type: projects.UPDATE_PROJECT_FAILURE,
      payload: error,
    })
    throw error
  }
}

export const removeProject = id => async dispatch => {
  try {
    await projectService.removeProject(id)
    dispatch({
      type: projects.REMOVE_PROJECT_SUCCESS,
      payload: id,
    })
  } catch (error) {
    dispatch({
      type: projects.REMOVE_PROJECT_FAILURE,
      payload: error,
    })
  }
}

export const getSites = projectId => async dispatch => {
  dispatch({ type: projects.GET_SITES_REQUEST })
  try {
    const data = await projectService.getSites(projectId)
    dispatch({
      type: projects.GET_SITES_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: projects.GET_SITES_FAILURE,
      payload: error,
    })
  }
}

export const addSite = (body, projectId) => async dispatch => {
  try {
    const data = await projectService.addSite(body, projectId)
    dispatch({
      type: projects.ADD_SITE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: projects.ADD_SITE_FAILURE,
      payload: error,
    })
  }
}

export const removeSite = (projectId, siteId) => async dispatch => {
  try {
    await projectService.removeSite(projectId, siteId)
    dispatch({
      type: projects.REMOVE_SITE_SUCCESS,
      payload: { projectId, siteId },
    })
  } catch (error) {
    dispatch({
      type: projects.REMOVE_SITE_FAILURE,
      payload: error,
    })
  }
}

export const getComments = projectId => async dispatch => {
  dispatch({ type: projects.GET_COMMENTS_REQUEST })
  try {
    const data = await projectService.getComments(projectId)
    dispatch({
      type: projects.GET_COMMENTS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: projects.GET_COMMENTS_FAILURE,
      payload: error,
    })
  }
}

export const addComment = (projectId, body) => async dispatch => {
  try {
    const data = await projectService.addComment(projectId, body)
    dispatch({
      type: projects.ADD_COMMENT_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: projects.ADD_COMMENT_FAILURE,
      payload: error,
    })
  }
}

export const removeComment = (projectId, siteId) => async dispatch => {
  try {
    await projectService.removeComment(projectId, siteId)
    dispatch({
      type: projects.REMOVE_COMMENT_SUCCESS,
      payload: { projectId, siteId },
    })
  } catch (error) {
    dispatch({
      type: projects.REMOVE_COMMENT_FAILURE,
      payload: error,
    })
  }
}

export const addHistory = (projectId, body) => async dispatch => {
  dispatch({ type: projects.POST_PROJECT_HISTORY_REQUEST })
  try {
    const data = await projectService.addHistory(projectId, body)
    dispatch({
      type: projects.POST_PROJECT_HISTORY_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: projects.POST_PROJECT_HISTORY_FAILURE,
      payload: error,
    })
  }
}

export const resetProjectErrors = () => dispatch => {
  dispatch({
    type: projects.RESET_ERRORS_SUCCESS,
  })
}

export const getselectLastProject = () => dispatch => {
  dispatch({
    type: projects.GET_LAST_PROJECT,
  })
}
