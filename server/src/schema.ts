import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    me: User
    profile(userId: ID!): Profile!
    posts: [Post!]!
  }

  type Mutation {
    postCreate(post: PostInput!): PostPayload!
    postUpdate(postId: ID!, post: PostInput!): PostPayload!
    postDelete(postId: ID!): PostPayload!
    postPublish(postId: ID!): PostPayload!
    postUnpublish(postId: ID!): PostPayload!
    signup(
      credentials: CredentialInput!
      name: String!
      bio: String!
    ): AuthPayload!
    signin(credentials: CredentialInput!): AuthPayload!
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    createdAt: String!
    published: Boolean!
    user: User!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    profile: Profile!
    posts: [Post!]!
  }

  type Profile {
    id: ID!
    bio: String!
    user: User!
  }

  type UserError {
    message: String!
  }

  type PostPayload {
    userErrors: [UserError!]!
    post: Post
  }

  type AuthPayload {
    userErrors: [UserError!]!
    user: User!
  }

  input PostInput {
    title: String
    content: String
  }

  input CredentialInput {
    email: String!
    password: String!
  }
`;
