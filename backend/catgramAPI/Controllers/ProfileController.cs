using Microsoft.AspNetCore.Mvc;
using System.Text.RegularExpressions;
using Microsoft.AspNetCore.Authorization;
using catgramAPI.Dtos;
using catgramAPI.Models;

namespace catgramAPI.Controllers
{
    [ApiController]
    [AllowAnonymous]
    [Route("[controller]")]
    public class ProfileController : Controller
    {
        private IUserService _userService;
        private IProfileService _profileService;

        public ProfileController(
            IUserService userService,
            IProfileService profileService)
        {
            _userService = userService;
            _profileService = profileService;
        }

        [HttpGet("{id}")]
        public IActionResult GetId(int id)
        {
            var profile = _profileService.GetId(id);
            if (profile == null)
                return BadRequest();

            Profile prof = profile[0];

            return Ok(prof);
        }

        [HttpPost]
        public IActionResult Create([FromBody] ProfileDto profileDto) 
        {
            var profile = new Profile
            {
                UserId = profileDto.UserId,
                Name = profileDto.Name,
                Lastname = profileDto.Lastname,
                Description = profileDto.Description,
                Created = DateTime.Today
            };

            try
            {
                _profileService.Create(profile);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
