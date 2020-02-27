import gql from "graphql-tag";

export const CREATORS_QUERY = gql`
query creatorsQuery {
  socialProfiles {
    id
    profileData {
      name
      picture
    }
  }
}
`;

export const STATS_QUERY = gql`
query statsQuery {
  socialProfiles {
    id
    totalFollowers
    accounts {
      id
      userName
      platform
      facebook {
        overview {
          likes
        }
      }
      instagram {
        overview {
          followers
        }
      }
      twitter {
        overview {
          followers
        }
      }
      youtube {
        overview {
          subscribers
        }
      }
    }
  }
}
`;
