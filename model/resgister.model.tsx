export interface IRegister {
    UserName: string;
    Password: string;
    ConfirmPassword: string;
    FullName: string;
    Email: string;
    Phone: string;
    Address: string;
    Street?:string;
    Ward?: string;
    District?:string;
    Country?:string;
    AccountType?:string;
    AgentId?:number;
    AgentCode?:string;
}