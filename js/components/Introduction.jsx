import React from 'react';
import ProgressButton from 'us-forms-system/lib/js/components/ProgressButton';
import FormTitle from 'us-forms-system/lib/js/components/FormTitle';

class Introduction extends React.Component {
  constructor(props) {
    super(props);
    this.startForm = this.startForm.bind(this);
  }

  startForm() {
    const firstPage = this.props.route.pageList[1].path;
    this.props.router.push(firstPage);
  }  

  render() {
    return (
      <div className="schemaform-intro">
        <FormTitle title="Annual Student Enrollment Form"/>
        <p>For the school year 2017-2018</p>
        <ProgressButton
          onButtonClick={this.startForm}
          buttonText="Start Form"
          buttonClass="usa-button-primary schemaform-start-button"
          afterText="»"/>
      </div>
    );
  }
}

export default Introduction;
