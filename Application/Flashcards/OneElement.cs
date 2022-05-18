using Domain;
using MediatR;
using Persistence;

namespace Application.Flashcards
{
	public class OneElement
	{
		public class Query : IRequest<Flashcard> 
		{
			public Guid Id { get; set; }
			
			public Query(Guid id) 
			{
				Id = id;
			}
		}

		public class Handler : IRequestHandler<Query, Flashcard>
		{
			private readonly DataContext _dataContext;
			public Handler(DataContext dataContext)
			{
				this._dataContext = dataContext;	
			}

			public async Task<Flashcard> Handle(Query request, CancellationToken cancellationToken)
			{
				return await _dataContext.Flashcards.FindAsync(request.Id);
			}
		}

	}
}