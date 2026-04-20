using Microsoft.AspNetCore.Mvc;
using BloodDonationApi.Models;
using BloodDonationApi.Services;

namespace BloodDonationApi.Controllers;

public static class ReceiversController
{
    public static void MapReceivers(this WebApplication app)
    {
        var group = app.MapGroup("/api/receivers");

        group.MapGet("/", (DataService data) => data.Receivers);
        group.MapGet("/{id}", (string id, DataService data) => data.Receivers.FirstOrDefault(r => r.Id == id));
        group.MapPost("/", (Receiver receiver, DataService data) =>
        {
            data.Receivers.Add(receiver);
            return Results.Created($"/api/receivers/{receiver.Id}", receiver);
        });
        group.MapPut("/{id}", (string id, Receiver updated, DataService data) =>
        {
            var index = data.Receivers.FindIndex(r => r.Id == id);
            if (index >= 0)
            {
                data.Receivers[index] = updated;
                return Results.Ok(updated);
            }
            return Results.NotFound();
        });
        group.MapDelete("/{id}", (string id, DataService data) =>
        {
            var receiver = data.Receivers.FirstOrDefault(r => r.Id == id);
            if (receiver != null)
            {
                data.Receivers.Remove(receiver);
                return Results.Ok();
            }
            return Results.NotFound();
        });
    }
}