import { useState, useEffect } from "react";
import Filter from "../components/Filter";
import Table from "../components/Table";
import data from "../data.json";
import { useRecoilState } from "recoil";
import {
  colorFilterState,
  categoryFilterState,
  SearchState,
} from "../atoms/index";
const Home = () => {
  const [products, setProducts] = useState<Array<any>>(data);
  const [colorFilter, setColorFilter] = useRecoilState(colorFilterState);
  const [categoryFilter, setCategoryFilter] =
    useRecoilState(categoryFilterState);

  const [search, setSearch] = useRecoilState(SearchState);

  useEffect(() => {
    let temp_products = products;
    if (categoryFilter !== "Category") {
      setProducts(
        data.filter((product) => {
          return product.category === categoryFilter;
        })
      );
    }
    if (colorFilter !== "Color" && colorFilter !== undefined) {
      setProducts(
        data.filter((product) => {
          return product.color === colorFilter;
        })
      );
    }
    if (colorFilter === "Color" && categoryFilter === "Category") {
      setProducts(data);
    }
    if (search !== "") {
      const searchTerm = search.toLowerCase();
      let searchResults: any = [];
      products.forEach((prod) => {
        if (prod.title.toLowerCase().match(new RegExp(searchTerm, "g"))) {
          searchResults.push(prod);
        }
      });
      setProducts(searchResults);
    }
  }, [colorFilter, categoryFilter, search]);

  return (
    <div className="home-container">
      <Filter
        setCategory={setCategoryFilter}
        setColor={setColorFilter}
        setSearch={setSearch}
        search={search}
        category={categoryFilter}
        color={colorFilter}
      />
      <Table products={products} />
    </div>
  );
};

export default Home;
