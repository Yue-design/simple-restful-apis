using System;
using System.Collections.Generic;

namespace GradeBook
{
  class Program
  {
    static void Main(string[] args)
    {

      //   var p = new Program();
      //   Program.Main(args);

      //   Book book2 = new Book();
      //   book2.AddGrade(90.4);

      var book = new Book("Yue's Grade Book");
      book.AddGrade(88.3);
      book.AddGrade(90.5);
      //   Book.AddGrade(33.3);

      var stats = book.GetStats();
      Console.WriteLine($"The lowest grade is {stats.Low}");
      Console.WriteLine($"The highest grade is {stats.High}");
      Console.WriteLine($"The average grade is {stats.Average:N1}");

      //   var grades = new List<double>() { 62.7, 89.1, 94.3 };
      //   grades.Add(56.1);

      //ComputeAverageGrade(grades);

      // if (args.Length > 0) 
      // {
      //     Console.WriteLine($"Hello, {args[0]}!");
      // }
      // else 
      // {
      //     Console.WriteLine("Hello!");
      // }
    }
  }
}
