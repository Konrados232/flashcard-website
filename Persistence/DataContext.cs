using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
	public class DataContext : DbContext
	{
		public DbSet<Flashcard> Flashcards { get; set; }
		
		public DbSet<LanguageFlashcard> LanguageFlashcards { get; set; }
		
		public DataContext(DbContextOptions options) : base(options)
		{
			
		}
	}
}