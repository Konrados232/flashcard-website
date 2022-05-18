using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class BaseApiController : ControllerBase
	{
		private IMediator _mediator;
		
		protected IMediator Mediator => _mediator ??= HttpContext.RequestServices.GetService<IMediator>();
		
		
		/*
		public IMediator Mediator
		{
			protected get => _mediator;
			set => _mediator ??= HttpContext.RequestServices.GetService<IMediator>();
		}
		
	
		private IMediator _mediator;

		protected IMediator Mediator => _mediator ??= HttpContext.RequestServices.GetService<IMediator>();
		*/
	}
}