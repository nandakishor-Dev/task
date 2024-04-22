import { FC } from "react";
import { People } from "../../pages/Landing/Landing";
import styles from "./index.module.css";

interface CardProps {
  people: People;
}
const Card: FC<CardProps> = ({ people }) => {
  return (
    <div key={people?.id} className={styles.main}>
      <div className={styles.topSection}>
        <div>
          <span>ID :</span>
          <span>{people?.id}</span>
        </div>
        <div>
          <span>Name :</span> <span>{people?.name}</span>
        </div>
        <div>
          <span>User Name :</span> <span>{people?.username}</span>
        </div>
        <div>
          <span>Email:</span> <span>{people?.email}</span>
        </div>
        <div>
          <span> Phone Number:</span> <span>{people?.phone}</span>
        </div>
        <div>
          <span>Website:</span> <span>{people?.website}</span>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.addressSection}>
          <h1>Address</h1>

          <div>
            <span>Street :</span> <span>{people?.address.street}</span>
          </div>
          <div>
            <span>Suite :</span> <span>{people?.address.suite}</span>
          </div>
          <div>
            <span>City:</span> <span>{people?.address.zipcode}</span>
          </div>
          <div>
            <span>Latitude:</span> <span>{people?.address.geo.lat}</span>
          </div>
          <div>
            <span>Longtitude:</span> <span>{people?.address.geo.lng}</span>
          </div>
        </div>
        <div className={styles.companySection}>
          <h1>Company</h1>
          <div>
            <span>Name:</span> <span>{people?.company.name}</span>
          </div>
          <div>
            <span>catchPhrase:</span> <span>{people?.company.catchPhrase}</span>
          </div>
          <div>
            <span>bs:</span> <span>{people?.company.bs}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
