namespace BloodDonationApi.Models;

public class Receiver
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string BloodType { get; set; } = string.Empty;
    public int Age { get; set; }
    public string Hospital { get; set; } = string.Empty;
    public string Status { get; set; } = "pending";
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}