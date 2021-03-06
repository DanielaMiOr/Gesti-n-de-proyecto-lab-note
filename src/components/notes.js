import { useNavigate } from "react-router-dom";
import "../Notes.css"
import { Header } from "./header";
import { getNotes } from "../firebase/firebase";
import { MiniNote } from "./miniNote";
import { useEffect, useState } from "react";
export default function Notes() {
  const navigate = useNavigate();
  const returnLogin = () => {
    navigate('/')
  }
  const [notes, setNotes] = useState([])

 

  let localDoc;
  const getNotesInfo = async () => {
    const posts = await getNotes();
    const arrayPost = [];
    posts.docs.forEach(item => {
      localDoc = { ...item.data() };
      localDoc.id = item.id;
      arrayPost.push(localDoc)

    })
    setNotes(arrayPost)
  }

  const NewNote = () => {
    navigate('/newNote')
  }
  

  useEffect(() => {
    getNotesInfo();
  }, [])



  return (
    <div className="noteBox">
      <Header />
      <section className="containerHome">
        <img
          className="closeSession"
          src={require(`../images/close.png`)}
          alt="closeSession" />
        <button className="close" onClick={returnLogin}></button>
        <input
          type="look for your note..."
          className="seeker"
          placeholder="look for your note..."
          autoComplete="off"
        />
        <button className="noteButton" onClick={NewNote}></button>
        <div className="containerNotes">
          {
            notes && notes.map(note => {
              return (
                <MiniNote key={note.id} note={note} getNotesInfo={getNotesInfo} />
              )
            })

          }



        </div>
      </section>

    </div>
  );


}