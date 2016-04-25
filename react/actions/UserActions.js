'use strict';
import dispatcher from '../Dispatcher';

export function createUser(text) {
	dispatcher.dispatch({
		type: 'CREATE_USER',
		text
	});
}

export function deleteUser(id) {
	dispatcher.dispatch({
		type: 'DELETE_USER',
		id
	});
}
