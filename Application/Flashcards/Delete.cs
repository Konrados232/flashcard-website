using Domain;
using MediatR;
using Persistence;

namespace Application.Flashcards
{
	public class Delete
	{
		public class Command : IRequest
		{
			public Guid Id { get; set; }

			public Command(Guid id)
			{
				Id = id;
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
				
				await _dataContext.SaveChangesAsync();
				
				// for returning int
				return Unit.Value;
			}
		}

	}
}