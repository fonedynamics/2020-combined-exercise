using AutoMapper;
using FoneDynamics.Data.Models;
using FoneDynamics.Data.ViewModels;

namespace FoneDynamics.Infrastructure
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Customer, CustomerViewModel>();
        }
    }
}
