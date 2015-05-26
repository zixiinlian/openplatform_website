using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using OpenPlatform.WebModels;

namespace OpenPlatform.Web.Controllers
{
    public class UsersController : ApiController
    {
        // GET: api/Users
        public IEnumerable<User> Get()
        {
            return UserTestHelper.Get();
        }

        // GET: api/Users/5
        public User Get(int id)
        {
            return UserTestHelper.Get(id);
        }

        // POST: api/Users
        public void Post([FromBody]User value)
        {
            UserTestHelper.Add(value);
        }

        // PUT: api/Users/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Users/5
        public void Delete(int id)
        {
        }
    }
}
