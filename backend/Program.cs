using BloodDonationApi.Services;
using BloodDonationApi.Controllers;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSingleton<DataService>();
builder.Services.AddCors();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.UseCors(x => x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

DonorsController.MapDonors(app);
ReceiversController.MapReceivers(app);
DonationsController.MapDonations(app);

app.MapGet("/api/health", () => "OK");

app.Run("http://localhost:5000");