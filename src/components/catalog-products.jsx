import ProductCard from "./product-card";
import { siteConfig } from "../config/site";
import { useState } from "react";
import { Button } from "keep-react";
import { Tooltip } from "keep-react";
import { BsQuestion } from "react-icons/bs";

export default function CatalogProduct() {
  const productShowNum = 9;
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(productShowNum);
  const [inputValue, setInputValue] = useState("");

  const productsToDisplay = siteConfig.products
    .filter(
      (product) =>
        (selectedCategory === "all" || selectedCategory === product.type) &&
        product.description.toLowerCase().includes(inputValue.toLowerCase())
    )
    .slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(productShowNum);
  };

  const handleLoadMore1 = () => {
    setVisibleCount((prevCount) => prevCount + productShowNum);
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    console.log(newValue);
  };
  return (
    <section className="w-full m-auto py-12 pt-8">
      <div className="flex flex-wrap gap-4 sm:justify-around justify-center items-center mb-8 mx-auto max-w-[80rem]">
        <div className="flex items-center gap-2 p-[0.625rem] pb-0">
          <h2 className="text-5xl text-center w-full md:w-auto text-white">
            PRODUCTOS
          </h2>
          <Tooltip
            content="Estos son productos recomendados por nosotros"
            trigger="hover"
            placement="right"
            animation="duration-300"
            style="dark"
          >
            <Button className="p-0 w-[2.125rem] h-[2.125rem]">
              <BsQuestion className="text-white bg-[#1a2430] rounded-lg text-4xl" />
            </Button>
          </Tooltip>
        </div>
        <input
          className="w-1/3 px-4 py-3 rounded-md bg-[#1a2430] text-white"
          placeholder="Buscar..."
          value={inputValue}
          onChange={handleChange}
        />
      </div>
      <div className="flex justify-center">
        {siteConfig.catalog_options.map((category) => (
          <Button
            key={category}
            className="m-4 rounded-[0.5rem] bg-[#1a2430] text-white"
            type="primary"
            onClick={() => {
              setSelectedCategory(category);
              handleLoadMore();
            }}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="flex flex-wrap flex-row content-center justify-center max-w-7xl m-auto">
        {productsToDisplay.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
      <div className="flex flex-col w-full pt-8">
        {visibleCount < siteConfig.products.length && (
          <button
            onClick={handleLoadMore1}
            className="m-auto rounded-2xl px-4 py-3 text-zinc-800 font-medium bg-[#d4d4d8]"
          >
            Mostrar más productos
          </button>
        )}
      </div>
    </section>
  );
}
