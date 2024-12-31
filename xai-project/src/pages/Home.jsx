import { Typography, Box, Button } from "@mui/material";
import { NavLink } from "react-router";

export default function Home() {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    // justifyContent: "center",
                    height: "100vh",
                    maxWidth: "1300px",
                    margin: "0 auto",
                    // color: "whitesmoke",
                }}
            >
                <Typography variant="h3" sx={{ mt: 5, mb: 10 }}>
                    Explaining Predictions Of Financial Models Using XAI
                </Typography>

                <Typography
                    variant="h6"
                    sx={{
                        fontSize: 22,
                    }}
                >
                    This project leverages Explainable AI (XAI) techniques to
                    provide insights into the predictions of financial models.
                    By integrating the LIME (Local Interpretable Model-agnostic
                    Explanations) framework, we demystify how machine learning
                    models make decisions in three critical financial domains:
                    <Typography
                        sx={{
                            mt: 4,
                            mb: 4,
                            border: "2px solid white",
                            borderRadius: 8,
                            padding: 2,
                        }}
                    >
                        <Typography sx={{ mb: 3, fontSize: 18 }}>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: "bold",
                                }}
                            >
                                Loan Default Prediction:
                            </Typography>
                            Many Financial Institutions are showing a trend of
                            using models to assess a person's loan risk
                        </Typography>

                        <Typography sx={{ mb: 3, fontSize: 18 }}>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: "bold",
                                }}
                            >
                                Property Valuation
                            </Typography>
                            The price of properties has been very hard to
                            valuate objectly, hence such ML models are applied
                            to provide a level consistency
                        </Typography>
                        <Typography sx={{ mb: 3, fontSize: 18 }}>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: "bold",
                                }}
                            >
                                Stock Price Prediction:
                            </Typography>
                            Gain transparency into the variables driving stock
                            movement forecasts. With this project, users can
                            explore model predictions, visualize contributing
                            factors, and trust AI-driven financial decisions
                            more effectively
                        </Typography>
                    </Typography>
                </Typography>

                <Typography variant="h6" sx={{ fontSize: 20, padding: 5 }}>
                    LIME (Local Interpretable Model-agnostic Explanations) is a
                    popular XAI technique that explains predictions of machine
                    learning models by approximating them locally with simpler,
                    interpretable models. It works by perturbing input data,
                    observing changes in the model's output, and identifying the
                    key features driving a specific prediction. LIME is
                    model-agnostic, meaning it can be applied to any black-box
                    model, making it an invaluable tool for understanding and
                    trusting AI systems.
                </Typography>
                <Typography
                    sx={{
                        mt: 3,
                        mb: 3,
                        fontSize: 20,
                    }}
                >
                    Explaining The Models:
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 25,
                        p: 6,
                    }}
                >
                    <NavLink to="/loan" end>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                textTransform: "none",
                                fontWeight: "bold",

                                border: "1px solid white",
                                borderRadius: "8px",
                            }}
                        >
                            Loan Classification
                        </Button>
                    </NavLink>
                    <NavLink to="/property">
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                textTransform: "none",
                                fontWeight: "bold",

                                border: "1px solid white",
                                borderRadius: "8px",
                            }}
                        >
                            Property Valuation
                        </Button>
                    </NavLink>
                    <NavLink to="/stock">
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                textTransform: "none",
                                fontWeight: "bold",

                                border: "1px solid white",
                                borderRadius: "8px",
                            }}
                        >
                            Stock Prediction
                        </Button>
                    </NavLink>
                </Box>
            </Box>
        </>
    );
}
