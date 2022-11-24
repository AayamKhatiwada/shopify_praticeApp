import { Button, Card, ChoiceList, Collapsible, Frame, Loading, Select, SkeletonBodyText, Stack } from "@shopify/polaris";
import { useEffect } from "react";
import { useCallback, useState } from "react";
import { useAppQuery } from "../hooks";

export default function FullscreenBarExample() {

    const [products, setProducts] = useState(null)
    const [allCollection, setAllCollection] = useState([])

    const [selected, setSelected] = useState('');
    const handleSelectChange = useCallback((value) => setSelected(value), []);

    const [sentId, setSentId] = useState('');

    const [options, setOptions] = useState([])
    const handleSetOptons = useCallback((value) => setOptions(value), []);

    useAppQuery({
        url: "/api/custom_collections",
        reactQueryOptions: {
            onSuccess: (response) => {
                // console.log(response.custom_collections)
                setAllCollection(response.custom_collections)

                const hello = response.custom_collections.map((collect) => {
                    return { label: collect.title, value: collect.title }
                })
                handleSetOptons(hello)
                handleSelectChange(response.custom_collections[0].title)
            }
        },
    });

    useEffect(() => {
        allCollection.map((collect) => {
            if (collect.title === selected) {
                setSentId(collect.id)
            }
        })

    }, [allCollection, selected])

    useAppQuery({
        url: `/api/getProductCollection/${sentId}`,
        reactQueryOptions: {
            onSuccess: (response) => {
                setProducts(response.products)
            }
        },
    });

    return (
        <>
            <div style={{ padding: "20px" }}></div>

            <div style={{ margin: "0 200px" }}>
                <Select
                    options={options}
                    onChange={handleSelectChange}
                    value={selected}
                />
            </div>

            <div style={{ padding: "20px" }}></div>

            <Stack distribution="center" spacing="extraLoose">
                {products ? (
                    products.map((data) => {
                        return (
                            <Card
                                title={data.title}
                                key={data.id}
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
        </>
    );
}