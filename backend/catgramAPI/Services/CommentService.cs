using catgramAPI.Models;

namespace catgramAPI.Services
{
    public interface ICommentService
    {
        Comment Add(Comment comment);
    }
    public class CommentService : ICommentService
    {
        private DataContext _context;

        public CommentService(DataContext context)
        {
            _context = context;
        }

        public Comment Add(Comment comment)
        {
            _context.Comments.Add(comment);
            _context.SaveChanges();
            return comment;
        }
    }
}
