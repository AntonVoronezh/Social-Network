import React from 'react';
import classes from './Users.module.css';
import User from './User/User';

const Users = props => {
	props.setUsersCB(
		users: [{
			id: 1,
			followFlag: true,
			img: 'http://www.youloveit.ru/uploads/posts/2014-11/1416149125_youloveit_ru_avatarki_gravity_folz05.png',
			firstName: 'Имя 1',
			status: 'Это статус 1',
			location: { country: 'Страна 1', sity: 'Город 1' },
		},
		{
			id: 2,
			followFlag: false,
			img:
				'http://www.youloveit.ru/uploads/posts/2016-04/1460382393_youloveit_ru_avatarki_super_kot_ledi_bug14.png',
			firstName: 'Имя 2',
			status: 'Это статус 2',
			location: { country: 'Страна 2', sity: 'Город 2' },
		},
		{
			id: 3,
			followFlag: true,
			img: 'http://prosmeshariki.ru/avatarki/8.gif',
			firstName: 'Имя 3',
			status: 'Это статус 3',
			location: { country: 'Страна 3', sity: 'Город 3' },
		}]
	);

	const users = props.users.map(u => {
		return (
			<User
				key={u.id}
				status={u}
				followCB={props.followCB}
				unfollowCB={props.unfollowCB}
				setUsersCB={props.setUsersCB}
			/>
		);
	});

	return <div className={classes.users}>{users}</div>;
};

export default Users;
