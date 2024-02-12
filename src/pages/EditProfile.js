import { UserConsumer } from "../contexts/userContext";

import { useNavigate } from "react-router-dom";
import "./style/EditProfile.css";
import { doc, updateDoc } from "firebase/firestore";
import { db, auth } from "../firestore/firebase-config";
import { setProfileData } from "../until.Reducers/firebaseFunction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const EditProfile = () => {
  const {
    profileData,
    setUserLoginData,
    id,
    name,
    setName,
    email,
    selectCity,
    setSelectCity,
    newState,
    setNewState,

    gender,
    setGender,
    image,
    number,
    setNumber,
    getImageUrl,
    isEditing,
    emptyValue,
    setIsEditing,
    profile,
    fetchProfileData,
    userProfile,
  } = UserConsumer();

  useEffect(() => {
    userProfile();
  }, []);

  const navigate = useNavigate();

  const addProfileData = async () => {
    if (name && number && selectCity && newState && gender && image) {
      if (number.length === 10) {
        if (!isEditing) {
          const data = {
            id: auth.currentUser.uid,
            name,
            email,
            number,
            image,
            selectCity,
            newState,

            gender,
          };
          setProfileData(data);
          emptyValue();
          navigate("/");
          fetchProfileData();
          toast.success("Successfully Add New Profile");
        } else {
          try {
            const itemToEditRef = doc(db, "profileData", profile);
            await updateDoc(itemToEditRef, {
              id,
              name,
              email,
              number,
              image,
              selectCity,
              newState,

              gender,
            });
          } catch (error) {
            console.log(error);
          }
          emptyValue();
          navigate("/");
          fetchProfileData();
          toast.success("Profile Update Successfully");
        }
      } else {
        toast.warning("Enter a valid number!");
      }
    } else {
      toast.error("Input Field Is Mandatory!");
    }
  };

  return (
    <section className="profile">
      <div className="user-profile">
        <div className="profile-img">
          <img src={image} alt="img" />
        </div>

        <from className="profile-data">
          <h1>Your Profile</h1>
          <div className="profile-row">
            <div className="profile-id">
              <label htmlFor="id" className="id">
                ID
              </label>
              <input
                type="text"
                value={id}
                name="id"
                id="id"
                placeholder="Auto Generate"
                readOnly
              />
            </div>
            <div className="profile-name">
              <label htmlFor="name" className="name">
                User Name
              </label>
              <input
                type="text"
                value={name}
                name="name"
                id="name"
                onChange={(event) => setName(event.target.value)}
                placeholder="User Name"
              />
            </div>
          </div>
          <div className="profile-row">
            <div className="profile-email">
              <label htmlFor="id_cmp_email" className="email-name">
                Email
              </label>
              <input
                type="email"
                value={email}
                name="cmp_email"
                id="id_cmp_email"
                readOnly
              />
            </div>
            <div className="profile-phoneNum">
              <label htmlFor="number" className="phone-name">
                Phone Number
              </label>
              <input
                type="number"
                value={number}
                name="number"
                id="number"
                onChange={(event) => setNumber(event.target.value)}
                placeholder="Mobile Number"
              />
            </div>
          </div>
          <div className="profile-row">
            <div className="profile-city">
              <label htmlFor="city" className="city-name">
                Select City
              </label>
              <select
                value={selectCity}
                onChange={(e) => setSelectCity(e.target.value)}
                id="city"
                placeholder="City"
              >
                <option>Select City</option>
                <option value="Namakkal">Namakkal</option>
                <option value="Salem">Salem</option>
                <option value="Erode">Erode</option>
                <option value="Chennai">Chennai</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Thirunelveli">Thirunelveli</option>
                <option value="Chennai">Chennai</option>
                <option value="Goa">Thenkasi</option>
                <option value="Kerala">Tuticorin</option>
              </select>
            </div>
            <div className="profile-state">
              <label htmlFor="state" className="state-name">
                State
              </label>
              <input
                type="text"
                value={newState}
                name="state"
                id="state"
                onChange={(event) => setNewState(event.target.value)}
                placeholder="State"
              />
            </div>
          </div>
          <div className="profile-row">
            {/* <div className="profile-address">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                value={address}
                name="address"
                id="address"
                onChange={(event) => setAddress(event.target.value)}
                placeholder="Address"
              />
            </div> */}
            <div className="profile-radio">
              <label className="gender-name">Gender</label>
              <div
                className="profile-radioContainer"
                onChange={(event) => setGender(event.target.value)}
              >
                <div>
                  <input
                    type="radio"
                    value="Male"
                    id="Male"
                    name="gender"
                    checked={"Male" === gender}
                  />
                  <label htmlFor="Male">Male</label>
                </div>
                <div>
                  <input
                    type="radio"
                    value="Female"
                    id="Female"
                    name="gender"
                    checked={"Female" === gender}
                  />
                  <label htmlFor="Female">Female</label>
                </div>

                <div>
                  <input
                    type="radio"
                    value="Other"
                    id="Other"
                    name="gender"
                    checked={"Other" === gender}
                  />
                  <label htmlFor="Other">Other</label>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-inputImg">
            <div>
              <label htmlFor="image">Upload Your Profile Picture</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                id="image"
                onChange={(event) => getImageUrl(event)}
              />
            </div>
          </div>
          <div className="profile-btnContainer">
            <button
              type="submit"
              onClick={(e) => addProfileData(e.target.value)}
            >
              Save
            </button>
          </div>
        </from>
        <ToastContainer />
      </div>
    </section>
  );
};

export default EditProfile;
