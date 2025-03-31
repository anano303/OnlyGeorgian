import Image from "next/image";
import desc1 from "../../assets/Images/desc 1.png";
import desc2 from "../../assets/Images/desc 2.png";
import desc3 from "../../assets/Images/desc 3.png";
import desc4 from "../../assets/Images/desc 4.png";
import "./description.css";


export default function Description() {
    return (
<div className="ImageContainer">
    <Image src={desc1}
    width={270}
    height={139}
    alt="desc1"
    ></Image>
    <Image src={desc2}
    width={270}
    height={139}
    alt="desc1"
    ></Image>
    <Image src={desc3}
    width={270}
    height={139}
    alt="desc1"
    ></Image>
    <Image src={desc4}
    width={270}
    height={139}
    alt="desc1"
    ></Image>
</div>


    )}