import { gql, useQuery } from "@apollo/client";
import { useAppBridge } from "@shopify/app-bridge-react";
import { Button } from "@shopify/polaris";
import { useAppQuery } from "../hooks/useAppQuery";

export default function Frame() {

  const { refetch } = useAppQuery({
    url: '/api/products/create',
    reactQueryOptions: {
      onSuccess: (response) => {
        console.log(response);
      },
      enabled: false
    }
  });

  return (
    <div>
      <Button onClick={refetch}>Insert Products</Button>
    </div>
  );
}