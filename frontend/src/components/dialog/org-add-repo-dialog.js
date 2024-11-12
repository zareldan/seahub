import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Form, FormGroup, Label, Alert } from 'reactstrap';
import { gettext, orgID } from '../../utils/constants';
import { orgAdminAPI } from '../../utils/org-admin-api';
import { Utils } from '../../utils/utils';

const propTypes = {
  toggle: PropTypes.func.isRequired,
  groupID: PropTypes.string,
  onAddNewRepo: PropTypes.func.isRequired,
};

class AddRepoDialog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      repoName: '',
      errMessage: '',
    };
  }

  handleSubmit = () => {
    let isValid = this.validateName();
    if (isValid) {
      orgAdminAPI.orgAdminAddDepartmentRepo(orgID, this.props.groupID, this.state.repoName.trim()).then((res) => {
        this.props.toggle();
        this.props.onAddNewRepo(res.data);
      }).catch(error => {
        let errorMsg = Utils.getErrorMsg(error);
        this.setState({ errMessage: errorMsg });
      });
    }
  };

  validateName = () => {
    let errMessage = '';
    const name = this.state.repoName.trim();
    if (!name.length) {
      errMessage = gettext('Name is required');
      this.setState({ errMessage: errMessage });
      return false;
    }
    return true;
  };

  handleChange = (e) => {
    this.setState({
      repoName: e.target.value,
    });
  };

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.handleSubmit();
      e.preventDefault();
    }
  };

  render() {
    const { errMessage } = this.state;
    return (
      <Modal isOpen={true} toggle={this.props.toggle} autoFocus={false}>
        <ModalHeader toggle={this.props.toggle}>{gettext('New Library')}</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="repoName">{gettext('Name')}</Label>
              <Input
                id="repoName"
                onKeyDown={this.handleKeyDown}
                value={this.state.repoName}
                onChange={this.handleChange}
                autoFocus={true}
              />
            </FormGroup>
          </Form>
          {errMessage && <Alert color="danger" className="mt-2">{errMessage}</Alert>}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.props.toggle}>{gettext('Cancel')}</Button>
          <Button color="primary" onClick={this.handleSubmit}>{gettext('Submit')}</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

AddRepoDialog.propTypes = propTypes;

export default AddRepoDialog;
