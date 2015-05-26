using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OpenPlatform.WebModels
{
    public static class UserTestHelper
    {
        public static UserType[] types = new[] { 
            new UserType { Id = 1, Name = "沪江用户", CreatedAt = DateTime.Now.AddDays(-50) }, 
            new UserType { Id = 2, Name = "其他用户", CreatedAt = DateTime.Now.AddDays(-50) } 
        };

        public static List<User> Users = new List<User>
        {
            new User(){
                Id=1,
                UserName = "Test1",
                CreatedAt = DateTime.Now.AddDays(-20),
                IsActive = true, 
                LastLoginAt = DateTime.Now.AddDays(-4), 
                UserCode = Guid.NewGuid().ToString(),
                UserType = types[0]
            },
            new User(){
                Id=2,
                UserName = "Test2",
                CreatedAt = DateTime.Now.AddDays(-10),
                IsActive = true, 
                LastLoginAt = DateTime.Now.AddDays(-4), 
                UserCode = Guid.NewGuid().ToString(),
                UserType = types[0]
            },
            new User(){
                Id=3,
                UserName = "Test3",
                CreatedAt = DateTime.Now.AddDays(-30),
                IsActive = true, 
                LastLoginAt = DateTime.Now.AddDays(-4), 
                UserCode = Guid.NewGuid().ToString(),
                UserType = types[0]
            },
            new User(){
                Id=4,
                UserName = "Test5",
                CreatedAt = DateTime.Now.AddDays(-30),
                IsActive = true, 
                LastLoginAt = DateTime.Now.AddDays(-4), 
                UserCode = Guid.NewGuid().ToString(),
                UserType = types[1]
            },
            new User(){
                Id=5,
                UserName = "Test1",
                CreatedAt = DateTime.Now.AddDays(-20),
                IsActive = true, 
                LastLoginAt = DateTime.Now.AddDays(-4), 
                UserCode = Guid.NewGuid().ToString(),
                UserType = types[1]
            }
        };

        public static List<User> Get()
        {
            return Users;
        }

        public static User Get(int id)
        {
            return Users.FirstOrDefault(u => u.Id == id);
        }

        public static void Add(User u)
        {
            Users.Add(u);
        }
    }
}
