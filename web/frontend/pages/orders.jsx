import {
  Layout,
  Page,
  Card,
  useIndexResourceState,
  IndexTable,
  TextStyle,
  SkeletonBodyText,
  Frame,
  Loading,
} from "@shopify/polaris";
import React from 'react';

import { useAppQuery } from "../hooks";

import { useState } from "react";

import { useAppBridge } from '@shopify/app-bridge-react';
import { Fullscreen } from '@shopify/app-bridge/actions';
import { useEffect } from "react";
import Title from "../components/title";

export default function Orders() {

  const app = useAppBridge();
  const fullscreen = Fullscreen.create(app);
  const [screen, setScreen] = useState(false);

  useEffect(() => {
    if (screen) {
      fullscreen.dispatch(Fullscreen.Action.ENTER)
    } else {
      fullscreen.dispatch(Fullscreen.Action.EXIT)
    }
  }, [screen]);

  const { data } = useAppQuery({
    url: '/api/orders',
    reactQueryOptions: {
      onSuccess: (response) => {
        // console.log(response);
      }
    }
  });

  const orders = data ? data.orders : null;

  const resourceName = {
    singular: "orders",
    plural: "order"
  };

  const {
    selectedResources,
    allResourcesSelected,
    handleSelectionChange
  } = useIndexResourceState(orders);

  return (
    <>
      <Title name="Orders" />
        <Page
          title="Orders"
          primaryAction={
            screen ?
              { content: 'Exit full screen', onAction: () => setScreen(false) } : { content: 'Full screen', onAction: () => setScreen(true) }
          }
          fullWidth
        >
          <Layout sectioned>
            <Layout.Section oneHalf>
              {
                orders ? (
                  <>
                    <Card>
                      <IndexTable
                        resourceName={resourceName}
                        itemCount={orders.length}
                        selectedItemsCount={
                          allResourcesSelected ? "All" : selectedResources.length
                        }
                        onSelectionChange={handleSelectionChange}
                        headings={[
                          { title: "Order" },
                          { title: "Tax" },
                          { title: "Total price" },
                          { title: "Payment Status" },
                          { title: "Outstanding" },
                          { title: "Items" },
                        ]}
                      >
                        {
                          orders.map((data) => {
                            return (
                              <IndexTable.Row id={data.id} key={data.id} selected={selectedResources.includes(data.id)} position={data}>
                                <IndexTable.Cell>
                                  <TextStyle variation="strong">{data.name}</TextStyle>
                                </IndexTable.Cell>
                                <IndexTable.Cell>Rs {data.current_total_tax}</IndexTable.Cell>
                                <IndexTable.Cell>Rs {data.total_price}</IndexTable.Cell>
                                <IndexTable.Cell>{data.financial_status}</IndexTable.Cell>
                                <IndexTable.Cell>Rs {data.total_outstanding}</IndexTable.Cell>
                                <IndexTable.Cell>{data.line_items.length}</IndexTable.Cell>
                              </IndexTable.Row>
                            );
                          })
                        }

                      </IndexTable>
                    </Card>
                  </>
                ) :
                  (
                    <Frame>
                      <SkeletonBodyText lines={10} />
                      <Loading />
                    </Frame>
                  )
              }

            </Layout.Section>
          </Layout>
        </Page >
    </>
  );
}
