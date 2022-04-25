namespace catgramAPI.Models
{
    public class FileUpload
    {
        public IFormFile FormFile { get; set; }
        public string FileName { get; set; }

        public string title { get; set; }

        public string description { get; set; }
    }
}
