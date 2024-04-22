import { FC } from "react";
import { People } from "../../Landing/Landing";

interface CardProps {
  people: People;
}
const Card: FC<CardProps> = ({ people }) => {
  return (
    <div
      key={people.id}
      className=" p-4 mt-6 lg:mt-12 shadow-lg flex flex-col   bg-white rounded-3xl w-80 lg:w-100"
    >
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
        <div className="bg-background flex flex-col rounded-3xl h-3/5 p-4 ">
          <h1 className="font-medium flex-1">Address</h1>

          <div className="flex flex-1">
            <span className="flex-1 ">Street :</span>{" "}
            <span className="flex-1">{people.address.street}</span>
          </div>
          <div className="flex flex-1">
            <span className="flex-1 ">Suite :</span>{" "}
            <span className="flex-1">{people.address.suite}</span>
          </div>
          <div className="flex flex-1">
            <span className="flex-1">City:</span>{" "}
            <span className="flex-1">{people.address.zipcode}</span>
          </div>
          <div className="flex flex-1">
            <span className="flex-1">Latitude:</span>{" "}
            <span className="flex-1">{people.address.geo.lat}</span>
          </div>
          <div className="flex flex-1">
            <span className="flex-1">Longtitude:</span>{" "}
            <span className="flex-1">{people.address.geo.lat}</span>
          </div>
        </div>
        <div className="flex flex-col bg-background rounded-3xl h-2/5 p-4">
          <h1 className="font-medium flex-1 mb-2">Company</h1>
          <div className="flex flex-1">
            <span className="flex-1">Name:</span>{" "}
            <span className="flex-1">{people.company.name}</span>
          </div>
          <div className="flex flex-1">
            <span className="flex-1">catchPhrase:</span>{" "}
            <span className="flex-1">{people.company.catchPhrase}</span>
          </div>
          <div className="flex flex-1">
            <span className="flex-1">bs:</span>{" "}
            <span className="flex-1">{people.company.bs}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
