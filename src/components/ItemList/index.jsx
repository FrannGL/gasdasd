// COMPONENTES MATERIAL-UI
import { Box } from "@mui/material";

// HOOKS REACT
import { useEffect, useState } from "react";

// COMPONENTES PROPIOS
import CardItem from "../CardItem/index";
import CardItemSkeleton from "../CardItemSkeleton";

export default function ItemList({ products }) {
  const [loading, setLoading] = useState(true);

  const fakePromise = () => new Promise((resolve) => setTimeout(resolve, 2000));

  const getProducts = async () => {
    try {
      await fakePromise();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 2,
        mt: 12,
        mb: 5,
      }}
    >
      {loading
        ? [1, 2, 3, 4].map((item) => <CardItemSkeleton key={item} />)
        : products.map((product, index) => (
            <CardItem product={product} key={product.id} component="li" />
          ))}
    </Box>
  );
}
