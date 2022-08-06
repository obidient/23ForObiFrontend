import React from 'react';


const Step5 = ({ formData, setFormData }) => {
  const { full_name, phone } = formData;
  return (
    <div className="my-5">
      <h2 className="text-[#2F3733] lg:text-3xl my-10">
        Which voter from your village (apart from you) do you know who will
        surely vote for Peter Obi?
      </h2>
      <form>
        <div className="my-5">
          <div className="my-10">
            <input
              className="rounded-full lg:w-[496px] w-full h-[44px] border border-[#2F3733] text-[ #979797] lg:text-3xl text-4xl px-5 focus:border-[#018226] focus:bg-[#F3FFF7] outline-none"
              type="text"
              placeholder="Full name"
              value={full_name}
              onChange={(e) =>
                setFormData({ ...formData, full_name: e.target.value })
              }
            />
          </div>
          <div className="my-10">
            <input
              className="rounded-full lg:w-[496px] w-full h-[44px] border border-[#2F3733] text-[ #979797] lg:text-3xl text-4xl px-5 focus:border-[#018226] focus:bg-[#F3FFF7] outline-none"
              type="text"
              placeholder="08058999999"
              value={phone}
              pattern="[0-9]{11}"
              maxLength={11}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Step5;