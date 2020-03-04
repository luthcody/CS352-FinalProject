import React, {Component} from 'react';
import Modal from '@material-ui/core/Modal';
import CloseIcon from '@material-ui/icons/Close';
import './Modal.css';

class CustomModal extends Component {
    render() {
        return (
            <div>
                <Modal open={this.props.open} onClose={this.props.onClose} >
                    <div className="popupModal">
                        <div className="modalHeader">
                            <h1 className="title">{this.props.title}</h1>
                            <CloseIcon className="close" onClick={this.props.onClose} fontSize="large"/>
                        </div>
                        {this.props.content}
                    </div>
                </Modal>
            </div>
        )
    }
}

export default CustomModal