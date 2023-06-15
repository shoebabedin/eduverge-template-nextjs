import Email from './Email';
import Forget from './Forget';
import Login from './LoginIndex';
import PaymentRequest from './PaymentRequest';
import PaymentSuccess from './PaymentSuccess';
import Register from './Register';
import RemoveAccount from './RemoveAccount';
import StudentAddCard from './StudentAddCard';
import Video from './Video';
import ViewCertificate from './ViewCertificate';
import WithdrawFound from './WithdrawFound';

const Modal = () => {
    return (
        <>
            <Login/>
            <Register/>
            <Forget/>
            <Email/>
            <PaymentSuccess/>
            <Video/>
            <ViewCertificate/>
            <StudentAddCard/>
            <WithdrawFound/>
            <PaymentRequest/>
            <RemoveAccount/>
        </>
    );
};

export default Modal;