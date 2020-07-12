import React from 'react';
import { Redirect } from "react-router-dom";
import Recommend from '../modules/Recommend';
import Singers from '../modules/Singers';
import Rank from '../modules/Rank';
import Home from '../modules/Home';
import Album from '../modules/Ablum';
import Singer from '../modules/Singer';
import Search from '../modules/Search';

export default [
  {
    path: "/",
    component: Home,
    routes: [
      {
        path: "/",
        exact: true,
        render: () => (
          <Redirect to={"/recommend"}/>
        )
      },
      {
        path: "/recommend/",
        component: Recommend,
        routes: [
          {
            path: "/recommend/:id",
            component: Album
          }
        ]
      },
      {
        path: "/singers",
        component: Singers,
        routes: [
          {
            path: '/singers/:id',
            component: Singer
          }
        ]
      },
      {
        path: "/rank/",
        component: Rank,
        key: "rank",
        routes: [
          {
            path: "/rank/:id",
            component: Album
          }
        ]
      },
      {
        path: "/album/:id",
        exact: true,
        key: "album",
        component: Album
      },
      {
        path: "/search",
        exact: true,
        key: "search",
        component: Search
      }
    ]
  }
]