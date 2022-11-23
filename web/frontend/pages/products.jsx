import {
  Page,
  Card,
  SkeletonBodyText,
  Frame,
  Loading,
  Badge,
  Stack,
  Modal,
  Toast,
  Filters,
  TextField,
  ChoiceList,
} from "@shopify/polaris";
import React, { useCallback } from 'react';

import { useAppQuery } from "../hooks";

import { useState } from "react";

import { useAppBridge } from '@shopify/app-bridge-react';
import { Fullscreen } from '@shopify/app-bridge/actions';
import { useEffect } from "react";
import Title from "../components/title";
import { getSessionToken } from "@shopify/app-bridge-utils";
import { useNavigate } from 'react-router-dom';

export default function Products() {

  const app = useAppBridge();
  const navigate = useNavigate();

  const fullscreen = Fullscreen.create(app);
  const [screen, setScreen] = useState(false);
  const [deleted, setDelete] = useState(false);
  const [gid, setGid] = useState('');
  const [active, setActive] = useState(false);

  const [queryValue, setQueryValue] = useState('');
  const handleFiltersQueryChange = useCallback(
    (value) => setQueryValue(value),
    [],
  );
  const handleQueryValueRemove = useCallback(() => setQueryValue(''), []);

  const [productType, setProductType] = useState('');
  const handleProductTypeChange = useCallback(
    (value) => setProductType(value),
    [],
  );
  const handleRemoveProductType = useCallback(() => setProductType(''), []);

  const [description, setDescription] = useState('');
  const handleDescriptionChange = useCallback(
    (value) => setDescription(value),
    [],
  );
  const handleRemoveDescription = useCallback(() => setDescription(''), []);

  const [status, setStatus] = useState(['all']);
  const handleStatusChange = useCallback(
    (value) => setStatus(value),
    [],
  );
  const handleRemoveStatus = useCallback(() => setStatus(['all']), []);

  useEffect(() => {
    if (screen) {
      fullscreen.dispatch(Fullscreen.Action.ENTER)
    } else {
      fullscreen.dispatch(Fullscreen.Action.EXIT)
    }
  }, [screen]);

  const { data, refetch } = useAppQuery({
    url: '/api/products',
  });

  var products = data ? data.products.filter(
    (product) => {
      return product.title.toLowerCase().includes(queryValue.toLocaleLowerCase());
    }
  ) : null;

  if (status[0] !== 'all' && status[0] !== '') {
    products = products && products.filter(
      (product) => {
        return product.status.toLowerCase().includes(status[0].toLocaleLowerCase());
      }
    );
  }

  if (productType !== '') {
    products = products.filter(
      (product) => {
        return product.product_type.toLowerCase().includes(productType.toLocaleLowerCase());
      }
    );
  }

  if (description !== '') {
    products = products.filter(
      (product) => {
        return product.body_html?.toLowerCase().includes(description.toLocaleLowerCase());
      }
    );
  }

  const appliedFilters = [];
  if (status[0] !== 'all') {
    const key = "status"
    appliedFilters.push({
      key,
      label: status,
      onRemove: handleRemoveStatus,
    });
  }

  if (description !== '') {
    const key = "description"
    appliedFilters.push({
      key,
      label: description,
      onRemove: handleRemoveDescription,
    });
  }

  if (productType !== '') {
    const key = "productType"
    appliedFilters.push({
      key,
      label: productType,
      onRemove: handleRemoveProductType,
    });
  }

  const delete_product = async () => {
    console.log({ gid })
    const sessionToken = await getSessionToken(app);
    let result = await fetch(`https://${window.location.host}/api/deleteProduct`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Bearer " + sessionToken,
      },
      body: JSON.stringify({ gid })
    });
    const response = await result.json();
    console.log(response)
    setActive((active) => !active);
    setDelete(false)

    refetch()
  }

  const model = (
    <Modal
      open={deleted}
      onClose={() => {
        setDelete(false)
      }}
      title="Do you want to detete the product"
      primaryAction={{
        content: 'Delete',
        destructive: true,
        onAction: delete_product,
      }}
    >
    </Modal>
  );

  const filters = [
    {
      key: 'status',
      label: 'Status',
      filter: (
        <ChoiceList
          title="Status"
          titleHidden
          choices={[
            { label: 'Active', value: 'active' },
            { label: 'Draft', value: 'draft' },
            { label: 'Archived', value: 'archived' },
          ]}
          selected={status}
          onChange={handleStatusChange}
        />
      ),
      shortcut: true,
    },
    {
      key: 'description',
      label: 'Description',
      filter: (
        <TextField
          label="Description"
          value={description}
          onChange={handleDescriptionChange}
          autoComplete="off"
          labelHidden
        />
      ),
      shortcut: true,
    },
    {
      key: 'productType',
      label: 'Product type',
      filter: (
        <TextField
          label="Product type"
          value={productType}
          onChange={handleProductTypeChange}
          autoComplete="off"
          labelHidden
        />
      ),
      shortcut: true,
    },
  ];

  const toggleActive = useCallback(() => setActive((active) => !active), []);

  const toastMarkup = active ? (
    <Toast content="The product has been deleted" onDismiss={toggleActive} />
  ) : null;

  console.log(products)

  return (
    <>
      <Title name="Products" />
      <Frame>
        {model}
        <Page
          title="Products"
          primaryAction={screen ?
            { content: 'Exit full screen', onAction: () => setScreen(false) } : { content: 'Full screen', onAction: () => setScreen(true) }}
          fullWidth
        >
          <Filters
            queryValue={queryValue}
            filters={filters}
            appliedFilters={appliedFilters}
            onQueryChange={handleFiltersQueryChange}
            onQueryClear={handleQueryValueRemove}
          />
          <div style={{ margin: "1.5rem" }}></div>
          <Stack distribution="center" spacing="extraLoose">
            {products ? (
              products.map((data) => {
                return (
                  <Card
                    title={data.title}
                    key={data.id}
                    secondaryFooterActions={[
                      {
                        content: 'Delete',
                        destructive: true,
                        onAction: () => {
                          setGid(data.admin_graphql_api_id);
                          setDelete(true);
                        }
                      },
                    ]}
                    primaryFooterAction={{
                      content: 'Edit Product',
                      onAction: () => {
                        navigate(`/product/${data.id}`)
                      }
                    }}
                  >
                    <Card.Section>
                      <img
                        alt=""
                        width="300px"
                        height="200px"
                        style={{ objectFit: 'contain', objectPosition: 'center' }}
                        src={data.images[0] != null ? data.images[0].src : 'https://www.namepros.com/attachments/empty-png.89209/'} />

                      {data.body_html ? (
                        <p>
                          <br />
                          {data.body_html}
                        </p>
                      ) :
                        <p>
                          <br />
                          No Description
                        </p>}
                    </Card.Section>

                    <Card.Section>
                      <p>
                        Status: {data.status}
                        <br />
                        vendor: {data.vendor}
                        <br />
                        Inventory: {data.variants[0].inventory_quantity}
                        <br />
                        Product Type: {data.product_type ? data.product_type : "Null"}
                      </p>
                    </Card.Section>
                    <div style={{ margin: "2rem" }}></div>
                  </Card>
                );
              })
            ) :
              (
                <Frame>
                  <SkeletonBodyText lines={10} />
                  <Loading />
                </Frame>
              )}
          </Stack>
          {toastMarkup}
        </Page>
      </Frame>
    </>
  );
}
