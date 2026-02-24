const UserResponsibilities = () => {
  return (
    <div className="flex flex-col gap-4" id="Responsibilities">
      <h2 className="text-[#07595F] text-2xl font-medium">
        2. User Responsibilities
      </h2>
      <p className="text-gray-700">
        You are responsible for maintaining the confidentiality of your account.
        This includes <br /> protecting your password and ensuring that your
        account is not accessed by <br /> unauthorized individuals.
      </p>
      <p className="text-gray-700">
        Users must notify us immediately if they suspect any unauthorized access
        to their <br /> account. You are responsible for all activities that
        occur under your account, whether <br /> authorized or not.
      </p>

      <div className="rounded-xl  p-8 bg-[#FCFCFC] border border-gray-400 flex flex-col gap-4">
        <h2 className="text-[#07595F]  font-medium">
          Account Security Guidelines:
        </h2>

        <ol className="flex flex-col gap-3 text-gray-700">
          <li>Use a strong, unique password for your account</li>
          <li>Never share your login credentials with others</li>
          <li>Log out from shared devices after each session</li>
        </ol>
      </div>
    </div>
  );
};

export default UserResponsibilities;
