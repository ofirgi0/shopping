import React, { useEffect } from 'react'
import Table from '../ui-widgets/Table';
import styled from 'styled-components'


const { useState } = React;

const Styles = styled.div
    `
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
  `
const Admin = () => {
    const columns = React.useMemo(
        () => [
            {
                Header: "Admin",
                columns:
                    [
                        {
                            Header: 'Title',
                            accessor: 'title',
                        },
                        {
                            Header: 'Price',
                            accessor: 'price',
                        },
                        {
                            Header: 'Options',
                            accessor: 'options',
                            Cell: ({ cell }) => (
                                <>
                                    <button value={cell.row.id + " edit"} onClick={() => { editClicked(cell.row.id); }}>
                                        Edit
                                    </button>

                                    <button value={cell.row.id + " delete"} onClick={() => deleteClicked(cell.row.id)}>
                                        Delete
                                    </button></>

                            )
                        }
                    ],
            },
        ],
        [deleteClicked]
    )

    var initialItems = JSON.parse(localStorage.getItem("items"));
    // const data = React.useMemo(() => initialItems, [initialItems] )
      
    const [data, setState] = useState(initialItems);

    useEffect(() => {
        console.log('state changed', data)
        saveItems()
        // write your callback function here
      }, [data]);
    // addItem("1", "15", "desc", "www.ddd.fff")
    // addItem("2", "15", "desc", "www.ddd.fff")
    // addItem("3", "15", "desc", "www.ddd.fff")
    // addItem("4", "15", "desc", "www.ddd.fff")
    // addItem("5", "15", "desc", "www.ddd.fff")
    // addItem("6", "15", "desc", "www.ddd.fff")
    // addItem("7", "15", "desc", "www.ddd.fff")
    // addItem("8", "15", "desc", "www.ddd.fff")
    // addItem("9", "15", "desc", "www.ddd.fff")
    return (
        <Styles>
            <Table columns={columns} data={data} />
        </Styles>
    )



    function deleteClicked(index) {
        
        var newItems = data.slice()
        newItems.splice(index, 1)

        setState(newItems)

    }

    function editClicked(index) {
        console.log(data + " edit");
    }

    function addItem(mTitle, mPrice, mDesc, mImgUrl) {
        data.push({ title: mTitle, price: mPrice, desc: mDesc, imgUrl: mImgUrl });
        localStorage.setItem("items", JSON.stringify(initialItems));
    }

    function getItemsFromStorage() {
        return JSON.parse(localStorage.getItem("items"));
    }

     function saveItems(){
        localStorage.setItem("items", JSON.stringify(data));
     }
  };
  
  export default Admin;