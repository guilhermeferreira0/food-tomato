export interface UserProps {
  email?: string;
  token?: string;
}

export interface IContext extends UserProps {
  user: UserProps,
  setUser: (user: UserProps) => void,
  modalIsOpen: boolean,
  setModalIsOpen: (value: boolean) => void,
  authenticate: (email: string, token: string) => Promise<void>;
  logout: () => void;
}