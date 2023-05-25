const ApplyForm = () => {
  return (
    <div className="bg-WPurple1 m-5 pt-28 pb-10 px-10 rounded-lg">
      <form action="">
        <h2>Personal Information</h2>
        <div className="border-2 rounded-sm p-5 flex flex-wrap gap-8 border-slate-700 mb-8">
          <input
            className="text-field"
            type="text"
            placeholder="Mobile Number"
          />
          |
          <input className="text-field" type="text" placeholder="PAN Number" />|
          <input className="text-field" type="text" placeholder="Entity Type" />
          |<input className="text-field" type="email" placeholder="E-mail" />|
          <input
            className="text-field"
            type="text"
            placeholder="Applicant Name"
          />
          |
          <input
            className="text-field"
            type="text"
            placeholder="Current Occupation"
          />
          |
          <label htmlFor="">
            DoB : &nbsp;
            <input className="text-field" type="date" />
          </label>
          |
          <label htmlFor="">
            Specially Abled : &nbsp; &nbsp; Yes &nbsp;
            <input name="dis" type="radio" /> &nbsp; No &nbsp;
            <input name="dis" type="radio" />
          </label>
          |
          <label htmlFor="">
            Are you an Ex Employee : &nbsp; &nbsp; Yes &nbsp;
            <input name="emp" type="radio" /> &nbsp; No &nbsp;
            <input name="emp" type="radio" />
          </label>
          |
          <label htmlFor="">
            Gender : &nbsp; &nbsp; Male &nbsp;
            <input name="gender" type="radio" /> &nbsp; Female &nbsp;
            <input name="gender" type="radio" />
            &nbsp; Other &nbsp;
            <input name="pan" type="radio" />
          </label>
          |
          <label htmlFor="">
            Do you have PAN card : &nbsp; &nbsp; Yes &nbsp;
            <input name="pan" type="radio" /> &nbsp; No &nbsp;
            <input name="pan" type="radio" />
          </label>
          |
        </div>
        <h2>Franchisee Address Details</h2>
        <div className="border-2 rounded-sm p-5 flex flex-wrap gap-8 border-slate-700 mb-8">
          <div>
            <h2>Current Address</h2>
            <div className="border-2 rounded-sm p-5 flex flex-wrap gap-8 border-slate-700 mb-5">
              <input
                className="add-field"
                type="text"
                placeholder="Address Line-1"
              />
              |
              <input
                className="add-field"
                type="text"
                placeholder="Address Line-2"
              />
              |
              <input
                className="text-field"
                type="text"
                placeholder="Landmark"
              />
              |
              <input className="text-field" type="text" placeholder="State" />|
              <input
                className="text-field"
                type="text"
                placeholder="District"
              />
              |
              <input
                className="text-field"
                type="text"
                placeholder="Village/Town/City"
              />
              |
              <input className="text-field" type="text" placeholder="Pincode" />
              |
            </div>
            <h2>Permanent Address</h2>
            <div className="border-2 rounded-sm p-5 flex flex-wrap gap-8 border-slate-700">
              <input
                className="add-field"
                type="text"
                placeholder="Address Line-1"
              />
              |
              <input
                className="add-field"
                type="text"
                placeholder="Address Line-2"
              />
              |
              <input
                className="text-field"
                type="text"
                placeholder="Landmark"
              />
              |
              <input className="text-field" type="text" placeholder="State" />|
              <input
                className="text-field"
                type="text"
                placeholder="District"
              />
              |
              <input
                className="text-field"
                type="text"
                placeholder="Village/Town/City"
              />
              |
              <input className="text-field" type="text" placeholder="Pincode" />
              |
            </div>
          </div>
        </div>
        <h2>Proposed Wilman Advanced Kendra Detail</h2>
        <div className="border-2 rounded-sm p-5 flex flex-wrap gap-8 border-slate-700 mb-8">
          <input
            className="add-field"
            type="text"
            placeholder="Address Line-1"
          />
          |
          <input
            className="add-field"
            type="text"
            placeholder="Address Line-2"
          />
          |
          <input className="text-field" type="text" placeholder="Landmark" />
          |
          <input className="text-field" type="text" placeholder="State" />|
          <input className="text-field" type="text" placeholder="District" />
          |
          <input
            className="text-field"
            type="text"
            placeholder="Village/Town/City"
          />
          |
          <input className="text-field" type="text" placeholder="Pincode" />|
          <input
            className="text-field"
            type="text"
            placeholder="Wilman Kendra Model"
          />
          |
          <input
            className="text-field"
            type="text"
            placeholder="Source of fund"
          />
          |
          <label htmlFor="">
            Is this Application pertaining to Ownership change : &nbsp; &nbsp;
            Yes &nbsp;
            <input name="owner" type="radio" /> &nbsp; No &nbsp;
            <input name="owner" type="radio" />
          </label>
          |
          <label htmlFor="">
            Are you an IOCL dealer and opening a Wilman Kendra within IOCL
            licence area : &nbsp; &nbsp; Yes &nbsp;
            <input name="iocl" type="radio" /> &nbsp; No &nbsp;
            <input name="iocl" type="radio" />
          </label>
          |
          <label htmlFor="">
            Are you a NAYARA dealer and opening a Wilman Kendra within NAYARA
            licence area : &nbsp; &nbsp; Yes &nbsp;
            <input name="nayara" type="radio" /> &nbsp; No &nbsp;
            <input name="nayara" type="radio" />
          </label>
          |
          <textarea
            placeholder="Remarks"
            className="px-2 rounded-md"
          ></textarea>
        </div>
        <div className="flex gap-10">
          <input
            type="submit"
            value="Submit Form"
            className="bg-WPurple hover:bg-WGold duration-500 text-white px-3 py-2 rounded-md"
          />
          <input
            type="reset"
            value="Clear Form"
            className="border-2 border-slate-800 duration-500 text-slate-800 px-3 py-2 rounded-md"
          />
        </div>
      </form>
    </div>
  );
};
export default ApplyForm;
