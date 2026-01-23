namespace vitaChess.Api.vitaChess.Domain.Entities;

public class Game
{
    public Guid Id { get; private set; }
    public Player PlayerWhite;
    public Player PlayerBlack;

    public Color Turn;
    public GameStatus GameStatus;
    public Board Board;

    public Game(Player white, Player black)
    {
        Id = Guid.NewGuid();
        PlayerWhite = white;
        PlayerBlack = black;

        Turn = Color.White;
    }

    public void MakeMove()
    {
        if(GameStatus != GameStatus.InProgress)
        {
            throw new Exception("1 - GameStatus not active");
        }
    }

    private void SwitchTurn()
    {
        Turn = Turn == Color.White ? Color.Black : Color.White;
    }
}