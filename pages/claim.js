import React, { useState } from "react";
import Layout from "../components/Layout";
import { getSession } from "next-auth/client";
import { fetchJson } from "../lib/api";
import { getAccountFromSession } from "../lib/user";
import { Input, Label } from "../components/Form";
import Button from "../components/shared/Button";

function ClaimForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="mt-5">
      <form>
        <div className="mb-5">
          <div className="mr-5 flex flex-wrap flex-grow">
            <Label htmlFor="first_name">Email</Label>
            <Input
              required
              id="email"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="mt-2">
              We will only use that email if we need to contact you specifically
              and shipping updates
            </div>
          </div>
        </div>
        <h1>Shipping information</h1>
        <div className="flex flex-wrap">
          <div className="md:pr-5 flex flex-wrap w-full md:w-1/2 mt-5">
            <Label htmlFor="first_name">First Name *</Label>
            <Input
              required
              id="first_name"
              value={firstName}
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="md:pl-5 flex flex-wrap w-full md:w-1/2 mt-5">
            <Label htmlFor="last_name">Last Name *</Label>
            <Input
              required
              id="last_name"
              value={lastName}
              type="text"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="mt-5 flex flex-wrap">
          <Label htmlFor="address_1">Delivery Address *</Label>
          <Input
            required
            id="address_1"
            value={address1}
            type="text"
            onChange={(e) => {
              setAddress1(e.target.value);
            }}
          />
        </div>
        <div className="mt-5 flex flex-wrap">
          <Label htmlFor="address_1">
            Delivery Address Line 2 (Apt No., Suite)
          </Label>
          <Input
            id="address_2"
            value={address2}
            type="text"
            onChange={(e) => {
              setAddress2(e.target.value);
            }}
          />
        </div>
        <div className="mt-5 flex flex-wrap">
          <Label htmlFor="city">City *</Label>
          <Input
            id="city"
            value={city}
            type="text"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </div>
        <div className="mt-5 flex flex-wrap">
          <Label htmlFor="state">State/Province</Label>
          <Input
            id="state"
            value={state}
            type="text"
            onChange={(e) => {
              setState(e.target.value);
            }}
          />
        </div>
        <div className="mt-5 flex flex-wrap">
          <Label htmlFor="zip">ZIP Code *</Label>
          <Input
            id="zip"
            value={zip}
            type="text"
            onChange={(e) => {
              setZip(e.target.value);
            }}
          />
        </div>
        <div className="mt-5 flex flex-wrap">
          <Label htmlFor="country">Country</Label>
          <Input
            id="country"
            value={country}
            type="text"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
        </div>
        <div className="mt-5">* required field</div>
        <div className="flex items-center justify-center">
          <Button size="xl">Claim!</Button>
        </div>
      </form>
    </div>
  );
}

export default function Claim({ count }) {
  return (
    <Layout
      title="Claim your stickers"
      description="Enter your shipping information to claim your stickers"
      canonical="/claim"
    >
      <h1 className="text-center text-5xl mt-10">🎉 Claim your stickers 🎉</h1>
      {count < 4 && (
        <div>
          <h1>
            Looks like you haven't completed the challenge,
            <br />
            come back later!
          </h1>
          <p>
            Note: it might take up to 5 minutes for your contributions to show
            up
          </p>
        </div>
      )}
      {count >= 4 && <ClaimForm />}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return { props: { count: 0 } };
  }

  const account = await getAccountFromSession(session.accessToken);

  try {
    const data = await fetchJson(`users/${account.participant_id}/progress`);

    if (data.error) {
      return {
        props: {
          error: { message: "There was an error fetching your progress." },
        },
      };
    }

    return { props: { count: data.unique } };
  } catch (error) {
    return {
      props: {
        error: { message: "There was an error fetching your progress." },
      },
    };
  }
}
