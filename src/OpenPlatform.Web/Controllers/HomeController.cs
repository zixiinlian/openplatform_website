using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace OpenPlatform.Web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var result = new ContentResult();
            result.Content = Url.Content("~/app/index.html");
            result.ContentType = "text/html";
            return result;
        }
    }
}