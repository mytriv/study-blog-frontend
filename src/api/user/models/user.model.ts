import {Base} from "../../shared/base.model";

export interface User extends Base {
    nickname: string;
    email: string;
    isEmailVerified: boolean;
}