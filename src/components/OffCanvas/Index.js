import CartCanvas from "./CartCanvas";
import FilterCanvas from "./FilterCanvas";
import Nav from "./Nav";
import NotificationCanvas from "./NotificationCanvas";
import SubNav from "./SubNav";

const OffCanvas = () => {
  return (
    <>
      <Nav />
      <SubNav />
      <CartCanvas/>
      <FilterCanvas/>
      <NotificationCanvas/>
    </>
  );
};

export default OffCanvas;
