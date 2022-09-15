import { ImUndo } from "react-icons/im";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
interface FilterProps {
  setColor: Dispatch<SetStateAction<any>>;
  setCategory: Dispatch<SetStateAction<any>>;
  setSearch: Dispatch<SetStateAction<any>>;
  search: string;
}

const Filter = ({ setColor, setCategory, setSearch, search }: FilterProps) => {
  let navigate = useNavigate();

  return (
    <div className="filter-container">
      <div className="filter-dropdown-section">
        <select
          className="filter-select"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="" disabled>
            Category
          </option>
          <option className="filter-select-option" value="T-shirts">
            T-Shirts
          </option>
          <option value="Jackets">Jackets</option>
          <option value="Coats">Coats</option>
        </select>
        <select
          className="filter-select"
          onChange={(e) => {
            setColor(e.target.value);
          }}
        >
          <option disabled>Color</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="cream">Cream</option>
          <option value="blue">Blue</option>
          <option value="navy">Navy</option>
          <option value="pink">Pink</option>
        </select>
        <p
          className="reset-filter"
          onClick={() => {
            setCategory("");
            setColor("");
            setSearch("");
          }}
        >
          <ImUndo fill="#1c77c3" />
          Reset
        </p>
      </div>
      <div className="filter-search-section">
        <div className="search-container">
          <div className="form-group">
            <label>Search:</label>
            <input
              type="text"
              placeholder="Type Something..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
          <button
            className="filter-add-to-cart"
            onClick={() => {
              navigate("/cart");
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
