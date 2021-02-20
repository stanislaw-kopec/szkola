using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Owoce
{
    class Owoce
    {
        public string Nazwa;
        public string Kolor;
        public string Kraj_pochodzenia;

        public string getData()
        { 
            return "Owoc: " + this.Nazwa + " Kolor: " + this.Kolor + " Kraj pochodzenia: " + this.Kraj_pochodzenia;
        }
    }
}
