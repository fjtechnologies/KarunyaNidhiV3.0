using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Razorpay.Api;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KarunyaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        private RazorpayClient _razorpayClient;
        public PaymentController()
        {
            _razorpayClient = new RazorpayClient("rzp_test_fuvkKJZqahJhLD", "9KHFcFq9hKNnrgqQz5crNTP5");
        }

        [HttpPost]
        [Route("initialize")]
        public async Task<IActionResult> InitializePayment([FromForm] PaymentData data)
        {
            var options = new Dictionary<string, object>
        {
            { "amount", data.Amount*100 },
            { "currency", "INR" },
            { "receipt", RandomString(8) },
            // auto capture payments rather than manual capture
            // razor pay recommended option
            { "payment_capture", true }
        };

            var order = _razorpayClient.Order.Create(options);
            var orderId = order["id"].ToString();
            var orderJson = order.Attributes.ToString();
            return Ok(orderJson);
        }

        public class ConfirmPaymentPayload
        {
            public string razorpay_payment_id { get; }
            public string razorpay_order_id { get; }
            public string razorpay_signature { get; }
        }

        [HttpPost]
        [Route("confirm")]
        public async Task<IActionResult> ConfirmPayment(ConfirmPaymentPayload confirmPayment)
        {
            var attributes = new Dictionary<string, string>
        {
            { "razorpay_payment_id", confirmPayment.razorpay_payment_id },
            { "razorpay_order_id", confirmPayment.razorpay_order_id },
            { "razorpay_signature", confirmPayment.razorpay_signature }
        };
            try
            {
                Utils.verifyPaymentSignature(attributes);
                // OR
                //var isValid = Utils.ValidatePaymentSignature(attributes);
                //if (isValid)
                //{
                var order = _razorpayClient.Order.Fetch(confirmPayment.razorpay_order_id);
                var payment = _razorpayClient.Payment.Fetch(confirmPayment.razorpay_payment_id);
                if (payment["status"] == "captured")
                {
                    return Ok("Payment Successful");
                }
                //}
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return StatusCode(StatusCodes.Status500InternalServerError);
        }

        public class PaymentData
        {
            public string FirstName { get; set; }
            public string LastName { get; set; }
            public string PAN { get; set; }
            public int Amount { get; set; }
            public string Email { get; set; }
            public string Mobile { get; set; }
            public string City { get; set; }
            public string DOB { get; set; }
        }

        private static Random random = new Random();
        public static string RandomString(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(Enumerable.Repeat(chars, length)
              .Select(s => s[random.Next(s.Length)]).ToArray());
        }
    }
}
   