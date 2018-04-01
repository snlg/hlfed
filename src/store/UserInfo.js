import { observable, action, configure } from 'mobx'
// don't allow state modifications outside actions
configure({ enforceActions: true })
export default class SubmitStore {
  @observable name = '123123213'
  @observable tel = ''
  @observable city = ''
  @observable address = ''
  @observable code = ''

  @action
  save(name, tel, city, address, code) {
    this.name = name
    this.tel = tel
    this.city = city
    this.address = address
    this.code = code
  }
}
