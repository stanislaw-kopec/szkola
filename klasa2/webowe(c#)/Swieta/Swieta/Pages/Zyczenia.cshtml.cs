using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.IO;
using System.Collections.Generic;

namespace Swieta.Pages
{
    public class ZyczeniaModel : PageModel
    {
        public string Imie { get; set; }
        public string Nazwisko { get; set; }
        public bool IsPost { get; set; }
        public string Zyczenia { get; set; }
        public void OnGet()
        {
            IsPost = false;
            Imie = null;
            Nazwisko = null;
        }

        private string Na6() {
            var rand = new Random();
            var files = Directory.GetFiles("D:\\zyczenia", "*.txt");
            return files[rand.Next(files.Length)];
        }
        
        public void OnPost() {
            Imie = Request.Form["Imie"];
            Nazwisko = Request.Form["Nazwisko"];

            //Random rnd = new Random();
            //int losowa = rnd.Next(1,3);
            //string path = Directory.GetCurrentDirectory();

            //Zyczenia = System.IO.File.ReadAllText(path + @"\zyczenia\" + losowa + ".txt");       

            Zyczenia = System.IO.File.ReadAllText(Na6());

            IsPost = true;
        }
    }
}
