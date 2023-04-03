import React, { useEffect } from 'react';
import { useGetUsersQuery } from '../../redux/api/apiSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Users = () => {
  const { data, error, isLoading } = useGetUsersQuery();
  useEffect(() => {
    if(error) {
      toast.error('Ошибка загрузки');
    }
  }, [error]);

  return (
    <div>
      {JSON.stringify(data)}
      { isLoading ? <h1>LOADING</h1> :  <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Last Name</th>
            <th style={{ textAlign: "center" }}>Email</th>
          </tr>
        </thead>
        {data && data.email}
        <tbody>
          {/* {data?.map((item: any, index: any) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.lastName}</td>
                  <td>{item.email}</td>
                  <td>
                  </td>
                </tr>
              );
            })} */}
        </tbody>
      </table>}
      <ToastContainer />
    </div>
  )
}

export default Users