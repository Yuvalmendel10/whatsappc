import React, {useState, useEffect} from 'react';
import { List, Image } from 'semantic-ui-react'

const Chats = ({massage}) => {
	const [chats, setChats] = useState([]);
	const [id,setId] = useState();
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
		getData();
	},[]);



	const getRandomNumber = (length) => {
  		const index = Math.floor(Math.random() * length);
  		return index;
  	}

	
  const getData = () => {
  	fetch('https://jsonplaceholder.typicode.com/users')
	      .then(response => response.json())
	      .then(chatsArray => {
	      	console.log(chatsArray)
	      	chatsArray.map(chat => {
	      		let chatToInsert = {...chat,avatarUrl: avatars[getRandomNumber(avatars.length)]}
	      		setChats(prev => {
	      			if (!prev.find(item => chat.id === item.id)) {
		       			return [...prev,chatToInsert];
		       		} else {
		       			return prev;
		       		}
	      		});
	      	})
	      })
  }
  


	

	return (
		<div className='tc pointer' >

		  <List divided size='massive'>
		   {chats.map((chat,index) => <List.Item key={index} >
				 <Image avatar src={chat.avatarUrl} />
					<List.Content>
					<List.Header>{chat.name}</List.Header>
					<List.Description>{chat.massage}</List.Description>
					</List.Content>
			</List.Item>)}
		 </List>
		</div>
	);
}


export default Chats;


//onClick={() => getMassageById(chat.id, chat.fromName)}