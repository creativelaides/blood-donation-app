namespace BloodDonationApi.Models;

public class Donation
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string DonorId { get; set; } = string.Empty;
    public string ReceiverId { get; set; } = string.Empty;
    public string DonorName { get; set; } = string.Empty;
    public string ReceiverName { get; set; } = string.Empty;
    public string BloodType { get; set; } = string.Empty;
    public DateTime Date { get; set; } = DateTime.UtcNow;
    public string Status { get; set; } = "completed";
}