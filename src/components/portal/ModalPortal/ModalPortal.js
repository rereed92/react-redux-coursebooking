import { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

const modalRoot = document.getElementById('modal-root');

class ModalPortal extends Component {

    constructor(props) {
        super(props);

        this.el = document.createElement('div');
        this.el.className = "modal";
    }
  
    componentDidMount() {
        modalRoot.appendChild(this.el);
    }
  
    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }
  
    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el,
        );
    }
}

export default connect()(ModalPortal);