import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {getUsers, deleteUser} from './api/userApi';

//React.render(<Home/>, document.getElementById('app'));
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('app')
);


// Populate table of users via API call.
getUsers().then(result => {
  let usersBody = "";

  result.forEach(user => {
    usersBody+= `<tr>
      <td><a href="#" data-id="${user.Id}" class="deleteUser">Delete</a></td>
      <td>${user.Id}</td>
      <td>${user.FirstName}</td>
      <td>${user.LastName}</td>
      <td>${user.Email}</td>
      </tr>`
  });

  global.document.getElementById('users').innerHTML = usersBody;

  const deleteLinks = global.document.getElementsByClassName('deleteUser');

  // Must use array.from to create a real array from a DOM collection
  // getElementsByClassname only returns an "array like" object
  Array.from(deleteLinks, link => {
    link.onclick = function(event) {
      const element = event.target;
      event.preventDefault();
      deleteUser(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  });
});
