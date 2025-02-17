import React, { useEffect, useState } from "react";
import { db, collection, getDocs, deleteDoc, doc } from "../../../firebase.js";
import "./Dashboard.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const deleteBtn = async (messageId) => {
    try {
      await deleteDoc(doc(db, "Messages", messageId));
      toast.success("Deleted Successfully", {
        position: "top-center",
      });
      window.location.reload();
    } catch (error) {
      toast.error(error, {
        position: "top-center",
      });
    }
  };
  const [messages, setMessages] = useState([]); // ✅ Messages store karne ke liye state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Messages")); // ✅ Saara collection fetch karna
        const messagesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMessages(messagesData); // ✅ State update karna
      } catch (error) {
        toast.error("Error fetching messages:", error, {
          position: "top-center",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);
  const deleteAll = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Messages")); // "Messages" collection se documents fetch karein
      if (querySnapshot.empty) {
        toast.info("Messages collection is already empty.", {
          position: "top-center",
        });
        return;
      }

      const deletePromises = querySnapshot.docs.map((docSnap) =>
        deleteDoc(doc(db, "Messages", docSnap.id))
      );

      await Promise.all(deletePromises); // Sare documents delete karein
      toast.success("Messages collection deleted successfully!", {
        position: "top-center",
      });
      window.location.reload();
    } catch (error) {
      toast.error(
        "Error deleting collection. Check console for details.",
        error,
        {
          position: "top-center",
        }
      );
    }
  };
  const logoutBtn = () => {
    localStorage.removeItem("user");
    toast.success("Logout Successfully", {
      position: "top-center",
    });
    window.location.reload();
  };

  return (
    <div className="message">
      <div className="dashboard">
        <h1>Messages</h1>
        <div className="btnDiv">
          <button onClick={deleteAll} className="delAllBtn">
            Delete All
          </button>
          <button className="logoutBtn" onClick={logoutBtn}>
            Logout
          </button>
        </div>
      </div>

      {loading ? (
        <p>Loading messages...</p>
      ) : messages.length > 0 ? (
        <div className="message-list">
          {messages.map((msg) => (
            <div key={msg.id} className="message-card">
              <h2>
                <span>Name:</span> {msg.name}
              </h2>
              <p>
                <span>Email:</span> {msg.email}
              </p>
              <p>
                <span>Message:</span> {msg.msg}
              </p>
              <p>
                <span>Date:</span>{" "}
                {new Date(msg.Timestamp?.seconds * 1000).toLocaleString()}
              </p>
              <button onClick={() => deleteBtn(msg.id)}>Delete</button>
            </div>
          ))}
        </div>
      ) : (
        <p className="noMsgPara">No messages found!</p>
      )}
    </div>
  );
};

export default Dashboard;
