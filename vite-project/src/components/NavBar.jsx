import './Nav.css'
const NavBar = ()=>{
    return(
        <>
            <div id="navi-bar">
                <div className="a-tag">
                    <a href="">About </a>
                    <a href=""> Projects </a>
                    <a href="">Contact</a>
                </div>
            </div>
        </>
    )
}

export default NavBar



// import './Products.css'


// const Products=(props)=>{
    
//     return(
//         <>
//             <div >
//                 <div className="product-wrap">
//                     <img src= {props.productImage} alt="product-image" />
//                     <p>{props.productName}</p>
//                     <h3>{props.productPrice}</h3>
//                 </div>
//             </div>
        
//         </>
//     )
// }
// export default Products