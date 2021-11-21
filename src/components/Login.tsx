import {
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
  IonImg,
  IonContent,
} from "@ionic/react";
import {
  calculatorOutline,
  logInOutline,
  refreshOutline,
} from "ionicons/icons";
import React, { useContext } from "react";
import { UserContext } from "../App";
import "../components/style/login.scss";


const Login: React.FC = props => {
  const user = useContext(UserContext);

  const loginClick = () => {
    user.setIsLoggedIn(true);
  };


  return (
    <IonGrid text-center>
      <IonRow>
        <IonCol text-center>
          <IonImg className="logo" src="/assets/logo.svg"></IonImg>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonItem>
            <IonLabel position="floating">Username</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <br />
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput type="password"></IonInput>
          </IonItem>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol className="ion-text-center">
          <br/>
          <IonButton onClick={loginClick}>
            <IonIcon slot="end" icon={logInOutline}></IonIcon>
            Login
          </IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default Login;
