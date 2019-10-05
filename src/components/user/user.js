import React, {Component} from 'react';
import {StaticQuery, graphql} from "gatsby";

const QUERY_CURRENT_USER = graphql`
  query QueryCurrentUser {
    userUser {
      id
      uid
      name
    }
  }
`;


const User = () => (
  <StaticQuery
    query={QUERY_CURRENT_USER}
    render={({userUser}) => {
      return(
        <em>
          {userUser.name}
        </em>
      )
    }}
  />
);

export default User;
