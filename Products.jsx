import { ShoppingCart } from 'lucide-react';

function Product() {
    const PCategories=[
        {name:"Furniture",src:"chair.jpeg" },
        {name:"Kitchen",src:"ig.jpeg" },
        {name:"Lighting",src:"io.jpg" },
        {name:"Décor",src:"ip.webp" },
        {name:"Bathroom",src:"iq.jpg" },
        {name:"Sales",src:"sale.jpeg"}
    ]
    const Furnitures=[
        {name:"Chair",src:"chair.jpeg",price:"200,000"},
        {name:"Table",src:"table1.jpeg",price:"400,000"},
        {name:"Bed",src:"bed.jpeg",price:"900,000"},
        {name:"Wardrobe",src:"wardrobe.jpeg",price:"300,000"}
    ]
    return ( 
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

            <div className="furniture">
                <h3>Furniture</h3>
                <div className="furnitureButtton">
                <button>Sofas and Crouches</button>
                <button>Chairs and Recliners</button>
                <button>Tables</button>
                <button>Beds and Mattresses</button>
                <button>Storage</button>
                </div>
                <div className="furnitureShop">
                    <div className="furnitureItemContainer">
                        {Furnitures.map((Furniture,index)=>
                        <div key={index} className="furnitureItem">
                            <div className="furnitureImage" style={{backgroundImage:url`(${Furniture.src})
                            `}}></div>
                            <h4>{Furniture.name}</h4>
                            <p>{Furniture.price}</p>
                            <p>{Furniture.detail}</p>
                            <button className='FurnitureButton'>ADD TO CART {ShoppingCart}</button>
                        </div>
                        )}
                 </div>
                </div>
            </div>

            <div className="Kitchen">
                <h3>Kitchen</h3>
                <div className="KitchenButtton">
                <button>Sofas and Crouches</button>
                <button>Chairs and Recliners</button>
                <button>Tables</button>
                <button>Beds and Mattresses</button>
                <button>Storage</button>
                </div>
                <div className="KitchenShop">
                    <div className="KitchenItemContainer">
                        {Kitchens.map((Kitchen,index)=>
                        <div key={index} className="KitchenItem">
                            <div className="KitchenImage" style={{backgroundImage:url`(${Kitchen.src})
                            `}}></div>
                            <h4>{Kitchen.name}</h4>
                            <p>{Kitchen.price}</p>
                            <p>{Kitchen.detail}</p>
                            <button className='KitchenButton'>ADD TO CART {ShoppingCart}</button>
                        </div>
                        )}
                 </div>
                </div>
            </div>

            <div className="Lighting">
                <h3>Lighting</h3>
                <div className="LightingButtton">
                <button>Sofas and Crouches</button>
                <button>Chairs and Recliners</button>
                <button>Tables</button>
                <button>Beds and Mattresses</button>
                <button>Storage</button>
                </div>
                <div className="LightingShop">
                    <div className="LightingItemContainer">
                        {Lightings.map((Lighting,index)=>
                        <div key={index} className="LightingItem">
                            <div className="LightingImage" style={{backgroundImage:url`(${Lighting.src})
                            `}}></div>
                            <h4>{Lighting.name}</h4>
                            <p>{Lighting.price}</p>
                            <p>{Lighting.detail}</p>
                            <button className='LightingButton'>ADD TO CART {ShoppingCart}</button>
                        </div>
                        )}
                 </div>
                </div>
            </div>

            <div className="Bathroom">
                <h3>Bathroom</h3>
                <div className="BathroomButtton">
                <button>Sofas and Crouches</button>
                <button>Chairs and Recliners</button>
                <button>Tables</button>
                <button>Beds and Mattresses</button>
                <button>Storage</button>
                </div>
                <div className="BathroomShop">
                    <div className="BathroomItemContainer">
                        {Bathrooms.map((Bathroom,index)=>
                        <div key={index} className="BathroomItem">
                            <div className="BathroomImage" style={{backgroundImage:url`(${Bathroom.src})
                            `}}></div>
                            <h4>{Bathroom.name}</h4>
                            <p>{Bathroom.price}</p>
                            <p>{Bathroom.detail}</p>
                            <button className='BathroomButton'>ADD TO CART {ShoppingCart}</button>
                        </div>
                        )}
                 </div>
                </div>
            </div>

            Décor
        </div>
        </>
    );
}
export default Product;