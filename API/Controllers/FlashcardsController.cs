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
			return await Mediator.Send(new OneElement.Query(id));
		}
		
		[HttpPost]
		public async Task<IActionResult> CreateFlashcard(Flashcard flashcard) 
		{
			return Ok(await Mediator.Send(new Create.Command(flashcard)));
		}
		
		[HttpPut("{id}")]
		public async Task<IActionResult> EditFlashcard(Guid id, Flashcard flashcard) 
		{
			return Ok(await Mediator.Send(new Edit.Command(id, flashcard)));
		}
		
		[HttpDelete("{id}")]
		public async Task<IActionResult> DeleteFlashcard(Guid id) 
		{
			return Ok(await Mediator.Send(new Delete.Command(id)));
		}
	}
}
