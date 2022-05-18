using Domain;
using MediatR;
using Persistence;

namespace Application.Flashcards
{
	public class Create
	{
		public class Command : IRequest
		{
			public Flashcard Flashcard { get; set; }

			public Command(Flashcard flashcard) 
			{
				this.Flashcard = flashcard;
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
				_dataContext.Flashcards.Add(request.Flashcard);
				
				await _dataContext.SaveChangesAsync();
				
				// for returning int
				return Unit.Value;
			}
		}

	}
}