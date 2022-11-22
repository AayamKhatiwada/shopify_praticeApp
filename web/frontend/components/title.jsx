import { TitleBar, useNavigate } from "@shopify/app-bridge-react";
import { useEffect } from "react";
import { useState } from "react";

const Title = ({name}) => {

    const navigate = useNavigate();

    const [array, setarray] = useState([
      {        
        content: "Products",
        onAction: () => navigate('/products')
      },
      {
        content: "Orders",
        onAction: () => navigate('/orders')
      },
      {
        content: "Home",
        onAction: () => navigate('/')
      },
    ]);

    useEffect(() => {
      if(name === "Products"){
        setarray([
          {
            content: "Home",
            onAction: () => navigate('/')
          },
          {
            content: "Orders",
            onAction: () => navigate('/orders')
          },
        ])
      }else if(name === "Home"){
        setarray([
          {
            content: "Products",
            onAction: () => navigate('/products')
          },
          {
            content: "Orders",
            onAction: () => navigate('/orders')
          },
        ])
      }else if(name === "Orders"){
        setarray([
          {
            content: "Home",
            onAction: () => navigate('/')
          },
          {
            content: "Products",
            onAction: () => navigate('/products')
          },
        ])
      }
    }, [name])
    

    return (
        <TitleBar title={name}
        secondaryActions={array}
      />
    );
}

export default Title;