import { Link } from "react-router-dom";
import { LuSearch } from "react-icons/lu";
import { PiShoppingCart } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";
import { CgLogIn } from "react-icons/cg";
import { useState } from "react";
const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const user: { _id: string; role: string } = {
    _id: "",
    role: "user",
  };

  return (
    <nav className="header">
      <div className="header-1">
        <h1 onClick={() => setIsOpen(false)}>Logo</h1>
      </div>
      <div className="header-2">
        <Link to={"/"} onClick={() => setIsOpen(false)}><h5>HOME</h5></Link>
        <Link to={"/search"} onClick={() => setIsOpen(false)}>
          <LuSearch />
        </Link>
        <Link to={"/cart"} onClick={() => setIsOpen(false)}>
          <PiShoppingCart />
        </Link>

        {user?._id ? (
          <>
            <button onClick={() => setIsOpen((prev) => !prev)}>
              <FaRegUser />
            </button>
            <dialog open={isOpen}>
              <div>
                {user.role === "admin" && (
                  <>
                    <Link to={"/admin/dashboard"} onClick={() => setIsOpen(false)}>Dashboard</Link>
                  </>
                )}
                <Link to={"/order"} onClick={() => setIsOpen(false)}>Order</Link>
                <Link to={"#"} >
                  Logout <PiSignOutBold />
                </Link>
              </div>
            </dialog>
          </>
        ) : (
          <>
            <button className="login-button" >
              <Link to={"/login"}>Login <CgLogIn /></Link>
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
