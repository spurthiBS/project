import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./wildtrail-logo.png";
import axios from "axios";
import Select from "react-select";


const UserNav = () => {
  // const [regions, setRegions] = useState([]);

  //*fetching regions*/
  const [getregion, pickregion] = useState([]);
  const [getcities, pickcities] = useState([]);
  const[inputval, updateinputval] = useState("");
 const keys = ["username" , "email" , "phone"];

 const search = (data)=> {
  return data.filter(uinfo=>
    keys.some((key)=>uinfo[key].toLowerCase().includes(inputval))
    /*uinfo.username.toLowerCase().includes(inputval) ||
    uinfo.email.toLowerCase().includes(inputval) ||
  uinfo.phone.toLowerCase().includes(inputval)*/
        
    );
 };

  

  const getregionList = () => {
    fetch("region.json")
      .then((response) => response.json())
      .then((getresponse) => {
        pickregion(getresponse);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  };

  const getcitiesList = () => {
    fetch("cities.json")
      .then((response) => response.json())
      .then((getresponse) => {
        pickcities(getresponse);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getregionList(); // it's an onload function
    getcitiesList(); //it's an onload function
  }, []);

  //*fetching regions code close*/

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.post('http://52.77.84.127:3306/africapackages/v5/GetRegionsforHP', {
  //         emailid: 'manju.paybills@gmail.com',
  //         apikey: 'sitcdfge6789gagan'
  //       });

  //       // Log the response data to check its format
  //       console.log('Response data:', response.data);

  //       if (Array.isArray(response.data)) {
  //         setRegions(response.data);
  //       } else {
  //         console.error('Invalid response data:', response.data);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // const [regions, setRegions] = useState([]);

  // const allproduct = () => {
  //   let input = {
  //     "emailid": "manju.paybills@gmail.com",
  //     "apikey": "sitcdfge6789gagan"
  //   };

  //   const requestOptions = {
  //     method: 'POST',
  //     mode: 'cors',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Origin': 'http://localhost:3000',
  //       'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, DELETE, OPTIONS',
  //       'Access-Control-Allow-Headers': 'origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization',
  //     },
  //     body: JSON.stringify(input)
  //   };

  //   fetch("http://52.77.84.127:3306/africapackages/v5/GetRegionsforHP", requestOptions)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       console.log(data);
  //       // setRegions(data);
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //     });
  // }

  // useEffect(() => {
  //   allproduct();
  // }, []);

  return (
    <>
      <div className="section">
        {/*navbar start here*/}
        <nav className="navbar navbar-expand-md  sticky-top  p-4">
          <div className="container">
            <div className="brand-info">
              <a className="navbar-brand" href="javascript:void(0)">
                <img src={logo} alt="wild-trails-logo" />
              </a>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <Link
                    to=""
                    className="nav-link text-white"
                    aria-current="page"
                  >
                    <i className="fa fa-home" aria-hidden="true"></i>{" "}
                    <small>Home</small>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to=""
                    className="nav-link text-white"
                    aria-current="page"
                  >
                    <i className="fa fa-user-circle-o" aria-hidden="true"></i>{" "}
                    <small>User</small>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to=""
                    className="nav-link text-white"
                    aria-current="page"
                  >
                    <i className="fa fa-table" aria-hidden="true"></i>{" "}
                    <small>Update My Rate</small>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to=""
                    className="nav-link text-white checkvalidity"
                    aria-current="page"
                  >
                    <i className="fa fa-check-square-o" aria-hidden="true"></i>{" "}
                    <small>Check Validity</small>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to=""
                    className="nav-link text-white"
                    aria-current="page"
                  >
                    <i className="fa  fa-check-circle"></i>{" "}
                    <small>Access My Rate Table</small>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to=""
                    className="nav-link text-white"
                    aria-current="page"
                  >
                    <i className="fa  fa-check-circle"></i> <small>Leads</small>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to=""
                    className="nav-link text-white"
                    aria-current="page"
                  >
                    <i className="fa fa-file-pdf" aria-hidden="true"></i>{" "}
                    <small>Invoice</small>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to=""
                    className="nav-link text-white markup"
                    aria-current="page"
                  >
                    <i className="fa fa-percent" aria-hidden="true"></i>{" "}
                    <small>Markup</small>
                  </Link>
                </li>
                <li className="nav-item ps-1">
                  <Link
                    to=""
                    className="nav-link text-white cart"
                    aria-current="page"
                  >
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
                    <small>Cart(0)</small>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/*navbar start here*/}
        {/*booking section start here */}

        <div className="booking-tab-section">
          <div className="tab-content p-4">
            <div className="row mb-3">
              <div className="col-md-12">
                <h5>
                  Book your Jungle Experiences along with Safaris & Local
                  Activities
                </h5>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="checked-type-sec p-1 mb-2">
                  <label className="mb-0 p-2">
                    <input
                      type="radio"
                      name="typetour"
                      id="V-type_1"
                      value="1"
                      checked
                    />{" "}
                    Fixed Tours
                  </label>
                  <label className="mb-0 p-2">
                    <input
                      type="radio"
                      id="V-type_2"
                      name="typetour"
                      value="2"
                    />{" "}
                    Customized Tours
                  </label>
                </div>
              </div>
            </div>
            {/*row ended */}
            <div className="row mb-3 text-start">
              <div className="col-md-8">
                <div className="form-group">
                  <label className="mr-2">Select Region</label>
                  <select
                    className="form-select form-sel"
                    name="reagion"
                    id="parkname1"
                    required="required"
                  >
                    {getregion.map((regionnames, index) => {
                      return <option key={index}>{regionnames}</option>;
                    })}
                  </select>
                </div>
              </div>
              <div className="col-md-4 text-start">
                <label>
                  <i className="city"></i> Start City
                </label>
                <select
                  className="form-select form-sel"
                  name="sourcecity"
                  id="city"
                  required>
                    <option>{<input type="text" placeholder="Search Here" className="form-control" 
                onChange={obj=>updateinputval(obj.target.value)}></input>}</option>
                  {
                  getcities.map((citiesname, index) => {
                    return <option key={index}>{citiesname}</option>;
                  })}
                </select>
              </div>
            </div>
            {/*Row end */}
            <div className="row mb-3 text-start">
              <div className="col-md-4">
                <label className="mr-2">Checkin</label>
                <input type="date" className="form-control date-picker"></input>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label className="mr-2">Number of Nights</label>
                  <select
                    className="form-select form-sel"
                    name="parkname"
                    id="parkname2"
                    required="required"
                  >
                    <option>1 Nights</option>
                    <option>2 Nights</option>
                    <option>3 Nights</option>
                    <option>4 Nights</option>
                    <option>5 Nights</option>
                    <option>6 Nights</option>
                    <option>7 Nights</option>
                    <option>8 Nights</option>
                    <option>9 Nights</option>
                    <option>10 Nights</option>
                    <option>11 Nights</option>
                    <option>12 Nights</option>
                    <option>13 Nights</option>
                    <option>14 Nights</option>
                  </select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label className="mr-2">Travellers</label>
                  <select
                    className="form-select form-sel"
                    name="parkname"
                    id="parkname3"
                    required="required"
                  >
                    <option>1</option>
                    <option>2</option>
                  </select>
                </div>
              </div>
            </div>
            {/*row end */}
            <div className="row mb-4 text-start">
              <div className="button-sec">
                <button type="button" className="btn btn search-btn">
                  Search Packages
                </button>
              </div>
            </div>
          </div>
        </div>

        {/*booking section ends here */}
      </div>
      {/*section ends here */}
    </>

    /*top nav ends here*/
  );
};

export default UserNav;
