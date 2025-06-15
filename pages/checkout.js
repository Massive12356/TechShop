import React, { useEffect, useState, useContext } from "react";
import Layout from "../components/Layout";
import * as C from "../styles/CheckoutPageStyles";
import * as F from "../styles/FormStyles";
import * as Yup from "yup";
import { Container, Flex, Margin } from "../styles/widgets";
import HandsIcon from "../public/assets/shared/desktop/icon-hands.svg";
import Summary from "../components/Cart/Summary";
import { Formik } from "formik";
import { checkoutSchema, initialValues } from "../utils";
import Done from "../components/Checkout/Done";
import { CartContext } from "../context/CartContext";
import { BackBtn } from "../styles/widgets/Buttons";
import Link from "next/link";

export default function Checkout({ prev }) {
  const { removeAll } = useContext(CartContext);
  const [paymentType, setPaymentType] = useState("e-money");
  const [schema, setSchema] = useState(checkoutSchema);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (paymentType === "e-money") {
      const eSchema = {
        eNumber: Yup.number().required("*Required"),
        ePin: Yup.string().min(4, "Too short").required("*Required"),
      };
      setSchema(Yup.object().shape({ ...checkoutSchema, ...eSchema }));
    } else {
      setSchema(Yup.object().shape({ ...checkoutSchema }));
    }
  }, [paymentType]);

  const _done = () => {
    setDone(true);
    removeAll(false);
  };

  return (
    <Layout>
      <Container>
        <Link href={prev} passHref>
          <BackBtn style={{ marginTop: "141px" }}>Go Back</BackBtn>
        </Link>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={(values) => _done()}
        >
          {(props) => (
            <C.Form onSubmit={(e) => e.preventDefault()}>
              <C.FormCover>
                <C.Header>CHECKOUT</C.Header>
                <C.SubHeader>Billing Details</C.SubHeader>
                <C.Split>
                  <div>
                    <F.Label error={props.errors.name && props.touched.name}>
                      Name
                      <span>{props.touched.name && props.errors.name}</span>
                    </F.Label>
                    <F.Input
                      type="text"
                      placeholder="Alexei Ward"
                      name="name"
                      value={props.values.name}
                      onChange={props.handleChange("name")}
                      error={props.errors.name && props.touched.name}
                    />
                  </div>
                  <div>
                    <F.Label error={props.errors.email && props.touched.email}>
                      Email{" "}
                      <span>{props.touched.email && props.errors.email}</span>
                    </F.Label>
                    <F.Input
                      type="email"
                      placeholder="alexei@mail.com"
                      name="email"
                      value={props.values.email}
                      onChange={props.handleChange("email")}
                      error={props.errors.email && props.touched.email}
                    />
                  </div>
                  <div>
                    <F.Label error={props.errors.phone && props.touched.phone}>
                      Phone Number{" "}
                      <span>{props.touched.phone && props.errors.phone}</span>
                    </F.Label>
                    <F.Input
                      type="text"
                      placeholder="+1 202-555-0136"
                      name="phone"
                      value={props.values.phone}
                      onChange={props.handleChange("phone")}
                      error={props.errors.phone && props.touched.phone}
                    />
                  </div>
                </C.Split>
                <Margin m={29} />
                <C.SubHeader>shipping info</C.SubHeader>
                <F.Label error={props.errors.address && props.touched.address}>
                  Address{" "}
                  <span>{props.touched.address && props.errors.address}</span>
                </F.Label>
                <F.Input
                  type="text"
                  placeholder="1137 Williams Avenue"
                  name="address"
                  value={props.values.address}
                  onChange={props.handleChange("address")}
                  error={props.errors.address && props.touched.address}
                />
                <C.Split>
                  <div>
                    <F.Label
                      error={props.errors.zipCode && props.touched.zipCode}
                    >
                      Zip Code
                      <span>
                        {props.touched.zipCode && props.errors.zipCode}
                      </span>
                    </F.Label>
                    <F.Input
                      type="text"
                      placeholder="10001"
                      name="zipCode"
                      value={props.values.zipCode}
                      onChange={props.handleChange("zipCode")}
                      error={props.errors.zipCode && props.touched.zipCode}
                    />
                  </div>
                  <div>
                    <F.Label error={props.errors.city && props.touched.city}>
                      City{" "}
                      <span>{props.touched.city && props.errors.city}</span>
                    </F.Label>
                    <F.Input
                      type="text"
                      placeholder="New York"
                      name="city"
                      value={props.values.city}
                      onChange={props.handleChange("city")}
                      error={props.errors.city && props.touched.city}
                    />
                  </div>
                  <div>
                    <F.Label
                      error={props.errors.country && props.touched.country}
                    >
                      Country{" "}
                      <span>
                        {props.touched.country && props.errors.country}
                      </span>
                    </F.Label>
                    <F.Input
                      type="text"
                      placeholder="United States"
                      name="country"
                      value={props.values.country}
                      onChange={props.handleChange("country")}
                      error={props.errors.country && props.touched.country}
                    />
                  </div>
                </C.Split>
                <Margin m={29} />
                <C.SubHeader>payment details</C.SubHeader>
                <C.Split>
                  <F.Label>Payment Method</F.Label>
                  <div>
                    <F.Radio
                      active={paymentType === "e-money"}
                      onClick={() => setPaymentType("e-money")}
                    >
                      <span /> e-Money
                    </F.Radio>
                    <F.Radio
                      active={paymentType === "cash"}
                      onClick={() => setPaymentType("cash")}
                    >
                      <span /> Cash on Delivery
                    </F.Radio>
                  </div>
                </C.Split>
                {paymentType === "e-money" ? (
                  <C.Split>
                    <div>
                      <F.Label
                        error={props.errors.eNumber && props.touched.eNumber}
                      >
                        e-Money Number{" "}
                        <span>
                          {props.touched.eNumber && props.errors.eNumber}
                        </span>
                      </F.Label>
                      <F.Input
                        type="number"
                        placeholder="238521993"
                        name="eNumber"
                        value={props.values.eNumber}
                        onChange={props.handleChange("eNumber")}
                        error={props.errors.eNumber && props.touched.eNumber}
                      />
                    </div>
                    <div>
                      <F.Label error={props.errors.ePin && props.touched.ePin}>
                        e-Money Pin{" "}
                        <span>{props.touched.ePin && props.errors.ePin}</span>
                      </F.Label>
                      <F.Input
                        type="number"
                        placeholder="6891"
                        name="ePin"
                        value={props.values.ePin}
                        onChange={props.handleChange("ePin")}
                        error={props.errors.ePin && props.touched.ePin}
                      />
                    </div>
                  </C.Split>
                ) : (
                  <C.Bottom>
                    <HandsIcon style={{ minWidth: "48px" }} />
                    <C.Text>
                      The ‘Cash on Delivery’ option enables you to pay in cash
                      when our delivery courier arrives at your residence. Just
                      make sure your address is correct so that your order will
                      not be cancelled.
                    </C.Text>
                  </C.Bottom>
                )}
              </C.FormCover>
              <Summary submit={props.handleSubmit} />
            </C.Form>
          )}
        </Formik>
      </Container>
      {done && <Done />}
    </Layout>
  );
}

export function getServerSideProps({ req }) {
  return {
    props: {
      prev: req.headers.referer || "/",
    },
  };
}
