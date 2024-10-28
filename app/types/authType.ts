export interface UserAttributes {
  id: string;
  name: string;
  email: string;
  role: string;
  status: boolean;
  market_id: string;
}

export interface UserData {
  id: string;
  type: string;
  attributes: UserAttributes;
}

export interface LoginResponse {
  message: string;
  user: {
    data: UserData;
  };
  token: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginError {
  message: string;
}
