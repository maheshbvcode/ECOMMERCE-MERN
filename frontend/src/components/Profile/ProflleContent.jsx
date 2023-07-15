import React, { useState } from 'react'
import { backend_url } from '../../server'
import { useSelector } from 'react-redux'
import { AiOutlineCamera, AiOutlineArrowRight, AiOutlineDelete } from 'react-icons/ai';
import styles from '../../styles/style';
import { Link } from 'react-router-dom';
import { MdOutlineTrackChanges, MdTrackChanges } from 'react-icons/md';
import { RxCross1 } from 'react-icons/rx';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from "@mui/material";

const ProflleContent = ({ active }) => {
    const { user } = useSelector((state) => state.user);

    const [name, setName] = useState(user && user.name);
    const [email, setEmail] = useState(user && user.email);
    const [phoneNumber, setPhoneNumber] = useState(user && user.phoneNumber);
    const [password, setPassword] = useState("");
    const [avatar, setAvatar] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <div className='w-full'>
            {/* Profile   */}
            {
                active === 1 && (
                    <>
                        <div className="flex justify-center w-full">
                            <div className="relative">
                                <img
                                    src={`${backend_url}${user?.avatar}`}
                                    className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-[#3ad132]"
                                    alt=""
                                />
                                <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
                                    <AiOutlineCamera />
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className="w-full px-5">
                            <form onSubmit={handleSubmit} aria-required={true}>
                                <div className="w-full 800px:flex block pb-3">
                                    {/* Full Name */}
                                    <div className='w-[100%] 800px:w-[50%]'>
                                        <label className='block pb-2'>Full Name</label>
                                        <input
                                            type="text"
                                            className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className='w-[100%] 800px:w-[50%]'>
                                        <label className='block pb-2'>Email Address</label>
                                        <input
                                            type="email"
                                            className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>

                                {/* 2nd Row */}
                                <div className="w-full 800px:flex block pb-3">
                                    {/* Number */}
                                    <div className=" w-[100%] 800px:w-[50%]">
                                        <label className="block pb-2">Phone Number</label>
                                        <input
                                            type="number"
                                            className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                                            required
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                        />
                                    </div>

                                    {/* password */}
                                    <div className=" w-[100%] 800px:w-[50%]">
                                        <label className="block pb-2">Enter your password</label>
                                        <input
                                            type="password"
                                            className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>

                                </div>

                                <input
                                    className={`w-[250px] h-[40px] border border-[#3a24db] text-center text-[#3a24db] rounded-[3px] mt-8 cursor-pointer hover:bg-[#3a24db]  hover:text-[#fff]`}
                                    required
                                    value="Update"
                                    type="submit"
                                />



                            </form>
                        </div>
                    </>
                )
            }
            {/* Profile   */}

            {/* Orders  */}
            {
                active === 2 && (
                    <div>
                        <AllOrders />
                    </div>
                )
            }
            {/* Orders  */}

            {/* Refund  */}
            {
                active === 3 && (
                    <div>
                        <AllRefundOrders />
                    </div>
                )
            }
            {/* Refund  */}


            {/* TracK Order */}
            {
                active === 5 && (
                    <div>
                        <TrackOrder />
                    </div>
                )
            }
            {/* TracK Order */}

            {/* Payment Method */}
            {
                active === 6 && (
                    <div>
                        <PaymentMethod />
                    </div>
                )
            }
            {/* Payment Method */}

            {/* User Address  */}
            {
                active === 7 && (
                    <div>
                        <Address />
                    </div>
                )
            }
            {/* User Address  */}



        </div>
    )
};

const AllOrders = () => {
    const orders = [
        {
            _id: "64trcebr7erw8euw",
            orderItems: [
                {
                    name: "Iphone 14 pro max",
                },
            ],
            totalPrice: 80000,
            orderStatus: "Processing"

        },
    ];

    const columns = [
        { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

        {
            field: "status",
            headerName: "Status",
            minWidth: 130,
            flex: 0.7,
            cellClassName: (params) => {
                return params.getValue(params.id, "status") === "Delivered"
                    ? "greenColor"
                    : "redColor";
            },
        },
        {
            field: "itemsQty",
            headerName: "Items Qty",
            type: "number",
            minWidth: 130,
            flex: 0.7,
        },

        {
            field: "total",
            headerName: "Total",
            type: "number",
            minWidth: 130,
            flex: 0.8,
        },

        {
            field: " ",
            flex: 1,
            minWidth: 150,
            headerName: "",
            type: "number",
            sortable: false,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/user/order/${params.id}`}>
                            <Button variant='outlined'>
                                <AiOutlineArrowRight size={20} />
                            </Button>
                        </Link>
                    </>
                );
            },
        },
    ];

    const row = [];

    orders &&
        orders.forEach((item) => {
            row.push({
                id: item._id,
                itemsQty: item.orderItems.length,
                total: "₹  " + item.totalPrice,
                status: item.orderStatus,
            });
        });

    return (
        <div className="pl-8 pt-1">
            <DataGrid
                rows={row}
                columns={columns}
                autoPageSize
                disableColumnSelector
                autoHeight

            />
        </div>
    )
}


const AllRefundOrders = () => {
    const orders = [
        {
            _id: "64trcebr7erw8euw",
            orderItems: [
                {
                    name: "Iphone 14 pro max",
                },
            ],
            totalPrice: 80000,
            orderStatus: "Processing"

        },
    ];

    const columns = [
        { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

        {
            field: "status",
            headerName: "Status",
            minWidth: 130,
            flex: 0.7,
            cellClassName: (params) => {
                return params.getValue(params.id, "status") === "Delivered"
                    ? "greenColor"
                    : "redColor";
            },
        },
        {
            field: "itemsQty",
            headerName: "Items Qty",
            type: "number",
            minWidth: 130,
            flex: 0.7,
        },

        {
            field: "total",
            headerName: "Total",
            type: "number",
            minWidth: 130,
            flex: 0.8,
        },

        {
            field: " ",
            flex: 1,
            minWidth: 150,
            headerName: "",
            type: "number",
            sortable: false,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/user/order/${params.id}`}>
                            <Button variant='outlined'>
                                <AiOutlineArrowRight size={20} />
                            </Button>
                        </Link>
                    </>
                );
            },
        },
    ];

    const row = [];

    orders && orders.forEach((item) => {
        row.push({
            id: item._id,
            itemsQty: item.orderItems.length,
            total: "₹  " + item.totalPrice,
            status: item.orderStatus,
        })
    });


    return (
        <div className="pl-8 pt-1">
            <DataGrid
                rows={row}
                columns={columns}
                autoPageSize
                autoHeight
                disableRowSelectionOnClick
            />
        </div>
    )
}

const TrackOrder = () => {
    const orders = [
        {
            _id: "64trcebr7erw8euw",
            orderItems: [
                {
                    name: "Iphone 14 pro max",
                },
            ],
            totalPrice: 80000,
            orderStatus: "Processing"

        },
    ];

    const columns = [
        { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

        {
            field: "status",
            headerName: "Status",
            minWidth: 130,
            flex: 0.7,
            cellClassName: (params) => {
                return params.getValue(params.id, "status") === "Delivered"
                    ? "greenColor"
                    : "redColor";
            },
        },
        {
            field: "itemsQty",
            headerName: "Items Qty",
            type: "number",
            minWidth: 130,
            flex: 0.7,
        },

        {
            field: "total",
            headerName: "Total",
            type: "number",
            minWidth: 130,
            flex: 0.8,
        },

        {
            field: " ",
            flex: 1,
            minWidth: 150,
            headerName: "",
            type: "number",
            sortable: false,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/order/${params.id}`}>
                            <Button variant='outlined'>
                                <MdOutlineTrackChanges size={20} />
                            </Button>
                        </Link>
                    </>
                );
            },
        },
    ];

    let row = [];

    orders && orders.forEach((item) => {
        row.push({
            id: item._id,
            itemsQty: item.orderItems.length,
            total: "₹  " + item.totalPrice,
            status: item.orderStatus,
        })
    });
    return (
        <div className="pl-8 pt-1">
            <DataGrid
                rows={row}
                columns={columns}
                autoPageSize
                autoHeight
                disableRowSelectionOnClick
            />
        </div>
    )
}

const PaymentMethod = () => {
    return (
        <div className="w-full px-5">
            <div className="flex w-full items-center justify-between">
                <h1 className='text-[25px] font-[600] text-[#000000ba] pb-2'>
                    Payment Methods
                </h1>
                <div className={`${styles.button} !rounded-md`}>
                    <span className='text-[#fff]'>Add New</span>
                </div>
            </div>
            <br />
            <div className="w-full bg-[#fff] h-[70px] !rounded-[4px] flex items-center px-3 shadow justify-between pr-10">
                <div className="flex items-center">
                    <img src="https://bonik-react.vercel.app/assets/images/payment-methods/Visa.svg" alt="" />
                    <h5 className='pl-5 font-[600]'>Mahesh BV</h5>
                </div>
                <div className="pl-8 flex items-center">
                    <h6>4224 **** **** 4242</h6>
                    <h5 className='pl-6'>08/2024</h5>
                </div>
                <div className="min-w-[10%] flex items-center justify-between pl-8">
                    <AiOutlineDelete size={25} className='cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

const Address = () => {

    return (
        <div className="w-full px-5">
            <div className="flex w-full items-center justify-between">
                <h1 className='text-[25px] font-[600] text-[#000000ba] pb-2'>
                    My Addresses
                </h1>
                <div className={`${styles.button} !rounded-md`}>
                    <span className='text-[#fff]'>Add New</span>
                </div>
            </div>
            <br />
            <div className="w-full bg-[#fff] h-[70px] !rounded-[4px] flex items-center px-3 shadow justify-between pr-10">
                <div className="flex items-center">
                    
                    <h5 className='pl-5 font-[600]'>Default Address</h5>
                </div>
                <div className="pl-8 flex items-center">
                    <h6>#96, Uttrahalli, Bangalore-560061</h6>
                    
                </div>
                <div className="pl-8 flex items-center">
                    <h6>(+91) 7090388129</h6>
                    
                </div>
                <div className="min-w-[10%] flex items-center justify-between pl-8">
                    <AiOutlineDelete size={25} className='cursor-pointer' />
                </div>
            </div>
        </div>
    );
}

export default ProflleContent