using System;
using Xunit;

namespace GradeBook.Tests
{
  public class BookTests
  {
    [Fact]
    public void Test1()
    {
      // arrange
      var book = new Book("");
      book.AddGrade(89.1);
      book.AddGrade(90.5);
      book.AddGrade(77.3);
      //   var x = 5;
      //   var y = 2;
      //   var expected = 7;

      // act
      var result = book.GetStats();
      //   var actual = x * y;
      //   var actual = x + y;

      // assert
      Assert.Equal(85.6, result.Average, 1);
      Assert.Equal(90.5, result.High, 1);
      Assert.Equal(77.3, result.Low, 1);
      //   Assert.Equal(expected, actual);
    }
  }
}
