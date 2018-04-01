// import { observable, action, configure, runInAction } from 'mobx'
// import { getCityCode } from 'services'

// // don't allow state modifications outside actions
// configure({ enforceActions: true })
// export default class CityStore {
//   @observable provence = []
//   @observable city = []
//   @observable area = []

//   @action
//   async getCode(code, name) {
//     const data = await getCityCode(code)
//     if (data.success) {
//       runInAction(() => {
//         this[name] = data.data.areas
//       })
//     }
//   }
// }
