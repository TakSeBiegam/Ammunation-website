import { Chain, ModelTypes, ZeusScalars } from "@/types/zeus";

const apiUrl = 'http://localhost:8080/graphql';

export const useBackend = () => {
    const chain = (option: 'query' | 'mutation') => {
        return Chain(apiUrl)(option, {
            scalars,
        });
    };
    const applyForm = async (data: ModelTypes["ApplyFormInput"]) => {
        const response = await chain('mutation')({
            ApplyForm:
                [{
                    data: {
                        firstName: data.firstName,
                        lastName: data.lastName,
                        birthday: data.birthday,
                        aboutMe: data.aboutMe,
                        email: data.email,
                        phoneNumber: data.phoneNumber
                    }
                }, true
                ]
        }
        );
    };
    const findProduct = async (productId: string) => {
        const response = await chain('query')({
            findProduct: [
                {
                    id: productId,
                }, {
                    id: true,
                    name: true,
                    description: true,
                    image: true,
                    price: true,
                    quantity: true,
                }
            ]
        });

        if (!response)
            throw new Error('Invalid response from backend ContactForm');
        return response;
    }
    return {
        applyForm,
        findProduct
    };

}


export const scalars = ZeusScalars({
    Date: {
        decode: (e: unknown) => new Date(e as string),
        encode: (e: unknown) => (e as Date).toISOString(),
    },
});