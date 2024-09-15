import React from "react";
//Created a table to achieve desired look for footer
export default function Footer() {
  return (
    <div className="Footer">
        <table style={{width: "100%", color:"white", backgroundColor:"black"}}>
          <thead>
            <tr>
              <th> LINKS </th>
              <th> LEGAL </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th> Home </th>
              <th> Privacy Policy </th>
            </tr>
            <tr>
              <th>Team</th>
              <th>Terms of Use</th>
            </tr>
              <th>Fixtures</th> 
              <th>Venue Conditions of Entry</th>
            <tr>
              <th> Membership </th>
            </tr>
            <tr>
              <th> Tickets </th>
            </tr>
            <tr> 
              <th> News </th>
            </tr>
            <tr>
              <th> Contact Us </th>
            </tr>
          </tbody>
        </table>
    </div>
  );
} 