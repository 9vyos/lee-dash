import { gql } from "@apollo/client";

const LOGIN_MUTATION = (credential: { email: string; password: string }) => {
  return gql`
  mutation {
    login(loginUserRequest: {
      email: "${credential.email}",
      password: "${credential.password}",
    }) {
      userId
      jwtToken
    }
  }
`;
};
const SAVE_PRODUCT = (name: string, price: number, description: string, categoryId: number, imageUrl: string, isMain: boolean) => {
  return gql`
    mutation {
      saveProduct(request: {
          name: "${name}"
          price: ${price}
          description: "${description}"
          categoryId: ${categoryId}
          productImages: {
            imageUrl:"${imageUrl}"
            isMain:${isMain}
          }
        }) {
        id
        name
        price
        description
        category {
          id
          name
        }
        productImages {
          id
          imageUrl
          isMain
        }
      }
    }
  `;
};

const GET_PRODUCTS = gql`
  query {
    getProducts {
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

export { LOGIN_MUTATION, GET_PRODUCTS, SAVE_PRODUCT };
