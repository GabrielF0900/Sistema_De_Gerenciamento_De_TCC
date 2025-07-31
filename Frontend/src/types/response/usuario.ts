import type { User } from "../user";
import type { ApiResponse } from "./base";

export interface UserProfileResponse extends ApiResponse {
  user: User;
}
