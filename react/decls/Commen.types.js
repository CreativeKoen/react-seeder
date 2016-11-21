// @flow
declare type Action = {
  type: string,
  payload: ?Array<Object> | ?Object,
  status: string
}

declare type Dispatch = (action: Action | PostAction | BlogAction | ThunkAction | PromiseAction | Array<Action>) => any;
declare type GetState = () => Object;
declare type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
declare type PromiseAction = Promise<Action>;
