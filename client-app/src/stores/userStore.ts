import { makeAutoObservable, runInAction } from "mobx";
import { User, UserFormValues } from "../app/models/user";
import agent from "../app/api/agent";
import { store } from "./store";
import { router } from "../app/routes/Routes";

export default class UserStore {
  user: User | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  isLoggedIn() {
    return !!this.user;
  }

  login = async (creds: UserFormValues) => {
    const user = await agent.Account.login(creds);
    store.commonStore.setToken(user.token);
    runInAction(() => (this.user = user));
    router.navigate("/activities");
  };

  logout = () => {
    store.commonStore.setToken(null);
    localStorage.removeItem("jwt");
    this.user = null;
    router.navigate("/");
  };
}
