"use client";

import { useAuth as useGlobalAuth } from "@/hooks/use-auth";


// This is a wrapper around the global useAuth for backward compatibility
// and for specific auth-related mutations

// Logout hook
export function useLogout() {
  const { logout } = useGlobalAuth();
  
  return {
    mutate: logout,
    // For backward compatibility with older code
    logout
  };
}

// Login hook (if you need it)
export function useLogin() {
  const { login, loginStatus, loginError } = useGlobalAuth();
  
  return {
    mutate: login,
    isLoading: loginStatus === 'pending',
    isError: loginStatus === 'error',
    error: loginError
  };
}
