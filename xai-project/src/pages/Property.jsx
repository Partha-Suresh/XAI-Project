import {
    Typography,
    Select,
    MenuItem,
    TextField,
    Button,
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { useEffect } from "react";
import { useTheme } from "@/components/ui/theme-provider";

const url = "http://127.0.0.1:5000/predict_property";

export default function Property() {
    const [formData, setFormData] = useState({
        posted_by: "0",
        under_construction: "0",
        rera: "0",
        bhk: "1",
        square_feet: "1000",
        ready_to_move: "0",
        resale: "0",
        city: "Bangalore",
        locality: "Whitefield",
    });

    const [price, setPrice] = useState(0);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        //Here, POST to Flask Server

        //Convert from strings
        formData.posted_by = +formData.posted_by;
        formData.under_construction = +formData.under_construction;
        formData.rera = +formData.rera;
        formData.bhk = +formData.bhk;
        formData.square_feet = +formData.square_feet;
        formData.ready_to_move = +formData.ready_to_move;
        formData.resale = +formData.resale;

        console.log(formData);

        const response = await fetch(url, {
            method: "POST", // HTTP method
            headers: {
                "Content-Type": "application/json", // Specify JSON
            },
            body: JSON.stringify(formData), // Convert data to JSON string
        });
        console.log(response);

        const prediction = await response.json();

        setPrice(prediction["prediction"]);
    };

    const [isDarkMode, setisDarkMode] = useState(false)
    const { theme } = useTheme() 
    useEffect(() => {
        if(theme === 'dark'){
            setisDarkMode(true)
        }else{
            setisDarkMode(false)
        }
    }, [theme])

    return (
        <div className="flex flex-col items-center h-screen max-w-5xl mx-auto p-4 dark:text-white">
            <Typography variant="h2" className="mt-5 mb-5">
                Property Valuation
            </Typography>
            <Typography variant="h5" className="mb-8">
                We have trained a Random Forest Regressor Model to predict
                property valuations using a dataset with key features such as
                RERA approval, location, BHK (number of bedrooms, hall,
                kitchen), square footage, whether a property is ready to move,
                etc.
            </Typography>
            <div className="flex flex-col gap-6 max-w-4xl mx-auto p-6 border border-gray-300 rounded-lg m-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <Typography variant="h6">Posted By:</Typography>
                        <Select 
                            className="bg-white text-black"
                            name="posted_by"
                            defaultValue={formData.posted_by}
                            onChange={handleChange}
                        >
                            <MenuItem value={"0"}>Owner</MenuItem>
                            <MenuItem value={"1"}>Dealer</MenuItem>
                            <MenuItem value={"2"}>Builder</MenuItem>
                        </Select>
                    </div>
                    <div className="flex flex-col">
                        <Typography variant="h6">Is the property under construction?</Typography>
                        <Select
                            className="bg-white text-black"
                            name="under_construction"
                            defaultValue={formData.under_construction}
                            onChange={handleChange}
                        >
                            <MenuItem value={"0"}>No</MenuItem>
                            <MenuItem value={"1"}>Yes</MenuItem>
                        </Select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <Typography variant="h6">RERA Approved:</Typography>
                        <Select
                            className="bg-white text-black"
                            name="rera"
                            defaultValue={formData.rera}
                            onChange={handleChange}
                        >
                            <MenuItem value={"0"}>No</MenuItem>
                            <MenuItem value={"1"}>Yes</MenuItem>
                        </Select>
                    </div>
                    <div className="flex flex-col">
                        <Typography variant="h6">Enter BHK</Typography>
                        <TextField
                            className="bg-white text-black"
                            name="bhk"
                            defaultValue={formData.bhk}
                            onChange={handleChange}
                            label="BHK"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <Typography variant="h6">Enter Square Feet</Typography>
                        <TextField
                            className="bg-white text-black"
                            name="square_feet"
                            value={formData.square_feet}
                            onChange={handleChange}
                            label="Square Feet"
                        />
                    </div>
                    <div className="flex flex-col">
                        <Typography variant="h6">Is it ready to move?</Typography>
                        <Select
                            className="bg-white text-black"
                            name="ready_to_move"
                            defaultValue={formData.ready_to_move}
                            onChange={handleChange}
                        >
                            <MenuItem value={"0"}>No</MenuItem>
                            <MenuItem value={"1"}>Yes</MenuItem>
                        </Select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <Typography variant="h6">Is it a resale property?</Typography>
                        <Select
                            className="bg-white text-black"
                            name="resale"
                            defaultValue={formData.resale}
                            onChange={handleChange}
                        >
                            <MenuItem value={"0"}>No</MenuItem>
                            <MenuItem value={"1"}>Yes</MenuItem>
                        </Select>
                    </div>
                    <div className="flex flex-col">
                        <Typography variant="h6">Enter Locality</Typography>
                        <TextField
                            className="bg-white text-black"
                            name="locality"
                            value={formData.locality}
                            onChange={handleChange}
                            multiline={true}
                            label="Locality"
                        />
                    </div>
                </div>

                <div className="flex flex-col">
                    <Typography variant="h6">Enter City</Typography>
                    <TextField
                        className="bg-white text-black"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        label="City"
                    />
                </div>

                <div className="flex justify-center mt-6">
                    <Button
                        variant="contained"
                        type="submit"
                        color="success"
                        size="large"
                        endIcon={<SendIcon />}
                        className="text-lg max-w-xs rounded-lg"
                        onClick={(e) => { handleSubmit(e) }}
                    >
                        Predict Price
                    </Button>
                </div>
            </div>
            <div className="mt-6 p-6 text-center border border-gray-300 rounded-lg w-full max-w-4xl dark:bg-gray-800">
                {price === 0 ? (
                    <Typography variant="h6">No Prediction Made</Typography>
                ) : (
                    <Typography variant="h6">
                        Predicted Price By Model is Rs.{price} Lakh
                    </Typography>
                )}
            </div>
        </div>
    );
}
