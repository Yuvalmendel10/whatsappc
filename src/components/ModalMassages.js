import React, {useState, useEffect} from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import './ModalMassages.css'



const ModalMassages = (props) => {
	const {name,massages,open,setOpen} = props;

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header content={name + ":"} />
      <Modal.Content>
        
          {massages.map((massageBody, i) => 
          	<p key={i} className="massages">{massageBody.massage}{" " + massageBody.date}</p>
          	)}
        
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={() => setOpen(false)}>
          <Icon name='remove' /> Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
}


export default ModalMassages;