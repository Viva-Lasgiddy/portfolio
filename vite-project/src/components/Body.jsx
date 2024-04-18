import './Nav.css'

const Body = (props) => {
  return (
    <>
     <div id='product-wrap'>
        {/* <div className="product-wrap">
             <h1 className='drop'>Hi im Gideon a Web Developer</h1>
        </div> */}
        <div id='drop-down'>
             <img src={props.Image} alt="body-image" />
             <h2> {props.bodyName} </h2>
             <p> {props.bodyType} </p>
        </div>
     </div>
    </>
  )
}

export default Body