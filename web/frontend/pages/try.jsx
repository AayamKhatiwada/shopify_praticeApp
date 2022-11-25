import { Button } from "@shopify/polaris";
import { useAppQuery } from "../hooks";

const Try = () => {

    const { refetch } = useAppQuery({
        url: "/api/setLocations",
        reactQueryOptions: {
            onSuccess: (response) => {
                console.log(response)
            },
            enabled: false
        },
    });

    return (
        <>
            <div>
                <Button onClick={refetch}>Insert Location</Button>
            </div>
        </>
    );
}

export default Try