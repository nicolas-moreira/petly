import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTab,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useContext, useState } from "react";
import { Route } from "react-router";
import { UserContext } from "../App";
import InputControl from "../components/InputControl";
import Login from "../components/Login";
import Register from "../components/Register";

const Home: React.FC = () => {
  const [action, setAction] = useState<"login" | "register">("login");


  const selectCalcUnitHandler = (selectedValue: "login" | "register") => {
    setAction(selectedValue);
    console.log(selectedValue)
  };

  return (
    <IonPage>
      <IonContent fullscreen className="padding">
        <InputControl
          selectedValue={action}
          onSelectValue={selectCalcUnitHandler}
        ></InputControl>
        {action === "login" && <Login/>}
        {action === "register" && <Register/>}
      </IonContent>
    </IonPage>
  );
};

export default Home;
