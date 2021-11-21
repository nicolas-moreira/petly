import { IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";
import React from "react";

const InputControl: React.FC<{
  selectedValue: "register" | "login";
  onSelectValue: (value: 'login' | 'register') => void;
}> = (props) => {
    const inputChangeHandler = (event: CustomEvent) => {
        props.onSelectValue(event.detail.value);
    };

    return (
    <IonSegment value={props.selectedValue} onIonChange={inputChangeHandler}>
      <IonSegmentButton value="login">
        <IonLabel>Login</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="register">
        <IonLabel>Register</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
};

export default InputControl;
