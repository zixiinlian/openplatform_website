using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OpenPlatform.WebModels
{
    public class User
    {
        public int Id { get; set; }
        public string UserCode { get; set; }
        public string UserName { get; set; }
        public UserType UserType { get; set; }
        public bool IsActive { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime LastLoginAt { get; set; }
        public string Memo { get; set; }
    }
}
