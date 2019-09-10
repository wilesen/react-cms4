import * as React from 'react';

interface IProps {
    form: any
}

class NotFound extends React.Component<IProps> {
    public handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFields((err: Error, values: any) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    public render() {
        const { getFieldDecorator } = this.props.form;
        return (
            404
        );
    }
}

export default NotFound