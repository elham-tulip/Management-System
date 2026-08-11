
import { useEffect, useState } from "react";
import axios from "axios";

function AllMembers() {
  const [members, setMembers] = useState([]);

  const getMembers = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://localhost:5000/api/members",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMembers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMembers();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-[#171C3B]">
        All Members
      </h1>

      {members.map((member) => (
        <div key={member._id}>
          {member.name}
        </div>
      ))}
    </div>
  );
}

export default AllMembers;

