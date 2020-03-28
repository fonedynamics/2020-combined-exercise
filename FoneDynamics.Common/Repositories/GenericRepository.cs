using FoneDynamics.Data;
using FoneDynamics.Infrastructure.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace FoneDynamics.Infrastructure.Repositories
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        private FoneDynamicsContext _context = null;
        private DbSet<T> entity = null;

        public GenericRepository(FoneDynamicsContext _context)
        {
            this._context = _context;
            entity = _context.Set<T>();
        }

        public async Task<IEnumerable<T>> GetAll()
        {
            return await entity.ToListAsync();
        }

        public async Task<T> GetById(object id)
        {
            return await entity.FindAsync(id);
        }

        public void Insert(T obj)
        {
            entity.Add(obj);
        }

        public void Update(T obj)
        {
            entity.Attach(obj);
            _context.Entry(obj).State = EntityState.Modified;
        }

        public void Delete(object id)
        {
            T existing = entity.Find(id);
            entity.Remove(existing);
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public async Task<IEnumerable<T>> Get(Expression<Func<T, bool>> predicate)
        {
            //return await _context.Set<T>().Where(predicate).AsAsyncEnumerable<T>();
            return await _context.Set<T>().Where(predicate).ToListAsync();
        }
    }
}
