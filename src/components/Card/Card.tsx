import { FC } from "react";
import { People } from "../../Landing/Landing";
import styles from "./index.module.css";

interface CardProps {
  people: People;
}
const Card: FC<CardProps> = ({ people }) => {
  return (
    <div key={people.id} className={styles.main}>
      <div className="h-2/5 flex flex-col p-4">
        <div className="flex flex-1">
          <span className="">ID :</span>
          <span className="pl-1">{people.id}</span>
        </div>
        <div className="flex flex-1">
          <span className="flex-1 font-medium ">Name :</span>{" "}
          <span className="flex-1 font-medium">{people.name}</span>
        </div>
        <div className="flex flex-1">
          <span className="flex-1">User Name :</span>{" "}
          <span className="flex-1">{people.username}</span>
        </div>
        <div className="flex flex-1">
          <span className="flex-1">Email:</span>{" "}
          <span className="flex-1">{people.email}</span>
        </div>
        <div className="flex flex-1">
          <span className="flex-1"> Phone Number:</span>{" "}
          <span className="flex-1">{people.phone}</span>
        </div>
        <div className="flex">
          <span className="flex-1">Website:</span>{" "}
          <span className="flex-1">{people.website}</span>
        </div>
      </div>
      <div className="flex-1 gap-3 flex flex-col ">
        <div className={styles.addressSection}>
          <h1 className="font-medium flex-1">Address</h1>

          <div>
            <span>Street :</span> <span>{people.address.street}</span>
          </div>
          <div>
            <span>Suite :</span> <span>{people.address.suite}</span>
          </div>
          <div>
            <span>City:</span> <span>{people.address.zipcode}</span>
          </div>
          <div>
            <span>Latitude:</span> <span>{people.address.geo.lat}</span>
          </div>
          <div>
            <span>Longtitude:</span> <span>{people.address.geo.lng}</span>
          </div>
        </div>
        <div className={styles.companySection}>
          <h1 className="font-medium flex-1 mb-2">Company</h1>
          <div>
            <span>Name:</span> <span>{people.company.name}</span>
          </div>
          <div>
            <span>catchPhrase:</span> <span>{people.company.catchPhrase}</span>
          </div>
          <div>
            <span>bs:</span> <span>{people.company.bs}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
