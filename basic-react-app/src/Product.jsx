import "./Product.css";
import Price from "./Price";

function Product({ title, idx }) {  // accept idx from parent
  let oldPrice = ["12,55", "485302", "904092", "902209"];
  let newPrice = ["8986", "7952", "8592", "8890"];
  let description=["8000 DPI","intutive surface","designed for idPad Pro",
    "wireless"
  ];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx]}</p>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
    </div>
  );
}

export default Product;
