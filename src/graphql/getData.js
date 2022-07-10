import gql from "graphql-tag";

const getData = gql`
  query {
    jobs {
      title
      company {
        id
        name
        logoUrl
      }
      remotes {
        name
        type
      }
      tags {
        id
        name
      }
      cities {
        id
        name
        type
        country {
          id
          name
        }
      }
      createdAt
    }
  }
`;

export default getData;
