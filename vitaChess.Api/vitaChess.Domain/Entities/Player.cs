namespace vitaChess.Api.vitaChess.Domain.Entities;

public class Player
{
    public string ?UserName { get; private set; } 
    public int Elo { get; private set;}
}