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
    _id: "s",
    role: "user",
  };

  return (
    <nav className="header">
      <div className="header-1">
        <h1>Logo</h1>
      </div>
      <div className="header-2">
        <Link to={"/"}>Home</Link>
        <Link to={"/seacrh"}>
          <LuSearch />
        </Link>
        <Link to={"/cart"}>
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
                    <Link to={"/admin/dashboard"}>Dashboard</Link>
                  </>
                )}
                <Link to={"/order"}>Order</Link>
                <Link to={"#"}>
                  Logout <PiSignOutBold />
                </Link>
              </div>
            </dialog>
          </>
        ) : (
          <>
            <button>
              Login <CgLogIn />
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;