import './Product.css'
import data from '../../data/data'

const Product = () => {
  console.log(data);

  return (
    <div className="list_of_products">
      {
        data.map((x, index) => (
          <div key={index} className="one_product_card">

            <div>
              <img src={x.imageUrl} alt="product photo" />
              <div className="name_price">
                <span className="name">{x.name}</span>
                <span className="price">{x.price} €</span>
              </div>

            </div>

            <p>{x.description}</p>
            {/* <input type="submit" value="Send Request" /> */}
          </div>
        ))
      }
    </div>
  )
}

export default Product
