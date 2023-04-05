
// import { Navbar } from "@/molecules/navbar";
// import Footer from "@/molecules/footer";
// import styles from "../styles/contactForm.module.css"
// import { useState } from "react";

// export default function () {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [street, setStreet] = useState('');
//     const [country, setCountry] = useState('');
//     const [uf, setuf] = useState('');
//     const [message, setMessage] = useState('');

//     //@ts-ignore
//     const handleSubmit = e => {
//         e.preventDefault();
//         const data = {
//             name,
//             email,
//             street,
//             country,
//             uf,
//             message
//         };
//     };

//     return (
//         <>
//             <Navbar />
//             <div className={styles.background}>
//                 <form onSubmit={handleSubmit} className={styles.container}>
//                     <div>
//                         <label htmlFor="name">Name: </label>
//                         <input
//                             id="name"
//                             type="text"
//                             onChange={e => setName(e.target.value)}
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="email">Email: </label>
//                         <input
//                             id="email"
//                             type="email"
//                             onChange={e => setEmail(e.target.value)}
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="country">Country: </label>
//                         <input
//                             id="country"
//                             type="text"
//                             onChange={e => setCountry(e.target.value)}
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="street">Street: </label>
//                         <input
//                             id="street"
//                             type="text"
//                             onChange={e => setStreet(e.target.value)}
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="unit/flat">unit/flat: </label>
//                         <input
//                             id="uf"
//                             type="text"
//                             onChange={e => setuf(e.target.value)}
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="message">Message:</label>
//                         <textarea
//                             id="message"
//                             rows={4}
//                             onChange={e => setMessage(e.target.value)}
//                         />
//                     </div>
//                     <div>
//                         <button type="submit">Submit</button>
//                     </div>
//                 </form>
//             </div>
//             <Footer />
//         </>
//     );
// };