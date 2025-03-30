import { useCart } from "../context/cart-context";
import Link from "next/link";
import cartIcon from "../../../assets/Images/basket.png";
import "./cart-icon.css";
import Image from "next/image";

export function CartIcon() {
  const { items } = useCart();
  const itemCount = items.reduce((acc, item) => acc + item.qty, 0);

  return (
    <Link href="/cart">
      {/* <Button variant="ghost" size="icon" className="relative"> */}
      <button className="cartIconButton">
        {itemCount > 0 && <span className="cartIconsSpan">{itemCount}</span>}
        <Image src={cartIcon} 
        width={23}
        height={37}
        className="cartIcon"
        alt="cart icon" />
        კალათა
      </button>
      {/* </Button> */}
    </Link>
  );
}
