import {
  useEffect,
  useState
} from "react";
import {
  fetchAproduct
}
  from "utils/fetchAproduct";
import "./index.css";

function Products() {
  const [isFetching, setIsFetching] = useState(true);
  const [item, setItem] = useState(null);
  const [filterData, setFilterData] = useState({
    gender: [],
    categories: [],
    price: [],
  });

  let data = sessionStorage.getItem("key");
  console.log(data, 'picked')

  useEffect(() => {
    setIsFetching(true);
    fetchAproduct().then((product) => {
      //console.log(product)
      product[0].map((item) => {
        if (item.url === data) {
          setItem(item);
          //console.log(item.url)
          //setFilterData(filter_data);
        }
      })
    });
  }, []);

  const onClick = () => {

  }


  return (<div>
    {item ? (
      <div>
        <div className="Homediv">
          Home / <span className="bold semi-bold">Shirts for Men & Women</span>
        </div>
        <div className="product-main-div">
          <div className="imgdiv">
            <img src={item.searchImage} alt="" />
          </div>
          <div className="right-div">
            <h1>
              {item.brand}
            </h1>
            <div>
              {item.title}
            </div>
            <div>
              {item.rating}
            </div>
            <div>
              Discounted Price: {item.discountedPrice}
            </div>
            <div>
              Original Price: {item.originalPrice}
            </div>
            <div>
              {item.discountPercentage}
            </div>
            inclusive of all taxes

            <div>
              Select Size
            </div>
              <ul className="sizelist" style={{ listStyle: 'none' }}>
                <li>xs</li>
                <li>s</li>
                <li>m</li>
                <li>l</li>
                <li>xl</li>
                <li>xxl</li>
                <li>4xl</li>
              </ul>
          
          <div className="buttons">
            <button className="btn1">ADD TO BAG</button>
            <button className="btn2"> WISHLIST </button>
          </div>

        </div>

        </div>

      </div>
      ) : (<div>loading</div>)
    }
  </div>

  );
}

export default Products;