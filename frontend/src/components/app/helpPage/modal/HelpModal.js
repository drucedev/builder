import React from 'react';
import PropTypes from 'prop-types';
import {isHelpOpen} from "../../../../selectors/modal";
import {toggleModal} from "../../../../actions/modal";
import {connect} from "react-redux";
import HelpContent from "../HelpContent";
import Modal from 'react-modal';
import './HelpModal.css';

export class BaseHelpModal extends React.Component {
  onToggleModal = () => {
    this.props.toggleModal('help');
  };

  render() {
    return (
      <Modal isOpen={this.props.isOpen}
             onRequestClose={this.onToggleModal}
             contentLabel="Горячие клавиши редактора запросов"
             className="modal-content center-block helpModal">
        <div className="modal-header">
          <button type="button" className="close" onClick={this.onToggleModal}>
            <span aria-hidden={true}>&times;</span>
          </button>
          <div className="modal-title text-center">Горячие клавиши редактора запросов</div>
        </div>
        <div className="modal-body">
          <HelpContent/>
        </div>
      </Modal>
    )
  }
}

BaseHelpModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isOpen: isHelpOpen(state)
});

const mapDispatchToProps = {
  toggleModal
};

export default connect(mapStateToProps, mapDispatchToProps)(BaseHelpModal);
