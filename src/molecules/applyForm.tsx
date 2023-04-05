import { useBackend } from "@/graphqlRequest/client";
import { Formik, useFormik } from "formik"
import { SetStateAction } from "react";
import { toast } from "react-toastify";
import * as yup from 'yup';

type FormikValues = {
    firstName: string;
    lastName: string;
    birthday: string;
    phoneNumber?: string;
    email: string;
    aboutMe: string;
};

interface IApplyForm {
    setConfirmModal: React.Dispatch<SetStateAction<boolean>>;
    confirmModal: boolean;
}

const validation: yup.Schema<FormikValues> = yup.object({
    firstName: yup.string()
    .required('Pole wymagene')
    .matches(
        /[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ ]{2,40}$$/,
        'Wpisz od 2 do 40 znaków'
    ),
    lastName: yup.string().max(30, 'Too long last name').required('Field Required'),
    email: yup
    .string()
    .email('Invalid email')
    .required('Field Required'),
    birthday: yup.string().max(30, 'Too long date').required('Field Required'),
    aboutMe: yup.string().max(400, 'Too long motivation').required('Field Required'),
})

export const applyForm: React.FC<IApplyForm> = ({
    setConfirmModal,
    confirmModal
}) => {
    const {applyForm} = useBackend();

    const {values, errors, handleChange, handleSubmit, resetForm} =
        Formik<FormikValues>({
            initialValues: {
                email: '',
                firstName: '',
                lastName: '',
                birthday: "",
                aboutMe: "",
                phoneNumber: ''
            },
            onSubmit: (values) => {
                toast.info('Sending mail', {
                    autoClose: !confirmModal ? 10: 2000
                });
                applyForm({
                    firstName: values.firstName,
                    lastName: values.lastName,
                    birthday: values.birthday,
                    aboutMe: values.aboutMe,
                    email: values.email,
                    phoneNumber: values.phoneNumber
                }).then((resp) => {
                    resp && setConfirmModal(true);
                    resetForm();
                }).catch((error) => toast.error('cannot send apply form'));
},
validationSchema: validation,
validateOnBlur: false,
            validateOnChange: false,
            validateOnMount: false,
});


    

    return (
        <div></div>
    )
}
    
    // const validation: yup.SchemaOf<FormikValues> = yup.object({
    //     acceptTerms: yup
    //         .boolean()
    //         .oneOf([true], 'Pole wymagane')
    //         .required('Pole wymagane'),
    //     email: yup
    //         .string()
    //         .email('Nieprawidłowy adres email')
    //         .required('Pole wymagene'),
    //     message: yup
    //         .string()
    //         .max(300, 'Przekroczyłeś/aś maksymalną ilość znaków')
    //         .required('Pole wymagene'),
    //     name: yup
    //         .string()
    //         .required('Pole wymagene')
    //         .matches(
    //             /[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ ]{2,40}$$/,
    //             'Wpisz od 2 do 40 znaków'
    //         ),
    // });
    
    // export const ContactForm: React.FC<IContactForm> = ({
    //     setConfirmModal,
    //     confirmModal,
    // }) => {
    //     const { contactForm } = useBackend();
    
    //     const { values, errors, handleChange, handleSubmit, resetForm } =
    //         useFormik<FormikValues>({
    //             initialValues: {
    //                 email: '',
    //                 name: '',
    //                 message: '',
    //                 acceptTerms: false,
    //             },
    //             onSubmit: (values) => {
    //                 toast.info('Trwa wysyłanie maila', {
    //                     autoClose: !confirmModal ? 10 : 2000,
    //                 });
    //                 contactForm({
    //                     acceptedGDPR: values.acceptTerms,
    //                     email: values.email,
    //                     message: values.message,
    //                     name: values.name,
    //                 })
    //                     .then((resp) => {
    //                         resp && setConfirmModal(true);
    //                         resetForm();
    //                     })
    //                     .catch((err) =>
    //                         toast.error('Nie udało się wysłać e-maila')
    //                     );
    //             },
    //             validationSchema: validation,
    //             validateOnBlur: false,
    //             validateOnChange: false,
    //             validateOnMount: false,
    //         });
    //     return (
    //         <form
    //             onSubmit={handleSubmit}
    //             className="my-[-16rem] scale-75 2xl:my-0 2xl:scale-100"
    //         >
    //             <div className=" absolute  bottom-[41rem] z-[2137] hidden xl:-right-64 xl:flex 2xl:bottom-[39rem] 2xl:-right-72">
    //                 <img src="/images/hermibaby.png" alt="Hermiona" />
    //             </div>
    //             <div className="z-[2137] flex w-3/4 xl:hidden">
    //                 <img src="/images/hermibaby_mobile.png" alt="Hermiona" />
    //             </div>
    //             <div className="mx-auto flex w-screen flex-col px-2 md:container md:w-full">
    //                 <div className="mx-auto mt-9 flex w-full flex-col lg:w-full">
    //                     <label className="mb-2 ml-2 text-3xl font-bold text-blue-900 lg:ml-2 lg:text-4xl">
    //                         Imię i nazwisko
    //                     </label>
    //                     <Input
    //                         type={'text'}
    //                         name="name"
    //                         minLength={2}
    //                         maxLength={40}
    //                         className="h-[64px]  w-full p-2 text-2xl font-bold lg:w-[842px] lg:p-8 lg:text-3xl"
    //                         value={values.name.slice(0, 40)}
    //                         onChange={handleChange}
    //                     />
    //                     <span className="min-h-[20px] text-xl text-red-400">
    //                         {errors.name || ''}
    //                     </span>
    //                 </div>
    //                 <div className="mx-auto mt-9 flex w-full flex-col lg:w-full">
    //                     <label className="mb-2 ml-2 text-3xl font-bold text-blue-900 lg:ml-0 lg:text-4xl">
    //                         E-mail
    //                     </label>
    //                     <Input
    //                         name="email"
    //                         type={'text'}
    //                         min={3}
    //                         maxLength={100}
    //                         className="h-[64px] w-full p-2 text-2xl font-bold lg:w-[842px] lg:p-8 lg:text-3xl"
    //                         value={values.email.slice(0, 100)}
    //                         onChange={handleChange}
    //                     />
    //                     <span className="min-h-[20px] text-xl text-red-400">
    //                         {errors.email || ''}
    //                     </span>
    //                 </div>
    //                 <div className="mx-auto mt-9 flex w-full flex-col lg:w-full">
    //                     <label className="mb-2 ml-2 flex flex-row text-3xl font-bold text-blue-900 lg:ml-0 lg:text-4xl">
    //                         Wpisz tekst &nbsp;
    //                         <p
    //                             className={`${
    //                                 values.message.length === 300 && 'text-red-700'
    //                             }`}
    //                         >
    //                             {values.message.length}/300
    //                         </p>
    //                     </label>
    //                     <textarea
    //                         className="h-[272px] p-4 pr-72 text-2xl font-bold placeholder:text-blue-900 lg:mx-0 lg:w-[842px] lg:p-8 lg:text-3xl"
    //                         maxLength={300}
    //                         name="message"
    //                         minLength={3}
    //                         value={values.message.slice(0, 300)}
    //                         onChange={handleChange}
    //                         placeholder={'Wpisz treść 0/300'}
    //                     />
    //                     <span className="min-h-[20px] text-xl text-red-400">
    //                         {errors.message || ''}
    //                     </span>
    //                     {confirmModal && (
    //                         <MessageThanks setConfirmModal={setConfirmModal} />
    //                     )}
    //                 </div>
    //                 <div className="mx-auto mt-12 flex flex-row items-baseline gap-2 px-4 lg:w-[840px] lg:gap-6">
    //                     <Input
    //                         name="acceptTerms"
    //                         checked={values.acceptTerms}
    //                         onChange={handleChange}
    //                         type={'checkbox'}
    //                     />
    //                     <p className="text-justify text-base text-blue-900 lg:text-2xl">
    //                         Przyjmuję do wiadomości, że administratorem danych
    //                         osobowych, podanych przeze mnie w formularzu kontaktowym
    //                         jest Advalue Sp. z o.o. z siedzibą w Warszawie, ul.
    //                         Przeskok 2, 00-032 Warszawa. Podstawą przetwarzania
    //                         podanych danych na potrzeby i w celu udzielenia
    //                         odpowiedzi na złożone zapytanie w ramach skrzynki
    //                         kontaktowej dostępnej na stronie
    //                         www.loteriamagiaswiat.pl jest prawnie uzasadniony
    //                         interes administratora (art. 6 ust. 1 lit.f RODO),
    //                         polegający na umożliwieniu administratorowi odpowiedzi
    //                         na złożone zapytanie. Podanie przeze mnie danych
    //                         osobowych jest dobrowolne, ale konieczne do uzyskania
    //                         odpowiedzi na pytanie wysłane przeze mnie za pomocą
    //                         formularza kontaktowego. Kontakt z administratorem
    //                         możliwy jest pod Advalue Sp. z o.o., ul. Przeskok 2,
    //                         00-032 Warszawa. Podane dane będą przetwarzane wyłącznie
    //                         w czasie niezbędnym do udzielenia odpowiedzi na złożone
    //                         zapytanie w ramach skrzynki kontaktowej oraz przez okres
    //                         miesiąca od daty udzielenia odpowiedzi na zapytanie z
    //                         uwagi na konieczność zachowania ciągłości
    //                         korespondencji. Odbiorcą danych osobowych jest
    //                         Organizator Loterii, a także mogą nimi być podmioty
    //                         księgowe lub informatyczne. Przysługuje mi prawo dostępu
    //                         do podanych danych oraz prawo żądania ich sprostowania,
    //                         poprawiania, usunięcia, ograniczenia ich przetwarzania,
    //                         prawo wniesienia sprzeciwu wobec ich przetwarzania, a
    //                         także prawo do wniesienia skargi do organu nadzorczego -
    //                         Prezesa Urzędu Ochrony Danych Osobowych
    //                     </p>
    //                 </div>
    //                 <span className="min-h-[20px] text-xl text-red-400">
    //                     {errors.acceptTerms || ' '}
    //                 </span>
    //                 <div className="mb-12 flex w-full items-center justify-center">
    //                     <button
    //                         type="submit"
    //                         className="mt-20 h-[44px] w-[300px] bg-blue-900"
    //                     >
    //                         <p className="text-2xl font-bold uppercase text-white">
    //                             Wyślij
    //                         </p>
    //                     </button>
    //                 </div>
    //             </div>
    //             <ToastContainer
    //                 bodyClassName={() => 'text-2xl'}
    //                 autoClose={2000}
    //                 position="bottom-left"
    //             />
    //         </form>
    //     );
    // };
    