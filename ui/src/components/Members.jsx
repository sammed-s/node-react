import { useEffect, useState } from "react";
import axios from "axios";

const Members = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:5000/getdata");
      console.log("response = ", response.data);
      setMembers(response.data.data);
    };
    getData();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, i) => (
            <div key={i}>
              <tr>
                <td> {member.membername} </td>
                <td> {member.age} </td>
                <td> {member.role} </td>
              </tr>
            </div>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Members;
