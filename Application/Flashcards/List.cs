using MediatR;
using Domain;
using Persistence;
using Microsoft.EntityFrameworkCore;

namespace Application.Flashcards
{
	public class List
	{
		public class Query : IRequest<List<Flashcard>>
		{
			public Query()
			{
				
			}
		}

		public class Handler : IRequestHandler<Query, List<Flashcard>>
		{
			private readonly DataContext _dataContext;
			public Handler(DataContext dataContext)
			{
				this._dataContext = dataContext;	
			}

			public async Task<List<Flashcard>> Handle(Query request, CancellationToken cancellationToken)
			{
				return await _dataContext.Flashcards.ToListAsync();
			}
		}
	}
}