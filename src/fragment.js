export const USER_FRAGMENT = `
  id
  username
  avatar
`;
export const COMMENT_FRAGMENT = `
  id
  text
  user {
    ${USER_FRAGMENT}
  }
`;

export const FILE_FRAGMENT = `
  id
  url
`;

export const FULL_POST_FRAGMENT = `
  fragment PostParts on Post {
    id
    caption
    location
    files {
      ${FILE_FRAGMENT}
    }
    comments {
      ${COMMENT_FRAGMENT}
    }
    user {
      ${USER_FRAGMENT}
    }
  }
`;

export const ROOM_FRAGMENT = `
  fragment Roomparts on Room {
    id
    participants {
      ${USER_FRAGMENT}
    }
  }
`;