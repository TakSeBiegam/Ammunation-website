import { useEffect, useState } from "react";
import styles from './../styles/apply.module.css';
import { useBackend } from './../graphqlRequest/client'
import { useRouter } from "next/router";
import { Navbar } from "@/molecules/navbar";

export default function () {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [aboutMe, setAboutMe] = useState<string>('');
    const [birthday, setBirthday] = useState(new Date());

    const router = useRouter();

    const { applyForm } = useBackend();
    const [resp, setResp] = useState<boolean>();
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await applyForm({ firstName, lastName, birthday: birthday.toISOString(), phoneNumber, email, aboutMe, });
            // setResp(response.ApplyForm);
        } catch (err) {
            setResp(false)
        }
    }

    useEffect(() => {
        if (resp) {
            router.push('/success_registered');
        }
    }, [resp]);

    return (
        <div>
            <Navbar />
            <main>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <label>Imie:</label><br />
                    <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} /><br />
                    <label>Nazwisko:</label><br />
                    <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} /><br />
                    <label>Telefon:</label><br />
                    <input type="text" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} /><br />
                    <label>Email:</label><br />
                    <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} /><br />
                    <label>O sobie:</label><br />
                    <input type="text" value={aboutMe} onChange={(event) => setAboutMe(event.target.value)} /><br />
                    <button type="submit" disabled={!firstName || !lastName || (!email && !phoneNumber) || !aboutMe} >Potwierdz</button>
                </form>
            </main>
        </div>
    );
}