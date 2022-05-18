using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API
{
	public class Program
	{
		static async Task Main(string[] args)
		{
			var host = CreateHostBuilder(args).Build();
			
			using var scope = host.Services.CreateScope();
			
			var services = scope.ServiceProvider;
			
			try
			{
				var context = services.GetRequiredService<DataContext>();
				await context.Database.MigrateAsync();
				await Seed.SeedData(context);
			}
			catch (Exception ex)
			{
				throw;
			}
			
			await host.RunAsync();
			
		}

		public static IHostBuilder CreateHostBuilder(string[] args) =>
			Host.CreateDefaultBuilder(args)
				.ConfigureWebHostDefaults(webBuilder =>
				{
					webBuilder.UseStartup<Startup>();
				});
	}
}
