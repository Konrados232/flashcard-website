using Application.Flashcards;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
	public class FlashcardsController : BaseApiController
	{			
		
		[HttpGet]
		public async Task<ActionResult<List<Flashcard>>> GetFlashcards() 
		{
			return await Mediator.Send(new List.Query());
		}
		
		[HttpGet("{id}")]
		public async Task<ActionResult<Flashcard>> GetFlashcard(Guid id) 
		{
			return await Mediator.Send(new Detail.Query(id));
		}		
		
	}
}
