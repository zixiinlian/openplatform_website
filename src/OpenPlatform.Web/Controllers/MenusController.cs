using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace OpenPlatform.Web.Controllers
{
    public class MenusController : ApiController
    {

        public string[] Get()
        {
            return new[] { "string1", "string2" };
        }
    }
}
