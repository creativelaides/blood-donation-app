using Microsoft.AspNetCore.Mvc;
using BloodDonationApi.Models;
using BloodDonationApi.Services;

namespace BloodDonationApi.Controllers;

public static class DonationsController
{
    public static void MapDonations(this WebApplication app)
    {
        var group = app.MapGroup("/api/donations");

        group.MapGet("/", (DataService data) => data.Donations);
        group.MapPost("/", (DataService data) =>
        {
            var donor = data.GetAvailableDonor();
            var receiver = data.GetPendingReceiver();

            if (donor == null || receiver == null)
            {
                return Results.BadRequest("No hay donante disponible o receptor pendiente");
            }

            var donation = new Donation
            {
                DonorId = donor.Id,
                ReceiverId = receiver.Id,
                DonorName = donor.Name,
                ReceiverName = receiver.Name,
                BloodType = donor.BloodType,
                Status = "completed"
            };

            data.MarkDonorUnavailable(donor.Id);
            data.MarkReceiverAttended(receiver.Id);
            data.Donations.Add(donation);

            return Results.Created($"/api/donations/{donation.Id}", donation);
        });
    }
}