using Microsoft.AspNetCore.Mvc;
using BloodDonationApi.Models;
using BloodDonationApi.Services;

namespace BloodDonationApi.Controllers;

public static class DonorsController
{
    public static void MapDonors(this WebApplication app)
    {
        var group = app.MapGroup("/api/donors");

        group.MapGet("/", (DataService data) => data.Donors);
        group.MapGet("/{id}", (string id, DataService data) => data.Donors.FirstOrDefault(d => d.Id == id));
        group.MapPost("/", (Donor donor, DataService data) =>
        {
            data.Donors.Add(donor);
            return Results.Created($"/api/donors/{donor.Id}", donor);
        });
        group.MapPut("/{id}", (string id, Donor updated, DataService data) =>
        {
            var index = data.Donors.FindIndex(d => d.Id == id);
            if (index >= 0)
            {
                data.Donors[index] = updated;
                return Results.Ok(updated);
            }
            return Results.NotFound();
        });
        group.MapDelete("/{id}", (string id, DataService data) =>
        {
            var donor = data.Donors.FirstOrDefault(d => d.Id == id);
            if (donor != null)
            {
                data.Donors.Remove(donor);
                return Results.Ok();
            }
            return Results.NotFound();
        });
    }
}