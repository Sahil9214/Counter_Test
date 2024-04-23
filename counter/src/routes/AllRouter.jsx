import { Routes, Route } from "react-router-dom";
import SummaryForm from "../Pages/summary/SummaryForm";
import OrderSummary from "../Pages/summary/OrderSummary";
import ThankxPage from "../Pages/summary/ThankxPage";

const AllRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<SummaryForm />} />
      <Route path="/orderSummary" element={<OrderSummary />} />
      <Route path="/thanks" element={<ThankxPage />} />
    </Routes>
  );
};

export default AllRouter;
