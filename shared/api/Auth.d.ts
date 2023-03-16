import { IToken, IUser } from "../models/Models"

export interface RegRequest extends Pick<IUser, "name" | "email" | "pass" | "info">{}
export interface RegResponse extends Pick<IUser, "name" | "email" | "role">{} // TODO или {message:string}

export interface LoginRequest extends Pick<IUser, "name" | "pass" | "info">{}
export interface LoginResponse {token:string, user: Pick<IUser, "name" | "email" | "role" | "isActiv">}

export interface RefreshResponse {token:string}

export interface RTokenRequestCookies extends Pick<IToken, "deviceID"> { rToken: IToken["value"] }