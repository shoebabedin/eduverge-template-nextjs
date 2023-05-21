import Email from './Email';
import Forget from './Forget';
import Login from './LoginIndex';
import PaymentSuccess from './PaymentSuccess';
import Register from './Register';
import Video from './Video';

const Modal = () => {
    return (
        <>
            <Login/>
            <Register/>
            <Forget/>
            <Email/>
            <PaymentSuccess/>
            <Video/>
        </>
    );
};

export default Modal;