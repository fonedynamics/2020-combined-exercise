using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace FoneDynamics.Infrastructure.Interfaces
{
    public interface IGenericRepository<T> where T : class
    {
        Task<IEnumerable<T>> GetAll();
        Task<T> GetById(object id);
        Task<IEnumerable<T>> Get(Expression<Func<T, bool>> predicate);

        void Insert(T obj);
        void Update(T obj);
        void Delete(object id);
    }
}
