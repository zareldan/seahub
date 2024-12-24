import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { Utils } from '../../../utils/utils';
import { gettext } from '../../../utils/constants';
import UserSelect from '../../user-select';
import SeahubModalHeader from '@/components/common/seahub-modal-header';

const propTypes = {
  groupName: PropTypes.string.isRequired,
  transferGroup: PropTypes.func.isRequired,
  toggleDialog: PropTypes.func.isRequired
};

class SysAdminTransferGroupDialog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      submitBtnDisabled: true
    };
  }

  handleSelectChange = (option) => {
    this.setState({
      selectedOption: option,
      submitBtnDisabled: option == null
    });
  };

  submit = () => {
    const receiver = this.state.selectedOption.email;
    this.props.transferGroup(receiver);
    this.props.toggleDialog();
  };

  render() {
    const { submitBtnDisabled } = this.state;
    const groupName = '<span class="op-target">' + Utils.HTMLescape(this.props.groupName) + '</span>';
    const msg = gettext('Transfer Group {placeholder} to').replace('{placeholder}', groupName);
    return (
      <Modal isOpen={true} toggle={this.props.toggleDialog}>
        <SeahubModalHeader toggle={this.props.toggleDialog}>
          <span dangerouslySetInnerHTML={{ __html: msg }}></span>
        </SeahubModalHeader>
        <ModalBody>
          <UserSelect
            ref="userSelect"
            isMulti={false}
            placeholder={gettext('Select a user')}
            onSelectChange={this.handleSelectChange}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.props.toggleDialog}>{gettext('Cancel')}</Button>
          <Button color="primary" onClick={this.submit} disabled={submitBtnDisabled}>{gettext('Submit')}</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

SysAdminTransferGroupDialog.propTypes = propTypes;

export default SysAdminTransferGroupDialog;
