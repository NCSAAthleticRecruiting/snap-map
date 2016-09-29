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
      modalIsOpen: false,
      url: "www.ncsasports.org",
      list: this.props.athlete_data
    };
  }

  openModal(url) {
    this.setState({modalIsOpen: true});
    this.setState({url: url})
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {

    console.log(this.props)
    return (
      <div>
        <div>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles} >
            <iframe src={this.state.url}></iframe>

            <button onClick={this.closeModal.bind(this)}>close</button>

          </Modal>
        </div>

        <div id='map'>
          <Map markers={this.props.markers}/>
        </div>
        <div id='vtable'>

          <VideoTable thumbnails={this.state.list.map((athlete, i) => {
              return <li key={i} onClick={this.openModal.bind(this, athlete["video_url"])}>
                        <img src={athlete["thumbnail_url"]} alt={athlete["name"]} />
                      </li>})}  />
        </div>
        <div id='info_section'>
          <InfoSection athlete_data={this.state.list} />
        </div>
      </div>
    );
  }
}
