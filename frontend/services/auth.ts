import api from "@/lib/api";
import { LoginResponse, LoginPayload, MeResponse } from "@/types/auth";

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
export const me = async (): Promise<MeResponse> => {
  const response = await api.get<MeResponse>("/api/v1/auth/me");
  return response.data;
};
