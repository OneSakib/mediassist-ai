"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";

export interface User {
    id?: number | string;
    name?: string;
    email: string;
    avatar?: string | null;
}

interface AuthContextType {
    user: User | null;
    token: string | null;
    loading: boolean;
    isAuthenticated: boolean;
    setAuthToken: (token: string) => void;
    setAuthUser: (user: User) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(
    undefined
);

interface AuthProviderProps {
    children: ReactNode;
}

export function AuthProvider({
    children,
}: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    /**
     * Restore authentication when application starts
     */
    useEffect(() => {
        try {
            const storedToken =
                sessionStorage.getItem("access_token");

            const storedUser =
                sessionStorage.getItem("user");

            if (storedToken) {
                setToken(storedToken);
            }

            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        } catch (error) {
            console.error(
                "Failed to restore authentication:",
                error
            );

            sessionStorage.removeItem("access_token");
            sessionStorage.removeItem("user");

            setToken(null);
            setUser(null);
        } finally {
            setLoading(false);
        }
    }, []);

    /**
     * Save authentication after login
     */
    const setAuthToken = (
        newToken: string,
    ) => {
        sessionStorage.setItem(
            "access_token",
            newToken
        );
        setToken(newToken);
    };
    const setAuthUser = (
        newUser: User
    ) => {
        sessionStorage.setItem(
            "user",
            JSON.stringify(newUser)
        );
        setUser(newUser);
    };

    /**
     * Logout
     */
    const logout = () => {
        sessionStorage.removeItem("access_token");
        sessionStorage.removeItem("user");

        setToken(null);
        setUser(null);

        window.location.href = "/login";
    };

    const isAuthenticated =
        Boolean(token && user);

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                loading,
                isAuthenticated,
                setAuthToken,
                setAuthUser,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

/**
 * Auth hook
 */
export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error(
            "useAuth must be used inside AuthProvider"
        );
    }

    return context;
}