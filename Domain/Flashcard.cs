namespace Domain
{
	public record Flashcard(Guid Id, string Title, DateTime Date, string Description, string Content);
}