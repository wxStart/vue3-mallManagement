import { MockMethod } from 'vite-plugin-mock';

const users = [
  {
    userId: 1,
    userName: 'admin',
    password: '111111',
    routes: [
      'Auth',
      'AuthUser',
      'AuthRole',
      'AuthMenu',
      'Product',
      'Attr',
      'Sku',
      'Spu',
      'Trademark',
    ],
    token: 'admin token',
    buttons: ['add', 'search', 'delete'],
  },
  {
    userId: 2,
    userName: 'sys1',
    password: '111111',
    routes: ['Auth', 'AuthUser', 'AuthRole', 'AuthMenu'],
    token: 'sys token',
    buttons: ['add', 'search'],
  },
  {
    userId: 2,
    userName: 'wx11',
    password: '111111',
    routes: ['Auth', 'AuthRole', 'AuthMenu'],
    token: 'wx11 token',
    buttons: [],
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
    url: '/api/user/info',
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
