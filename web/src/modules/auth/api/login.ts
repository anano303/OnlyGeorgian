
import { storeTokens, storeUserData } from "@/lib/auth";

export type LoginData = {
  email: string;
  password: string;
};

export async function login(data: LoginData) {
  try {
    console.log('🔑 Attempting login...');
    
    // Use fetch directly to avoid interceptors during login
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      console.log(`❌ Login failed with status ${response.status}`);
      const errorData = await response.json().catch(() => ({}));
      return { 
        success: false, 
        error: errorData.message || "Authentication failed" 
      };
    }
    
    const responseData = await response.json();
    
    if (responseData?.tokens?.accessToken && responseData?.tokens?.refreshToken && responseData?.user) {
      const { accessToken, refreshToken } = responseData.tokens;
      console.log('✅ Login successful, storing tokens');
      storeTokens(accessToken, refreshToken);
      storeUserData(responseData.user);
      return { success: true, user: responseData.user };
    }
    
    console.log('❌ Login response missing tokens or user data');
    return { success: false, error: "Invalid authentication response" };
  } catch (error) {
    console.error('❌ Login error:', error);
    return { 
      success: false, 
      error: (error instanceof Error ? error.message : "Authentication failed") 
    };
  }
}
