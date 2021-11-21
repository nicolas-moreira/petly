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
  
  
  const Register: React.FC = props => {
    const user = useContext(UserContext);
  
    const loginClick = () => {
      user.setIsLoggedIn(true);
    };
  
  
    return (
      <IonGrid>
        <IonRow>
          <IonCol text-center>
            <IonImg className="logo" src="/assets/logo.svg"></IonImg>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position="floating">Username</IonLabel>
              <IonInput type="text"></IonInput>
            </IonItem><br />
            <IonItem>
              <IonLabel position="floating">FirstName</IonLabel>
              <IonInput type="text"></IonInput>
            </IonItem><br />
            <IonItem>
              <IonLabel position="floating">LastName</IonLabel>
              <IonInput type="text"></IonInput>
            </IonItem><br />
            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput type="email"></IonInput>
            </IonItem><br />
            <IonItem>
              <IonLabel position="floating">Password</IonLabel>
              <IonInput type="password"></IonInput>
            </IonItem><br />
            <IonItem>
              <IonLabel position="floating">Confirm Password</IonLabel>
              <IonInput type="password"></IonInput>
            </IonItem><br />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="ion-text-end">
            <IonButton onClick={loginClick}>
              <IonIcon slot="end" icon={logInOutline}></IonIcon>
              Register
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    );
  };
  
  export default Register;
  