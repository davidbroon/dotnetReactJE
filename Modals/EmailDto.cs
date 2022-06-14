using System;
namespace JourneyEquip.Modals
{
	public class EmailDto
	{
		public string To { get; set; } = "hello@journeyequip.com";
		public string Subject { get; set; } = "Journey Equip";
		public string Body { get; set; } = string.Empty;
	}
}

