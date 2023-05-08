// import React from "react";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { IBeverage, IFood } from "./Interface";
// import axios from "axios";
// import MenuModal from "./MenuModal";

// export default function Menu() {

//   const [modal, setModal] = useState<boolean>(false);
//   const [isEdited, setIsEdited] = useState<boolean>(false);
//   const [isFood, setIsFood] = useState<boolean>(false);
//   const [getFoodId, setFoodGetId] = useState<string>("");
//   const [getBeverageId, setBeverageGetId] = useState<string>("");




//   const editFood = (id: React.SetStateAction<string | undefined>) => {
//     setModal(!modal);
//     setIsEdited(!isEdited);
//     setIsFood(true);
//     setFoodGetId(id);
//   };

//   const editBeverage = (id: React.SetStateAction<string | undefined>) => {
//     setModal(!modal);
//     setIsEdited(!isEdited);
//     setIsFood(false);
//     setBeverageGetId(id);
//   };

//   return (
//     <div className="bg-white border rounded-lg w-6/6 h-full gap-5 m-5 flex flex-row justify-between gap-5">
//       <MenuModal
//         modal={modal}
//         setModal={setModal}
//         setGetFood={setGetFood}
//         isEdited={isEdited}
//         setIsEdited={setIsEdited}
//         getFoodId={getFoodId}
//         getBeverageId={getBeverageId}
//         isFood={isFood}
//         setIsFood={setIsFood}
//       />
//     </div>
//   );
// }
