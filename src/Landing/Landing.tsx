import { useState, useEffect } from "react";
import Card from "../components/Card/Card";
import axios from "axios";
import styles from "./index.module.css";

export interface People {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

const Landing = () => {
  const [peoples, setPeoples] = useState<People[]>([]);

  // fetch Peoples Data
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      const { data } = response;
      setPeoples(data);
    } catch (err) {
      console.error(err);
    } finally {
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.cardContainer}>
        {peoples.map((people, index) => (
          <Card key={index} people={people} />
        ))}
      </div>
    </div>
  );
};

export default Landing;
