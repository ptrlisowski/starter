using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace silnia
{
    class Program
    {
        static void Main(string[] args)
        {
            Silnia();
        }

        static void Silnia()
        {
            long number;
            long i, f, n;


            Console.WriteLine("\nEnter a valid number to calculate its factorial");

            if (!long.TryParse(Console.ReadLine(), out number))
            {
                Console.WriteLine("Entered characters are not a valid number");
                Console.ReadLine();
                Environment.Exit(0);
            }


            if (number == 0)
            {
                Console.WriteLine("Factorial for " + number + " (" + number + "!)" + " equals 1");
            }

            i = 1;
            n = 1;
            f = 1;


            while (i <= number)
            {
                f = n * i;

                n = f;
                i++;
            }

            Console.WriteLine("Factorial for " + number + " (" + number + "!)" + " equals " + f);
            Console.WriteLine("Press 'r' to restart or anything else twice to quit");
            Reboot();
        }

        static void Reboot()
        {
            var info = Console.ReadKey();
            if (info.Key == ConsoleKey.R)
            {
                Silnia();
            }
        }
    }
}
