  import React from "react";
  import { Link } from "react-router-dom";
  import { useSelector } from "react-redux";

  const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
      const { id, title, image, price, category } = product;
      return (
        <div className="flex columns-7 mb-4 " key={id}>
          <Link to={`/product/${id}`}>
            <div className="h-128 w-96 border-2 rounded items-center hover:bg-violet-500">
              <div className="hover:text-white">
                <div className="my-4 ml-14">
                  <img className="h-64 w-64" src={image} alt={title} />
                </div>
                <div className="border-t grid text-center py-4 font-semibold items-end">
                  <div className="font-medium h-14">{title}</div>
                  <div className="bg-red-200 hover:bg-indigo-900 text-black hover:text-white mt-4 ml-24 w-1/2">$ {price}</div>
                  <div className="pb-2 mt-7 font-light text-left ml-7">{category}</div>
                </div>
              </div> 
            </div>
          </Link>
        </div>
      );
    });
    return <>{renderList}</>;
  };

  export default ProductComponent;