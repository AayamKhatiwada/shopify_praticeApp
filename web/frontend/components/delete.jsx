import { useNavigate } from "@shopify/app-bridge-react";
import { useAppQuery } from "../hooks";

const Delete = (id) => {

    console.log(id)
    const navigate = useNavigate();
    useAppQuery({
        url: '/api/deleteProduct',
        fetchInit: {id},
        reactQueryOptions: {
            onSuccess: (response) => {
                console.log(response);
            }
        },
    });

    navigate('/products')

    return (
        <>Delete Page</>
    );
}

export default Delete;