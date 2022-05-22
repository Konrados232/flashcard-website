using Domain;
using MediatR;
using Persistence;

namespace Application.Flashcards
{
	public class CreateList
	{
		public class Command : IRequest
		{
			public List<Flashcard> Flashcards { get; set; }

			public Command(List<Flashcard> flashcards) 
			{
				this.Flashcards = flashcards;
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
				foreach (var flashcard in request.Flashcards)
				{
					_dataContext.Flashcards.Add(flashcard);	
				}
				
				await _dataContext.SaveChangesAsync();
				
				// for returning int
				return Unit.Value;
			}
		}

	}
}