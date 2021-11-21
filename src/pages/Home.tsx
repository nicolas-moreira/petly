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

const Home: React.FC = () => {
  const [action, setAction] = useState<"login" | "register">("login");


  const selectCalcUnitHandler = (selectedValue: "login" | "register") => {
    setAction(selectedValue);
    console.log(selectedValue)
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Petly</IonTitle>
          </IonToolbar>
        </IonHeader>
        {action === "login" && <Login/>}
      </IonContent>
        <InputControl
          selectedValue={action}
          onSelectValue={selectCalcUnitHandler}
        ></InputControl>
    </IonPage>
  );
};

export default Home;
