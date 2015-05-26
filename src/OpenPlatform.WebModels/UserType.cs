using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace OpenPlatform.WebModels
{
    public class UserType
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime CreatedAt { get; set; }
        public string Memo { get; set; }
    }
}
