using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Owoce
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Owoce> listaOwocow = new List<Owoce>();

            

            listaOwocow.Add(new Owoce());
            listaOwocow[0].Nazwa = "Gruszka";
            listaOwocow[0].Kolor = "Zielony";
            listaOwocow[0].Kraj_pochodzenia = "Polska";

            listaOwocow.Add(new Owoce());
            listaOwocow[1].Nazwa = "Truskawka";
            listaOwocow[1].Kolor = "Czerwony";
            listaOwocow[1].Kraj_pochodzenia = "Holandia";

            listaOwocow.Add(new Owoce());
            listaOwocow[2].Nazwa = "Winogron";
            listaOwocow[2].Kolor = "Zielony";
            listaOwocow[2].Kraj_pochodzenia = "Hiszpania";

            listaOwocow.Add(new Owoce());
            listaOwocow[3].Nazwa = "Morela";
            listaOwocow[3].Kolor = "Pomaranczowy";
            listaOwocow[3].Kraj_pochodzenia = "Hiszpania";

            listaOwocow.Add(new Owoce());
            listaOwocow[4].Nazwa = "Mandarynka";
            listaOwocow[4].Kolor = "Pomaranczowy";
            listaOwocow[4].Kraj_pochodzenia = "Chorwacja";

            listaOwocow.Add(new Owoce());
            Console.Write("Podaj nazwe: ");
            listaOwocow[5].Nazwa = Console.ReadLine();
            Console.Write("Podaj kolor: ");
            listaOwocow[5].Kolor = Console.ReadLine();
            Console.Write("Podaj kraj pochodzenia: ");
            listaOwocow[5].Kraj_pochodzenia = Console.ReadLine();

            //listaOwocow.RemoveRange(2,3);
            //listaOwocow.RemoveAt(2);

            foreach (Owoce nn in listaOwocow) {
                Console.WriteLine(nn.getData());
            }
            Console.ReadLine();

            listaOwocow.Add(new Owoce());
            listaOwocow[5].Nazwa = Console.ReadLine();
            listaOwocow[5].Kolor = Console.ReadLine();
            listaOwocow[5].Kraj_pochodzenia = Console.ReadLine();

        }
    }
}
