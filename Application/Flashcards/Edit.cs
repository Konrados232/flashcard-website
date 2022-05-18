using Domain;
using MediatR;
using Persistence;

namespace Application.Flashcards
{
	public class Edit
	{
		public class Command : IRequest
		{
			public Guid Id { get; set; }
			public Flashcard Flashcard { get; set; }
			
			public Command(Guid id, Flashcard flashcard)
			{
				Id = id;
				Flashcard = flashcard;
			}
		}

		public class Handler : IRequestHandler<Command>
		{
			private readonly DataContext _dataContext;
			
			public Handler(DataContext dataContext)
			{
				this._dataContext = dataContext;
			}

			public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
			{
				var flashcard = _dataContext.Flashcards.FirstOrDefault(x => x.Id == request.Id);
				
				if (flashcard == null)
				{
					return Unit.Value;
				}
				
				_dataContext.Flashcards.Remove(flashcard);
				
				var newFlashcard = new Flashcard(request.Id, request.Flashcard.Title, request.Flashcard.Date, request.Flashcard.Description, request.Flashcard.Content);
				
				await _dataContext.Flashcards.AddAsync(newFlashcard);
				
				await _dataContext.SaveChangesAsync();
				
				// for returning int
				return Unit.Value;
			}
		}
	}
}