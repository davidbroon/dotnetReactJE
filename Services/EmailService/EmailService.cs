using System;
using MailKit.Net.Smtp;
using MailKit.Security;
using MimeKit;
using MimeKit.Text;

namespace JourneyEquip.Services.EmailService
{
    public class EmailService : IEmailService
    {
        private readonly IConfiguration configuration;
        public readonly string _templatePath;

        public EmailService(IConfiguration config, IConfiguration pathConfig)
        {
            configuration = config;
            _templatePath = pathConfig["Path:Templates"];
        }

        void IEmailService.SendEmail(EmailDto request)
        {

            string FullPath = Path.Combine(_templatePath, "JourneyUserInterest.html");

            StreamReader str = new StreamReader(FullPath);
            string mailText = str.ReadToEnd();
            str.Close();
            mailText = mailText.Replace("[userName]", request.UserName).Replace("[userEmail]", request.UserEmail).Replace("[userCountry]", request.UserCountry);

            var email = new MimeMessage();
            email.From.Add(MailboxAddress.Parse(configuration.GetSection("MailUserName").Value));
            email.To.Add(MailboxAddress.Parse(request.To));
            email.Subject = request.Subject;
            email.Body = new TextPart(TextFormat.Html) { Text = mailText};

            using var smtp = new SmtpClient();
            smtp.Connect(configuration.GetSection("MailHost").Value, 587, SecureSocketOptions.StartTls);
            smtp.Authenticate(configuration.GetSection("MailUserName").Value, configuration.GetSection("MailPassword").Value);
            smtp.Send(email);
            smtp.Disconnect(true);
        }
    }
}

