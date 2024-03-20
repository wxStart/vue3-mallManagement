interface ResponseData {
  code: number;
  message?: string;
  ok?: boolean;
}

// 登录接口需要携带的ts参数
export interface loginForm {
  username: string;
  password: string;
}
interface loginDataType {
  token: string;
}
// 登录接口返回的数据类型
export interface loginResponseData extends ResponseData {
  data: loginDataType;
  [props: string]: any;
}

// 返回用户信息的数据类型

export interface userInfo {
  userId: number;
  userName: string;
  password: string;
  routes: string[];
  token: string;
  buttons: string[];
}

interface user {
  user: userInfo;
}

export interface userInfoResponseData extends ResponseData {
  data: user;
  [props: string]: any;
}
