﻿using Angular2MVC.DBContext;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Angular2MVC.Controllers
{
    public class UserAPIController : BaseAPIController
    {
        public HttpResponseMessage Get() => ToJson(UserDB.TblUsers.AsEnumerable());

        public HttpResponseMessage Post([FromBody]TblUser value)
        {
            UserDB.TblUsers.Add(value);
            return ToJson(UserDB.SaveChanges());
        }

        public HttpResponseMessage Put(int id, [FromBody]TblUser value)
        {
            UserDB.Entry(value).State = EntityState.Modified;
            return ToJson(UserDB.SaveChanges());
        }
        public HttpResponseMessage Delete(int id)
        {
            UserDB.TblUsers.Remove(UserDB.TblUsers.FirstOrDefault(x => x.Id == id));
            return ToJson(UserDB.SaveChanges());
        }
    }
}
