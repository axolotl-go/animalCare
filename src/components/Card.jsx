import React from "react";

const Card = ({ Name, Description, Rol }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        className="rounded-full aspect-square"
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/35ed58a8-1801-4a90-b4f7-a7b2d6e011ec/d5op0wn-61557ccb-1dd4-44da-bccf-06bf81299eb3.png/v1/fill/w_150,h_150,q_80,strp/rei_ayanami_avatar_3_by_avatarw0rld_d5op0wn-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTUwIiwicGF0aCI6IlwvZlwvMzVlZDU4YTgtMTgwMS00YTkwLWI0ZjctYTdiMmQ2ZTAxMWVjXC9kNW9wMHduLTYxNTU3Y2NiLTFkZDQtNDRkYS1iY2NmLTA2YmY4MTI5OWViMy5wbmciLCJ3aWR0aCI6Ijw9MTUwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.0KJR_Ug6tbdeJVIL1DvBhQqOBGbCzuVsyp7mkmyAOGk"
        alt="ME"
      />
      <p>{Name}</p>
      <p>{Description}</p>
      <p>{Rol}</p>
    </div>
  );
};

export default Card;
