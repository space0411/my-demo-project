export interface IUser {
  UserId: number;
  Token?: string;
  Email: string;
  Phone: string;
  Avata: string;
  UserName: string;
  Enable: boolean;
  Status: number;
  AccountType: string;
  FullName: string;
  CustomerId: number;
  CustomerCode: string;
  AgentId: number;
  AgentCode: string;
  Mobile: string;
  Fax: string;
  Address: string;
  Street: string;
  Ward: string;
  District: string;
  Country: string;
  SubAccounts?: ISubAccounts[];
}

export interface ISubAccounts {
  ProducerCode: string;
  SubAccoutType: string;
  SubId?: number;
  SubPassword: string;
  SubUName: string;
  PlantId?: string;
  Year?: string,
  Month?: string,
  Day?: string,
}
