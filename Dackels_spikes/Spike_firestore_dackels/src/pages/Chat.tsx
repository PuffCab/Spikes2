import {
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  query,
  Timestamp,
} from "firebase/firestore";
import React, {
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import { db } from "../config/firebaseConfig";
import { Button, Card, FloatingLabel, Form, Stack } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";

type Message = {
  author: string;
  text: string;
  date: Timestamp | Date;
};

function Chat() {
  //   console.log("component run");
  const { user } = useContext(AuthContext);
  const [messages, setMessages] = useState<Message[] | null>(null);
  const [text, setText] = useState("");
  const getChatMessages = async () => {
    try {
      const q = query(collection(db, "chat"));
      const querySnapshot = await getDocs(q);
      const chatMessages: Message[] = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log("doc", doc);
        const message = doc.data() as Message;
        console.log("doc.data()", " => ", doc.data());
        chatMessages.push(message);
      });
      setMessages(chatMessages);
    } catch (error) {
      console.log("error getting messages", error);
    }
  };

  const getMessagesRealTime = () => {
    const q = query(collection(db, "chat"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const chatMessages: Message[] = [];
      querySnapshot.forEach((doc) => {
        const message = doc.data() as Message;
        chatMessages.push(message);
      });
      setMessages(chatMessages);
    });
  };

  const handleInputChange = (e: FormEvent<HTMLElement>) => {
    const target = e.target as HTMLInputElement;
    setText(target.value);
  };

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newMessage: Message = {
      author: user!.email,
      date: new Date(),
      text: text,
    };
    try {
      const docRef = await addDoc(collection(db, "chat"), newMessage);
      console.log("Message succesfully sent", docRef.id);
      //   if (docRef.id) {
      //     getChatMessages();
      //   }
    } catch (error) {
      console.log("error", error);
    }
  };
  const formatDate = (seconds: number): string => {
    const formattedDate = new Date(seconds * 1000).toLocaleString();
    // console.log("formattedDate", typeof formattedDate);
    return formattedDate;
  };

  useEffect(() => {
    // getChatMessages();
    getMessagesRealTime();
  }, []);

  return (
    <div>
      <h2>Chat</h2>
      <Stack gap={3} className="align-items-center">
        {messages &&
          messages.map((msg, i) => {
            return (
              <Card key={i} style={{ width: "18rem", height: "10rem" }}>
                <Card.Header>
                  {formatDate((msg.date as Timestamp).seconds)}
                </Card.Header>
                <Card.Body>
                  <Card.Title>{msg.author}</Card.Title>
                  <Card.Text>{msg.text}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        <Form onSubmit={sendMessage}>
          <FloatingLabel
            controlId="floatingTextarea"
            label="Message"
            className="mb-3"
            onChange={handleInputChange}
          >
            <Form.Control as="textarea" placeholder="Leave a comment here" />
          </FloatingLabel>
          <Button variant="primary" type="submit">
            Send
          </Button>
        </Form>
      </Stack>
    </div>
  );
}

export default Chat;
