using Domain;

namespace Persistence
{
	public class Seed
	{
		public static async Task SeedData(DataContext dataContext) 
		{
			if(dataContext.Flashcards.Any()) 
			{
				return;
			}
			
			var flashcards = new List<Flashcard>();
			flashcards.Add(new Flashcard 
			{
				Title = "Sample",
				Date = DateTime.Now.AddDays(1),
				Description = "Something there",
				Content = "Something there also",
			});
			
			flashcards.Add(new Flashcard 
			{
				Title = "Sample2",
				Date = DateTime.Now.AddDays(2),
				Description = "Something there2",
				Content = "Something there also",
			});
			
			
			flashcards.Add(new Flashcard 
			{
				Title = "Sample3",
				Date = DateTime.Now.AddDays(3),
				Description = "Something there3",
				Content = "Something there also",
			});
			
			
			flashcards.Add(new Flashcard 
			{
				Title = "Sample4",
				Date = DateTime.Now.AddDays(4),
				Description = "Something there4",
				Content = "Something there also",
			});
			
			await dataContext.Flashcards.AddRangeAsync(flashcards); // adding
			await dataContext.SaveChangesAsync(); // saving database
		}
	}
}