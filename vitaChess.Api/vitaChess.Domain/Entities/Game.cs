namespace vitaChess.Api.vitaChess.Domain.Entities;

public class Game
{
    public Guid Id { get; private set; }
    public Player PlayerWhite;
}