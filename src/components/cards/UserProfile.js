import "./userProfile.css";

import iconProfile from "../../assets/icons/name.png";
import iconMail from "../../assets/icons/mail.png";
import iconPhone from "../../assets/icons/phone.png";
import iconPlace from "../../assets/icons/place.png";

import profilePic from "../../assets/profile/1.png";

const UserProfile = () => {
  return (
    <>
      <div className="col-10" style={{ margin: "0 auto" }}>
        <div className="container d-flex justify-content-center">
          <div className="card col-sm-7 mt-5">
            <div className="card-body p-4">
              <h3 className="card-title text-p">Personal Info</h3>
              <div className="d-flex justify-content-end">
                <img className="profilePic" src={profilePic} alt="" />
              </div>
              <div className="row mt-2">
                <div className="col-sm-1 p-0">
                  <div className="card-body">
                    <img src={iconProfile} alt="" />
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="card-body">
                    <h6>
                      <b>Username</b> <br />
                      <p>Full Name</p>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-sm-1 p-0">
                  <div className="card-body">
                    <img src={iconMail} alt="" />
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="card-body">
                    <h6>
                      <b>someone@mail.com</b> <br />
                      <p>Email</p>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-sm-1 p-0">
                  <div className="card-body">
                    <img src={iconPhone} alt="" />
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="card-body">
                    <h6>
                      <b>0812345678910</b>
                      <br />
                      <p>Mobile Phone</p>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-sm-1 p-0">
                  <div className="card-body">
                    <img src={iconPlace} alt="" />
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="card-body">
                    <h6>
                      <b>Someplace, Somewhere</b> <br />
                      <p>Address</p>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end m-0 p-0">
                <button className="btn btn-warning col-5">Change Photo Profil</button>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10"></div>
      </div>
    </>
  );
};

export default UserProfile;
