namespace catgramAPI.Models
{
    public class Profile
    {
        public int id { get; set; }
        public User User { get; set; }
        public string Description { get; set; }

    }
}
