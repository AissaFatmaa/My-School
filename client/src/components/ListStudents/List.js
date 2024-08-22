import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import "./List.css";
import { useDispatch, useSelector } from "react-redux";
import { getuser, updatecontact, userCurrent } from "../../JS/userSlice/userSlice";


const List = ({ping, setping}) => {
const [search, setsearch] = useState("")
  const [oneclass, setoneclasse] = useState("a");

  const handleSelectChange = (event) => {
    // Update state with the selected value
    setoneclasse(event.target.value);
  };
  const handleButtonClick = () => {
    // Rechargez la page lorsqu'un bouton est cliqué
    window.location.reload();
  };
const dispatch=useDispatch();
  const currentuser = useSelector((state) => state.user?.user);
   const newusers = useSelector((state) => state.user?.userList);
   const users=newusers?.filter(
            (el) =>
              el.category === 'student' && el?.name.toLowerCase().includes(search.toLowerCase()) &&
              el.classe === currentuser?.classe[0] + oneclass);
  console.log("users", users)

 
  const [test1, settest1] = useState('c1:');
  const [test2, settest2] = useState('c2:');
  const [test3, settest3] = useState('c3:');
    const [test4, settest4] = useState('c4:');
      const [test5, settest5] = useState('c5:');
        const [test6, settest6] = useState('c6:');
  const [percentage, setPercentage] = useState(0);
  console.log("percentage", percentage);
  const [filteredUsers, setFilteredUsers] = useState([]);
  console.log("filteredUsers", filteredUsers);

  // Fonction pour filtrer les utilisateurs en fonction d'un critère et calculer le pourcentage
  const filterAndCalculate = (criterion) => {
    // Filtrer les utilisateurs en fonction du critère spécifié
    const filtered = users?.filter((user) =>
      user?.criter.some((crit) => crit.c1 === criterion)
    );
    // Calculer le pourcentage
    const totalCriterion = filtered.reduce((acc, user) => {
      return acc + user.criter.filter((crit) => crit.c1 === criterion).length;
    }, 0);
    const percent = (totalCriterion / users.length) * 100;
    // Mettre à jour l'état avec les résultats filtrés et le pourcentage
    setFilteredUsers(filtered);
    setPercentage(percent.toFixed(2));
  };
  const [listofcirtiter, setlistofcirtiter] = useState(false);
 
  const [show, setShow] = useState(false);
  const closeModal = () => {
    setShow(false);
  };

const [visited, setvisited] = useState('')
const filterCalculate = (criterionKey, criterionValue) => {
  // Filtrer les utilisateurs en fonction du critère spécifié
  const filtered = users?.filter((user) =>
    user?.criter.some((crit) => crit[criterionKey] === criterionValue)
  );

  // Calculer le pourcentage
  const totalCriterion = filtered.reduce((acc, user) => {
    return acc + user.criter.filter((crit) => crit[criterionKey] === criterionValue).length;
  }, 0);
  const percent = (totalCriterion / users.length) * 100;

  // Mettre à jour l'état avec les résultats filtrés et le pourcentage
  setFilteredUsers(filtered);
  setPercentage(percent.toFixed(2));
};




  return (
    <div className="lists">
   

      <div class="box-filter">
        <input type="search" placeholder="filtrer par nom" class="box-input" onChange={(e)=>setsearch(e.target.value)} />
         <select  onChange={handleSelectChange} style={{marginLeft: "20px"}}>
                <option value="a">{currentuser?.classe[0]+"a"}</option>
                <option value="b">{currentuser?.classe[0]+"b"}</option>
                <option value="c">{currentuser?.classe[0]+"c"}</option>
              
              </select> 
      </div>
      <div class="containerr">
      
        <div class="box-button">
          <div>
            <button class="btn-22" onClick={() =>( setShow(true),setvisited('c1'))}>
              critere 1
            </button>
            <button class="btn-secondary"  onClick={() =>( setShow(true),setvisited('c2'))}>critere 2</button>
            <button class="btn-submit" onClick={() =>( setShow(true),setvisited('c3'))}>critere 3</button>
            <button class="btn-cancel" onClick={() =>( setShow(true),setvisited('c4'))}>critere 4</button>
            <button class="btn-22 boxlefting" onClick={() =>( setShow(true),setvisited('c5'))}>critere 5 </button>
            <button class="btn-secondary boxlefting" onClick={() =>( setShow(true),setvisited('c6'))}>critere 6</button>
          </div>
                      {show ? (
              <>
                <div className="box-modal">
                  <div className="boxmodal-content">
                    <span className="close" onClick={closeModal}>
                      &times;
                    </span>
                    <h2>Résultats des critères</h2>
                    <div className="nav">
                      {["+++", "++-", "+--", "---"].map((criterion, index) => (
                       

                        <ul>
                          <li
                            onClick={() => (
                              filterCalculate(`${visited}`,criterion),
                              setlistofcirtiter(true)
                            )}
                          >
                            {criterion}
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                          </li>
                        </ul>
                      ))}
                    </div>
                    {listofcirtiter
                      ? filteredUsers?.map((el) => (
                          <div className="box-details">
                            <div className="box-info">
                              <img src={el.image} style={{width:"40px", height:"40px"}}/>
                              <h3>{el?.name} {el?.lastname}</h3>
                            </div>
                          </div>
                        ))
                      : null}
                    <h3 className="percentage">Percentage: {percentage} %</h3>
                  </div>
                </div>
              </>
            ) : null}
        </div>

        <table style={{border:"0.5px solid #070740d6", backgroundColor:"", width:"100%"}}>
          <thead style={{backgroundColor:"#070740d6", color:"white"}}>
            <tr>
              <th>ID</th>
              <th>c1</th>
              <th></th>
              <th>c2</th>
              <th></th>
              <th>c3</th>
              <th></th>
              <th>c4</th>
              <th></th>
              <th>c5</th>
              <th></th>
              <th>c6</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users?.filter(
            (el) =>
              el.category === 'student' && el?.name.toLowerCase().includes(search.toLowerCase()) &&
              el.classe === currentuser?.classe[0] + oneclass).map((el) => (
              <>
                <tr>
                  <td>
                    <div class="box-id">
                      <img src={el?.img} />
                      <span>{el?.name} {el?.lastname}</span>
                    </div>
                  </td>
                  <td>
                  {el &&
                      el.criter &&
                      el.criter.some((obj) => obj.hasOwnProperty("c1"))
                        ? el.criter.map((ex) => <h4>{ex.c1}</h4>):(
                    <div class="select-box">
                        <select
                        onChange={(e) =>settest1({c1:e.target.value })
                          
                        }
                      >
                        <option>choisir </option>
                        <option value="+++">+++</option>
                        <option value="++-">++-</option>
                        <option value="+--">+--</option>
                        <option value="---">---</option>
                      </select>
                      <div class="arrow"></div>
                    </div> 
                  )}
                  </td>
                  <td> <button style={{backgroundColor:"transparent", border:"none"}}  onClick={() => (
                        dispatch(
                          updatecontact({ id: el._id, upcontact: test1

                           })
                        ),
                        settest1([]),handleButtonClick()
                      )} ><svg style={{width:"15px", fill:"red", marginLeft:"5px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg> </button></td>
                  <td >
                    {" "}
                    {el &&
                      el.criter &&
                      el.criter.some((obj) => obj.hasOwnProperty("c2"))
                        ? el.criter.map((ex) => <h4>{ex.c2}</h4>):(
                    <div class="select-box">
                      <select
                        onChange={(e) =>settest2({c2:e.target.value })
                          
                        }
                      >
                        <option>choisir </option>
                        <option value="+++">+++</option>
                        <option value="++-">++-</option>
                        <option value="+--">+--</option>
                        <option value="---">---</option>
                      </select>
                     
                      <div class="arrow"></div>
                    </div>
)}                  
                  </td>
                    <td> <button style={{backgroundColor:"transparent", border:"none"}}  onClick={() => (
                        dispatch(
                          updatecontact({ id: el._id, upcontact: test2

                           })
                        ),
                        settest2([]),handleButtonClick()
                      )} ><svg style={{width:"15px", fill:"red", marginLeft:"5px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg> </button></td>
               
                  <td>
                    {" "}
                    {el &&
                      el.criter &&
                      el.criter.some((obj) => obj.hasOwnProperty("c3"))
                        ? el.criter.map((ex) => <h4>{ex.c3}</h4>):(
                    <div class="select-box">
                      <select
                        onChange={(e) =>settest3({c3:e.target.value })
                          
                        }
                      >
                        <option>choisir </option>
                        <option value="+++">+++</option>
                        <option value="++-">++-</option>
                        <option value="+--">+--</option>
                        <option value="---">---</option>
                      </select>
                      <div class="arrow"></div>
                    </div>
                        )}
                  </td>
                       <td> <button style={{backgroundColor:"transparent", border:"none"}}  onClick={() => (
                        dispatch(
                          updatecontact({ id: el._id, upcontact: test3

                           })
                        ),
                        settest3([]),handleButtonClick()
                      )} ><svg style={{width:"15px", fill:"red", marginLeft:"5px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg> </button></td>
              
                  <td>
                    {" "}
                    {el &&
                      el.criter &&
                      el.criter.some((obj) => obj.hasOwnProperty("c4"))
                        ? el.criter.map((ex) => <h4>{ex.c4}</h4>):(
                    <div class="select-box">
                      <select
                        onChange={(e) =>settest4({c4:e.target.value })
                          
                        }
                      >
                        <option>choisir </option>
                        <option value="+++">+++</option>
                        <option value="++-">++-</option>
                        <option value="+--">+--</option>
                        <option value="---">---</option>
                      </select>
                      <div class="arrow"></div>
                    </div>
                        )}
                  </td>
                    <td> <button style={{backgroundColor:"transparent", border:"none"}}  onClick={() => (
                        dispatch(
                          updatecontact({ id: el._id, upcontact: test4

                           })
                        ),
                        settest4([]),handleButtonClick()
                      )} ><svg style={{width:"15px", fill:"red", marginLeft:"5px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg> </button></td>
               
                  <td>
                    {" "}
                    {el &&
                      el.criter &&
                      el.criter.some((obj) => obj.hasOwnProperty("c5"))
                        ? el.criter.map((ex) => <h4>{ex.c5}</h4>):(
                    <div class="select-box">
                      <select
                        onChange={(e) =>settest5({c5:e.target.value })
                          
                        }
                      >
                        <option>choisir </option>
                        <option value="+++">+++</option>
                        <option value="++-">++-</option>
                        <option value="+--">+--</option>
                        <option value="---">---</option>
                      </select>
                      <div class="arrow"></div>
                    </div>
)}
                  </td>
                    <td> <button style={{backgroundColor:"transparent", border:"none"}}  onClick={() => (
                        dispatch(
                          updatecontact({ id: el._id, upcontact: test5

                           })
                        ),
                        settest5([]),handleButtonClick()
                      )} ><svg style={{width:"15px", fill:"red", marginLeft:"5px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg> </button></td>
              
                  <td>
                    {" "}
                    {el &&
                      el.criter &&
                      el.criter.some((obj) => obj.hasOwnProperty("c6"))
                        ? el.criter.map((ex) => <h4>{ex.c6}</h4>):(
                    <div class="select-box">
                      <select
                        onChange={(e) =>settest6({c6:e.target.value })
                          
                        }
                      >
                        <option>choisir </option>
                        <option value="+++">+++</option>
                        <option value="++-">++-</option>
                        <option value="+--">+--</option>
                        <option value="---">---</option>
                      </select>
                      <div class="arrow"></div>
                    </div>
                        )}
                  </td>
                    <td> <button style={{backgroundColor:"transparent", border:"none"}}  onClick={() => (
                        dispatch(
                          updatecontact({ id: el._id, upcontact: test6

                           })
                        ),
                        settest6([]),handleButtonClick()
                      )} ><svg style={{width:"15px", fill:"red", marginLeft:"5px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg> </button></td>
            
                  <td>
                     {/* <button
                      class="bouton-validation"
                   
                      onClick={() => (
                        dispatch(
                          updatecontact({ id: el._id, upcontact: test1

                           })
                        ),
                        settest([]),handleButtonClick()
                      )}
                    >
                      Valider
                    </button> */}
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
