import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Map from './Map';
import { HiMinus } from 'react-icons/hi';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

function VenderProfile() {
  // will be received from backend
  const [user, setUser] = useState({
    name: 'Restaunrant Palace Name',
    secretKey: 'dsfsdgdsgaafhafd',
    position: [77.1025, 28.7041],
    city: 'somecity',
    state: 'somestate',
    country: 'somecountry',
    img: 'https://www.westcentralfoodservice.com/wp-content/uploads/2019/04/5-food-trends-2019-no-title.jpg',
    color: 'white',
    food: [
      ['foodA', '2 pieces'],
      ['foodB', '3 pieces'],
      ['foodB', '4 pieces'],
      ['foodA', '2 pieces'],
      ['foodB', '3 pieces'],
      ['foodB', '4 pieces'],
      ['foodA', '2 pieces'],
      ['foodB', '3 pieces'],
      ['foodB', '4 pieces'],
      ['foodA', '2 pieces'],
      ['foodB', '3 pieces'],
      ['foodB', '4 pieces'],
    ],
  });

  return (
    <>
      <div className="h-95vh w-screen flex flex-row justify-center items-center">
        <div
          className="rounded-3xl border-4 border-black"
          style={{
            backgroundColor: `${user['color']}`,
            height: '90%',
            width: '60%',
          }}
        >
          <div
            id="profileContainer"
            style={{ backgroundColor: '#ffdb18' }}
            className=" rounded-t-3xl relative h-1/4 border-b-2 border-black border-opacity-10 flex flex-row items-center"
          >
            <img
              src={user['img']}
              className="rounded-full border-4 border-black ml-6"
              style={{
                height: '100px',
                width: '100px',
                objectFit: 'cover',
              }}
              alt="profile"
            />
            <div className="flex flex-col justify-center pl-3">
              <h3 className="font-extrabold text-2xl">
                {user['name']}
              </h3>
              <p>
                {user['city']} | {user['state']} | {user['country']}
              </p>
            </div>
          </div>
          <div className="relative h-3/4 flex flex-row items-center p-5">
            <div
              style={{ height: '95%' }}
              className="w-1/2 flex flex-col items-stretch overflow-y-scroll scrollbar-thin relative"
            >
              <div
                className="rounded-xl border-black border-4 p-5 m-2 mt-0 overflow-y-scroll scrollbar-thin relative"
                style={{ height: '90%' }}
              >
                {user['food'].map((mark, index) => (
                  <div className="flex flex-row items-center justify-between">
                    <div
                      key={index}
                      className="border-4 border-black my-4 p-2 overflow-x-clip rounded-3xl flex flex-row justify-between"
                      style={{
                        backgroundColor: '#FDF8E1',
                        height: '50px',
                        width: '80%',
                      }}
                    >
                      <p className="font-bold">{mark[0]}</p>
                      <p>{mark[1]}</p>
                    </div>
                    <div
                      className="border-4 text-2xl font-bold border-black rounded-3xl flex items-center justify-center"
                      style={{
                        height: '50px',
                        width: '50px',
                        cursor: 'pointer',
                        backgroundColor: '#FCEFB4',
                      }}
                      onClick={(index) => {
                        // Update server
                      }}
                    >
                      <HiMinus />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between">
                <button
                  className="rounded-xl border-black border-4 font-semibold px-2 bg-primary"
                  /* style={{height: "10%", backgroundColor: "#ffdb18"}} */
                  onClick={() => {
                    console.log('clicked');
                    MySwal.fire({
                      title: 'Enter item and quantity',
                      html:
                        '<input placeholder="Item" id="swal-input1" class="swal2-input">' +
                        '<input placeholder="Quantity" id="swal-input2" class="swal2-input">',
                      focusConfirm: false,
                      showCancelButton: true,
                      preConfirm: () => {
                        // update in the server
                        return [
                          document.getElementById('swal-input1')
                            .value,
                          document.getElementById('swal-input2')
                            .value,
                        ];
                      },
                    });
                  }}
                >
                  Add Item
                </button>

                <button className="rounded-xl border-black border-4 font-semibold px-2 bg-primary">
                  Clear
                </button>
                <button className="rounded-xl border-black border-4 font-semibold px-2 bg-primary">
                  Save
                </button>
              </div>
            </div>
            <Map
              position={user['position']}
              key={user['secretKey']}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default VenderProfile;
