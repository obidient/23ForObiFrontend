import React from 'react';

const Step2 = ({ formData, setFormData }) => {
  return (
    <div className="my-5">
      <h2 className="text-[#2F3733] text-3xl my-10">
        Can you guarantee at least one vote for Peter Obi?
      </h2>
      <form>
        <div className="my-5">
          <input
            type="radio"
            checked={formData.vote === 'yes'}
            value="yes"
            onChange={(e) => setFormData({ ...formData, vote: e.target.value })}
          />
          <label
            htmlFor="yes"
            className="px-3 lg:text-2xl text-4xl font-normal text-[#2F3733]"
          >
            Yes
          </label>
        </div>
        <div className="my-5">
          <input
            type="radio"
            checked={formData.vote === 'no'}
            value="no"
            onChange={(e) => setFormData({ ...formData, vote: e.target.value })}
          />
          <label
            htmlFor="no"
            className="px-3 lg:text-2xl text-4xl font-normal text-[#2F3733]"
          >
            No
          </label>
        </div>
        <div className="my-5">
          <input
            type="radio"
            checked={formData.vote === 'undecided'}
            value="undecided"
            onChange={(e) => setFormData({ ...formData, vote: e.target.value })}
          />
          <label
            htmlFor="no"
            className="px-3 lg:text-2xl text-4xl font-normal text-[#2F3733]"
          >
            Undecided
          </label>
        </div>
      </form>
    </div>
  );
};

export default Step2;
