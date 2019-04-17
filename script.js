$(function() {

  var computer;
  var playerScore = 0;
  var computerScore = 0;
  result = $('#result');

  function computerChoice() {

    var randomNumber = Math.floor(Math.random() * 3 + 1)

    if (randomNumber == 1) {
      computer = 'rock';
    } else if (randomNumber == 2) {
      computer = 'paper';
    } else {
      computer = 'scissor';
    }
    if ($('#player').val() == 'rock' && computer == 'paper' || ($('#player').val() == 'scissor' && computer == 'rock') || ($('#player').val() == 'paper' && computer == 'scissor')) {
      $('#result').text(function() {
        computerScore++;
        return "tu as perdu !";
      });
    } else if ($('#player').val() == 'rock' && computer == 'scissor' || ($('#player').val() == 'scissor' && computer == 'paper') || ($('#player').val() == 'paper' && computer == 'rock')) {
      $('#result').text(function() {
        playerScore++;
        return "tu as gagné !";


      });
    }

    if ($('#player').val() == 'rock' && computer == 'rock' || ($('#player').val() == 'scissor' && computer == 'scissor') || ($('#player').val() == 'paper' && computer == 'paper')) {
      $('#result').text(function() {
        return "égalité!";
      });
    }

    if (playerScore == 5) {
      Swal.fire('Bien joué vous avez ' + playerScore + ' points et l \'iA ' + computerScore + ' points');

    }
    if (computerScore == 5) {
      Swal.fire('perdu vous avez ' + playerScore + ' points et l \'iA ' + computerScore + ' points');
    }
}
    $('#Shifumi').click(computerChoice);


});
