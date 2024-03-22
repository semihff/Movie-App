import React, { useEffect } from "react";

const Categories = () => {
  const key = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    console.log(key);
  }, []);
  return <div>Categories</div>;
};

export default Categories;
