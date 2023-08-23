import type { UserLogin } from "@/types/UserLogin";

const URL_API = 'https://localhost:7252/api/';


export async function login(credentials: UserLogin, url: string): Promise<Response> {
    try {
        const response = await fetch(URL_API + url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });
        console.log(response)
      if (!response.ok) {
        throw new Error('Login failed. Please try again.');
      }
      return response;
    } catch (error) {
      throw new Error('Login failed. Please try again.');
    }
  }