import { FaPlus } from "react-icons/fa";


type ProductProps = {
    productId: string;
    name:string;
    photo:string;
    price:number;
    stock:number;
    handler:()=>void
}


const ProductCard = ({productId, name, photo, price, stock, handler} : ProductProps) => {

  return (
    <>
  {Array.from({length: 10},(_:null, index:number) => (
    <div className="product-card" key={index}>
      <img src={photo} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
      <div>
        <button onClick={()=>handler()}><FaPlus/></button>
      </div>
    </div>
  ))}
</>  )
}

export default ProductCard
