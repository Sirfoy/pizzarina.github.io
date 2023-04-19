import React from "react";
import { MenuList } from "../Helpers/menuhelpers";
import MenuItem from "../components/MenuItem.jsx";
import "../Styles/Menu.css";

const Menu = () => {
  return (
    <div>
      <div className="menu">
        <h1 className="menuTitle">Our Menu <small style={{fontSize:20 }}>(Curtsey of sirfoy)</small></h1>
        <div className="menuList">
          {MenuList.map((list, key) => {
            return (
              <MenuItem
                key={key}
                image={list.image}
                name={list.name}
                price={list.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
