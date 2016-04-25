'use strict';
import { EventEmitter } from 'events';
import dispatcher from '../Dispatcher';


class UserStore extends EventEmitter {
	constructor(){
		super()
		this.users =[
				{id: 1, firstname: 'user1', lastname: 'do1', email: 'user1@gmail.com'}
				,{id: 2, firstname: 'user2', lastname: 'do2', email: 'user2@gmail.com'}
				,{id: 3, firstname: 'user3', lastname: 'do4', email: 'user3@gmail.com'}
			]
	}

	getAll() {
		return this.users;
	}

	createUser(text) {
		const id = Date.now();
		this.users.push({
			id: id,
			firstname: text.firstname,
			lastname: text.lastname,
			email: text.email,
		});
		this.emit('change');
	}

	handelActions(action) {
		switch (action.type) {
			case "CREATE_USER": {
				this.createUser(action.text);
			}
		}
		// console.log("user store recieved a action", action);
	}




}

const userStore = new UserStore;
dispatcher.register(userStore.handelActions.bind(userStore));
// window.dispatcher = dispatcher;
// window.userStore = userStore;
export default userStore;
