import * as types from './actionTypes';

export function createUser(name, email) {
    return {type: types.CREATE_USER, payload: {name: name, email: email}};
}

export function updateUser(id, name, email) {
    return {type: types.UPDATE_USER, payload: {id: id, name: name, email: email}};
}

export function deleteUser(id) {
    return {type: types.DELETE_USER, payload: {id: id}};
}

export function showModal() {
    return {type: types.SHOW_MODAL};
}

export function hideModal() {
    return {type: types.HIDE_MODAL};
}

export function setModalId(id) {
    return {type: types.MODAL_ID, payload: {id: id}};
}