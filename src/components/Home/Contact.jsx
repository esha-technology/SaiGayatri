import React from "react";

const Contact = () => {
  return (
    <div>
      <label className="input input-bordered flex items-center gap-2">
        Name
        <input type="text" className="grow" placeholder="Daisy" />
      </label>
    </div>
  );
};

export default Contact;
