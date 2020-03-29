using Microsoft.EntityFrameworkCore;
using FoneDynamics.Data.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

namespace FoneDynamics.Data
{
    public class FoneDynamicsContext : IdentityDbContext<IdentityUser>
    {
        public FoneDynamicsContext(DbContextOptions<FoneDynamicsContext> options)
            : base(options)
        {}

        public object DatabaseGenerationOption { get; private set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<IdentityRole>().HasData(
              new { Id = "1", Name = "Admin", NormalizedName = "ADMIN" },
              new { Id = "2", Name = "Customer", NormalizedName = "CUSTOMER" }
            );

            builder.Entity<Customer>()
                .HasData(
                    new Customer { Id = 1, Name = "Customer 1", NumberOfEmployees = 10, Tags = "Small" },
                    new Customer { Id = 2, Name = "Customer 2", NumberOfEmployees = 35, Tags = "Small,Medium" },
                    new Customer { Id = 3, Name = "Customer 3", NumberOfEmployees = 200, Tags = "Small,Medium,Large" },
                    new Customer { Id = 4, Name = "Customer 4", NumberOfEmployees = 45, Tags = "Small,Medium" },
                    new Customer { Id = 5, Name = "Customer 5", NumberOfEmployees = 40, Tags = "Small,Medium" },
                    new Customer { Id = 6, Name = "Customer 6", NumberOfEmployees = 200, Tags = "Small,Medium,Large" }

                );

            base.OnModelCreating(builder);

        }

        public DbSet<Customer> Customers { get; set; }

    }
}
