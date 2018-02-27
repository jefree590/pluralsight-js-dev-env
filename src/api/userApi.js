/*eslint-disable no-console */
import 'whatwg-fetch';
import getBaseUrl from './baseURL';

const baseURl = getBaseUrl();


export function getUsers(){
  //debugger;
  return get('users');
}

export function deleteUser(id){
  return del(`users/${id}`);
}

function get(url){
  return fetch(baseURl + url).then(onSuccess, onError);
}

function del(url){
  const request = new Request(baseURl + url,{
    method: 'DELETE'

  })
  return fetch(request).then(onSuccess, onError)
}

function onSuccess(response){
  return response.json();
}

function onError(error){
  console.log(error); //eslint-disable-line no-console
}
