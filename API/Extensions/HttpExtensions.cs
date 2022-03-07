using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace API.Extensions
{
    public static class HttpExtensions
    {
        public static void AddPaginationHeader(this HttpResponse respone, int currentPage, int  itemsPage, int totalItems, int totalPages)
        {
            var paginationHeader = new
            {
                currentPage,
                itemsPage,
                totalItems,
                totalPages
            };

            respone.Headers.Add("Pagination", JsonSerializer.Serialize(paginationHeader));
            respone.Headers.Add("Access-Control-Expose-Headers","Pagination");
        }
    }
}