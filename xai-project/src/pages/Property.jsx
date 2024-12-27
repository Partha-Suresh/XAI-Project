import {
    Typography,
    Box,
    Select,
    MenuItem,
    TextField,
    Button,
} from "@mui/material";
import { useState } from "react";

// import { mapCity } from "../Helper";

const rowStyle = {
    display: "flex",
    flexDirection: "row",
    gap: 25,
};

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

        const prediction = await response.json();

        setPrice(prediction["prediction"]);
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100vh",
                maxWidth: "1300px",
                margin: "0 auto",
            }}
        >
            <Typography variant="h2" sx={{ mt: 5, mb: 5 }}>
                Property Valuation
            </Typography>
            <Typography variant="h5">
                We have trained a Random Forest Regressor Model to predict
                property valuations using a dataset with key features such as
                RERA approval, location, BHK (number of bedrooms, hall,
                kitchen), square footage, whether a property is ready to move,
                etc.
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    width: "700px",
                    margin: "0 auto",
                }}
            >
                <Box sx={rowStyle}>
                    <Typography variant="h6">Posted By:</Typography>
                    <Select
                        name="posted_by"
                        value={formData.posted_by}
                        onChange={handleChange}
                    >
                        <MenuItem value={"0"}>Owner</MenuItem>
                        <MenuItem value={"1"}>Dealer</MenuItem>
                        <MenuItem value={"2"}>Builder</MenuItem>
                    </Select>
                </Box>

                <Box sx={rowStyle}>
                    <Typography variant="h6">
                        Is the property under construction?
                    </Typography>
                    <Select
                        name="under_construction"
                        value={formData.under_construction}
                        onChange={handleChange}
                    >
                        <MenuItem value={"0"}>No</MenuItem>
                        <MenuItem value={"1"}>Yes</MenuItem>
                    </Select>
                </Box>
                <Box sx={rowStyle}>
                    <Typography variant="h6">RERA Approved:</Typography>
                    <Select
                        name="rera"
                        value={formData.rera}
                        onChange={handleChange}
                    >
                        <MenuItem value={"0"}>No</MenuItem>
                        <MenuItem value={"1"}>Yes</MenuItem>
                    </Select>
                </Box>
                <Box sx={rowStyle}>
                    <Typography variant="h6">BHK</Typography>
                    <TextField
                        name="bhk"
                        value={formData.bhk}
                        onChange={handleChange}
                    />
                </Box>
                <Box sx={rowStyle}>
                    <Typography variant="h6">Enter Square Feet</Typography>
                    <TextField
                        name="square_feet"
                        value={formData.square_feet}
                        onChange={handleChange}
                    />
                </Box>

                <Box sx={rowStyle}>
                    <Typography variant="h6">Is it ready to move?</Typography>
                    <Select
                        name="ready_to_move"
                        value={formData.ready_to_move}
                        onChange={handleChange}
                    >
                        <MenuItem value={"0"}>No</MenuItem>
                        <MenuItem value={"1"}>Yes</MenuItem>
                    </Select>
                </Box>
                <Box sx={rowStyle}>
                    <Typography variant="h6">
                        Is it a resale property?
                    </Typography>
                    <Select
                        name="resale"
                        value={formData.resale}
                        onChange={handleChange}
                    >
                        <MenuItem value={"0"}>No</MenuItem>
                        <MenuItem value={"1"}>Yes</MenuItem>
                    </Select>
                </Box>
                <Box sx={rowStyle}>
                    <Typography variant="h6">Enter Locality</Typography>
                    <TextField
                        name="locality"
                        value={formData.locality}
                        onChange={handleChange}
                        multiline={true}
                    />
                </Box>

                <Box sx={rowStyle}>
                    <Typography variant="h6">Enter City</Typography>
                    <TextField
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                    />
                </Box>

                <Button
                    variant="contained"
                    type="submit"
                    sx={{
                        textTransform: "none",
                    }}
                >
                    Predit Price
                </Button>
            </Box>{" "}
            {/*Form Box*/}
            {price == 0 ? (
                <Box sx={{ ...rowStyle, m: 10, p: 5 }}>
                    <Typography>No Prediction Made</Typography>
                </Box>
            ) : (
                <Box sx={{ ...rowStyle, m: 10, p: 5 }}>
                    <Typography>
                        {" "}
                        Predicted Price By Model is Rs.{price} Lakh
                    </Typography>
                </Box>
            )}
        </Box> //Page Box End
    );
}
