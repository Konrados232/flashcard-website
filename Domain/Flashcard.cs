namespace Domain
{
	public class Flashcard
	{
		public Guid Id { get; set; }
		public string Title { get; set; }
		public DateTime Date { get; set; }
		public string Description { get; set; }
		public string Content { get; set; }

        public Flashcard(Guid id, string title, DateTime date, string description, string content)
        {
            Id = id;
            Title = title;
            Date = date;
            Description = description;
            Content = content;
        }
    }
}