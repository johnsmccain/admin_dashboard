import React, { useState } from "react";
import "./userlist.scss";

import { DataGrid } from "@mui/x-data-grid";
import { user__data } from "../../dummyData";
import { Link } from "react-router-dom";
import { DeleteForeverOutlined } from "@mui/icons-material";

export const Userlist = () => {
  const [users, setUsers] = useState(user__data);
  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userList-user">
            <img src={params.row.image} alt="" className="userList-user-img" />
            <p>{params.row.name}</p>
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "active",
      headerName: "Status",
      width: 120,
    },
    {
      field: "amount",
      headerName: " Transaction volume",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`}>
              <button className="userList__edit">Edit</button>
            </Link>
            <DeleteForeverOutlined
              className="userList__delete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid rows={users} columns={columns} pageSize={8} checkboxSelection />
    </div>
  );
};
