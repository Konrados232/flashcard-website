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
			flashcards.Add(new Flashcard(Guid.NewGuid(), "Sample", DateTime.Now.AddDays(1), "Something there", "Something there also"));
			flashcards.Add(new Flashcard(Guid.NewGuid(), "Sample2", DateTime.Now.AddDays(2), "Something there", "Something there also"));
			flashcards.Add(new Flashcard(Guid.NewGuid(), "Sample3", DateTime.Now.AddDays(3), "Something there", "Something there also"));
			flashcards.Add(new Flashcard(Guid.NewGuid(), "Sample4", DateTime.Now.AddDays(4), "Something there", "Something there also"));
			
			await dataContext.Flashcards.AddRangeAsync(flashcards); // adding
			await dataContext.SaveChangesAsync(); // saving database
			
			var languageFlashcards = new List<LanguageFlashcard>();
			languageFlashcards.Add(new LanguageFlashcard(Guid.NewGuid(), "LanguageSample", DateTime.Now.AddDays(1), Languages.POLISH, Languages.ENGLISH, "Witam", "Welcome", "ok"));
			languageFlashcards.Add(new LanguageFlashcard(Guid.NewGuid(), "LanguageSample2", DateTime.Now.AddDays(2), Languages.POLISH, Languages.ENGLISH, "Obiad", "Dinner", "ok2"));
			languageFlashcards.Add(new LanguageFlashcard(Guid.NewGuid(), "LanguageSample3", DateTime.Now.AddDays(3), Languages.ENGLISH, Languages.POLISH, "Chicken", "Kurczak", "ok3"));
			languageFlashcards.Add(new LanguageFlashcard(Guid.NewGuid(), "LanguageSample4", DateTime.Now.AddDays(4), Languages.ENGLISH, Languages.POLISH, "Something", "Coś", "ok4"));
			
			await dataContext.LanguageFlashcards.AddRangeAsync(languageFlashcards); // adding
			await dataContext.SaveChangesAsync(); // saving database
		}
	}
}