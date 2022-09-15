import { useState, useEffect } from "react";
import Filter from "../components/Filter";
import Table from "../components/Table";
import data from "../data.json";

const Home = () => {
  const [products, setProducts] = useState<Array<any>>(data);
  const [colorFilter, setColorFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    if (categoryFilter !== "" && categoryFilter !== undefined) {
      setProducts(
        products.filter((product) => {
          return product.category === categoryFilter;
        })
      );
    }
    if (colorFilter !== "" && colorFilter !== undefined) {
      setProducts(
        products.filter((product) => {
          return product.color === colorFilter;
        })
      );
    }
    if (colorFilter === "" && categoryFilter === "") {
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
      />
      <Table products={products} />
    </div>
  );
};

export default Home;
