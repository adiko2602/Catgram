using Microsoft.AspNetCore.Mvc;
using catgramAPI.Models;
using System.IO;
using System.Text.RegularExpressions;

namespace catgramAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class PostController : ControllerBase
    {
        private readonly DataContext _context;
        private int _id;
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
        public async Task<IActionResult> AddFile([FromForm] FileUpload file)
        {
            Console.WriteLine("Upload");
            try
            {
                Post newPost = new Post();
                newPost.title = file.title;
                newPost.description = file.description;

                Console.WriteLine("FileUploaded");
                string path = Path.Combine(Directory.GetCurrentDirectory(), "uploads", file.fileName);
                path = Regex.Replace(path, @"\\", "/");
                using Stream stream = new FileStream(path, FileMode.Create);
                {
                    file.FormFile.CopyTo(stream);
                }

                newPost.id = 0;
                newPost.picture = path;
                newPost.link = "";

                Console.WriteLine(newPost.title);


                _context.Posts.Add(newPost);
                await _context.SaveChangesAsync();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return NotFound();
            }

            return Ok();
        }

/*        [HttpPost]
            public async Task<IActionResult> AddPost(Post newPost) 
            {
                Console.WriteLine("Hello from console 1");
                Console.WriteLine(newPost.title);
                Console.WriteLine(newPost.description);
                Console.WriteLine(newPost.picture);
                Console.WriteLine(newPost.link);
                Console.WriteLine(newPost.id);
                _context.Posts.Add(newPost);
                await _context.SaveChangesAsync();
                _id = newPost.id;
                

                return Ok();
                //return Ok(await _context.Posts.ToListAsync());
            }*/

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