import React from 'react';
import classes from './Dialogs.module.css';
import DialogContainer from './Dialog/DialogContainer';
import MessageContainer from './Message/MessageContainer';
import DialogFormContainer from './DialogForm/DialogFormContainer'
import { addNewDialogActionCreator, addDialogActionCreator } from '../../redux/reducers/dialogReducer';
import Button from '../UI/Button/Button';
import Textarea from '../UI/Textarea/Textarea';

// const Dialogs = props => {
// 	const { dialogs, messages, newDialogText } = props.state;
// 	const { dispatch } = props;

// 	const buttonHandler = () => {
// 		const action = addDialogActionCreator();

// 		dispatch(action);
// 	};

// 	const textareaHandler = event => {
// 		const text = event.target.value;
// 		const action = addNewDialogActionCreator(text);

// 		dispatch(action);
// 	};

// 	return (
// 		<div className={classes.dialogs}>
// 			<div className={classes.dialogContainer}>
// 				<DialogContainer dialogs={dialogs} />
// 			</div>
// 			<div>
// 				<div className={classes.messages}>
// 					<MessageContainer messages={messages} />
// 				</div>
// 				<div>
// 					<div>
// 						<Textarea textareaHandler={textareaHandler} value={newDialogText} placeholder={''}/>
// 					</div>
// 					<div>
// 						<Button buttonHandler={buttonHandler} text={'Добавить'} />
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

const Dialogs = () => {
	return (
		<div className={classes.dialogs}>
			<div className={classes.leftBlock}>
				<DialogContainer />
			</div>
			<div className={classes.rightBlock}>
				<div className={classes.messages}>
					{/* <MessageContainer /> */}
				</div>
				<div className={classes.form}>
					{/* <DialogFormContainer /> */}
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
