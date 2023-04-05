import { useState } from "react";
import { createContainer } from "unstated-next";

const JWTContainer = createContainer(() => {
    const [secret, setSecret] = useState<string>(() => {
        // retrieve the string value of the JWT secret from localStorage
        // or an empty string if it doesn't exist
        return typeof window !== "undefined"
            ? window.localStorage.getItem("Authorization") || ""
            : "";
    });

    const saveJWT = (secret: any) => {
        if (!secret.length) {
            throw new Error("Cannot save empty JWT secret.");
        }
        setSecret(secret);
        if (typeof window !== "undefined") {
            window.localStorage.setItem("Authorization", secret);
        }
    };

    return { secret, saveJWT };
});

export const useJWTContainer = JWTContainer.useContainer;
export const JWTProvider = JWTContainer.Provider;