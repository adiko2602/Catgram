using Microsoft.AspNetCore.Mvc;
using catgramAPI.Models;

namespace catgramAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PostController : ControllerBase
    {
        private readonly DataContext _context;
        public PostController(DataContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _context.Posts.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var log = await _context.Posts.FindAsync(id);
            if (log == null)
                return NotFound();
            return Ok(log);
        }

        [HttpPost]
        public async Task<IActionResult> AddPost(Post newPost)
        {
            _context.Posts.Add(newPost);
            await _context.SaveChangesAsync();

            return Ok(await _context.Posts.ToListAsync());
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePost(int id, Post updatedPost)
        {
            var dbPost = await _context.Posts.FindAsync(id);
            if (dbPost == null)
                return NotFound();

            dbPost.title = updatedPost.title;
            dbPost.description = updatedPost.description;
            dbPost.picture = updatedPost.picture;

            await _context.SaveChangesAsync();

            return Ok(await _context.Posts.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var dbPost = await _context.Posts.FindAsync(id);
            if (dbPost == null)
                return NotFound();
            
            _context.Posts.Remove(dbPost);
            await _context.SaveChangesAsync();

            return Ok(await _context.Posts.ToListAsync());
        }
    }
}