import { Postagem } from "./Postagem";

export class Usuario{
  public foto: string;
  public id: number;
  public nome: string;
  public postagem: Postagem[]
  public usuario: string;
  public senha: string;
  public tipo: string;
 }
