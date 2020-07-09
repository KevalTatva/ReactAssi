import React from "react";
import MUIDataTable from "mui-datatables";
import UserAPI from "../API/UserData"
import Menu from './Menu';

 export default class UserList extends React.Component {
  
   handleEditClick = (index) => {
    window.location.pathname = "/UserDetail/"+ index;
  }

  handleDeleteClick = (indexs) => {
    var userlist = UserAPI.all();
    indexs.forEach(element => {
      userlist.pop(indexs[element])
    });
    UserAPI.Update(userlist)
  }
  
    render(){
      
      let columnName = [
        {
          name: "Edit",
          options: {
            filter: false,
            sort: false,
            empty: true,
            customBodyRenderLite: (dataIndex, rowIndex) => {
              return (
                <button onClick={() => this.handleEditClick(dataIndex)}>
                  Edit
                </button>
              );
            }
          }
        },    
        {
              name: "UserName",
              label: "User Name",
              options: {
                filter: true,
                setCellProps: () => ({style: {whiteSpace:'nowrap'}})
              },
              width:"200px"
            },
            {
              name: "Name",
              options: {
                filter: true,
                setCellProps: () => ({style: {whiteSpace:'nowrap'}})
              }
            },
            {
              name: "DOB",
              label: "Date of Birth",
              options: {
                filter: true,
                setCellProps: () => ({style: {whiteSpace:'nowrap'}})
              }
            },
            {
              name: "Phone",
              options: {
                filter: true,
                setCellProps: () => ({style: {whiteSpace:'nowrap'}})
              }
            },
            {
              name: "Gender",
              options: {
                filter: true,
                setCellProps: () => ({style: {whiteSpace:'nowrap'}})
              }
            }
      ];

        const options = {
            filter: true,
            filterType: "dropdown",
            responsive: "scroll",
            draggableColumns:{enabled:true},
            resizableColumns: true,
            downloadOptions:
            {
                filename: "keval.csv",
                separator:",",
                filterOptions:{
                    useDisplayedColumnsOnly: true,
                    useDisplayedRowsOnly: true
                }
            },
            fixedHeader: true,
            fixedSelectColumn: true,
            print:false,
            onRowsDelete: (rowsDeleted, dataRows) => {
              const idsToDelete = rowsDeleted.data.map((item)=> item.dataIndex)
              this.handleDeleteClick(idsToDelete)
              }
          };
        return(
          <div>
          <Menu />
          <grid className="tblUserList">
            <MUIDataTable 
            title={"User list"}
            data={UserAPI.all()}
            columns={columnName}
            options={options}
            />
          </grid>
          </div>
        );
    }
   
}