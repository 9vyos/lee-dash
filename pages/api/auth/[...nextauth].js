import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { LOGIN_MUTATION } from "@/utils/gql.js";
let client = null;

const getClient = () => {
  client = new ApolloClient({
    link: createHttpLink({
      uri: "https://moonshot.hannah-log.site/graphql",
    }),
    cache: new InMemoryCache(),
  });

  return client;
};

export const authOptions = {
  providers: [
    CredentialsProvider({
      //1. 로그인페이지 폼 자동생성해주는 코드
      id: "email-password-credential",
      name: "credentials",
      type: "credentials",
      credentials: {
        email: { label: "아이디", type: "text" },
        password: { label: "비밀번호", type: "text" },
      },

      //2. 로그인요청시 실행되는코드
      async authorize(credentials) {
        const client = getClient();
        const { data } = await client.mutate({ mutation: LOGIN_MUTATION(credentials) });
        return data;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  //3.jwt 만료일설정
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, //1일
  },

  theme: {
    colorScheme: "dark", // "auto" | "dark" | "light"
    brandColor: "#", // Hex color code
    logo: "", // Absolute URL to image
    buttonText: "#", // Hex color code
  },
  callbacks: {
    //4. jwt 만들 때 실행되는 코드
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = {};
        token.user.userId = user.login.userId;
        token.user.jwtToken = user.login.jwtToken;
      }
      return token;
    },
    //5. 유저 세션이 조회될 때 마다 실행되는 코드
    session: async ({ session, token }) => {
      session.login = token.user;
      return session;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
  secret: "qwer1234", // env 파일로 뺴놓으면 좋음
};
export default NextAuth(authOptions);
