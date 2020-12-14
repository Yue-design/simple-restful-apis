using System;
using System.Collections.Generic;

namespace GradeBook
{
  internal class Book
  {
    public Book(string name)
    {
      grades = new List<double>();
      this.name = name;
    }
    public void AddGrade(double grade)
    {
      grades.Add(grade);
    }
    public Statistics GetStats()
    {
      var res = new Statistics();
      res.Average = 0.0;
      res.High = double.MinValue;
      res.Low = double.MaxValue;
      // var res = 0.0;
      // var highest = double.MinValue;
      // var lowest = double.MaxValue;

      foreach (var grade in grades)
      {
        // if (num > highest)
        // {
        //   highest = num;
        // }
        res.High = Math.Max(grade, res.High);
        res.Low = Math.Min(grade, res.Low);
        res.Average += grade;
      }
      res.Average /= grades.Count;
      return res;
    }
    private List<double> grades;
    private string name;
  }
}