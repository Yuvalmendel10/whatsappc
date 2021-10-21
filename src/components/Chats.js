import React, {useState, useEffect} from 'react';
import { List, Image } from 'semantic-ui-react'
import ModalMassages from './ModalMassages';

const Chats = () => {
	const [chats, setChats] = useState([]);
	const time= 2000;
	const [x,setX] = useState(0);
	const [id,setId] = useState();
	const [popMassages,setPopMassages] = useState([]);
	const [isOpen, setIsOpen] = useState(false)
	const [name, setName] = useState('');

	const avatars = [
		"https://react.semantic-ui.com/images/avatar/small/christian.jpg",
		"https://react.semantic-ui.com/images/avatar/small/elliot.jpg",
		"https://react.semantic-ui.com/images/avatar/small/stevie.jpg",
		"https://react.semantic-ui.com/images/avatar/small/joe.jpg",
		"https://react.semantic-ui.com/images/avatar/small/veronika.jpg",
		"https://react.semantic-ui.com/images/avatar/small/jenny.jpg",
		"https://react.semantic-ui.com/images/avatar/small/nan.jpg"
	];

	useEffect(() => {
		const timer = setTimeout(() => {
			setX(prev => ++prev);
		},time);
		return () => clearTimeout(timer)
	},[chats])

	useEffect(() => {
		getData();
	},[x]);

	const getMassageById = (id, name) => {
		setName(name);
		setIsOpen(true);
		fetch('http://localhost:8000/api/get_chat/:messageId', {
	      method: 'post',
	      headers: {'Content-Type': 'application/json'},
	      body: JSON.stringify({
	        id: id
	      })

	    })
	      .then(response => response.json())
	      .then(massageBody => {
	      	setPopMassages(massageBody);
	      })
	      .catch(err => console.error(err));
  }

  const getData = () => {
  	fetch('http://localhost:8000/api/ping_massage')
	      .then(response => response.json())
	      .then(chat => {
	      	let chatToInsert = {...chat,avatarUrl: avatars[getRandomNumber(avatars.length)]}
       	setChats(prev =>{
       		if (!prev.find(item => chat.id === item.id)) {
       			return [...prev,chatToInsert];
       		} else {
       			setX(prev => ++prev);
       			return prev;
       		}
       	});
       })
 	    .catch(err => console.error(err));
  }

  	const getRandomNumber = (length) => {
  		const index = Math.floor(Math.random() * length);
  		return index;
  	}

	return (
		<div className='tc pointer' >

		  <List divided size='massive'>
		   {chats.map((chat,index) => <List.Item key={index} onClick={() => getMassageById(chat.id, chat.fromName)}>
				 <Image avatar src={chat.avatarUrl} />
					<List.Content>
					<List.Header>{chat.fromName}</List.Header>
					<List.Description>{chat.fromNumber}</List.Description>
					</List.Content>
			</List.Item>)}
		 </List>
		 <ModalMassages
		 	name={name}
		 	massages={popMassages}
		 	open={isOpen}
		 	setOpen={setIsOpen}
		 />
		</div>
	);
}


export default Chats;