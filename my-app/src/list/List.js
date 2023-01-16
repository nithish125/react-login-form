import React from "react";
function List() {
    var retrievedData = localStorage.getItem("cartData");
    var movies2 = JSON.parse(retrievedData);
    console.log("local",movies2)
    return (
        <div className="container">
            <div>
                <table>
                    <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                    {
                        movies2.map(employe => (
                            <tr>
                                <td>{employe.fname}{employe.lname}</td>
                                <td>{employe.mobile}</td>
                                <td><button className='p-2 log-bn'>view</button></td>
                            </tr>))
                    }

                </table>
            </div>
        </div>
    )


}
export default List
