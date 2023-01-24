/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import FormProduct from "@components/FormProducts";
import endpoints from "@services/api";

const Edit = () => {
  const router = useRouter();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const { id } = router.query;
    async function getProduct() {
      const response = await axios(endpoints.products.getProduct(id));
      setProduct(response.data);
    }
    if (id) {
      getProduct();
    }
  }, [router.isReady]);

  return <FormProduct product={product} />;
};

export default Edit;
