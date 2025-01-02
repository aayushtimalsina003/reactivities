import { makeAutoObservable } from "mobx";
import { User, UserFormValues } from "../app/models/user";
import agent from "../app/api/agent";

export default class UserStore {
  user: User | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  getIsLoggedIn() {
    return !!this.user;
  }

  login = async (creds: UserFormValues) => {
    const user = await agent.Account.login(creds);
    console.log(user);
  }
}
