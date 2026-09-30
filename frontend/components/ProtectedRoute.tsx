"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

export default function ProtectedRoute({
    children,
}: ProtectedRouteProps) {
    const router = useRouter();

    const {
        isAuthenticated,
        loading,
    } = useAuth();

    useEffect(() => {
        if (!loading && !isAuthenticated) {
            router.replace("/login");
        }
    }, [
        loading,
        isAuthenticated,
        router,
    ]);

    // While restoring auth from sessionStorage
    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-slate-50">
                <div className="text-center">
                    <div className="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />

                    <p className="text-sm text-slate-500">
                        Checking authentication...
                    </p>
                </div>
            </div>
        );
    }

    // Prevent protected content from flashing
    if (!isAuthenticated) {
        return null;
    }

    return <>{children}</>;
}