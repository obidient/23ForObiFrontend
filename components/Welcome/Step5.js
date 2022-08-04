import React from 'react';

const Step5 = ({formData, setFormData}) => {
  const {full_name, phone} = formData
  return (
    <div className="my-5">
      <h2 className="text-[#2F3733] text-3xl my-10">
        Which voter from your village (apart from you) do you know who will
        surely vote for Peter Obi?
      </h2>
      <form></form>
    </div>
  );
};

export default Step5;
