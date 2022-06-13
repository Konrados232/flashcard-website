namespace Domain
{
	public record LanguageFlashcard(Guid id, string Title, DateTime Date, Languages FirstLanguage, Languages SecondLanguage, string FirstContent, string SecondContent, string Description);
}