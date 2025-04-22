import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";
import { Preloader } from "./Preloader";

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function getGoods() {
    fetch(API_URL, { 
        headers: { 
            'Authorization': API_KEY,
        } })
        .then(response => response.json())
        .then(data => {
            setGoods(data.items);
            setLoading(false);
        });
  }, []);

  return (
    <main className="container content">
      
      {
        loading ? <Preloader /> : goods
      }
    </main>
  );
};

export { Shop };
