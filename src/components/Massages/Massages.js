import React, {useState, useEffect} from 'react';
import './Massages.css';


const Massages =({massage}) => {

	const [searchbox,setSearchbox] = useState('');

	const onSearchBoxChange= (event) => {
	setSearchbox(event.target.value);
}

	
	const onSubmit = (event) => {
	event.preventDefault();
    
  }



	return(

			<div className='tc fle'>

				<div>
					<input className="tr system serif br-pill pa2 ba b--white-50 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        type="text"  
			        placeholder="massage" 
			        id="search"
			        onChange={onSearchBoxChange}
			        /> 
				</div>

				<div className="tc">
			      <input className="system serif br-pill b ph3 pv2 input-reset ba b--white-50 bg-transparent grow pointer f6 dib" 
			      type="submit" 
			      value="התחברות"
			      onClick={onSubmit}
			      />
			    </div>

				{massage}
						
			</div>

		)

}
export default Massages;




