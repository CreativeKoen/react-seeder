// @flow
declare type Post = {
  id: number,
  title: string,
  body: string,
  author: string
}

declare type PostAction = {
  type: string,
  payload: ?Post | Object,
  status: string
}

declare type PostState = {
  post: ?Post | Object,
  status: string
}

declare type PostProps = {
  post: Post,
  status: string,
  dispatch: Dispatch,
  routeParams: Object,
}
