import type { UserRegister } from "@/types/UserRegister";

const URL_API = 'https://localhost:7252/api/';

export async function register(user: UserRegister, url: string): Promise<Response> {
    try {
      const response = await fetch(URL_API + url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
  
      if (!response.ok) {
        throw new Error('Login failed. Please try again.');
      }
      const responseData = await response.json();
      console.log(responseData)
      return responseData;
    } catch (error) {
      throw new Error('Login failed. Please try again.');
    }
  }