import { MockMethod } from 'vite-plugin-mock';

const users = [
  {
    userId: 1,
    userName: 'admin',
    password: '111111',
    routes: ['home'],
    token: 'admin token',
    buttons: ['cuser.detail'],
  },
  {
    userId: 2,
    userName: 'sys',
    password: '111111',
    routes: ['home'],
    token: 'sys token',
    buttons: ['cuser.detail', 'cuser.user'],
  },
];
export default [
  {
    url: '/api/user/login',
    method: 'post',
    response: ({ body }) => {
      const { username, password } = body;

      const checkUser = users.find(
        (item) => item.userName == username && item.password == password,
      );
      if (!checkUser) {
        return {
          code: 201,
          data: null,
          message: '账号或者密码不正确',
        };
      }
      return {
        code: 200,
        data: {
          token: checkUser.token,
        },
        message: '',
      };
    },
  },
  {
    url: '/api/userInfo',
    method: 'get',
    timeout: 2000,
    response: (req) => {
      const token = req.headers.token;
      const checkUser = users.find((item) => item.token == token);
      if (!checkUser) {
        return {
          code: 201,
          data: null,
          message: '获取用户信息失败',
        };
      }
      return {
        code: 200,
        data: {
          user: checkUser,
        },
        message: '',
      };
    },
  },
  {
    url: '/api/text',
    method: 'post',
    rawResponse: async (req, res) => {
      let reqbody = '';
      await new Promise((resolve) => {
        req.on('data', (chunk) => {
          reqbody += chunk;
        });
        req.on('end', () => resolve(undefined));
      });
      res.setHeader('Content-Type', 'text/plain');
      res.statusCode = 200;
      res.end(`hello, ${reqbody}`);
    },
  },
] as MockMethod[];
