import { AuthBindings } from "@refinedev/core";
import nookies from "nookies";
import { jwtDecode } from "jwt-decode";

import axios from "axios";
import { AUTH_URL, AUTH_CLIENT_ID, GRANT_TYPE } from "src/constants";
import { CheckResponse } from "@refinedev/core/dist/interfaces";

const auth_url = AUTH_URL || "https://auth.deepmindlabs.ai";

export interface IAuthProvider extends Partial<AuthBindings> {
  check: (params?: any) => Promise<CheckResponse>;
  getAuthToken: () => string;
}

export const authProvider: IAuthProvider = {
  login: async ({ email, username, password, remember }) => {
    console.log("login", email, username, password, remember);

    // Suppose we actually send a request to the back end here.
    const { data } = await axios.post(
      `${auth_url}/connect/token`,
      {
        username: username,
        password: password,
        client_id: AUTH_CLIENT_ID,
        grant_type: GRANT_TYPE,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const { access_token, expires_in } = data;

    if (access_token) {
      const decode = jwtDecode(access_token);
      const { unique_name, email, role }: any = decode;

      const user = {
        name: unique_name,
        email: email,
        roles: role,
        avatar: "https://i.pravatar.cc/150?img=4",
      };
      console.log(user);

      nookies.set(null, "user_details", JSON.stringify(user), {
        maxAge: expires_in,
        path: "/",
        secure: true,
        httpOnly: false, // Set to true if you're setting the token and it doesn't need to be accessed via JS
        sameSite: "lax",
      });

      nookies.set(null, "auth_token", access_token, {
        maxAge: expires_in,
        path: "/",
        secure: true,
        httpOnly: false, // Set to true if you're setting the token and it doesn't need to be accessed via JS
        sameSite: "lax", // Consider setting to 'strict' for more restrictive cookie sending
      });

      return {
        success: true,
        redirectTo: "/",
      };
    }
    return {
      success: false,
      message: "Invalid credentials",
    };
  },

  logout: async (ctx = {}) => {
    nookies.destroy(null, "user_details");
    nookies.destroy(null, "auth_token");
    return {
      success: true,
      redirectTo: ctx?.query?.redirect || "/login",
    };
  },

  check: async (ctx = {}) => {
    const cookies = nookies.get(ctx);

    if (cookies["auth_token"]) {
      return {
        authenticated: true,
        logout: false,
        redirectTo: ctx?.query?.redirect || "/",
      };
    }

    return {
      authenticated: false,
      logout: true,
      redirectTo: "/login",
    };
  },

  getAuthToken: () => {
    const token = nookies.get()["auth_token"];
    return token || "";
  },

  getPermissions: async () => {
    const auth = nookies.get()["user_details"];
    if (auth) {
      const parsedUser = JSON.parse(auth);
      return parsedUser.roles || [];
    }
    return [];
  },

  getIdentity: async () => {
    const auth = nookies.get()["user_details"];
    console.log(auth);
    if (auth) {
      const parsedUser = JSON.parse(auth);
      return parsedUser;
    }
    return null;
  },

  onError: async (error) => {
    console.error("Authentication error:", error);
    return { error: error.message || "An unknown error occurred." };
  },
};
