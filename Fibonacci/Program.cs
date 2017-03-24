using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fibonacci
{
    class Program
    {
        static void Main(string[] args)
        {
            int num1 = 0;
            int num2 = 1;
            int sum = 1;

            Console.WriteLine("How many Fibonacci numbers do you want?");
            float leng = float.Parse(Console.ReadLine());

            Console.WriteLine("\n");

            for (int i = 0; i < leng; i++)
            {
                sum = num1 + num2;
                num1 = num2;
                num2 = sum;
                Console.Write(sum + " ");
            }

            Console.WriteLine("\n");
        }
    }
}

