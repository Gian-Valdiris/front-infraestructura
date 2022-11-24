export interface Iinputs{
  placeholder:string;
  value:string;
  name:'username'|'password';
  type?:string;

}
export interface IinputsRegister {
  placeholder:string;
  value:string;
  name:'username'|'password' |'email'|'confirmPassword';
  type?:string;

}