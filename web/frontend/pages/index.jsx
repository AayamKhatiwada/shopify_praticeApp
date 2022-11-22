import {
  Page,
  Card,
  DisplayText,
  Stack,
  Badge,
  Layout,
  Icon,
} from "@shopify/polaris";
import React, { useEffect } from 'react';
import {
  OrdersMajor
} from '@shopify/polaris-icons';

import Title from "../components/title";

export default function HomePage() {

  return (
    <>
      {/* <ScriptTag /> */}
      <Title name="Home" />
      <Page>
        <Layout>
          <Layout.Section>
            <Card sectioned>
              <Stack distribution="center">
                <DisplayText size="extraLarge">Wlcome to my-app</DisplayText>
              </Stack>
            </Card>
          </Layout.Section>

          <Layout.Section oneHalf>
            <Card sectioned>
              <Card.Section>
                <DisplayText size="medium">Products <span><img src="https://cdn.corporatefinanceinstitute.com/assets/products-and-services-1024x1024.jpeg" alt="" width="40px" /></span></DisplayText><br />
                In this app, you can view the products with the help of the button at the right top of the app
              </Card.Section>
            </Card>
          </Layout.Section>

          <Layout.Section oneHalf>
            <Card sectioned>
              <Card.Section>
                <DisplayText size="medium">
                  Orders &nbsp;
                  <span>
                    <Badge status="success">
                      <Icon source={OrdersMajor} />
                    </Badge>
                  </span>
                </DisplayText>
                <br />
                In this app, you can view the orders with the help of the button at the right top of the app
              </Card.Section>
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    </>
  );
}
