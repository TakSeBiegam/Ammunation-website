import { JWTProvider, useJWTContainer } from '@/logic/jwt';
import Footer from '@/molecules/footer'
import { Navbar } from '@/molecules/navbar'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import jwt from "jsonwebtoken"
import Popup from 'reactjs-popup';

export default function Home() {
    const router = useRouter();
    const { secret, saveJWT } = useJWTContainer();
    const [showPopup, setShowPopup] = useState(false);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const handleAdminPage = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const token = jwt.sign({ login: login, password: password }, "MIiu61yu",);
        saveJWT(token);
        if (login === "admin" && password === "admin123") {
            router.push('/adminpanel');
        } else {
            setShowPopup(true);
        }
        setLogin('');
        setPassword('');
    }

    const handlePopupClose = () =>
        setShowPopup(false);


    useEffect(() => {
        if (secret !== "") {
            const decodedSecret = jwt.decode(secret);
            const date = new Date();
            if (decodedSecret && typeof decodedSecret !== 'string' && decodedSecret.login === "admin" && decodedSecret.iat < date.setDate(date.getDate() + 1)) {
                router.push("/adminpanel")
            }
        };
    }, []);

    const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(event.target.value);
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }
    return (
        <div>
            <Navbar />
            <h2 style={{ marginLeft: 10 }}>Admin Login</h2><br />
            <form onSubmit={handleAdminPage} style={{ margin: "auto", textAlign: "center" }}>
                <label><b style={{ marginRight: 10 }}>User Name
                </b>
                </label>
                <input type="text" value={login} placeholder="Username" onChange={handleLoginChange} />
                <br />
                <div style={{ marginTop: 5 }}>
                    <label><b style={{ marginRight: 10 }}>Password
                    </b>
                    </label>
                    <input type="Password" value={password} placeholder="Password" onChange={handlePasswordChange} />
                    <br />
                </div>
                <div style={{ marginTop: 5 }}>
                    <input type="submit" value="Log In Here" />
                </div>
            </form>
            <Popup onClose={handlePopupClose} open={showPopup}
                position="right center"
                closeOnDocumentClick
            >
                <div style={{ backgroundColor: "#c61a09", borderRadius: "10px", padding: "5px" }} >
                    <span> Failed log in - Try Again </span>
                </div>

            </Popup >
            <Footer />

        </div >
    )
}
