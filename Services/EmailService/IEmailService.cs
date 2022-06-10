using System;
using JourneyEquip.Modals;

namespace JourneyEquip.Services.EmailService
{
	public interface IEmailService
	{
		void SendEmail(EmailDto request);
	}
}

