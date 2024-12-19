import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
   const navigate = useNavigate() 
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
  });

  return (
    <div className="shipping">
      <div className="shipping-back">
        <button onClick={() => navigate("/cart")}>
          <BiArrowBack />
        </button>
      </div>
      <div>
        <div >
          <form className="shipping-form">
            <h2>Shipping <br /> Address</h2>
            <input
              placeholder="Enter Your Address"
              type="text"
              name="address"
              value={shippingInfo.address}
              onChange={(e) =>
                setShippingInfo({ ...shippingInfo, address: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Enter Your City Name"
              name="city"
              value={shippingInfo.city}
              onChange={(e) =>
                setShippingInfo({ ...shippingInfo, city: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Enter Your State Name"
              name="state"
              value={shippingInfo.state}
              onChange={(e) =>
                setShippingInfo({ ...shippingInfo, state: e.target.value })
              }
            />
            {/* <input
              type="text"
              placeholder="Enter Your Country"
              name="country"
              value={shippingInfo.country}
              onChange={(e) =>
                setShippingInfo({ ...shippingInfo, country: e.target.value })
              }
            /> */}
            <select name="country" id="country"
             value={shippingInfo.country}
             onChange={(e) =>
               setShippingInfo({ ...shippingInfo, country: e.target.value })
             }
            >
                <option value="">Select Country</option>
                <option value="Pakistan">Pakistan</option>
                <option value="India">India</option>
            </select>
            <input type="number" placeholder="Enter Your Pin Code" name="pinCode"
            value={shippingInfo.pinCode}
            onChange={(e) =>
              setShippingInfo({ ...shippingInfo, pinCode: e.target.value })
            }
            />
            <button type="submit">Pay Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
