using System.Collections.Generic;
using TestTH.Models;
using Microsoft.EntityFrameworkCore;

namespace TestTH.Data
{
    public class ProductContext : DbContext
    {
        public ProductContext(DbContextOptions<ProductContext> options) : base(options) { }

        public DbSet<Product> Products { get; set; }
    }
}
