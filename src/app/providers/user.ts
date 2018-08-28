export interface  User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  admin: boolean;
  // roles: Roles;
}

export interface Roles {
  user?: boolean;
  admin?: boolean;
}

export interface Admin {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
}
