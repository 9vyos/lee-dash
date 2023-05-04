import { gql } from "@apollo/client";
import { getClient } from "@/lib/apollo-client";
import Image from "next/image";
interface ProductResponse {
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
const page = async (props: any) => {
  const query = gql`
    query {
      getOneProduct(productId:${props.params.id}) {
        id
        name
        price
        description
        category {
          name
        }
        productImages {
          imageUrl
        }
      }
    }
  `;
  const client = getClient();
  const { data } = await client.query({ query });

  return (
    <div>
      <>
        <h1>{data.getOneProduct.name}</h1>
        <p>{data.getOneProduct.description}</p>
        <p>{data.getOneProduct.category.name}</p>
        <p>{data.getOneProduct.price}원</p>
        {/* <Image src={data.getOneProduct.productImages[0]?.imageUrl} width="100" height="100" alt="" /> */}
      </>
    </div>
  );
};
export default page;
