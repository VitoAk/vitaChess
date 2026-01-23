namespace vitaChess.Api.vitaChess.Domain.ValueObjects;

public readonly record struct Square(char File, int Rank)
{
    public static Square FromAlgebreic(string val)
    {
        if(val.Length != 2)
        {
            throw new Exception("2 - Invalid Square string");
        }

        char file = val[0];
        int rank = int.Parse(val[1].ToString());

        if(file < 'a' || file > 'h' || rank < 1 || rank > 8)
        {
            throw new Exception("3 - Invalid Sqare string");
        }

        return new Square(file, rank);
    }

    public override string ToString()
    {
        return $"{File}{Rank}";
    }
}