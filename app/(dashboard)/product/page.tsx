import { gql } from "@apollo/client";
import { getClient } from "@/lib/apollo-client";
import Link from "next/link";
import { GET_PRODUCTS } from "@/utils/gql";
import Image from "next/image";

interface item {
  id: number;
  name: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
  };
  productImages: {
    id: number;
    imageUrl: string;
    isMain: boolean;
  };
}

const page = async () => {
  const client = getClient();
  const { data } = await client.query({ query: GET_PRODUCTS });
  return (
    <div>
      <Link href={`/product/edit`}>상품 등록하기</Link>
      {data.getProducts.map((item: item, i: number) => (
        <Link href={`/product/${item.id}`} key={i}>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <p>{item.category.name}</p>
          <p>{item.price}원</p>
          <Image src={item.productImages?.imageUrl} alt="" />
        </Link>
      ))}
    </div>
  );
};
export default page;
