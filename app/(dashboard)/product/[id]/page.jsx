import { gql } from "@apollo/client";
import { getClient } from "@/lib/apollo-client";

const page = async (props) => {
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
      </>
    </div>
  );
};
export default page;
