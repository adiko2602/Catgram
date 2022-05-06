namespace catgramAPI.Models
{
    public class Profile
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Name { get; set; }
        public string Lastname { get; set; }
        public List<User> FollowedUser { get; set; }

    }
}
