import React, {Component} from 'react';
import Map from './map';
import VideoTable from './video_table';
import InfoSection from './info_section';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
export default class Container extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.openModal.bind(this)}>Open Modal</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles} >


            <button onClick={this.closeModal.bind(this)}>close</button>
            <iframe src="http://www.w3schools.com"></iframe>
          </Modal>
        </div>

        <div id='map'>
          <Map markers={this.props.markers}/>
        </div>
        <div id='vtable'>
          <VideoTable athlete_data={this.props.athlete_data.chicago} />
        </div>
        <div id='info_section'>
          <InfoSection athlete_data={this.props.athlete_data.chicago} />
        </div>
      </div>
    );
  }
}
