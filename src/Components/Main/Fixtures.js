import React from 'react';
import '../../App';

function App () {
    return (
        <div className = "App" style={{backgroundColor:"rgba(250, 196, 204, 0.504)", color:"black", border:"2px solid black"}}>
            <h2>Fixtures</h2>
            <table border="1px" width="100%">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Team</th>
                    <th>Pts</th>
                    <th>W</th>
                    <th>L</th>
                    <th>D</th>
                    <th>BYE</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>1</th>
                    <th>Swifts</th>
                    <th>58</th>
                    <th>19</th>
                    <th>1</th>
                    <th>0</th>
                    <th>1</th>
                </tr>
                <tr>
                    <th>2</th>
                    <th>Lightning</th>
                    <th>55</th>
                    <th>17</th>
                    <th>2</th>
                    <th>1</th>
                    <th>0</th>
                </tr>
                <tr>
                    <th>3</th>
                    <th>Nighthawks</th>
                    <th>39</th>
                    <th>10</th>
                    <th>9</th>
                    <th>0</th>
                    <th>1</th>
                </tr>
                </tbody>
            </table>
        </div>
    );
}
export default App
