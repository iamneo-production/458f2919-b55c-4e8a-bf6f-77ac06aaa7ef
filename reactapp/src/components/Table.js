
import React from 'react'
import './Table.css';
function Table() {
  return (
    <div className="Table">
    <table>
      <tr>
        <th>Order Id</th>
        <th>Items</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
      </tr>
      <tr>
        <td>stbv-hsts-nsgd-hxvs</td>
        <td>Curd Rice</td>
        <td>40</td>
        <td>2</td>
        <td>80</td>
      </tr>
      <tr>
        <td>snys-wstc-akak-babs</td>
        <td>Tomato Rice</td>
        <td>40</td>
        <td>1</td>
        <td>40</td>
      </tr>
      <tr>
        <td>gsra-hsts-wagd-hshg</td>
        <td>Tomato Rice</td>
        <td>40</td>
        <td>5</td>
        <td>200</td>
      </tr>
      <tr>
        <td>stbv-hdts-nsjs-dsgc</td>
        <td>Chicken Briyani</td>
        <td>150</td>
        <td>2</td>
        <td>300</td>
      </tr>
     
    </table>
  </div>
  )
}

export default Table