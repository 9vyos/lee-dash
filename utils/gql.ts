import { gql } from "@apollo/client";

export const LOGIN_MUTATION = (credential: { email: string; password: string }) => {
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

export const gql_type = (type: string, gqlName: string, response: string) => {
  return gql`
    ${type}{
      ${gqlName}{
        ${response}
      }
    }
    `;
};

export const GET_PRODUCTS = gql`
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
