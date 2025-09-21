import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, address, phone, website, company, id }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600">@{username}</p>
      </div>
      
      <div className="space-y-2 text-sm text-gray-600">
        <div>
          <span className="font-medium">Email:</span> {email}
        </div>
        <div>
          <span className="font-medium">Phone:</span> {phone}
        </div>
        <div>
          <span className="font-medium">Website:</span> {website}
        </div>
        <div>
          <span className="font-medium">Address:</span> {address.street}, {address.suite}, {address.city} {address.zipcode}
        </div>
        <div>
          <span className="font-medium">Company:</span> {company.name}
        </div>
        <div className="text-xs italic">{company.catchPhrase}</div>
      </div>
      
      <div className="mt-4 text-sm text-gray-500">
        <span>User ID: {id}</span>
      </div>
    </div>
  );
};

export default UserCard;