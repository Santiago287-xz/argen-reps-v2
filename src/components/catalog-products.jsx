import ProductCard from "./product-card";
import { siteConfig } from "../config/site";
import { useState } from "react";
import { ChevronDownIcon } from "./icons";

export default function CatalogProduct() {
  const productShowNum = 9;
  const [statusFilter, setStatusFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(productShowNum);
  const [inputValue, setInputValue] = useState("");

  const productsToDisplay = siteConfig.products
    .filter(
      (product) =>
        (statusFilter == "all" ||
          statusFilter.size === 3 ||
          statusFilter.has(product.type)) &&
        product.description.toLowerCase().includes(inputValue.toLowerCase())
    )
    .slice(0, visibleCount);

  const handleLoadMore = () =>
    setVisibleCount((prevCount) => prevCount + productShowNum);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    console.log(newValue);
  };
  return (
    <section className="w-full m-auto py-12 pt-8">
      {/* <h3 className="w-4/5 m-auto text-center sm:text-start text-4xl md:text-3xl lg:text-5xl sm:pb-2 text-zinc-800">
        Productos
      </h3> */}
      <div className="flex flex-wrap gap-4 sm:justify-around justify-center items-center mb-8 mx-auto max-w-[80rem]">
        <h2 className="text-5xl text-center w-full md:w-auto">Productos</h2>
        <h3></h3>
        <input
          className="w-1/3 px-4 py-3 rounded-md"
          placeholder="Buscar..."
          value={inputValue}
          onChange={handleChange}
        />
        {/*
        <Dropdown>
          <DropdownTrigger className="flex">
            <Button
              endContent={<ChevronDownIcon className="text-small" />}
              variant="ghost"
            >
              Categorias
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            disallowEmptySelection
            aria-label="Table Columns"
            closeOnSelect={false}
            selectedKeys={statusFilter}
            selectionMode="multiple"
            onSelectionChange={setStatusFilter}
          >
            {siteConfig.catalog_options.map((type) => (
              <DropdownItem key={type} className="capitalize">
                {type}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown> */}
      </div>
      <div className="flex flex-wrap flex-row content-center justify-center max-w-7xl m-auto">
        {productsToDisplay.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
      <div className="flex flex-col w-full pt-8">
        {visibleCount < siteConfig.products.length && (
          <button
            onClick={handleLoadMore}
            className="m-auto rounded-2xl px-4 py-3 text-zinc-800 font-medium bg-[#d4d4d8]"
          >
            Mostrar más productos
          </button>
        )}
      </div>
    </section>
  );
}
