using BloodDonationApi.Models;

namespace BloodDonationApi.Services;

public class DataService
{
    private readonly List<Donor> _donors = [];
    private readonly List<Receiver> _receivers = [];
    private readonly List<Donation> _donations = [];

    public List<Donor> Donors => _donors;
    public List<Receiver> Receivers => _receivers;
    public List<Donation> Donations => _donations;

    public Donor? GetAvailableDonor()
    {
        return _donors.FirstOrDefault(d => d.Available);
    }

    public Receiver? GetPendingReceiver()
    {
        return _receivers.FirstOrDefault(r => r.Status == "pending");
    }

    public void MarkDonorUnavailable(string donorId)
    {
        var donor = _donors.FirstOrDefault(d => d.Id == donorId);
        if (donor != null) donor.Available = false;
    }

    public void MarkReceiverAttended(string receiverId)
    {
        var receiver = _receivers.FirstOrDefault(r => r.Id == receiverId);
        if (receiver != null) receiver.Status = "attended";
    }
}