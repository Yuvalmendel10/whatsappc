import React, {useState, useEffect} from 'react';
import Chats from '../Chats';
import Massages from '../Massages/Massages';
import './OpenPage.css';


const OpenPage =() => {

	const [massage, setMassage] = useState('');


	return(

			<div className='tc fle'>

				<Chats massage={massage}/>
				<Massages massage={massage}/>
						
			</div>

		)

}
export default OpenPage;




