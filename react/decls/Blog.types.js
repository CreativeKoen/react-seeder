// @flow
declare type BlogPost = Post;

declare type BlogAction = {
  type: string,
  payload: ?Array<BlogPost> | Object,
  status: string
}

declare type BlogState = {
  posts: ?Array<BlogPost> | Object,
  status: string
}

declare type BlogProps = {
  posts: ?Array<BlogPost> | Object,
  status: string,
  dispatch: Dispatch
}
