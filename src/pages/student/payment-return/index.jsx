import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { captureAndFinalizePaymentService } from "@/services";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function PaypalPaymentReturnPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const reference = params.get("reference");

  useEffect(() => {
    if (reference) {
      async function capturePayment() {
        const response = await capturePaymentAndFinalizeOrder({ reference });

        if (response.success) {
          window.location.href = "/student-courses"; // Redirect after success
        }
      }

      capturePayment();
    }
  }, [reference]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Processing payment... Please wait</CardTitle>
      </CardHeader>
    </Card>
  );
}

export default PaypalPaymentReturnPage;