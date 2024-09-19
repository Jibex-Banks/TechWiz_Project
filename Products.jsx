import { ShoppingCart } from 'lucide-react';

function Product() {
    const PCategories=[
        {name:"Furniture",src:"chair.jpeg" },
        {name:"Kitchen",src:"ig.jpeg" },
        {name:"Lighting",src:"io.jpg" },
        {name:"Décor",src:"ip.webp" },
        {name:"Bathroom",src:"iq.jpg" }
    ]
    return(
        <>
        <div>
            <div className="topnavBar">
                <ul>
                    <li>Furniture</li>
                    <li>Kitchen</li>
                    <li>Lighting</li>
                    <li>Décor</li>
                    <li>Bathroom</li>
                    <li>{ShoppingCart}</li>
                </ul>
            </div>
            
            <div className="Productcategory" style={{backgroundImage:url`(${ij.jpg})`}}>
                <h3>Shop By Category</h3>
                {PCategories.map((PCategory,index)=>
                <div key={index} className="catcont">
                    <div className="Pcategory" style={{backgroundImage:url`(${PCategory.src})`}}>
                    </div>
                    <h4>{PCategory.name}</h4>
                </div>
                 )}
            </div>
     </div>
        </>
    );
}
export default Product;