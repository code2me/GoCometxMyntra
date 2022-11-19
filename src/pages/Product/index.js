import {
  useEffect,
  useState
} from "react";
import {
  fetchAproduct
}
  from "utils/fetchAproduct";

function Products() {
  const [isFetching, setIsFetching] = useState(true);
  const [product, setProduct] = useState(null);
  const [filterData, setFilterData] = useState({
    gender: [],
    categories: [],
    price: [],
  });
  useEffect(() => {
    setIsFetching(true);
    fetchAproduct().then((product) => {
      console.log(product)
      product[0].map((item) => {
        if (item.url === 'shirts/wrogn/wrogn-men-pink-slim-fit-solid-casual-shirt/2478210/buy') {
          setProduct(item);
          //setFilterData(filter_data);
          console.log(item)
        }
      })

    });
  }, []);
  return (<div>
    {product ? (
        <div>
          <div>
            Home / <span className="bold semi-bold">Shirts for Men & Women</span>
          </div>
        </div>
      ) : (<div>loading</div>)
    }
  </div>

  );
}

export default Products;