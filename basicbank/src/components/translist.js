import React, { Component } from 'react';

export default class TransList extends Component {

    render() {
        return (
            <div>
        
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Recent transactions</th>
              
            </tr>
          </thead>
          <tbody>
                <tr>
                    <th>Riya Transferred to Mehul</th>
                </tr>
                <tr>
                    <th>Khushi Transferred to Riya</th>
                </tr>
                <tr>
                    <th>Ritik Transferred to Lily</th>
                </tr>
          </tbody>
        </table>
      </div>
        )
    }
}
