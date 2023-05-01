import { gql } from "@apollo/client";
import { getClient } from "@/lib/apollo-client";
import Link from "next/link";
import { GET_PRODUCTS } from "@/utils/gql.js";

const page = async () => {
  console.log(GET_PRODUCTS);
  const client = getClient();
  const { data } = await client.query({ query: GET_PRODUCTS });
  return (
    <div>
      <Link href={`/product/edit`}>상품 등록하기</Link>
      {data.getProducts.map((item, i) => (
        <Link href={`/product/${item.id}`}>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <p>{item.category.name}</p>
          <p>{item.price}원</p>
        </Link>
      ))}
    </div>
  );
};
export default page;
