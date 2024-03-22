import React, { useEffect } from "react";

const Categories = () => {
  const key = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    console.log(key);
  }, []);
  return <div>show all categories</div>;
};

export default Categories;
