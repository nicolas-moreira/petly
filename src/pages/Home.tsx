import { IonContent, IonHeader, IonPage, IonTab, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import ExploreContainer from "../components/ExploreContainer";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Petly</IonTitle>
        </IonToolbar>
      </IonHeader>
      Login Register
      </IonContent>
    </IonPage>
  );
};

export default Home;
