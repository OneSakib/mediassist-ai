import api from "./api";
import { LoginResponse, LoginPayload } from "@/types/auth";

export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>(
    "/api/v1/auth/login",
    payload,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    },
  );

  return response.data;
};
