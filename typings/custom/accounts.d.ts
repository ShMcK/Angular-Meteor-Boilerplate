///<reference path="../typings.d.ts" />

interface ICredentials{
  username?: string;
  email: string;
  password: string;
}

interface IAccounts {
  credentials: ICredentials;
  error: string;
  login: void;
  loginWithFacebook: void;
  loginWithGoogle: void;
  loginWithGithub: void;
  loginWithTwitter: void;
}


interface ISettings {
  site: {
    url: string;
    title: string;
  };
  verifyEmail: boolean;
  welcomeEmail: {
    send: boolean;
    from: string;
    subject: string;
  };
}

// Used by Accounts.onCreateUser
interface IUserData {
  email: string;
  name: string;
}