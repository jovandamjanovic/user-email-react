import initialState from './initialState';
import fpswitch from '../lib/fpswitch';

const userReducer = (state = initialState, action) => {
    const cases = {
        'CREATE_USER': () => Object.assign({}, state, {users: state.users.concat([{name: action.payload.name, email: action.payload.email}])}),
        'UPDATE_USER': () => {
            let tempUsers = state.users.slice();
            tempUsers[action.payload.id] = {name: action.payload.name, email: action.payload.email};
            return Object.assign({}, state, {users: tempUsers});
        },
        'DELETE_USER': () => {
            let tempUsers = state.users.slice();
            tempUsers.splice(action.payload.id, 1);
            return Object.assign({}, state, {users: tempUsers});
        },
        'SHOW_MODAL': () => Object.assign({}, state, {appState: Object.assign({}, state.appState, {showUserModal: true})}),
        'HIDE_MODAL': () => Object.assign({}, state, {appState: Object.assign({}, state.appState, {showUserModal: false})}),
        'MODAL_ID': () => Object.assign({}, state, {appState: Object.assign({}, state.appState, {modalId: action.payload.id})}),
    }
    return fpswitch(cases)(action.type)(Object.assign({}, state));
};

export default userReducer;