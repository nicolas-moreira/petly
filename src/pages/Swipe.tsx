import {
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonTitle,
  IonCardSubtitle,
} from "@ionic/react";
import {
  chatbubbleOutline,
  heartDislikeOutline,
  heartOutline,
  logInOutline,
  refreshOutline,
} from "ionicons/icons";
import React from "react";
import "../components/style/swipe.scss";

const Swipe: React.FC = () => {
  return (
    <IonGrid>
      <IonRow className="ion-padding-top">
        <IonCol>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle className="ion-text-center">Message</IonCardTitle>
            </IonCardHeader>
            <IonCardContent></IonCardContent>
          </IonCard>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonCard>
            <IonImg src="/assets/dog.jpg" className="img"></IonImg>
            <IonCardHeader>
              <IonCardTitle>OSLO</IonCardTitle>
              <IonCardSubtitle>Castor yeld, 5km away</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent></IonCardContent>
          </IonCard>
        </IonCol>
      </IonRow>
      <IonRow className="ion-margin-bottom ion-margin-start ion-margin-end">
        <IonCol className="ion-text-left">
          <IonButton color="success" className="test">
            <IonIcon icon={heartOutline}></IonIcon>
          </IonButton>
        </IonCol>
        <IonCol className="ion-text-center">
          <IonButton color="warning" className="test">
            <IonIcon icon={chatbubbleOutline}></IonIcon>
          </IonButton>
        </IonCol>
        <IonCol className="ion-text-right">
          <IonButton color="danger" className="test">
            <IonIcon icon={heartDislikeOutline}></IonIcon>
          </IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default Swipe;
