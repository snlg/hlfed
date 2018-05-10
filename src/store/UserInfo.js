// import { observable, action, configure } from 'mobx'
// // don't allow state modifications outside actions
// configure({ enforceActions: true })
// export default class UserInfo {
//   @observable userInfo = null// 用户信息
//   // @observable Id = null// 用户ID
//   // @observable Name = '' // 用户真实姓名
//   // @observable NickName = '' // 用户昵称
//   // @observable Sex = null // 用户性别 0位置 1男 2 女
//   // @observable BirthDay = '' // 出生日期 ./0001-01-01T00:00:00Z
//   // @observable Country = '' // 国家
//   // @observable Province = '' // 省份
//   // @observable City = '' // 城市
//   // @observable District = '' // 区域
//   // @observable Phone = '' // 手机号
//   // @observable Role = null // 权限。 0 普通，1 管理员
//   // @observable RegisterType = '' // 注册类型0 手机号 1 微信授权
//   // @observable LastLoginTime = '' // 最后登陆时间
//   // @observable OpenId = '' // 微信用户ID

//   @action
//   save(userInfo) {
//     this.userInfo = userInfo
//   }
// }
import { extendObservable, action, autorun } from 'mobx';

export default class UserInfo {
  id = 'userInfoStore';
  constructor(initialState = {}) {
    extendObservable(this, {
      UserInfo: initialState,

      // get completed() {
      //   return this.todos.filter(t => t.completed);
      // },

      // get uncompleted() {
      //   return this.todos.filter(t => !t.completed);
      // },

      getUserInfo: action('USER LOGIN', getData => {
        this.UserInfo = { ...UserInfo, ...getData }
      })
    });
    // use autorun to sync do something
    autorun(() => {
      // if (this.localStorage != null) {
      //   this.localStorage.setItem(this.id, JSON.stringify(this.todos.peek()));
      // }
      // dosomething
    });
  }
}
