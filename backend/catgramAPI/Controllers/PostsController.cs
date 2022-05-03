using Microsoft.AspNetCore.Mvc;
using catgramAPI.Dtos;
using catgramAPI.Models;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System.Text.RegularExpressions;
using Microsoft.AspNetCore.Authorization;

namespace catgramAPI.Controllers
{
    [ApiController]
    [Authorize]
    [Route("[controller]")]
    public class PostsController : ControllerBase
    {
        private IPostService _postService;
        private ICommentService _commentService;
        public PostsController(IPostService postService, ICommentService commentService)
        {
            _postService = postService;
            _commentService = commentService;

        }


        [HttpGet]
        public IActionResult Get()
        {
            var posts = _postService.Get();
            return Ok(posts);
        }


        [HttpGet("{id}")]
        public IActionResult GetId(int id)
        {
            var post = _postService.GetId(id);
            if (post == null)
                return BadRequest();
            return Ok(post);
        }

        [HttpPost]
        public IActionResult Add([FromForm] PostDto postDto)
        {
            if (string.IsNullOrEmpty(postDto.Title) || string.IsNullOrEmpty(postDto.Description))
                return BadRequest();

            string path = Path.Combine(Directory.GetCurrentDirectory(), "uploads", postDto.FileName);
            path = Regex.Replace(path, @"\\", "/");
            using Stream stream = new FileStream(path, FileMode.Create);
            {
                postDto.FormFile.CopyTo(stream);
            }
            Post post = new Post()
            {
                Title = postDto.Title,
                Description = postDto.Description,
                LinkPicture = path
            };

            _postService.Add(post);
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody]PostDto postDto)
        {
            var post = new Post
            {
                Id = id,
                Title = postDto.Title,
                Description = postDto.Description
            };

            try
            {
                _postService.Update(post);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                _postService.Delete(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("{id}/comment/add")]
        public IActionResult CommentAdd(int id, CommentDto commentDto)
        {
            if (string.IsNullOrEmpty(commentDto.Com))
                return BadRequest();

            Comment comment = new Comment()
            {
                PostId = id,
                Com = commentDto.Com
            };

            _commentService.Add(comment);
            return Ok();
        }
    }
}