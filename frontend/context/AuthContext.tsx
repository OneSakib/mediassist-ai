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
    setAuth: (token: string, user: User) => void;
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
    const setAuth = (
        newToken: string,
        newUser: User
    ) => {
        sessionStorage.setItem(
            "access_token",
            newToken
        );

        sessionStorage.setItem(
            "user",
            JSON.stringify(newUser)
        );

        setToken(newToken);
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
                setAuth,
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