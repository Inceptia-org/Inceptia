// import "./userList.css";
// import { DataGrid } from "@material-ui/data-grid";
// import { DeleteOutline } from "@material-ui/icons";
// import { userRows } from "../../dummyData";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// export default function UserList() {
//   const [data, setData] = useState(userRows);

//   const handleDelete = (id) => {
//     setData(data.filter((item) => item.id !== id));
//   };
  
//   const columns = [
//     { field: "id", headerName: "ID", width: 90 },
//     {
//       field: "user",
//       headerName: "User",
//       width: 200,
//       renderCell: (params) => {
//         return (
//           <div className="userListUser">
//             <img className="userListImg" src={params.row.avatar} alt="" />
//             {params.row.username}
//           </div>
//         );
//       },
//     },
//     { field: "email", headerName: "Email", width: 200 },
//     {
//       field: "status",
//       headerName: "Status",
//       width: 120,
//     },
//     {
//       field: "transaction",
//       headerName: "Transaction Volume",
//       width: 160,
//     },
//     {
//       field: "action",
//       headerName: "Action",
//       width: 150,
//       renderCell: (params) => {
//         return (
//           <>
//             <Link to={"/user/" + params.row.id}>
//               <button className="userListEdit">Edit</button>
//             </Link>
//             <DeleteOutline
//               className="userListDelete"
//               onClick={() => handleDelete(params.row.id)}
//             />
//           </>
//         );
//       },
//     },
//   ];

//   return (
//     <div className="userList">
//       <DataGrid
//         rows={data}
//         disableSelectionOnClick
//         columns={columns}
//         pageSize={8}
//         checkboxSelection
//       />
//     </div>
//   );
// }




import "./userList.css";
import { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
// import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";


export default function UserList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/fetchUsers')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    {
      field: "user",
      headerName: "User",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.image_url} alt="" />
            {params.row.first_name} {params.row.last_name}
          </div>
        );
      },
    },
    
    { 
      field: "fist_name",
      headerName: "First Name",
      width: 150, 
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.first_name} 
          </div>
        );
      },
   },
   
   { 
    field: "last_name",
    headerName: "Last Name",
    width: 150, 
    renderCell: (params) => {
      return (
        <div className="userListUser">
          {params.row.last_name} 
        </div>
      );
    },
 },

    {
      field: "created_at",
      headerName: "Created at",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.created_at} 
          </div>
        );
      },
    },
    {
      field: "wallet id",
      headerName: "Wallet id",
      width: 160,
           renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.primary_web3_wallet_id} 
          </div>
        );
      },
    },


    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
