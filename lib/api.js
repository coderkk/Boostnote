import superagent from 'superagent'
import superagentPromise from 'superagent-promise'
import { API_URL } from '../config'
import auth from 'boost/auth'

const request = superagentPromise(superagent, Promise)

export function login (input) {
  return request
    .post(API_URL + 'auth/login')
    .send(input)
}

export function signup (input) {
  return request
    .post(API_URL + 'auth/register')
    .send(input)
}

export function fetchCurrentUser () {
  return request
    .get(API_URL + 'auth/user')
    .set({
      Authorization: 'Bearer ' + auth.token()
    })
}

export function fetchArticles (userId) {
  return request
    .get(API_URL + 'teams/' + userId + '/articles')
    .set({
      Authorization: 'Bearer ' + auth.token()
    })
}

export function createArticle (input) {
  return request
    .post(API_URL + 'articles/')
    .set({
      Authorization: 'Bearer ' + auth.token()
    })
    .send(input)
}

export function saveArticle (input) {
  return request
    .put(API_URL + 'articles/' + input.id)
    .set({
      Authorization: 'Bearer ' + auth.token()
    })
    .send(input)
}

export function destroyArticle (articleId) {
  return request
    .del(API_URL + 'articles/' + articleId)
    .set({
      Authorization: 'Bearer ' + auth.token()
    })
}

export function createTeam (input) {
  return request
    .post(API_URL + 'teams')
    .set({
      Authorization: 'Bearer ' + auth.token()
    })
    .send(input)
}

export function searchUser (key) {
  return request
    .get(API_URL + 'search/users')
    .query({key: key})
}

export function setMember (teamId, input) {
  return request
    .post(API_URL + 'teams/' + teamId + '/members')
    .set({
      Authorization: 'Bearer ' + auth.token()
    })
    .send(input)
}

export function deleteMember (teamId, input) {
  return request
    .del(API_URL + 'teams/' + teamId + '/members')
    .set({
      Authorization: 'Bearer ' + auth.token()
    })
    .send(input)
}

export function createFolder (input) {
  return request
    .post(API_URL + 'folders/')
    .set({
      Authorization: 'Bearer ' + auth.token()
    })
    .send(input)
}

export function sendEmail (input) {
  return request
    .post(API_URL + 'mail')
    .set({
      Authorization: 'Bearer ' + auth.token()
    })
    .send(input)
}

export default {
  login,
  signup,
  fetchCurrentUser,
  fetchArticles,
  createArticle,
  saveArticle,
  destroyArticle,
  createTeam,
  searchUser,
  setMember,
  deleteMember,
  createFolder,
  sendEmail
}