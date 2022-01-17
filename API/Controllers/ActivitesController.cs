using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Persistence;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class ActivitesController : BaseApiController
    {
        private readonly DataContext _context;
        public ActivitesController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            return await _context.Activites.ToListAsync();
        }

        [HttpGet("{id}")] //activites/id
        public async Task<ActionResult<Activity>> GetActivity(Guid id)
        {
            return await _context.Activites.FindAsync(id);
        }
    }
}