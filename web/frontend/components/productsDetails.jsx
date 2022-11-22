import { useAppBridge, useNavigate } from "@shopify/app-bridge-react";
import { getSessionToken } from "@shopify/app-bridge-utils";
import { Badge, Button, Card, Checkbox, ChoiceList, ContextualSaveBar, Frame, FullscreenBar, Modal, Select, Spinner, Stack, TextField, Toast } from "@shopify/polaris";
import { useEffect } from "react";
import { useCallback, useState } from "react";
import { useParams } from 'react-router-dom';
import Title from "./title";
import { useAppQuery } from "../hooks";
import { ResourcePicker } from '@shopify/app-bridge-react';

const ProductsDetails = () => {

    const { slugPara } = useParams();
    const app = useAppBridge();
    const [saveBar, setSaveBar] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [active, setactive] = useState(false)

    const [gid, setGid] = useState('')

    const [title, setTitle] = useState('')
    const handleTitleChange = useCallback((value) => setTitle(value), []);

    const [description, setDescription] = useState('')
    const handleDescriptionChange = useCallback((value) => setDescription(value), []);

    const [price, setPrice] = useState('')
    const handlePriceChange = useCallback((value) => setPrice(value), []);

    const [productType, setProductType] = useState('')
    const handleProductTypeChange = useCallback((value) => setProductType(value), []);

    const [selected, setSelected] = useState('');
    const handleSelectChange = useCallback((value) => setSelected(value), []);

    const [vendor, setVendor] = useState('');
    const handleVendorChange = useCallback((value) => setVendor(value), []);

    const [checkedChargeTax, setCheckedChargeTax] = useState(false);
    const handleCheckedChargeTax = useCallback((newChanged) => setCheckedChargeTax(newChanged), []);

    const [compareAtPrice, setCompareAtPrice] = useState('')
    const handleCompareAtPrice = useCallback((value) => setCompareAtPrice(value), []);

    const [collections, setCollections] = useState([]);
    const handleCollections = useCallback((value) => setCollections(value), []);

    const [oldCollections, setOldCollections] = useState([]);
    const handleOldCollections = useCallback((value) => setOldCollections(value), []);

    const [changeShowCollection, setChangeShowCollection] = useState(false)
    const handleChangeShowCollection = useCallback(() => setChangeShowCollection((value) => !value), []);

    const [stockUnit, setStockUnit] = useState('')
    const handleStockUnit = useCallback((value) => setStockUnit(value), []);

    const [barCode, setBarCode] = useState('')
    const handleBarCode = useCallback((value) => setBarCode(value), []);

    const [images, setImages] = useState([])

    const { data, refetch } = useAppQuery({
        url: `/api/getProducts/${slugPara}`,
        reactQueryOptions: {
            onSuccess: (response) => {
                const data = response.data.product
                setGid(data.id);
                setTitle(data.title);
                setDescription(data.description);
                setPrice(data.variants.nodes[0].price);
                setProductType(data.productType);
                setSelected(data.status);
                setVendor(data.vendor)
                setCheckedChargeTax(data.variants.nodes[0].taxable)
                setCompareAtPrice(data.variants.nodes[0].compareAtPrice === null ? '' : data.variants.nodes[0].compareAtPrice)
                setStockUnit(data.variants.nodes[0].sku)
                setBarCode(data.variants.nodes[0].barcode)
                setImages(data.images.edges)
                setIsLoading(false)
                console.log(data)
            }
        }
    });

    const jjpt = []

    useAppQuery({
        url: "/api/collections",
        reactQueryOptions: {
            onSuccess: (response) => {

                response.data.collections.edges.map((collection) => {
                    collection.node.products.nodes.forEach(product => {
                        if (product.title.toLowerCase().includes(title.toLocaleLowerCase())) {
                            jjpt.push({ "id": collection.node.id })
                        }
                    });

                })

                handleCollections(jjpt)
                handleOldCollections(jjpt)
            }
        },
    });

    const array = data ? data.data.product : null;

    useEffect(() => {
        if (array !== null) {
            if (
                title !== array.title ||
                description !== array.description ||
                price !== array.variants.nodes[0].price ||
                productType !== array.productType ||
                selected !== array.status ||
                vendor !== array.vendor ||
                checkedChargeTax !== array.variants.nodes[0].taxable ||
                compareAtPrice !== (array.variants.nodes[0].compareAtPrice === null ? '' : array.variants.nodes[0].compareAtPrice) ||
                JSON.stringify(collections) !== JSON.stringify(oldCollections) ||
                stockUnit !== array.variants.nodes[0].sku ||
                barCode !== array.variants.nodes[0].barcode
            ) {
                setSaveBar(true)
            } else {
                setSaveBar(false)
            }
        }
    }, [title, description, price, productType, selected, vendor, checkedChargeTax, compareAtPrice, collections, stockUnit, barCode])

    const handleDiscardSaveBar = useCallback(() => {
        setTitle(array.title);
        setDescription(array.description);
        setPrice(array.variants.nodes[0].price);
        setProductType(array.productType);
        setSelected(array.status);
        setVendor(array.vendor)
        setCheckedChargeTax(array.variants.nodes[0].taxable)
        setCompareAtPrice(array.variants.nodes[0].compareAtPrice === null ? '' : array.variants.nodes[0].compareAtPrice)
        setCollections(oldCollections)
        setStockUnit(array.variants.nodes[0].sku)
        setBarCode(array.variants.nodes[0].barcode)
    })

    const handleChangeProduct = () => {

        if (JSON.stringify(collections) !== JSON.stringify(oldCollections)) {
            changeProductCollection()
        }
        else {
            changeProductData()
        }

    }

    const changeProductData = async () => {
        setSelected(selected.toUpperCase())
        let data = { gid, title, description, price, productType, selected, vendor, compareAtPrice, checkedChargeTax, stockUnit, barCode };
        console.log(data)
        const sessionToken = await getSessionToken(app);
        let result = await fetch(`https://${window.location.host}/api/editProduct`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + sessionToken,
            },
            body: JSON.stringify(data)
        });
        await result.json();
        // console.log(response)

        refetch()
        setSaveBar(false)
        setIsLoading(false)
        setactive(true)

    }

    const changeProductCollection = async () => {
        let data = { gid, oldCollections, collections };
        console.log(JSON.stringify(data))
        const sessionToken = await getSessionToken(app);
        let result = await fetch(`https://${window.location.host}/api/editProductCollection`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + sessionToken,
            },
            body: JSON.stringify(data)
        });
        const response = await result.json();
        console.log(response)

        refetch()
        setSaveBar(false)
        setIsLoading(false)
        setactive(true)
    }

    const options = [
        { label: 'Active', value: 'ACTIVE' },
        { label: 'Draft', value: 'DRAFT' },
    ];

    const navigate = useNavigate()
    const handleActionClick = useCallback(() => {
        navigate('/products')
    }, []);

    const resourcePicker = (
        <ResourcePicker
            resourceType='Collection'
            open={changeShowCollection}
            showVariant={false}
            initialSelectionIds={collections}
            onSelection={(resources) => {
                handleCollections(resources.selection.map((collection) => { return { "id": collection.id } }));
                handleChangeShowCollection()
            }}
            onCancel={handleChangeShowCollection}
        />
    );

    const fullscreenBarMarkup = (
        <FullscreenBar onAction={handleActionClick}>
            <div
                style={{
                    display: 'flex',
                    flexGrow: 1,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingLeft: '1rem',
                    paddingRight: '1rem',
                }}
            >
                <div style={{ marginLeft: '1rem', display: "flex", flexGrow: 1 }}>
                    {array && array.title}
                    <div style={{ marginLeft: '1rem', }}>
                        <Badge status="info">{array && array.status}</Badge>
                    </div>
                </div>
            </div>
        </FullscreenBar>
    );

    const contextualSaveBar = saveBar && (
        <ContextualSaveBar
            message="Unsaved changes"
            saveAction={{
                onAction: handleChangeProduct,
                loading: false,
                disabled: false,
            }}
            discardAction={{
                onAction: handleDiscardSaveBar,
            }}
        />
    );

    const toastMarkup = active ? (
        <Toast content="Product Updated" onDismiss={() => setactive(false)} />
    ) : null;

    return (
        <>
            {
                isLoading ? (
                    <Frame>
                        <div className="text-center">
                            <Spinner
                                accessibilityLabel="Spinner example"
                                size="large"
                            />
                        </div>
                    </Frame>
                ) :
                    (
                        <Frame>
                            {resourcePicker}
                            {contextualSaveBar}
                            {toastMarkup}
                            <Title name="Product Details" />
                            <div style={{ height: '250px', width: '100%' }}>
                                {fullscreenBarMarkup}
                                <div style={{ padding: '1.5rem 70px' }}>
                                    <Stack>
                                        <Stack.Item fill>
                                            <Card sectioned>
                                                <Stack vertical>
                                                    <TextField
                                                        value={title}
                                                        onChange={handleTitleChange}
                                                        label="Title"
                                                        type="title"
                                                        autoComplete="off"
                                                    />
                                                    <TextField
                                                        value={description}
                                                        onChange={handleDescriptionChange}
                                                        multiline={4}
                                                        label="Description"
                                                        type="description"
                                                        autoComplete="off"
                                                    />
                                                </Stack>
                                            </Card>
                                            <Card sectioned title="Media">
                                                <Stack vertical alignment="center">
                                                    <Button>Insert Image</Button>
                                                    <Stack>
                                                        {
                                                            images.map((image) => {
                                                                return (
                                                                    <img src={image.node.url} alt="random" width={"300px"} />
                                                                );
                                                            })
                                                        }
                                                    </Stack>
                                                </Stack>
                                            </Card>
                                            <Card title="Pricing" sectioned>
                                                <Stack vertical>
                                                    <TextField
                                                        value={price}
                                                        onChange={handlePriceChange}
                                                        label="Price"
                                                        type="price"
                                                        placeholder="0.00"
                                                        autoComplete="off"
                                                        prefix="NPR"
                                                    />
                                                    <TextField
                                                        value={compareAtPrice}
                                                        onChange={handleCompareAtPrice}
                                                        label="Compare at price"
                                                        type="price"
                                                        autoComplete="off"
                                                        placeholder="0.00"
                                                        prefix="NPR"
                                                    />
                                                    <Checkbox
                                                        label="Charge tax on this product"
                                                        checked={checkedChargeTax}
                                                        onChange={handleCheckedChargeTax}
                                                    />
                                                </Stack>
                                            </Card>
                                            <Card title="Inventory" actions={[{ content: 'Adjustment history' }]} sectioned>
                                                <Stack distribution="fill">
                                                    <TextField
                                                        value={stockUnit}
                                                        onChange={handleStockUnit}
                                                        label="SKU (Stock Keeping Unit)"
                                                        type="sku"
                                                        autoComplete="off"
                                                    />
                                                    <TextField
                                                        value={barCode}
                                                        onChange={handleBarCode}
                                                        label="Barcode (ISBN, UPC, GTIN, etc.)"
                                                        type="barcode"
                                                        autoComplete="off"
                                                    />
                                                </Stack>
                                            </Card>
                                        </Stack.Item>
                                        <div>
                                            <Card sectioned>
                                                <Select
                                                    label="Product Status"
                                                    options={options}
                                                    onChange={handleSelectChange}
                                                    value={selected}
                                                />
                                            </Card>
                                            <Card title="Insights" sectioned>
                                                <p>Insights will display when the product<br></br> has had recent sales</p>
                                            </Card>
                                            <Card title="Product organization" sectioned>
                                                <Stack vertical>
                                                    <TextField
                                                        value={productType}
                                                        onChange={handleProductTypeChange}
                                                        label="Product Type"
                                                        type="productType"
                                                        autoComplete="off"
                                                    />
                                                    <TextField
                                                        value={vendor}
                                                        onChange={handleVendorChange}
                                                        label="Vendor"
                                                        type="vendor"
                                                        autoComplete="off"
                                                    />
                                                    <Button onClick={handleChangeShowCollection}>Set Collection</Button>
                                                </Stack>
                                            </Card>
                                        </div>
                                    </Stack>
                                </div>
                            </div>
                        </Frame>
                    )
            }
        </>
    );
}

export default ProductsDetails;