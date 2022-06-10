using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.AspNetCore.Mvc;
using MimeKit;
using MimeKit.Text;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace JourneyEquip.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class EmailController : ControllerBase
    {
        public readonly IEmailService _emailService;
        public EmailController(IEmailService emailService)
        {
            _emailService = emailService;
        }
        // POST api/email
        [HttpPost("send")]
        public IActionResult SendEmail(EmailDto request)
        {
            try
            {
                _emailService.SendEmail(request);

                return Ok();
            }
            catch(Exception ex)
            {
                throw;
            }
            

        }

    }
}

