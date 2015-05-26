using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OpenPlatform.WebModels
{
    public class StaticRoute
    {
        public string Name { get; set; }
        public string Controller { get; set; }
        public string View { get; set; }
        public string Url { get; set; }
        public List<Permission> Permission { get; set; }
        public List<Role> Roles { get; set; }
    }
}
