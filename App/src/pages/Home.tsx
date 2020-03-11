import { IonContent, IonHeader, IonPage,
         IonTitle, IonToolbar, IonText,
         IonList, IonItem, 
          } from '@ionic/react';
import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>TUD Bot</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        
       <div className="ion-text-left ion-padding-horizontal">
         <IonText>
          <h3>Welcome to TUD's Student Chatbot what can I helps you with today?</h3>
          <h4>Tap the icon in the bottom right corner to start chatting!</h4>
          <p>
            Try asking:
          </p>
          </IonText>
          <IonList className="ion-float-left">
            <IonItem>
              <IonText>When are my exams?</IonText>
            </IonItem>

             <IonItem>
              <IonText>When is the library open?</IonText>
            </IonItem>

             <IonItem>
              <IonText>Where is the doctor's office?</IonText>
            </IonItem>
          </IonList>
       </div>   
      </IonContent>
    </IonPage>
  );
};

export default Home;
