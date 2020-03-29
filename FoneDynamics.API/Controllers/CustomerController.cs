using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using FoneDynamics.Data.Models;
using FoneDynamics.Infrastructure.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FoneDynamics.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private IGenericRepository<Customer> repository = null;

        public CustomerController(IGenericRepository<Customer> repository)
        {
            this.repository = repository;
        }

        [Route("")]
        [HttpGet]
        [ProducesResponseType(typeof(List<Customer>), (int)HttpStatusCode.OK)]
        public async Task<ActionResult> GetCustomers()
        {
            return Ok(await repository.GetAll());
        }

        [Route("{tags}")]
        [HttpGet]
        [ProducesResponseType(typeof(List<Customer>), (int)HttpStatusCode.OK)]
        public async Task<ActionResult> GetCustomerById(string tags)
        {
            return Ok(await repository.Get(x => x.Tags == tags));
        }


    }
}   