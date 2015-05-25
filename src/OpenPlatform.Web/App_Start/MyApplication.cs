using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;

namespace OpenPlatform.Web
{
    public class MyApplication : HttpApplication
    {
        private readonly Regex r = new Regex("^/app/(.*)$", RegexOptions.IgnoreCase);

        public override void Init()
        {
            BeginRequest += OnBeginRequest;
        }

        protected void OnBeginRequest(object sender, EventArgs e)
        {
            var match = r.Match(Request.Url.AbsolutePath);
            if (match.Success)
            {
                var fileName = match.Groups[1].Value;
                Context.RewritePath(string.Format("~/app/{0}.html", fileName));
            }
        }
    }
}